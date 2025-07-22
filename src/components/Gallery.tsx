import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      title: 'BgSpin Center Overview'
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
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[30rem] object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-200 text-sm capitalize">{image.category.replace('-', ' ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 transition-colors duration-200"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 transition-colors duration-200"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image */}
              <img
                src={filteredImages[currentImage]?.src}
                alt={filteredImages[currentImage]?.alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white font-semibold text-xl mb-1">
                  {filteredImages[currentImage]?.title}
                </h3>
                <p className="text-gray-300 capitalize">
                  {filteredImages[currentImage]?.category.replace('-', ' ')}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {currentImage + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;