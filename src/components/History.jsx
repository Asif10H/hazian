import React from "react";
import {
  History as HistoryIcon,
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

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-red-500 to-rose-500",
  "from-indigo-500 to-blue-600",
];

const History = ({ data }) => {
  return (
    <section
      id="history"
      className="section-padding bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-bold mb-4 text-xs sm:text-sm">
            <HistoryIcon size={16} />
            {data.title}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            গৌরবময় ঐতিহ্য
          </h2>

          {/* Intro Card */}
          <div className="p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-100 shadow-lg mb-6">
            <Quote size={28} className="text-emerald-400 mx-auto mb-3" />
            <p className="text-lg md:text-xl text-slate-700 leading-[1.8] font-medium italic">
              {data.intro}
            </p>
          </div>

          {/* Achievement Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mb-10 md:mb-12">
            {data.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2.5 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm text-slate-800 font-bold transition-all hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:translate-y-[-2px] duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Award size={18} />
                </div>
                <span className="text-sm sm:text-base text-center">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Serial Sections - Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.75rem] md:left-[2rem] top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-400 via-blue-400 to-violet-400 rounded-full hidden md:block" />

          <div className="space-y-6 md:space-y-7">
            {data.sections.map((section, index) => {
              const IconComponent = iconMap[section.icon] || Star;
              const gradient = gradients[index % gradients.length];

              return (
                <div key={index} className="relative group">
                  <div className="flex gap-4 md:gap-6">
                    {/* Serial Number Circle — desktop only (left timeline) */}
                    <div className="relative z-10 shrink-0 hidden md:flex">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}
                      >
                        <span className="text-white font-black text-base md:text-lg">
                          {section.serial}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 relative p-5 md:p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:translate-y-[-1px] transition-all duration-300">
                      {/* Serial badge — mobile only (top-right corner) */}
                      <div
                        className={`absolute -top-3 -left-3 md:hidden w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md z-20`}
                      >
                        <span className="text-white font-black text-xs">
                          {section.serial}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <IconComponent size={20} className="text-slate-400" />
                        <h3 className="text-lg md:text-xl font-bold text-slate-900">
                          {section.title}
                        </h3>
                      </div>

                      <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
                        {section.content}
                      </p>

                      {/* Tags for পাড়া list */}
                      {section.tags && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
                          <span className="text-xs text-slate-400 font-semibold mr-1">
                            পাড়াসমূহ:
                          </span>
                          {section.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-700 text-xs font-semibold border border-violet-100 hover:bg-violet-100 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Freedom Fighter Highlight */}
                      {section.highlight && (
                        <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-100">
                          <div className="flex items-center gap-2 mb-2">
                            <Flag size={16} className="text-red-600" />
                            <span className="text-xs font-bold text-red-700 uppercase tracking-wide">
                              উল্লেখযোগ্য বীর মুক্তিযোদ্ধা
                            </span>
                          </div>
                          <h4 className="text-lg font-black text-slate-900 mb-1.5">
                            {section.highlight.name}
                          </h4>
                          <div className="flex items-center gap-2 text-slate-600 mb-1">
                            <User size={13} />
                            <span className="text-xs sm:text-sm">
                              পিতা: {section.highlight.father}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-red-600 mt-1.5">
                            {section.highlight.detail}
                          </p>
                        </div>
                      )}

                      {/* Crop Tags */}
                      {section.crops && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
                          <span className="text-xs text-slate-400 font-semibold mr-1">
                            প্রধান ফসল:
                          </span>
                          {section.crops.map((crop, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100"
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

        {/* Conclusion */}
        {data.conclusion && (
          <div className="mt-10 md:mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center shadow-xl">
            <h3 className="text-lg font-bold mb-2 opacity-90">উপসংহার</h3>
            <p className="text-base md:text-lg leading-relaxed font-medium opacity-95">
              {data.conclusion}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default History;
