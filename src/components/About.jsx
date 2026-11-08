import React from 'react';
import { Users, Landmark, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';

const About = ({ data }) => {
  const icons = [Users, Landmark, MapPin];

  return (
    <section id="about" className="section-padding bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with Clean Framing */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <img
                src="https://ik.imagekit.io/pswee0uqu/hazian/IMG_3529.HEIC?tr=w-800,f-auto,q-80"
                alt="হাজিয়ান গ্রামের প্রাকৃতিক দৃশ্য — মাতামুহুরী নদীর তীরে সবুজ প্রকৃতি, চকরিয়া, কক্সবাজার"
                loading="lazy"
                width="800"
                height="550"
                className="w-full h-[320px] sm:h-[420px] object-cover"
              />
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200/80 p-3.5 rounded-xl shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                মাতামুহুরী নদী তীরবর্তী সবুজ ও উর্বর জনপদ
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Landmark size={14} />
              {data.title}
            </div>

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
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow-xs"
              >
                গ্রামের পূর্ণাঙ্গ ইতিহাস পড়ুন
                <ChevronDown size={16} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
