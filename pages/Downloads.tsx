import React from 'react';
import { Download } from 'lucide-react';

export const Downloads: React.FC = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center animate-fade-in px-4 pb-12">
      
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl md:text-5xl text-white uppercase tracking-widest mb-4">The Nexus Blueprint</h1>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Explore the full vision, curriculum, and roadmap of Silicon Vertical. Download our comprehensive guide to everything we do.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-12 bg-[#080816] border border-white/10 p-8 md:p-12 max-w-5xl w-full">
         
         {/* Preview Image */}
         <div className="w-full md:w-1/3 aspect-[3/4] bg-[#020205] border border-white/5 flex flex-col items-center justify-center relative group">
            <div className="w-20 h-20 border border-white/20 rotate-45 mb-6"></div>
            <div className="font-display text-4xl font-bold text-white/10">SV</div>
            <div className="absolute bottom-8 font-mono text-[10px] text-slate-600 uppercase tracking-widest">
              Preview Document <br/> V 4.0
            </div>
         </div>

         {/* Content */}
         <div className="flex-1 flex flex-col justify-center">
            <h3 className="font-display text-xl text-white mb-6">Inside the Brochure:</h3>
            
            <ul className="space-y-4 mb-10">
              {[
                "Vertical Governance & Vision",
                "Upcoming Labs & Workshops",
                "Industry Partnership Details",
                "Membership Benefits & Perks"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-1 h-1 bg-purple-500"></span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center justify-center gap-3 w-full bg-purple-600 hover:bg-purple-500 text-white font-display font-bold text-sm tracking-widest py-4 clip-corner transition-all shadow-[0_0_20px_rgba(147,51,234,0.2)]">
              <Download size={18} />
              DOWNLOAD PDF (4.2MB)
            </button>
            
            <div className="mt-4 text-center font-mono text-[10px] text-slate-600">
              SHA256: 8F92D...4C19
            </div>
         </div>
      </div>

    </div>
  );
};
