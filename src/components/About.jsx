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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image composition */}
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full animate-pulse blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-brand-secondary/5 rounded-full blur-3xl opacity-60" />

            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="https://ik.imagekit.io/pswee0uqu/hazian/IMG_4148.HEIC"
                className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
            </div>

            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20 bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-[1.5rem] sm:rounded-3xl shadow-xl border border-white/50 max-w-[160px] sm:max-w-[180px] hover:scale-105 transition-transform">

              <div className="text-slate-600 text-sm font-bold uppercase tracking-wider">
                সৌহার্দ্যপূর্ণ গ্রাম
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold mb-6 text-sm">
              <Landmark size={18} />
              {data.title}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 lg:mb-8 leading-tight">
              মাতামুহুরী নদীর তীরে <br className="hidden sm:block" />
              <span className="text-brand-primary">এক টুকরো স্বর্গ</span>
            </h2>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              {data.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {data.stats.map((stat, index) => {
                const Icon = icons[index] || CheckCircle2;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl group transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <Icon size={24} />
                    </div>
                    <div className="text-3xl font-black text-slate-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4">
              <a
                href="#history"
                className="px-8 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group"
              >
                বিস্তারিত ইতিহাস
                <ChevronDown
                  size={20}
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
