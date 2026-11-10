import React, { useState } from 'react';
import { 
  Users, 
  Landmark, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  Image as ImageIcon,
  Maximize2,
  X
} from 'lucide-react';

const About = ({ data }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const icons = [Users, Landmark, MapPin];

  const imageUrl = "https://ik.imagekit.io/pswee0uqu/hazian/IMG_3529.HEIC?tr=w-800,f-auto,q-80";
  const imageFullUrl = "https://ik.imagekit.io/pswee0uqu/hazian/IMG_3529.HEIC?tr=w-1600,f-auto,q-90";
  const imageAlt = "হাজিয়ান গ্রামের প্রাকৃতিক দৃশ্য - মাতামুহুরী নদীর তীরে সবুজ প্রকৃতি, চকরিয়া, কক্সবাজার";

  return (
    <section id="about" className="section-padding bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with Clean Framing & Original Compact Height */}
          <div className="lg:col-span-5 relative reveal">
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative min-h-[300px] sm:min-h-[400px] group cursor-pointer"
              title="বড় করে দেখতে ক্লিক করুন"
            >
              {!isImageLoaded && (
                <div className="absolute inset-0 skeleton-shimmer flex items-center justify-center text-slate-400">
                  <ImageIcon size={36} className="opacity-35" />
                </div>
              )}

              <img
                src={imageUrl}
                alt={imageAlt}
                loading="lazy"
                width="800"
                height="550"
                onLoad={() => setIsImageLoaded(true)}
                className={`w-full h-[320px] sm:h-[420px] object-cover group-hover:scale-105 transition-all duration-700 ease-out ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Hover Zoom Hint */}
              <div className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <Maximize2 size={16} />
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200/80 p-3.5 rounded-xl shadow-xs pointer-events-none">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                মাতামুহুরী নদী তীরবর্তী সবুজ ও উর্বর জনপদ
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 reveal reveal-delay-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              মাতামুহুরী নদীর পলিমাটিতে সমৃদ্ধ <br className="hidden sm:inline" />
              <span className="text-emerald-700 font-black">এক গৌরবোজ্জ্বল জনপদ</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
              {data.description}
            </p>

            {/* Key Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
              {data.stats.map((stat, index) => {
                const Icon = icons[index] || CheckCircle2;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5 card-hover-lift hover:bg-white hover:border-emerald-200 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-black text-slate-900 leading-none mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <a
                href="#history"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs"
              >
                গ্রামের পূর্ণাঙ্গ ইতিহাস পড়ুন
                <ChevronDown size={16} />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {isLightboxOpen && (
        <div 
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
          >
            <div className="p-3.5 border-b border-slate-800 flex items-center justify-between text-white">
              <span className="text-xs sm:text-sm font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                মাতামুহুরী নদী তীরবর্তী সবুজ ও উর্বর জনপদ • হাজিয়ান গ্রাম
              </span>
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="বন্ধ করুন"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="p-2 flex items-center justify-center bg-black/60 overflow-auto">
              <img 
                src={imageFullUrl} 
                alt={imageAlt}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;