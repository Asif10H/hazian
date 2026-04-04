import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';

const Gallery = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = (image) => {
    setIsLoading(true);
    setSelectedImage(image);
  };

  return (
    <section id="gallery" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 drop-shadow-sm">আমাদের গ্রামের গ্যালারি</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">হাজিয়ান গ্রামের প্রাকৃতিক সৌন্দর্য ও প্রাত্যহিক জীবনের কিছু স্থিরচিত্র।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => {
            const thumbnailUrl = item.url.includes('?') 
              ? `${item.url}&tr=w-600,f-auto,q-70` 
              : `${item.url}?tr=w-600,f-auto,q-70`;

            const fullUrl = item.url.includes('?')
              ? `${item.url}&tr=f-auto`
              : `${item.url}?tr=f-auto`;

            return (
              <div 
                key={item.id} 
                className="relative group overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer"
                onClick={() => handleImageSelect({ title: item.title, url: fullUrl })}
              >
                <img
                  src={thumbnailUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 aspect-[4/5]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-10">
                   <h3 className="text-2xl font-black text-white">
                      {item.title}
                   </h3>
                   <p className="text-white/70 font-medium">
                      হাজিয়ান, চকরিয়া
                   </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md transition-all duration-300"
          onClick={() => {
            setSelectedImage(null);
            setIsLoading(false);
          }}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-50"
            onClick={() => {
              setSelectedImage(null);
              setIsLoading(false);
            }}
          >
            <X size={24} />
          </button>

          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
              <Loader2 className="w-12 h-12 text-white animate-spin mb-4" />
              <p className="text-white/70 font-medium animate-pulse">ছবি লোড হচ্ছে...</p>
            </div>
          )}
          
          <img 
            src={selectedImage.url} 
            alt={selectedImage.title} 
            className={`max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl transition-all duration-500 ease-out ${
              isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-in zoom-in-95'
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

