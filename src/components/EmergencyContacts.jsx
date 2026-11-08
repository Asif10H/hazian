import React from 'react';
import { Phone, Siren, Flame, Waves, Globe, AlertTriangle } from 'lucide-react';

const EmergencyContacts = ({ data }) => {
  const iconMap = {
    'Police': Siren,
    'Fire': Flame,
    'Ambulance': Waves,
    'Electricity': Phone,
    'Global': Globe
  };

  return (
    <section id="emergency" className="section-padding bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <AlertTriangle size={14} />
            তাৎক্ষণিক জরুরি সেবা
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            গ্রামের যেকোনো ধরণের আকস্মিক দুর্যোগ, দুর্ঘটনা বা প্রশাসনিক সহায়তায় নিচের জরুরি নম্বরসমূহে সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        {/* Emergency Contacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {data.contacts.map((contact, index) => {
            const Icon = iconMap[contact.icon] || Phone;
            const isNationalHelpline = contact.phone === "999";

            return (
              <a 
                key={index} 
                href={`tel:${contact.phone}`}
                className={`p-5 rounded-xl border flex flex-col items-center text-center transition-all ${
                  isNationalHelpline 
                    ? "bg-red-950/40 border-red-500/40 hover:bg-red-900/40 hover:border-red-400" 
                    : "bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600"
                }`}
              >
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-3 ${
                  isNationalHelpline 
                    ? "bg-red-500/20 text-red-400 border border-red-500/30" 
                    : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                }`}>
                  <Icon size={20} />
                </div>

                <h3 className="text-sm font-bold text-white mb-2 truncate max-w-full">
                  {contact.name}
                </h3>

                <div className="text-xs sm:text-sm font-bold font-mono px-3 py-1.5 rounded-md bg-slate-900 border border-slate-700 text-emerald-400 w-full mb-2">
                  {contact.phone}
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white">
                  <Phone size={11} /> কল করতে ট্যাপ করুন
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EmergencyContacts;
