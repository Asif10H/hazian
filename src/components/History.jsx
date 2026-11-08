import React from "react";
import {
  Award,
  MapPin,
  Building2,
  BookOpen,
  GraduationCap,
  Flag,
  TrendingUp,
  Wheat,
  Star,
  User,
  Quote,
} from "lucide-react";

const iconMap = {
  MapPin,
  Building: Building2,
  BookOpen,
  GraduationCap,
  Flag,
  TrendingUp,
};

const History = ({ data }) => {
  return (
    <section id="history" className="section-padding bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            হাজিয়ান গ্রামের ইতিহাস ও ঐতিহ্য
          </h2>

          {/* Intro Card */}
          <div className="p-5 sm:p-7 rounded-xl bg-white border border-slate-200/80 shadow-xs mb-6 text-left sm:text-center reveal reveal-delay-1">
            <Quote size={24} className="text-emerald-600 mb-2 sm:mx-auto" />
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {data.intro}
            </p>
          </div>

          {/* Achievement Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {data.achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3 text-left shadow-xs card-hover-lift reveal reveal-delay-${index + 1}`}
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                  <Award size={16} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200 hidden md:block" />

          <div className="space-y-6">
            {data.sections.map((section, index) => {
              const IconComponent = iconMap[section.icon] || Star;

              return (
                <div key={index} className="relative reveal">
                  <div className="flex gap-4 md:gap-6 items-start">
                    
                    {/* Serial Number Node (Desktop) */}
                    <div className="relative z-10 shrink-0 hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-xs border-2 border-white">
                      {section.serial}
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 p-5 sm:p-6 rounded-xl bg-white border border-slate-200/80 shadow-xs card-hover-lift hover:border-slate-300 transition-all">
                      
                      {/* Mobile Serial Badge */}
                      <div className="md:hidden inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md mb-2">
                        অধ্যায় {section.serial}
                      </div>

                      <div className="flex items-center gap-2 mb-2.5">
                        <IconComponent size={18} className="text-emerald-700 shrink-0" />
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {section.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {section.content}
                      </p>

                      {/* Para Tags */}
                      {section.tags && (
                        <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-slate-100">
                          <span className="text-xs font-semibold text-slate-500 mr-1">
                            অন্তর্ভুক্ত পাড়া:
                          </span>
                          {section.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Freedom Fighter Highlight Card */}
                      {section.highlight && (
                        <div className="mt-4 p-4 rounded-lg bg-emerald-50/60 border border-emerald-200/80">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <Flag size={15} className="text-red-600" />
                            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                              স্মরণীয় বীর মুক্তিযোদ্ধা
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-slate-900">
                            {section.highlight.name}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-0.5">
                            <User size={13} />
                            <span>পিতা: {section.highlight.father}</span>
                          </div>
                          <p className="text-xs font-semibold text-emerald-800 mt-1.5">
                            {section.highlight.detail}
                          </p>
                        </div>
                      )}

                      {/* Crop Tags */}
                      {section.crops && (
                        <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-slate-100">
                          <span className="text-xs font-semibold text-slate-500 mr-1">
                            প্রধান কৃষিজ ফসল:
                          </span>
                          {section.crops.map((crop, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-100"
                            >
                              <Wheat size={12} />
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

        {/* Conclusion Banner */}
        {data.conclusion && (
          <div className="mt-8 p-5 sm:p-6 rounded-xl bg-slate-900 text-white text-center shadow-xs reveal">
            <h3 className="text-base font-bold text-emerald-400 mb-1.5">সারসংক্ষেপ</h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-normal max-w-3xl mx-auto">
              {data.conclusion}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default History;
