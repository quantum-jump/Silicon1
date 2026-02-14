import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, User } from 'lucide-react';

// Reusable Scroll Animation Component
const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const handleComingSoon = () => {
    alert("Registration information coming soon!");
  };

  return (
    <div className="w-full pb-20 overflow-x-hidden">
      
      {/* Featured Global Milestone (Always Visible) */}
      <ScrollReveal className="relative py-20 px-6 border-b border-white/5 bg-gradient-to-b from-[#030014] to-[#050511]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="font-mono text-[10px] text-slate-500 tracking-[0.3em] uppercase border-b border-purple-500/30 pb-2">
              Featured Global Milestone
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4 drop-shadow-2xl">
            VLSI DAY
          </h1>
          
          <div className="inline-block px-6 py-2 bg-white text-black font-display font-bold text-xs tracking-widest mb-10">
            SAVE THE DATE: MAR 14, 2026
          </div>

          <p className="font-serif italic text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            "A campus-wide celebration of semiconductor engineering. — A day dedicated to the wonders of silicon technology, featuring multiple industry talks, interactive demos, and visionary keynote sessions."
          </p>

          <button 
            onClick={handleComingSoon}
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-display font-bold text-sm tracking-widest clip-corner transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] mb-16 hover:scale-105 duration-300"
          >
            REGISTER NOW
          </button>

          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-[1px] w-12 bg-purple-500"></div>
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-purple-400">Part of the Expert Series</span>
            <div className="h-[1px] w-12 bg-purple-500"></div>
          </div>
        </div>
        
        {/* BG Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      </ScrollReveal>

      {/* Sub-Navigation Tabs */}
      <div className="sticky top-[80px] z-40 bg-[#030014]/90 backdrop-blur-md border-b border-white/10 mb-12">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`py-6 font-display text-xs font-bold tracking-[0.2em] uppercase transition-all relative ${
              activeTab === 'upcoming' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Upcoming Pipeline
            {activeTab === 'upcoming' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`py-6 font-display text-xs font-bold tracking-[0.2em] uppercase transition-all relative ${
              activeTab === 'past' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Past Events
            {activeTab === 'past' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
            )}
          </button>
        </div>
      </div>

      {/* UPCOMING EVENTS CONTENT */}
      {activeTab === 'upcoming' && (
        <div className="animate-fade-in">
          {/* The Expert Series Grid */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <ScrollReveal>
              <h2 className="font-display text-2xl text-white uppercase tracking-widest mb-12">The Expert Series</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Card 1: Panel Discussion */}
              <ScrollReveal delay={100}>
                <div className="bg-[#080816] border border-white/10 p-8 flex flex-col h-full group hover:border-purple-500/40 transition-colors">
                  <div className="font-mono text-[10px] text-purple-400 mb-4">JAN 31, 2026 | TBC</div>
                  <h3 className="font-display text-xl text-white mb-2 leading-tight">Panel Discussion: Silicon Ecosystem</h3>
                  <p className="text-xs text-slate-500 mb-4 font-bold">By Dr. Satya Prasad (CK) & Dr. Sujeendra Kumar</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                    An expert panel discussion on the state of silicon innovation and entrepreneurial opportunities in CE.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-slate-600 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-800"></span> Main Auditorium
                    </span>
                    <a 
                      href="https://forms.gle/eMiQcy3R67ZZN8bU8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-display uppercase tracking-widest hover:bg-purple-600 hover:border-purple-500 hover:text-white transition-all"
                    >
                      REGISTER NOW
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: SoC */}
              <ScrollReveal delay={200}>
                <div className="bg-[#080816] border border-white/10 p-8 flex flex-col h-full group hover:border-purple-500/40 transition-colors">
                  <div className="font-mono text-[10px] text-purple-400 mb-4">JAN 20, 2026 | TBC</div>
                  <h3 className="font-display text-xl text-white mb-2 leading-tight">SoC Product Development</h3>
                  <p className="text-xs text-slate-500 mb-4 font-bold">By Chandrashekar M V, Senior Director (Intel Corp)</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                    A technical talk and prolonged interaction focusing on System on Chip (SoC) development at Intel.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-slate-600 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-800"></span> Library Hub
                    </span>
                    <button 
                      onClick={handleComingSoon}
                      className="px-4 py-2 border border-white/10 text-[10px] font-display uppercase tracking-widest hover:bg-white text-white hover:text-black transition-colors"
                    >
                      REGISTER NOW
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3: Test Engineering */}
              <ScrollReveal delay={300}>
                <div className="bg-[#080816] border border-white/10 p-8 flex flex-col h-full group hover:border-purple-500/40 transition-colors">
                  <div className="font-mono text-[10px] text-purple-400 mb-4">FEB 24, 2026 | TBC</div>
                  <h3 className="font-display text-xl text-white mb-2 leading-tight">Strategies in Test Engineering</h3>
                  <p className="text-xs text-slate-500 mb-4 font-bold">By Lakshmeesha Vasudeva, Director (Onsemi)</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                    Deep dive into industrial-grade test engineering and career trajectories in semiconductor testing.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-slate-600 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-800"></span> Seminar Hall 1
                    </span>
                    <button 
                      onClick={handleComingSoon}
                      className="px-4 py-2 border border-white/10 text-[10px] font-display uppercase tracking-widest hover:bg-white text-white hover:text-black transition-colors"
                    >
                      REGISTER NOW
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Workshop Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={100}>
                <div className="bg-[#080816] border border-white/10 p-8 flex flex-col relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-4xl font-bold text-white">WORKSHOP</div>
                    <div className="font-mono text-[10px] text-blue-400 mb-4">MAR 07, 2026 | WORKSHOP</div>
                    <h3 className="font-display text-xl text-white mb-2">VYGES Verilog Workshop</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Interactive Training Session</p>
                    <p className="text-sm text-slate-400 mb-8">Intensive training on Verilog HDL for hardware description.</p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-[10px] bg-blue-900/20 text-blue-300 px-2 py-1 rounded">#SKILL_UP</span>
                      <button 
                        onClick={handleComingSoon}
                        className="text-[10px] font-display uppercase tracking-widest border border-blue-500/30 px-4 py-2 text-blue-400 hover:bg-blue-500/10"
                      >
                        REGISTER NOW
                      </button>
                    </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-[#080816] border border-white/10 p-8 flex flex-col relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-4xl font-bold text-white">WORKSHOP</div>
                    <div className="font-mono text-[10px] text-blue-400 mb-4">MAR 26, 2026 | WORKSHOP</div>
                    <h3 className="font-display text-xl text-white mb-2">PCB Design Workshop</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Interactive Training Session</p>
                    <p className="text-sm text-slate-400 mb-8">Hands on session on printed circuit board design and fabrication.</p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-[10px] bg-blue-900/20 text-blue-300 px-2 py-1 rounded">#SKILL_UP</span>
                      <button 
                        onClick={handleComingSoon}
                        className="text-[10px] font-display uppercase tracking-widest border border-blue-500/30 px-4 py-2 text-blue-400 hover:bg-blue-500/10"
                      >
                        REGISTER NOW
                      </button>
                    </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Silicon Combat */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <ScrollReveal className="border-t border-white/10 pt-12">
                <h2 className="font-display text-2xl text-white uppercase tracking-widest mb-12">Silicon Combat</h2>
                
                <div className="relative bg-[#050510] border border-purple-500/20 rounded-xl overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
                  {/* Background CTF graphic */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 font-display text-[200px] font-bold text-white pointer-events-none select-none">
                    CTF
                  </div>

                  <div className="relative z-10 max-w-xl">
                    <div className="font-mono text-xs text-purple-400 tracking-[0.2em] mb-4">ANNUAL FLAGSHIP</div>
                    <h3 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">VLSI CTF <br/> 2026</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-8">
                      Capture The Flag, VLSI Edition. Test your skills in hardware security, circuit logic, and physical design challenges.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Date</div>
                          <div className="font-display text-lg text-white">Feb 20-21, 2026</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Duration</div>
                          <div className="font-display text-lg text-white">48 Hours</div>
                        </div>
                        <div className="col-span-2">
                          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Prizes</div>
                          <div className="font-display text-lg text-white">Elite Mentorship & Internship Tracks</div>
                        </div>
                    </div>

                    <button 
                      onClick={handleComingSoon}
                      className="bg-purple-600 text-white font-display font-bold text-sm tracking-widest px-8 py-3 clip-corner hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                    >
                      REGISTER NOW
                    </button>
                  </div>
                </div>
            </ScrollReveal>
          </section>
        </div>
      )}

      {/* PAST EVENTS CONTENT */}
      {activeTab === 'past' && (
        <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in min-h-[50vh]">
          <div className="border-l-2 border-purple-500/50 pl-8 ml-4 space-y-20">
            {/* Event Item: Orientation 2025 */}
            <ScrollReveal>
              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-[#030014] border-2 border-purple-500 rounded-full"></div>
                
                <div className="bg-[#080816] border border-white/10 rounded-lg overflow-hidden hover:border-purple-500/30 transition-all duration-300 group">
                  {/* Event Header */}
                  <div className="p-8 md:p-10 border-b border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                      <div>
                        <div className="flex items-center gap-3 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3">
                          <Calendar size={14} /> <span>SEP 03, 2025</span>
                          <span className="text-slate-600">|</span>
                          <Clock size={14} /> <span>1:45 PM - 3:45 PM</span>
                        </div>
                        <h3 className="font-display text-3xl text-white font-bold mb-3 leading-tight">
                          Orientation of SILICON Vertical
                        </h3>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <MapPin size={14} /> Be Block, 5th Floor Seminar Hall
                        </div>
                      </div>
                      <div className="shrink-0 bg-white/5 px-6 py-4 rounded border border-white/10">
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                           <User size={12}/> Guest Speaker
                        </div>
                        <div className="font-bold text-white text-lg">Mr. Satish Sajjanar</div>
                        <div className="text-xs text-purple-400 font-mono mt-1">DFT Engineer, Texas Instruments</div>
                        <div className="text-[10px] text-slate-500 mt-1">Alumnus (2013-17 Batch)</div>
                      </div>
                    </div>
                  </div>

                  {/* Event Content Body */}
                  <div className="p-8 md:p-10 bg-[#050511]">
                     <div className="prose prose-invert prose-sm max-w-none text-slate-400 leading-relaxed mb-10 text-justify">
                        <p className="mb-4">
                          Orientation of SILICON, the VLSI vertical of the ECE tech forum was organised for 2nd year students of the department on Wednesday, 3 Sep 2025. It attracted an impressive turnout of more than <strong>120 students</strong> majorly from 3rd and 5th Sem ECE.
                        </p>
                        <p className="mb-4">
                          The program commenced with an introductory presentation by <strong>Dr. Sunita M S</strong>, the faculty mentor of SILICON. Dr. Sunita presented an overview of SILICON, walking through the past events and giving an insight into the future events planned by the forum. She also spoke about the recent advances made by the Govt. of India towards the growth of semiconductor industry.
                        </p>
                        <p className="mb-4">
                          Following this, <strong>Mr. Satish Sajjanar</strong> delivered an extensive presentation on the intricate semiconductor ecosystem. He then proceeded to delve into the multifaceted roles and promising opportunities within the VLSI domain. He stressed on the basic foundations and the courses which the students need to have a strong hold on, to be recruited by semiconductor companies. This presentation served as a fitting preamble to the formal introduction of the VLSI vertical – SILICON.
                        </p>
                        <p className="mb-4">
                          Subsequently the Chairperson, <strong>Dr. Shikha Tripathi</strong>, spoke about the NICE domain and shared her vision for the comprehensive development of the student body.
                        </p>
                        <p>
                           The closing part of the event was a short quiz, conducted by Mr. Chandan, from 7th sem ECE, on current trending topics in VLSI, fostering active participation among the audience. Diaries and pens were given away as prizes to the winners. The event concluded with a Vote of thanks by Mr. Chandan. As an added gesture of appreciation, attendees were presented with stickers bearing the SILICON logo.
                        </p>
                     </div>

                     {/* Gallery Section */}
                     <div>
                        <h4 className="font-display text-xs text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                           <span className="w-8 h-[1px] bg-purple-500"></span> Event Gallery
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           {/* Image 1: Lecture Hall Wide */}
                           <div className="aspect-[4/3] bg-black/40 border border-white/10 rounded-sm overflow-hidden relative group/img cursor-pointer">
                              <img 
                                src="/event_orientation_1.svg" 
                                alt="Lecture Hall Orientation View" 
                                className="w-full h-full object-cover opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500"
                              />
                              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity">
                                <span className="text-[10px] text-white">Orientation Hall View</span>
                              </div>
                           </div>
                           {/* Image 2: Audience View */}
                           <div className="aspect-[4/3] bg-black/40 border border-white/10 rounded-sm overflow-hidden relative group/img cursor-pointer">
                              <img 
                                src="/event_orientation_2.svg" 
                                alt="Student Audience" 
                                className="w-full h-full object-cover opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500"
                              />
                               <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity">
                                <span className="text-[10px] text-white">Student Audience</span>
                              </div>
                           </div>
                           {/* Image 3: Group/Team */}
                           <div className="aspect-[4/3] bg-black/40 border border-white/10 rounded-sm overflow-hidden relative group/img cursor-pointer">
                              <img 
                                src="/event_orientation_3.svg" 
                                alt="SILICON Team and Guests" 
                                className="w-full h-full object-cover opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500"
                              />
                               <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity">
                                <span className="text-[10px] text-white">SILICON Team</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      )}
      
      {/* Footer Pipeline */}
      <ScrollReveal className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10 mt-12">
         <div className="flex flex-col md:flex-row justify-between items-end">
           <div>
             <h4 className="font-display text-sm text-white uppercase tracking-widest mb-2">Upcoming Pipeline</h4>
             <p className="text-[10px] text-slate-500 uppercase tracking-widest">All events are subject to campus regulation and seat availability.</p>
           </div>
           <div className="flex gap-4 mt-4 md:mt-0">
             <div className="px-3 py-1 border border-white/10 text-[10px] font-mono text-slate-400">#VERILOG_READY</div>
             <div className="px-3 py-1 border border-white/10 text-[10px] font-mono text-slate-400">#SILICON_DAY</div>
           </div>
         </div>
      </ScrollReveal>

    </div>
  );
};