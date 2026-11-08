import React from 'react';
import { FileText, Coins, HelpCircle, Briefcase } from 'lucide-react';

const CitizenServices = ({ data }) => {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          <div className="w-full lg:w-5/12 bg-slate-900 p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden group">
             <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-700" />
             
             <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center mb-6 shadow-lg text-white">
                   <Briefcase size={28} />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">{data.title}</h2>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                   {data.guideline}
                </p>
                <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                   <div className="flex items-center gap-3 text-emerald-400 font-bold mb-2">
                      <HelpCircle size={18} />
                      সহযোগিতার জন্য
                   </div>
                   <p className="text-slate-400 text-base">ফাঁসিয়াখালী ইউনিয়ন ডিজিটাল সেন্টারের সকল সুযোগ-সুবিধা এবং নাগরিক ফরম এখান থেকে পাওয়া যাবে।</p>
                </div>
             </div>
          </div>

          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
             {data.items.map((service, index) => (
               <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-white text-emerald-600 flex items-center justify-center mb-4 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                     <FileText size={22} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2.5">{service.name}</h3>
                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-slate-600 font-bold text-sm sm:text-base">
                        <Coins size={16} className="text-emerald-500" />
                        <span>ফি: {service.fee}</span>
                     </div>
                     <div className="text-slate-500 text-sm font-medium">
                        প্রয়োজনীয়: {service.doc}
                     </div>
                  </div>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CitizenServices;
