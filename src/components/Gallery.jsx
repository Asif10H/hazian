import React from 'react';

const Gallery = ({ data }) => {
  return (
    <section id="gallery" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 drop-shadow-sm">আমাদের গ্রামের গ্যালারি</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">হাজিয়ান গ্রামের প্রাকৃতিক সৌন্দর্য ও প্রাত্যহিক জীবনের কিছু স্থিরচিত্র।</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {data.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700 break-inside-avoid"
            >
              <img
                src={item.url}
                alt={item.title}
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
