import React, { useState, useEffect, useCallback } from 'react';
import { X, Loader2, Image as ImageIcon, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const toBengaliNumber = (num) => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (d) => bengaliDigits[d]);
};

const GalleryCard = ({ item, index = 0, onSelect }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = item.url.includes('?') 
    ? `${item.url}&tr=w-600,f-auto,q-75` 
    : `${item.url}?tr=w-600,f-auto,q-75`;

  const delayClass = `reveal-delay-${(index % 3) + 1}`;

  return (
    <div 
      className={`group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-900 shadow-xs cursor-pointer card-hover-lift reveal ${delayClass}`}
      onClick={() => onSelect(index)}
    >
      {/* Skeleton Shimmer Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 skeleton-shimmer flex items-center justify-center text-slate-400">
          <ImageIcon size={28} className="opacity-35" />
        </div>
      )}

      <img
        src={thumbnailUrl}
        alt={`হাজিয়ান গ্রাম স্থিরচিত্র ${toBengaliNumber(index + 1)}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Modern Gradient Overlay & Smart Minimal Badge */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-between p-3.5 sm:p-4 pointer-events-none">
        <div className="flex justify-end">
          <span className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md text-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-300">
            <Maximize2 size={15} />
          </span>
        </div>

        <div className="flex items-end justify-between gap-2">
          <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
            স্থিরচিত্র {toBengaliNumber(index + 1)}
          </span>
          <span className="text-[11px] font-medium text-slate-300 backdrop-blur-xs px-2 py-0.5 rounded bg-black/30">
            হাজিয়ান
          </span>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = (index) => {
    setIsLoading(true);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
    setIsLoading(false);
  };

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setIsLoading(true);
    setSelectedIndex((prev) => (prev + 1) % data.length);
  }, [data.length]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setIsLoading(true);
    setSelectedIndex((prev) => (prev - 1 + data.length) % data.length);
  }, [data.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const currentItem = selectedIndex !== null ? data[selectedIndex] : null;
  const currentFullUrl = currentItem
    ? currentItem.url.includes('?') ? `${currentItem.url}&tr=f-auto` : `${currentItem.url}?tr=f-auto`
    : null;

  return (
    <section id="gallery" className="section-padding bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            হাজিয়ান গ্রামের স্থিরচিত্র সংকলন
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            হাজিয়ান গ্রামের প্রাকৃতিক নৈসর্গিক রূপ, নদী ও গ্রামীণ জীবনযাত্রার স্থিরচিত্র সংগ্রহ।
          </p>
        </div>

        {/* Photo Grid with Skeleton Shimmer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {data.map((item, index) => (
            <GalleryCard 
              key={item.id} 
              item={item} 
              index={index}
              onSelect={handleSelect} 
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-md transition-opacity"
          onClick={handleClose}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-50 cursor-pointer"
            onClick={handleClose}
            aria-label="ছবি বন্ধ করুন"
          >
            <X size={20} />
          </button>

          {/* Prev Arrow */}
          <button
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm transition-all z-50 cursor-pointer active:scale-95"
            onClick={handlePrev}
            aria-label="পূর্ববর্তী ছবি"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow */}
          <button
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm transition-all z-50 cursor-pointer active:scale-95"
            onClick={handleNext}
            aria-label="পরবর্তী ছবি"
          >
            <ChevronRight size={24} />
          </button>

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
              <Loader2 className="w-8 h-8 text-white animate-spin mb-2" />
              <p className="text-white/80 text-xs font-medium">ছবি লোড হচ্ছে...</p>
            </div>
          )}
          
          {/* Main Photo & Footer Pill */}
          <div className="flex flex-col items-center max-w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={currentFullUrl} 
              alt={`হাজিয়ান স্থিরচিত্র ${toBengaliNumber(selectedIndex + 1)}`} 
              className={`max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl transition-all duration-300 ${
                isLoading ? 'opacity-0 scale-98' : 'opacity-100 scale-100'
              }`}
              onLoad={() => setIsLoading(false)}
            />

            <div className="mt-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs sm:text-sm font-semibold flex items-center gap-2">
              <span className="text-emerald-400 font-bold">স্থিরচিত্র {toBengaliNumber(selectedIndex + 1)}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80">মোট {toBengaliNumber(data.length)}টি ছবি</span>
              <span className="text-white/40">•</span>
              <span className="text-slate-300 text-xs">হাজিয়ান, চকরিয়া</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
