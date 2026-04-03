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

  const colorMap = {
    "স্থানীয় সরকার": {
      bg: "bg-emerald-50 text-emerald-600",
      iconBg: "bg-emerald-500",
    },
    রাজনীতি: { bg: "bg-rose-50 text-rose-600", iconBg: "bg-rose-500" },
    "সংস্কৃতি ও করপোরেট": {
      bg: "bg-violet-50 text-violet-600",
      iconBg: "bg-violet-500",
    },
    নেতৃত্ব: { bg: "bg-amber-50 text-amber-600", iconBg: "bg-amber-500" },
    "বীর মুক্তিযোদ্ধা": {
      bg: "bg-green-50 text-green-600",
      iconBg: "bg-green-600",
    },
    "ধর্মীয় ব্যক্তিত্ব": {
      bg: "bg-sky-50 text-sky-600",
      iconBg: "bg-sky-500",
    },
  };

  return (
    <section
      id="notables"
      className="section-padding bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-100 text-emerald-700 font-black mb-6 text-sm">
          <Sparkles size={20} className="animate-spin-slow" />
          গর্বিত হাজিয়ান
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
          {data.title}
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-20 leading-relaxed shadow-sm p-4 bg-white rounded-2xl inline-block">
          {data.subtitle ||
            "হাজিয়ান গ্রামের উজ্জ্বল নক্ষত্রসমূহ যারা বিভিন্ন ক্ষেত্রে সফল হয়ে গ্রামের মর্যাদা বৃদ্ধি করেছেন।"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {data.list.map((person, index) => {
            const Icon = iconMap[person.category] || Sparkles;
            const colors = colorMap[person.category] || {
              bg: "bg-slate-50 text-slate-600",
              iconBg: "bg-slate-500",
            };

            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-slate-100 shadow-lg group hover:shadow-2xl transition-all duration-300 p-8 flex flex-col hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform ${colors.iconBg}`}
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900">
                      {person.name}
                    </h3>
                    <div
                      className={`inline-block px-3 py-1 text-xs font-bold rounded-lg mt-1 ${colors.bg}`}
                    >
                      {person.category}
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-2 mb-6 text-slate-500 flex-1">
                  {person.father && (
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <User size={16} className="text-slate-400" />
                      <span>পিতা: {person.father}</span>
                    </div>
                  )}

                  {person.village && (
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <MapPin size={16} className="text-slate-400" />
                      <span>গ্রাম: {person.village}</span>
                    </div>
                  )}
                </div>

                {/* Achievement */}
                <div className="px-4 py-3 bg-slate-50 rounded-xl mb-4 border border-slate-100">
                  <div className="flex gap-2">
                    <FileText
                      size={16}
                      className="shrink-0 text-amber-500 mt-0.5"
                    />
                    <p className="text-sm text-slate-600 italic leading-relaxed font-medium">
                      "{person.achievement}"
                    </p>
                  </div>
                </div>

                {/* Tags */}
                {person.tags && person.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {person.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full bg-slate-100 text-slate-500"
                      >
                        <Tag size={10} /> {tag}
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
