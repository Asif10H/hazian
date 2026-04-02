import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          <div className="w-full lg:w-4/12 bg-emerald-600 p-12 rounded-[3.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000" />
            
            <h2 className="text-5xl font-black text-white mb-6 relative z-10 tracking-tight">যোগাযোগ</h2>
            <p className="text-xl text-emerald-50 font-bold mb-12 relative z-10 opacity-90">হাজিয়ান গ্রামের যেকোনো তথ্য বা সেবার জন্য আমাদের সাথে কথা বলুন।</p>

            <div className="space-y-10 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 shrink-0 bg-white/20 rounded-2xl flex items-center justify-center text-white shadow-lg backdrop-blur-md">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-emerald-100 text-sm font-black uppercase tracking-widest mb-1">অবস্থান</h4>
                  <p className="text-white font-black text-xl leading-snug">{data.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group/item cursor-pointer">
                <div className="w-14 h-14 shrink-0 bg-white/20 rounded-2xl flex items-center justify-center text-white shadow-lg backdrop-blur-md group-hover/item:bg-white group-hover/item:text-emerald-600 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-emerald-100 text-sm font-black uppercase tracking-widest mb-1">ইমেইল</h4>
                  <a href={`mailto:${data.email}`} className="text-white font-black text-xl hover:text-emerald-900 transition-colors">{data.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group/item cursor-pointer">
                <div className="w-14 h-14 shrink-0 bg-white/20 rounded-2xl flex items-center justify-center text-white shadow-lg backdrop-blur-md group-hover/item:bg-white group-hover/item:text-emerald-600 transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-emerald-100 text-sm font-black uppercase tracking-widest mb-1">ফোন</h4>
                  <a href={`tel:${data.phone}`} className="text-white font-black text-xl hover:text-emerald-900 transition-colors uppercase">{data.phone}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-8/12 bg-slate-50 border border-slate-100 rounded-[3.5rem] shadow-xl relative overflow-hidden min-h-[500px] group">
            <iframe 
               src="https://maps.google.com/maps?q=Q34R%2BGQ9,+Kakara&t=m&z=15&output=embed&iwloc=near"
               title="Hazian Map"
               width="100%" 
               height="100%" 
               style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 pointer-events-auto"
            ></iframe>
            
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 flex gap-4">
              <a href="https://maps.app.goo.gl/YttXbSo8JCqcuF7r5" target="_blank" rel="noopener noreferrer" className="px-6 py-3 sm:px-8 sm:py-4 bg-white/90 backdrop-blur-md text-slate-800 rounded-2xl font-bold shadow-2xl hover:bg-emerald-600 hover:text-white hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 sm:gap-3 group/btn border border-white/50">
                 <ExternalLink size={20} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                 বড় ম্যাপে দেখুন
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
