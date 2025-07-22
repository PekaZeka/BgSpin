import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ImageSlider from './ImageSlider';

const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Touch/Swipe state using refs for better performance
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'action', name: 'Action Shots' },
    { id: 'teams', name: 'Teams' },
    { id: 'events', name: 'Events' },
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Professional table tennis match in progress',
      category: 'action',
      title: 'Competitive Match Action'
    },
    {
      id: 2,
      src: 'https://live.staticflickr.com/122/31583462585_554fbe8bc6_b.jpg',
      alt: 'Modern table tennis facility',
      category: 'facilities',
      title: 'SC Slodes Interior'
    },
    {
      id: 3,
      src: 'https://cdn.prod.website-files.com/5ca5fe687e34be0992df1fbe/60f06536b267c2381edf50ad_compressed-%20Expires%20on%2001-09-2021-min.jpg',
      alt: 'Table tennis training session',
      category: 'action',
      title: 'Training Session'
    },
    {
      id: 4,
      src: 'https://www.isportconnect.com/wp-content/uploads/2021/11/unnamed-10-scaled.jpg',
      alt: 'Women\'s Super League team photo',
      category: 'teams',
      title: 'Women\'s Super League Team'
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/tt-kharkiv/image/upload/w_600/v1624347656/news/E06144F9-034B-488C-9944-CA0159551629.jpg',
      alt: 'Table tennis equipment and setup',
      category: 'facilities',
      title: 'Professional Equipment'
    },
    {
      id: 6,
      src: 'https://live.staticflickr.com/495/31545887076_c26ba1123e_b.jpg',
      alt: 'Youth table tennis camp',
      category: 'events',
      title: 'Spark JOOLA Camp'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGUlMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D',
      alt: 'Table tennis facility overview',
      category: 'facilities',
      title: 'BgSpin 2 Overview'
    },
    {
      id: 8,
      src: 'https://etthof.org/wp-content/uploads/2015/07/jowNEW.jpg',
      alt: 'Intense match moment',
      category: 'action',
      title: 'Championship Moment'
    },
    {
      id: 9,
      src: 'https://stupaprodsguscentral.blob.core.windows.net/ettu-website-wordpress/2024/10/9150afb3-5758-46b3-ad18-bdfdc8abbb72.JPG',
      alt: 'Team celebration',
      category: 'teams',
      title: 'Victory Celebration'
    },
    {
      id: 10,
      src: 'https://stupaprodsguscentral.blob.core.windows.net/ettu-website-wordpress/2024/10/9150afb3-5758-46b3-ad18-bdfdc8abbb72.JPG',
      alt: 'Team celebration',
      category: 'teams',
      title: 'Victory Celebration'
    },
    {
      id: 11,
      src: 'https://stupaprodsguscentral.blob.core.windows.net/ettu-website-wordpress/2024/10/9150afb3-5758-46b3-ad18-bdfdc8abbb72.JPG',
      alt: 'Team celebration',
      category: 'teams',
      title: 'Victory Celebration'
    },
    {
      id: 12,
      src: 'https://stupaprodsguscentral.blob.core.windows.net/ettu-website-wordpress/2024/10/9150afb3-5758-46b3-ad18-bdfdc8abbb72.JPG',
      alt: 'Team celebration',
      category: 'action',
      title: 'Victory Celebration'
    },
    {
      id: 13,
      src: 'https://stupaprodsguscentral.blob.core.windows.net/ettu-website-wordpress/2024/10/9150afb3-5758-46b3-ad18-bdfdc8abbb72.JPG',
      alt: 'Team celebration',
      category: 'action',
      title: 'Victory Celebration'
    },
    {
      id: 14,
      src: 'https://stupaprodsguscentral.blob.core.windows.net/ettu-website-wordpress/2024/10/9150afb3-5758-46b3-ad18-bdfdc8abbb72.JPG',
      alt: 'Team celebration',
      category: 'facilities',
      title: 'Victory Celebration'
    },
    {
      id: 15,
      src: 'https://stupaprodsguscentral.blob.core.windows.net/ettu-website-wordpress/2024/10/9150afb3-5758-46b3-ad18-bdfdc8abbb72.JPG',
      alt: 'Team celebration',
      category: 'facilities',
      title: 'Victory Celebration'
    },
    {
      id: 16,
      src: 'https://stupaprodsguscentral.blob.core.windows.net/ettu-website-wordpress/2024/10/9150afb3-5758-46b3-ad18-bdfdc8abbb72.JPG',
      alt: 'Team celebration',
      category: 'facilities',
      title: 'Victory Celebration'
    },
    {
      id: 17,
      src: 'https://stupaprodsguscentral.blob.core.windows.net/ettu-website-wordpress/2024/10/9150afb3-5758-46b3-ad18-bdfdc8abbb72.JPG',
      alt: 'Team celebration',
      category: 'events',
      title: 'Victory Celebration'
    },
    {
      id: 18,
      src: 'https://stupaprodsguscentral.blob.core.windows.net/ettu-website-wordpress/2024/10/9150afb3-5758-46b3-ad18-bdfdc8abbb72.JPG',
      alt: 'Team celebration',
      category: 'events',
      title: 'Victory Celebration'
    },
    {
      id: 19,
      src: 'https://stupaprodsguscentral.blob.core.windows.net/ettu-website-wordpress/2024/10/9150afb3-5758-46b3-ad18-bdfdc8abbb72.JPG',
      alt: 'Team celebration',
      category: 'events',
      title: 'Victory Celebration'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Touch event handlers for lightbox swipe navigation
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
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // ESC key and Arrow keys handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (event.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextImage();
          break;
      }
    };

    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-forest-green-900 mb-6">
            Photo <span className="text-emerald-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our facilities, witness the action, and see our teams in competition. 
            From training sessions to championship moments, experience STK Spark through images.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Main Image Slider */}
        <div className="mx-4 md:mx-16">
          <ImageSlider
            images={filteredImages}
            onImageClick={openLightbox}
            autoPlay={true}
            autoPlayInterval={5000}
            showDots={true}
          />
        </div>

        {/* Lightbox with touch/swipe support */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={handleBackdropClick}
          >
            <div 
              className="relative cursor-auto bg-black/20 rounded-lg backdrop-blur-sm"
              style={{ 
                width: 'min(90vw, 1000px)', 
                height: 'min(80vh, 700px)' 
              }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-20 bg-black/70 hover:bg-black/90 rounded-full p-3 transition-colors duration-200 shadow-lg"
                title="Close (ESC)"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons - Hidden on mobile screens */}
              <button
                onClick={prevImage}
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 transition-all duration-200 z-10 shadow-lg hidden md:block"
                title="Previous image (← or swipe right)"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 transition-all duration-200 z-10 shadow-lg hidden md:block"
                title="Next image (→ or swipe left)"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Fixed size image container */}
              <div className="w-full h-full flex items-center justify-center p-4">
                <img
                  src={filteredImages[currentImage]?.src}
                  alt={filteredImages[currentImage]?.alt}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                  style={{ userSelect: 'none' }}
                />
              </div>

              {/* Image Info - Fixed position */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 rounded-b-lg">
                <div className="text-center">
                  <h3 className="text-white font-semibold text-xl mb-1">
                    {filteredImages[currentImage]?.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {currentImage + 1} of {filteredImages.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;