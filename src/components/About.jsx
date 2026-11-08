import React from 'react';
import { Users, Landmark, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';

const About = ({ data }) => {
  const icons = [Users, Landmark, MapPin];

  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image composition */}
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full animate-pulse blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-brand-secondary/5 rounded-full blur-3xl opacity-60" />

            <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="https://ik.imagekit.io/pswee0uqu/hazian/IMG_3529.HEIC?tr=w-800,f-auto,q-80"
                alt="হাজিয়ান গ্রামের প্রাকৃতিক দৃশ্য — মাতামুহুরী নদীর তীরে সবুজ প্রকৃতি, চকরিয়া, কক্সবাজার"
                loading="lazy"
                width="800"
                height="550"
                className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
            </div>

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-white/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-white/50 max-w-[150px] sm:max-w-[170px] hover:scale-105 transition-transform">
              <div className="text-slate-700 text-xs sm:text-sm font-bold uppercase tracking-wider text-center">
                সৌহার্দ্যপূর্ণ গ্রাম
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold mb-4 text-xs sm:text-sm">
              <Landmark size={16} />
              {data.title}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 lg:mb-6 leading-tight">
              মাতামুহুরী নদীর তীরে <br className="hidden sm:block" />
              <span className="text-brand-primary">এক টুকরো স্বর্গ</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              {data.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 sm:mb-8">
              {data.stats.map((stat, index) => {
                const Icon = icons[index] || CheckCircle2;
                return (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg group transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <Icon size={22} />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="hidden sm:flex gap-4">
              <a
                href="#history"
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group text-base"
              >
                বিস্তারিত ইতিহাস
                <ChevronDown
                  size={18}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
