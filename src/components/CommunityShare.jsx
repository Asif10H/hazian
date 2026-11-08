import React, { useState } from 'react';
import { Share2, Check, Copy, Globe } from 'lucide-react';

const CommunityShare = () => {
  const [copied, setCopied] = useState(false);

  const shareUrl = "https://hazian.ami.bd/";
  const shareText = "কক্সবাজার জেলার চকরিয়া উপজেলার ১নং ওয়ার্ডের ঐতিহ্যবাহী হাজিয়ান গ্রামের প্রাতিষ্ঠানিক ডিজিটাল পোর্টাল: https://hazian.ami.bd/";

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const handleFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-xs my-8 transition-colors hover:border-emerald-300/60">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
        
        {/* Left: Heading & Context */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 shadow-xs">
            <Share2 size={22} />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-0.5">
              <Globe size={13} />
              ঐতিহ্য ছড়িয়ে দিন
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              হাজিয়ান গ্রাম বাতায়ন শেয়ার করুন
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5 max-w-md">
              প্রবাসী ও গ্রামবাসীদের মাঝে আমাদের ঐতিহ্যবাহী গ্রামের অফিসিয়াল পোর্টালটি শেয়ার করুন।
            </p>
          </div>
        </div>

        {/* Right: One-Tap Share Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full sm:w-auto">
          
          {/* Facebook Share Button */}
          <button
            type="button"
            onClick={handleFacebook}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            title="ফেসবুকে শেয়ার করুন"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>ফেসবুক</span>
          </button>

          {/* WhatsApp Share Button */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            title="হোয়াটসঅ্যাপে পাঠান"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>হোয়াটসঅ্যাপ</span>
          </button>

          {/* Copy Link Button with State Feedback */}
          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer shadow-xs ${
              copied
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100 hover:border-slate-400'
            }`}
            title="লিংক কপি করুন"
          >
            {copied ? (
              <>
                <Check size={16} className="text-white" />
                <span>লিংক কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-slate-600" />
                <span>লিংক কপি</span>
              </>
            )}
          </button>

        </div>

      </div>
    </div>
  );
};

export default CommunityShare;

