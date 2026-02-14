import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { Navigate } from 'react-router-dom';
import { Plus, Trophy, Code, Users } from 'lucide-react';
import { Problem } from '../types';

export const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const { events, problems, addProblem, submissions } = useData();
  const [activeTab, setActiveTab] = useState<'problems' | 'leaderboard'>('problems');
  
  // Form State
  const [selectedEventId, setSelectedEventId] = useState(events[0]?.id || '');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [points, setPoints] = useState(100);

  if (!user || !user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  const handleAddProblem = (e: React.FormEvent) => {
    e.preventDefault();
    const newProblem: Problem = {
      id: Date.now().toString(),
      eventId: selectedEventId,
      title,
      description: desc,
      points
    };
    addProblem(newProblem);
    setTitle('');
    setDesc('');
    alert('Problem Statement Posted Successfully');
  };

  // Mock Leaderboard Logic
  const leaderboard = Object.values(submissions.reduce((acc: any, sub) => {
    if (!acc[sub.username]) {
       acc[sub.username] = { username: sub.username, score: 0, submissions: 0 };
    }
    // In a real app, verify submission validity. Here we assume all submissions get points.
    const prob = problems.find(p => p.id === sub.problemId);
    if (prob) {
       acc[sub.username].score += prob.points;
       acc[sub.username].submissions += 1;
    }
    return acc;
  }, {})).sort((a: any, b: any) => b.score - a.score);


  return (
    <div className="w-full animate-fade-in px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-8">
           <div>
             <h1 className="font-display text-4xl text-white uppercase tracking-widest mb-2">Admin Command Center</h1>
             <p className="text-slate-400 font-mono text-sm">Welcome back, {user.username}</p>
           </div>
           <div className="flex gap-4">
              <button 
                onClick={() => setActiveTab('problems')}
                className={`px-6 py-3 font-display text-xs font-bold tracking-widest uppercase transition-all clip-corner ${activeTab === 'problems' ? 'bg-purple-600 text-white' : 'bg-white/5 text-slate-400 hover:text-white'}`}
              >
                <Code className="inline-block mr-2" size={16}/> Problem Statements
              </button>
              <button 
                onClick={() => setActiveTab('leaderboard')}
                className={`px-6 py-3 font-display text-xs font-bold tracking-widest uppercase transition-all clip-corner ${activeTab === 'leaderboard' ? 'bg-purple-600 text-white' : 'bg-white/5 text-slate-400 hover:text-white'}`}
              >
                <Trophy className="inline-block mr-2" size={16}/> Global Leaderboard
              </button>
           </div>
        </div>

        {activeTab === 'problems' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Post Problem Form */}
             <div className="lg:col-span-1 bg-[#080816] border border-white/10 p-8 rounded-sm">
                <h3 className="font-display text-lg text-white mb-6 flex items-center gap-2">
                   <Plus size={20} className="text-purple-500" /> Post New Problem
                </h3>
                <form onSubmit={handleAddProblem} className="space-y-6">
                   <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Select Event</label>
                      <select 
                        value={selectedEventId}
                        onChange={(e) => setSelectedEventId(e.target.value)}
                        className="w-full bg-[#030014] border border-white/20 text-white p-3 text-sm focus:border-purple-500 outline-none"
                      >
                         {events.map(e => (
                           <option key={e.id} value={e.id}>{e.title}</option>
                         ))}
                      </select>
                   </div>
                   <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Problem Title</label>
                      <input 
                        type="text" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                        className="w-full bg-[#030014] border border-white/20 text-white p-3 text-sm focus:border-purple-500 outline-none"
                        required
                      />
                   </div>
                   <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Points</label>
                      <input 
                        type="number" 
                        value={points} 
                        onChange={e => setPoints(Number(e.target.value))}
                        className="w-full bg-[#030014] border border-white/20 text-white p-3 text-sm focus:border-purple-500 outline-none"
                        required
                      />
                   </div>
                   <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Description</label>
                      <textarea 
                        value={desc} 
                        onChange={e => setDesc(e.target.value)}
                        className="w-full bg-[#030014] border border-white/20 text-white p-3 text-sm focus:border-purple-500 outline-none h-32"
                        required
                      />
                   </div>
                   <button type="submit" className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-display text-sm font-bold tracking-widest clip-corner transition-all">
                      PUBLISH STATEMENT
                   </button>
                </form>
             </div>

             {/* Existing Problems List */}
             <div className="lg:col-span-2 space-y-4">
                <h3 className="font-display text-lg text-white mb-6">Active Problem Statements</h3>
                {problems.length === 0 ? (
                   <div className="text-slate-500 text-center py-12 border border-white/5 border-dashed">
                      No problems posted yet.
                   </div>
                ) : (
                   problems.map(prob => {
                      const event = events.find(e => e.id === prob.eventId);
                      return (
                        <div key={prob.id} className="bg-[#080816] border border-white/10 p-6 flex items-start justify-between group hover:border-purple-500/30 transition-colors">
                           <div>
                              <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1">{event?.title}</div>
                              <h4 className="text-xl font-display text-white mb-2">{prob.title}</h4>
                              <p className="text-slate-400 text-sm max-w-2xl">{prob.description}</p>
                           </div>
                           <div className="text-right">
                              <div className="font-display text-2xl text-white font-bold">{prob.points}</div>
                              <div className="text-[10px] text-slate-600 uppercase">Points</div>
                           </div>
                        </div>
                      );
                   })
                )}
             </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
           <div className="bg-[#080816] border border-white/10 rounded-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-white/5 border-b border-white/10">
                       <th className="p-4 font-display text-xs text-slate-400 uppercase tracking-widest">Rank</th>
                       <th className="p-4 font-display text-xs text-slate-400 uppercase tracking-widest">User</th>
                       <th className="p-4 font-display text-xs text-slate-400 uppercase tracking-widest text-right">Submissions</th>
                       <th className="p-4 font-display text-xs text-slate-400 uppercase tracking-widest text-right">Score</th>
                    </tr>
                 </thead>
                 <tbody>
                    {leaderboard.length === 0 ? (
                       <tr><td colSpan={4} className="p-8 text-center text-slate-500">No data available</td></tr>
                    ) : (
                       leaderboard.map((entry: any, idx: number) => (
                          <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                             <td className="p-4 font-mono text-purple-400">#{idx + 1}</td>
                             <td className="p-4 font-bold text-white flex items-center gap-3">
                                <img src={`https://github.com/${entry.username}.png`} className="w-6 h-6 rounded-full" />
                                {entry.username}
                             </td>
                             <td className="p-4 text-right text-slate-300 font-mono">{entry.submissions}</td>
                             <td className="p-4 text-right font-display text-white font-bold">{entry.score}</td>
                          </tr>
                       ))
                    )}
                 </tbody>
              </table>
           </div>
        )}

      </div>
    </div>
  );
};
