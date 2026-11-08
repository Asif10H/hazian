import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="section-padding bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin size={14} />
            সরাসরি যোগাযোগ ও অবস্থান
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            যোগাযোগ ও অবস্থান
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            হাজিয়ান গ্রামের যেকোনো নাগরিক তথ্য, অভিযোগ বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        {/* 2-Column Contact Info + Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-7 rounded-xl border border-slate-800 shadow-xs flex flex-col justify-between card-hover-lift reveal">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                গ্রাম তথ্য ও যোগাযোগ কেন্দ্র
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal mb-6 leading-relaxed">
                ১নং ওয়ার্ড, ফাঁসিয়াখালী ইউনিয়ন পরিষদ, চকরিয়া, কক্সবাজার।
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 border border-slate-700">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      ঠিকানা
                    </div>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {data.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 border border-slate-700">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      ইমেইল
                    </div>
                    <a 
                      href={`mailto:${data.email}`} 
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors mt-0.5 block"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 border border-slate-700">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      জরুরি হেল্পলাইন
                    </div>
                    <a 
                      href={`tel:${data.phone}`} 
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors mt-0.5 block"
                    >
                      {data.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 text-xs text-slate-400">
              কার্যদিবস: রবিবার হতে বৃহস্পতিবার (সকাল ৯টা হতে বিকাল ৫টা)
            </div>
          </div>

          {/* Interactive Google Maps Frame */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-xs relative min-h-[360px] sm:min-h-[420px] reveal reveal-delay-2 card-hover-lift">
            <iframe 
              src="https://maps.google.com/maps?q=Q34R%2BGQ9,+Kakara&t=m&z=15&output=embed&iwloc=near"
              title="Hazian Map"
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            <div className="absolute top-4 left-4 z-10">
              <a 
                href="https://maps.app.goo.gl/YttXbSo8JCqcuF7r5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3.5 py-2 bg-white/95 backdrop-blur-xs text-slate-800 text-xs font-bold rounded-lg shadow-sm hover:bg-emerald-600 hover:text-white transition-colors inline-flex items-center gap-1.5 border border-slate-200"
              >
                <ExternalLink size={14} />
                গুগল ম্যাপে বড় করে দেখুন
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
