import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const Team: React.FC = () => {
  const members = [
    {
      code: "CHN",
      name: "Club Head Name",
      role: "VERTICAL HEAD",
      desc: "Leading the vision and industry integration for Silicon Vertical.",
      color: "border-purple-500/50"
    },
    {
      code: "TLN",
      name: "Tech Lead Name",
      role: "TECHNICAL LEAD",
      desc: "Driving VLSI research and workshop curriculum development.",
      color: "border-blue-500/50"
    },
    {
      code: "OHN",
      name: "Ops Head Name",
      role: "OPERATIONS LEAD",
      desc: "Managing event logistics and internal coordination.",
      color: "border-purple-500/50"
    },
    {
      code: "PHN",
      name: "PR Head Name",
      role: "OUTREACH LEAD",
      desc: "Handling public relations and industry sponsorships.",
      color: "border-pink-500/50"
    }
  ];

  return (
    <div className="w-full animate-fade-in pb-20">
      
      {/* Header */}
      <section className="py-20 text-center px-4">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-widest uppercase mb-6">The Architects</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Meet the minds behind Silicon Vertical. Our team is dedicated to fostering excellence in semiconductor engineering and VLSI design.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {members.map((m, i) => (
             <div key={i} className={`bg-[#080816] border ${m.color} p-6 flex flex-col relative group hover:bg-[#0c0c24] transition-colors`}>
                {/* Initial */}
                <div className="w-16 h-16 bg-[#11112b] rounded flex items-center justify-center font-display font-bold text-2xl text-white mb-6 group-hover:bg-purple-900/20 group-hover:text-purple-400 transition-all">
                  {m.code}
                </div>
                
                <h3 className="font-display text-xl text-white uppercase tracking-wide mb-1">{m.name}</h3>
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-4">{m.role}</div>
                
                <p className="text-xs text-slate-400 leading-relaxed mb-8 flex-grow">
                  {m.desc}
                </p>

                <div className="flex gap-4 mt-auto border-t border-white/5 pt-4">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Exec Board Tabs */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-sm text-slate-500 uppercase tracking-[0.3em] mb-8">Executive Board</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-8 py-3 border border-purple-500/30 bg-purple-500/10 text-purple-300 font-display text-xs font-bold tracking-widest uppercase hover:bg-purple-500 hover:text-white transition-all">
            Logistics Board
          </button>
          <button className="px-8 py-3 border border-white/10 bg-transparent text-slate-400 font-display text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:text-white transition-all">
            Design Core
          </button>
          <button className="px-8 py-3 border border-white/10 bg-transparent text-slate-400 font-display text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:text-white transition-all">
            Tech Council
          </button>
        </div>
      </section>

    </div>
  );
};