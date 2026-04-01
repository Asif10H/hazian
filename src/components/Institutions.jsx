import React from 'react';
import { School, Landmark, Church, ShoppingBag, Globe } from 'lucide-react';

const Institutions = ({ data }) => {
  const iconMap = {
    'শিক্ষা': School,
    'ধর্মীয়': Church,
    'মসজিদ': Landmark,
    'বাণিজ্য': ShoppingBag,
    'সেবা': Globe
  };

  return (
    <section id="institutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans text-slate-900 mb-6">{data.title}</h2>
           <p className="text-xl text-slate-500 max-w-2xl mx-auto">আমাদের গ্রামের সামাজিক ও ধর্মীয় উন্নয়ন এবং জীবনযাত্রার প্রাণকেন্দ্রসমূহ।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {data.items.map((item, index) => {
             const Icon = iconMap[item.type] || Landmark;
             return (
               <div key={index} className="p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:border-emerald-200 hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 rotate-3 transition-transform group-hover:rotate-0">
                     <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <div className="inline-block px-3 py-1 bg-white text-emerald-700 text-xs font-black uppercase tracking-widest rounded-full border border-emerald-50 mb-4">
                     {item.type}
                  </div>
                  <h3 className="text-3xl font-black font-sans text-slate-900 mb-4">{item.name}</h3>
                  <p className="text-lg text-slate-500 leading-relaxed">{item.description}</p>
               </div>
             )
           })}
        </div>
      </div>
    </section>
  );
};

export default Institutions;
