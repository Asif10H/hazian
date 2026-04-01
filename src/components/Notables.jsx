import React from 'react';
import { Sparkles, GraduationCap, Briefcase, HeartHandshake, User, MapPin, FileText, Flag, BookOpen } from 'lucide-react';

const Notables = ({ data }) => {
  const iconMap = {
    'শিক্ষা': GraduationCap,
    'প্রশাসন': Briefcase,
    'সমাজসেবা': HeartHandshake,
    'বিশিষ্ট ব্যক্তিত্ব': Sparkles,
    'বীর মুক্তিযোদ্ধা': Flag,
    'ধর্মীয় ব্যক্তিত্ব': BookOpen,
  };

  return (
    <section id="notables" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-100 text-emerald-700 font-black mb-6 text-sm">
           <Sparkles size={20} className="animate-spin-slow" />
           গর্বিত হাজিয়ান
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">{data.title}</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-20 leading-relaxed shadow-sm p-4 bg-white rounded-2xl inline-block">
          {data.subtitle || 'হাজিয়ান গ্রামের উজ্জ্বল নক্ষত্রসমূহ যারা বিভিন্ন ক্ষেত্রে সফল হয়ে গ্রামের মর্যাদা বৃদ্ধি করেছেন।'}
        </p>

        <div className={`grid grid-cols-1 ${data.list.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-lg mx-auto'} gap-8`}>
           {data.list.map((person, index) => {
             const Icon = iconMap[person.category] || Sparkles;
             return (
               <div key={index} className="relative p-10 md:p-12 bg-white rounded-[3rem] border border-slate-100 shadow-xl group hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform">
                     <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg transform rotate-[-8deg] group-hover:rotate-0 transition-transform">
                        <Icon size={40} strokeWidth={1.5} />
                     </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">{person.name}</h3>
                  
                  {/* Father/Identity */}
                  {person.father && (
                    <div className="flex items-center gap-2 text-slate-500 mb-2">
                      <User size={16} />
                      <span className="text-base font-medium">পিতা: {person.father}</span>
                    </div>
                  )}
                  
                  {/* Village/Location */}
                  {person.village && (
                    <div className="flex items-center gap-2 text-slate-500 mb-4">
                      <MapPin size={16} />
                      <span className="text-base font-medium">{person.village}</span>
                    </div>
                  )}

                  <div className="px-4 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-black uppercase rounded-full mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                     {person.category}
                  </div>
                  
                  {/* Achievement with icon */}
                  <div className="flex items-center gap-2 text-lg text-slate-600 font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                    <FileText size={18} className="shrink-0 text-amber-500" />
                    <span>"{person.achievement}"</span>
                  </div>
               </div>
             )
           })}
        </div>
      </div>
    </section>
  );
};

export default Notables;
