import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProps {
  images: Array<{
    id: number;
    src: string;
    alt: string;
    title: string;
    category: string;
  }>;
  onImageClick: (index: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
}

const ImageSlider: React.FC<SliderProps> = ({
  images,
  onImageClick,
  autoPlay = true,
  autoPlayInterval = 3000,
  showDots = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [slidesToShow, setSlidesToShow] = useState(3);
  
  // Touch/Swipe state using refs for better performance
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Touch event handlers for swipe navigation
  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length <= slidesToShow) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const maxSlide = Math.max(0, images.length - slidesToShow);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, images.length, slidesToShow]);

  const nextSlide = () => {
    const maxSlide = Math.max(0, images.length - slidesToShow);
    setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
  };

  const prevSlide = () => {
    const maxSlide = Math.max(0, images.length - slidesToShow);
    setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
  };

  const goToSlide = (index: number) => {
    const maxSlide = Math.max(0, images.length - slidesToShow);
    setCurrentSlide(Math.min(index, maxSlide));
  };

  // Smart dots logic
  const maxSlide = Math.max(0, images.length - slidesToShow);
  const totalSlides = maxSlide + 1;
  const showArrows = images.length > slidesToShow && slidesToShow > 1;
  
  // Configuration for dots display
  const MAX_VISIBLE_DOTS = 5; // Maximum number of dots to show
  const USE_PROGRESS_BAR_THRESHOLD = 8; // Switch to progress bar when more than this many slides

  const renderIndicator = () => {
    if (!showDots || totalSlides <= 1) return null;

    // For many slides, use a progress bar + text indicator
    if (totalSlides > USE_PROGRESS_BAR_THRESHOLD) {
      const progressPercentage = totalSlides > 1 ? (currentSlide / (totalSlides - 1)) * 100 : 0;
      
      return (
        <div className="flex flex-col items-center space-y-2 py-4">
          {/* Progress bar */}
          <div className="w-32 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          {/* Text indicator */}
          <span className="text-sm text-gray-500 font-medium">
            {currentSlide + 1} of {totalSlides}
          </span>
        </div>
      );
    }

    // For medium number of slides, show subset of dots around current position
    if (totalSlides > MAX_VISIBLE_DOTS) {
      const dots = [];
      const halfVisible = Math.floor(MAX_VISIBLE_DOTS / 2);
      
      let startIndex = Math.max(0, currentSlide - halfVisible);
      let endIndex = Math.min(totalSlides - 1, startIndex + MAX_VISIBLE_DOTS - 1);
      
      // Adjust start if we're near the end
      if (endIndex - startIndex < MAX_VISIBLE_DOTS - 1) {
        startIndex = Math.max(0, endIndex - MAX_VISIBLE_DOTS + 1);
      }

      // Show first dot if not visible
      if (startIndex > 0) {
        dots.push(
          <button
            key={0}
            onClick={() => goToSlide(0)}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-200"
            title="Go to first"
          />
        );
        if (startIndex > 1) {
          dots.push(<span key="ellipsis-start" className="text-gray-400 text-xs">...</span>);
        }
      }

      // Show visible dots
      for (let i = startIndex; i <= endIndex; i++) {
        dots.push(
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              i === currentSlide
                ? 'bg-emerald-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            title={`Go to slide ${i + 1}`}
          />
        );
      }

      // Show last dot if not visible
      if (endIndex < totalSlides - 1) {
        if (endIndex < totalSlides - 2) {
          dots.push(<span key="ellipsis-end" className="text-gray-400 text-xs">...</span>);
        }
        dots.push(
          <button
            key={totalSlides - 1}
            onClick={() => goToSlide(totalSlides - 1)}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-200"
            title="Go to last"
          />
        );
      }

      return (
        <div className="flex justify-center items-center space-x-2 py-4">
          {dots}
        </div>
      );
    }

    // For small number of slides, show all dots (original behavior)
    return (
      <div className="flex justify-center space-x-2 py-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-emerald-600 scale-110'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  if (images.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden relative">
      <div 
        className={`relative py-4 ${showArrows ? 'px-16' : 'px-4'}`}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(autoPlay)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Navigation Arrows - Only show when not on mobile */}
        {showArrows && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 transition-all duration-200 z-10 shadow-lg"
              title="Previous (swipe right on mobile)"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 transition-all duration-200 z-10 shadow-lg"
              title="Next (swipe left on mobile)"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
  
        {/* Slider Container */}
        <div className="relative overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div 
                  className="relative group cursor-pointer"
                  onClick={() => onImageClick(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover rounded-xl"
                    draggable={false}
                    style={{ userSelect: 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1 truncate">
                        {image.title}
                      </h3>
                      <p className="text-gray-200 text-sm capitalize">
                        {image.category.replace('-', ' ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smart Indicator */}
      {renderIndicator()}
    </div>
  );
};

export default ImageSlider;