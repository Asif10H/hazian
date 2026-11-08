import React, { useState } from "react";
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

const toBengaliNumber = (num) => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (d) => bengaliDigits[d]);
};

const Notables = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState("all");

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

  const categories = [
    { id: "all", label: "সকল" },
    { id: "freedom_fighter", label: "বীর মুক্তিযোদ্ধা" },
    { id: "religious", label: "ধর্মীয় ব্যক্তিত্ব" },
    { id: "local_gov", label: "স্থানীয় সরকার ও নেতৃত্ব" },
    { id: "culture_corporate", label: "সংস্কৃতি ও করপোরেট" },
  ];

  const getCategoryCount = (catId) => {
    if (catId === "all") return data.list.length;
    if (catId === "freedom_fighter") {
      return data.list.filter((p) => p.category === "বীর মুক্তিযোদ্ধা").length;
    }
    if (catId === "religious") {
      return data.list.filter((p) => p.category === "ধর্মীয় ব্যক্তিত্ব").length;
    }
    if (catId === "local_gov") {
      return data.list.filter(
        (p) =>
          p.category === "স্থানীয় সরকার" ||
          p.category === "রাজনীতি" ||
          p.category === "নেতৃত্ব"
      ).length;
    }
    if (catId === "culture_corporate") {
      return data.list.filter((p) => p.category === "সংস্কৃতি ও করপোরেট").length;
    }
    return 0;
  };

  const filteredList = data.list.filter((person) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "freedom_fighter") return person.category === "বীর মুক্তিযোদ্ধা";
    if (activeCategory === "religious") return person.category === "ধর্মীয় ব্যক্তিত্ব";
    if (activeCategory === "local_gov") {
      return (
        person.category === "স্থানীয় সরকার" ||
        person.category === "রাজনীতি" ||
        person.category === "নেতৃত্ব"
      );
    }
    if (activeCategory === "culture_corporate") {
      return person.category === "সংস্কৃতি ও করপোরেট";
    }
    return true;
  });

  return (
    <section id="notables" className="section-padding bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {data.subtitle || "হাজিয়ান গ্রামের উজ্জ্বল নক্ষত্রসমূহ যারা বিভিন্ন ক্ষেত্রে সফল হয়ে গ্রামের মর্যাদা বৃদ্ধি করেছেন।"}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 reveal">
          {categories.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[11px] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {toBengaliNumber(count)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Notables Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredList.map((person, index) => {
            const Icon = iconMap[person.category] || Sparkles;

            return (
              <div
                key={`${person.name}-${index}`}
                className="bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-all duration-200 p-5 flex flex-col card-hover-lift"
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
