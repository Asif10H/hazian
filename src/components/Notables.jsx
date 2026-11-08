import React from "react";
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  User,
  MapPin,
  Flag,
  BookOpen,
  Building2,
  Star,
  Tag,
  FileText,
} from "lucide-react";

const Notables = ({ data }) => {
  const iconMap = {
    শিক্ষা: GraduationCap,
    প্রশাসন: Briefcase,
    সমাজসেবা: HeartHandshake,
    "বিশিষ্ট ব্যক্তিত্ব": Sparkles,
    "বীর মুক্তিযোদ্ধা": Flag,
    "ধর্মীয় ব্যক্তিত্ব": BookOpen,
    "স্থানীয় সরকার": Building2,
    রাজনীতি: Star,
    "সংস্কৃতি ও করপোরেট": Briefcase,
    নেতৃত্ব: HeartHandshake,
  };

  return (
    <section id="notables" className="section-padding bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {data.subtitle || "হাজিয়ান গ্রামের উজ্জ্বল নক্ষত্রসমূহ যারা বিভিন্ন ক্ষেত্রে সফল হয়ে গ্রামের মর্যাদা বৃদ্ধি করেছেন।"}
          </p>
        </div>

        {/* Notables Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.list.map((person, index) => {
            const Icon = iconMap[person.category] || Sparkles;
            const delayClass = `reveal-delay-${(index % 3) + 1}`;

            return (
              <div
                key={index}
                className={`bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors p-5 flex flex-col card-hover-lift reveal ${delayClass}`}
              >
                {/* Person Header */}
                <div className="flex items-start gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug truncate">
                      {person.name}
                    </h3>
                    <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-md bg-slate-100 text-slate-700 mt-1">
                      {person.category}
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                {(person.father || person.village) && (
                  <div className="space-y-1 mb-3 text-xs text-slate-500">
                    {person.father && (
                      <div className="flex items-center gap-1.5">
                        <User size={13} className="text-slate-400 shrink-0" />
                        <span>পিতা: {person.father}</span>
                      </div>
                    )}
                    {person.village && (
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-slate-400 shrink-0" />
                        <span>গ্রাম: {person.village}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Achievement Box */}
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 mb-3 flex-1">
                  <div className="flex gap-2">
                    <FileText size={14} className="shrink-0 text-emerald-600 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      "{person.achievement}"
                    </p>
                  </div>
                </div>

                {/* Tags */}
                {person.tags && person.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-auto pt-1">
                    {person.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                      >
                        <Tag size={9} /> {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Notables;
