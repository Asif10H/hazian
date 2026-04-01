import React from 'react';
import { 
  History as HistoryIcon, Award, MapPin, Building2, BookOpen, 
  GraduationCap, Flag, TrendingUp, Wheat, Star, User, Quote
} from 'lucide-react';

const iconMap = {
  MapPin,
  Building: Building2,
  BookOpen,
  GraduationCap,
  Flag,
  TrendingUp,
};

const gradients = [
  'from-blue-500 to-cyan-500',
  'from-violet-500 to-purple-500',
  'from-amber-500 to-orange-500',
  'from-emerald-500 to-teal-500',
  'from-red-500 to-rose-500',
  'from-indigo-500 to-blue-600',
];

const History = ({ data }) => {
  return (
    <section id="history" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 font-bold mb-6 text-sm">
            <HistoryIcon size={18} />
            {data.title}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">গৌরবময় ঐতিহ্য</h2>
          
          {/* Intro Card */}
          <div className="p-8 md:p-12 rounded-[2rem] bg-white border border-slate-100 shadow-2xl mb-8">
            <Quote size={32} className="text-emerald-300 mx-auto mb-4" />
            <p className="text-xl md:text-2xl text-slate-700 leading-[1.8] font-medium italic">
              {data.intro}
            </p>
          </div>

          {/* Achievement Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {data.achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-md text-slate-800 font-bold transition-all hover:bg-emerald-600 hover:text-white hover:shadow-xl hover:translate-y-[-3px] duration-300">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Award size={20} />
                </div>
                <span className="text-base text-center">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Serial Sections - Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.75rem] md:left-[2rem] top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-400 via-blue-400 to-violet-400 rounded-full hidden md:block" />

          <div className="space-y-8">
            {data.sections.map((section, index) => {
              const IconComponent = iconMap[section.icon] || Star;
              const gradient = gradients[index % gradients.length];
              
              return (
                <div key={index} className="relative group">
                  <div className="flex gap-5 md:gap-8">
                    {/* Serial Number Circle */}
                    <div className="relative z-10 shrink-0">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-black text-lg md:text-xl">{section.serial}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 p-6 md:p-8 rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-xl hover:translate-y-[-2px] transition-all duration-400">
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent size={22} className="text-slate-400" />
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900">{section.title}</h3>
                      </div>
                      
                      <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4">{section.content}</p>

                      {/* Tags for পাড়া list */}
                      {section.tags && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                          <span className="text-sm text-slate-400 font-semibold mr-1">পাড়াসমূহ:</span>
                          {section.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-sm font-semibold border border-violet-100 hover:bg-violet-100 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Freedom Fighter Highlight */}
                      {section.highlight && (
                        <div className="mt-5 p-5 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-100">
                          <div className="flex items-center gap-2 mb-3">
                            <Flag size={18} className="text-red-600" />
                            <span className="text-sm font-bold text-red-700 uppercase tracking-wide">উল্লেখযোগ্য বীর মুক্তিযোদ্ধা</span>
                          </div>
                          <h4 className="text-xl font-black text-slate-900 mb-2">{section.highlight.name}</h4>
                          <div className="flex items-center gap-2 text-slate-600 mb-1">
                            <User size={14} />
                            <span className="text-sm">পিতা: {section.highlight.father}</span>
                          </div>
                          <p className="text-sm font-semibold text-red-600 mt-2">{section.highlight.detail}</p>
                        </div>
                      )}

                      {/* Crop Tags */}
                      {section.crops && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                          <span className="text-sm text-slate-400 font-semibold mr-1">প্রধান ফসল:</span>
                          {section.crops.map((crop, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
                              <Wheat size={13} />
                              {crop}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conclusion */}
        {data.conclusion && (
          <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center shadow-2xl">
            <h3 className="text-xl font-bold mb-4 opacity-90">উপসংহার</h3>
            <p className="text-lg md:text-xl leading-relaxed font-medium opacity-95">
              {data.conclusion}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default History;
