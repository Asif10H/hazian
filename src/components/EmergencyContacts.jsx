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
        <div className="text-center mb-16 text-white animate-fade-in">
           <h2 className="text-4xl md:text-6xl font-black mb-6">{data.title}</h2>
           <p className="text-xl text-emerald-50 max-w-2xl mx-auto font-medium opacity-90">গ্রামের যেকোনো ধরণের বিপদ বা সমস্যায় তাৎক্ষণিক যোগাযোগের জন্য এই নম্বরসমূহ ব্যবহার করুন।</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
           {data.contacts.map((contact, index) => {
             const Icon = iconMap[contact.icon] || Phone;
             return (
               <a 
                 key={index} 
                 href={`tel:${contact.phone}`}
                 className="group p-8 rounded-[2.5rem] bg-white border border-transparent shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-emerald-50 flex flex-col items-center text-center"
               >
                  <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                     <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">{contact.name}</h3>
                  <div className="text-xl font-bold bg-slate-900 text-white px-4 py-2 rounded-xl group-hover:bg-emerald-500 transition-colors shadow-lg">
                     {contact.phone}
                  </div>
                  <div className="mt-4 text-emerald-700 font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                     <Phone size={14} /> কল করুন
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
