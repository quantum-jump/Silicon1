import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden animate-fade-in">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4">
        {/* Localized Hero Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="flex flex-col items-center justify-center leading-none mb-8">
            <span className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-white tracking-tight drop-shadow-2xl">
              SILICON
            </span>
            <span className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#d8b4fe] to-[#a855f7] tracking-wider animate-glow filter drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              VERTICAL
            </span>
          </h1>

          <p className="font-display text-sm md:text-xl text-slate-300 tracking-[0.3em] uppercase max-w-2xl mx-auto mb-16 text-center font-bold drop-shadow-md">
            NOW, MORE THAN MOORE
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg justify-center">
            <button 
              onClick={() => alert("Information Coming Soon")}
              className="clip-corner flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white font-display text-sm font-bold tracking-widest hover:brightness-125 transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] cursor-pointer"
            >
              JOIN THE VERTICAL
            </button>
            <Link to="/events" className="clip-corner flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-display text-sm font-bold tracking-widest hover:bg-white/5 transition-all hover:border-purple-500/50">
              VIEW TIMELINE
            </Link>
          </div>
        </div>
      </section>

      {/* The Genesis Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Header styling matching the clip: Text + Long Line */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-widest whitespace-nowrap">
            <span className="text-white">THE</span> <span className="text-[#a855f7] drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">GENESIS</span>
          </h2>
          <div className="h-[2px] flex-grow bg-[#2e1065] relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-transparent w-2/3 opacity-70"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Top Row: Translucent Purple Glass Cards (Genesis Style) */}
          {[
            { title: "HISTORY", text: "Founded as a hub for VLSI and hardware enthusiasts, Silicon Vertical was born from the need to bridge the gap between classroom theory and industry grade silicon design." },
            { title: "MISSION", text: "To empower students with the technical prowess and industry connections required to lead the next generation of semiconductor innovation." },
            { title: "VISION", text: "To establish a world-class center of excellence for hardware design, fostering a culture of rigorous engineering and breakthrough research." }
          ].map((card, i) => (
            <div key={`top-${i}`} className="group relative p-10 bg-purple-900/20 backdrop-blur-md border border-purple-500/30 transition-all duration-300 hover:bg-purple-800/30 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              
              <h3 className="relative z-10 font-display text-xl text-white tracking-[0.15em] uppercase mb-6 font-bold group-hover:text-purple-300 transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                {card.title}
              </h3>
              <p className="relative z-10 font-sans text-purple-100/80 text-sm leading-relaxed font-medium">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bottom Row: Dark Cards with Purple Accent Border */}
          {[
            { title: "INNOVATE", text: "Pushing boundaries through experimental tech and collaborative hardware sessions." },
            { title: "LEARN", text: "Connecting with industry leaders via exclusive talks and hands-on workshops." },
            { title: "EVOLVE", text: "Shaping the next generation of engineers and developers for a digital world." }
          ].map((card, i) => (
            <div key={`bottom-${i}`} className="group relative p-10 bg-[#09090b]/80 backdrop-blur-sm border border-white/5 border-l-[3px] border-l-[#a855f7] hover:bg-[#1a1a2e] transition-all duration-300">
               <h3 className="font-display text-xl text-[#e2e8f0] tracking-[0.15em] uppercase mb-6 font-bold group-hover:text-[#a855f7] transition-colors">{card.title}</h3>
               <p className="font-sans text-slate-400 text-sm leading-relaxed">
                 {card.text}
               </p>
            </div>
          ))}
        </div>
      </section>

      {/* Events CTA */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
           <h2 className="font-display text-2xl md:text-4xl text-white tracking-wide uppercase mb-12">
             See how you can interact with us through <br/> 
             <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">EVENTS</span>
           </h2>
           
           <Link to="/events" className="inline-block px-12 py-4 border border-purple-500/50 text-white font-display text-sm tracking-[0.2em] hover:bg-purple-900/20 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
             GO TO EVENTS
           </Link>
        </div>
      </section>

    </div>
  );
};