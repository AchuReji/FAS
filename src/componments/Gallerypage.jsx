import React, { useState, useEffect } from 'react';

const GalleryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [currentIndex]);

  const items = [
    { id: 1, src: 'https://image2url.com/r2/default/images/1772518705212-52cc28ee-9cb8-4ee4-9a42-39d11053f0be.webp', alt: '', gridClass: 'md:col-span-4 h-64' },
    { id: 2, src: 'https://image2url.com/r2/default/images/1772530827981-1dde5ec2-0cb6-474e-97b6-b46757e2d7ec.blob', alt: '', gridClass: 'md:col-span-4 h-64' },
    { id: 3, src: 'https://image2url.com/r2/default/images/1772530774826-c0d1ce9e-d295-4cac-bea6-596af8262296.jpeg', alt: '', gridClass: 'md:col-span-4 h-64' },
     { id: 4, src: 'https://image2url.com/r2/default/images/1772871826762-e2c5bb10-ca12-4829-9b6a-54044c1266b8.jpeg', alt: '', gridClass: 'md:col-span-4 h-64' },
    { id: 5, src: 'https://image2url.com/r2/default/images/1772871948026-7665a015-b72b-477c-bb91-ec1057ad8404.jpeg', alt: '', gridClass: 'md:col-span-4 h-64' },
    { id: 6, src: 'https://image2url.com/r2/default/images/1772872017798-3614426c-4465-45f5-8454-8250e324b653.jpeg', alt: '', gridClass: 'md:col-span-4 h-64' },
    { id: 7, src: 'https://image2url.com/r2/default/images/1772523467742-769ed327-d6d1-4d4a-b623-000f0d3a88ac.jpeg', alt: '', gridClass: 'md:col-span-4 h-64 md:h-[450px]' },
    { id: 8, src: 'https://image2url.com/r2/default/images/1772523967971-8451fcdf-ad0c-4123-b3c5-d2cdba32e07d.blob', alt: '', gridClass: 'md:col-span-8 h-64 md:h-[450px]' },
    { id: 9, src: 'https://image2url.com/r2/default/images/1772524036397-cb665908-6d35-4f8d-973d-686e17d71b0c.blob', alt: '', gridClass: 'md:col-span-6 h-64 md:h-[400px]' },
    { id: 10, src: 'https://image2url.com/r2/default/images/1772524101878-9e4e4765-c14e-4d1d-aae9-01e1ad46390b.blob', alt: '', gridClass: 'md:col-span-3 h-64 md:h-[400px]' },
    { id: 11, src: 'https://image2url.com/r2/default/images/1772524206250-113d426b-d789-40db-b134-1f63af8f9a78.blob', alt: '', gridClass: 'md:col-span-3 h-64 md:h-[400px]' },
     { id: 12, src: 'https://image2url.com/r2/default/images/1772693595253-efaff09b-095f-4658-b0d3-59a5f36dd4a9.jpeg', alt: '', gridClass: 'md:col-span-8 h-64 md:h-[450px]' }
  ];

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="bg-white min-h-screen py-6 px-4 sm:px-10 md:px-20">
      {/* Grid: 1 column on mobile, 2 on small tablets, 12 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            onClick={() => setCurrentIndex(index)}
            className={`${item.gridClass} w-full bg-[#fcfcfc] overflow-hidden flex items-center justify-center border border-gray-100 cursor-zoom-in group relative`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentIndex !== null && (
        <div 
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md transition-all"
          onClick={() => setCurrentIndex(null)}
        >
          {/* Top Bar for Mobile Accessibility */}
          <div className="absolute top-0 w-full flex justify-between items-center px-6 py-10 md:p-10 z-[10000]">
            <span className="text-white/70 text-sm font-light tracking-widest">
                {currentIndex + 1} / {items.length}
            </span>
            <button 
              className="text-white text-4xl leading-none hover:text-[#55B84A] transition-colors"
              onClick={() => setCurrentIndex(null)}
            >
              &times;
            </button>
          </div>

          {/* Navigation Buttons - Adjusted for touch targets on mobile */}
          <button 
            className="absolute left-2 md:left-10 text-white text-4xl md:text-6xl p-4 z-50 hover:text-[#55B84A] transition-all"
            onClick={showPrev}
          >
            &#8249;
          </button>

          <button 
            className="absolute right-2 md:right-10 text-white text-4xl md:text-6xl p-4 z-50 hover:text-[#55B84A] transition-all"
            onClick={showNext}
          >
            &#8250;
          </button>

          {/* Image Container */}
          <div className="max-w-5xl w-full px-4 flex flex-col items-center justify-center">
            <img
              key={items[currentIndex].src} 
              src={items[currentIndex].src}
              alt={items[currentIndex].alt}
              className="max-h-[70vh] md:max-h-[80vh] w-auto object-contain shadow-2xl animate-in fade-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()} 
            />
            
            <div className="text-center mt-6 px-4">
               <h3 className="text-white text-sm md:text-lg tracking-[0.2em] uppercase font-light border-b border-white/20 pb-2 inline-block">
                {items[currentIndex].alt || 'Gallery Project'}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;