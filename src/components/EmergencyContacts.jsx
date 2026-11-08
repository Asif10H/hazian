import React from 'react';
import { Phone, Siren, Flame, Waves, Globe } from 'lucide-react';

const EmergencyContacts = ({ data }) => {
  const iconMap = {
    'Police': Siren,
    'Fire': Flame,
    'Ambulance': Waves,
    'Electricity': Phone,
    'Global': Globe
  };

  return (
    <section id="emergency" className="section-padding bg-emerald-600 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay animate-pulse" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-emerald-400/30 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-12 text-white animate-fade-in">
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">{data.title}</h2>
           <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto font-medium opacity-90">গ্রামের যেকোনো ধরণের বিপদ বা সমস্যায় তাৎক্ষণিক যোগাযোগের জন্য এই নম্বরসমূহ ব্যবহার করুন।</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
           {data.contacts.map((contact, index) => {
             const Icon = iconMap[contact.icon] || Phone;
             return (
               <a 
                 key={index} 
                 href={`tel:${contact.phone}`}
                 className="group p-5 rounded-2xl bg-white border border-slate-100 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-emerald-50/50 flex flex-col items-center text-center"
               >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3.5 group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm">
                     <Icon size={24} />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 truncate max-w-full">{contact.name}</h3>
                  <div className="text-sm sm:text-base font-bold bg-slate-900 text-white px-3.5 py-1.5 rounded-lg group-hover:bg-emerald-600 transition-colors shadow-md whitespace-nowrap">
                     {contact.phone}
                  </div>
                  <div className="mt-2.5 text-xs text-emerald-700 font-bold opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-0.5 group-hover:translate-y-0 flex items-center gap-1">
                     <Phone size={12} /> কল করুন
                  </div>
               </a>
             )
           })}
        </div>
      </div>
    </section>
  );
};

export default EmergencyContacts;
