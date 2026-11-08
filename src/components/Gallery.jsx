import React, { useState } from 'react';
import { X, Loader2, Image as ImageIcon } from 'lucide-react';

const Gallery = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = (image) => {
    setIsLoading(true);
    setSelectedImage(image);
  };

  return (
    <section id="gallery" className="section-padding bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon size={14} />
            আলোকচিত্র সংকলন
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            আমাদের গ্রামের স্থিরচিত্র
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            হাজিয়ান গ্রামের প্রাকৃতিক নৈসর্গিক রূপ, নদী ও গ্রামীণ জীবনযাত্রার কিছু স্থিরচিত্র।
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {data.map((item) => {
            const thumbnailUrl = item.url.includes('?') 
              ? `${item.url}&tr=w-600,f-auto,q-75` 
              : `${item.url}?tr=w-600,f-auto,q-75`;

            const fullUrl = item.url.includes('?')
              ? `${item.url}&tr=f-auto`
              : `${item.url}?tr=f-auto`;

            return (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-xs cursor-pointer"
                onClick={() => handleImageSelect({ title: item.title, url: fullUrl })}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={thumbnailUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                    {item.title}
                  </span>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    চকরিয়া
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xs transition-opacity"
          onClick={() => {
            setSelectedImage(null);
            setIsLoading(false);
          }}
        >
          <button 
            className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-50"
            onClick={() => {
              setSelectedImage(null);
              setIsLoading(false);
            }}
            aria-label="ছবি বন্ধ করুন"
          >
            <X size={20} />
          </button>

          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
              <Loader2 className="w-8 h-8 text-white animate-spin mb-2" />
              <p className="text-white/80 text-xs">ছবি লোড হচ্ছে...</p>
            </div>
          )}
          
          <img 
            src={selectedImage.url} 
            alt={selectedImage.title} 
            className={`max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-all duration-300 ${
              isLoading ? 'opacity-0 scale-98' : 'opacity-100 scale-100'
            }`}
            onLoad={() => setIsLoading(false)}
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
