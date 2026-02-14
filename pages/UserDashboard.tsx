import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { Navigate } from 'react-router-dom';
import { Github, Send, CheckCircle } from 'lucide-react';
import { Submission } from '../types';

export const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const { events, problems, addSubmission, submissions } = useData();
  const [repoUrls, setRepoUrls] = useState<{[key: string]: string}>({});

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const hasSubmitted = (problemId: string) => {
    return submissions.some(s => s.problemId === problemId && s.username === user.username);
  };

  const handleSubmit = (problemId: string) => {
    const url = repoUrls[problemId];
    if (!url) return;

    if (!url.includes('github.com')) {
       alert('Please enter a valid GitHub repository URL');
       return;
    }

    const newSubmission: Submission = {
       id: Date.now().toString(),
       problemId,
       username: user.username,
       repoUrl: url,
       timestamp: Date.now(),
       status: 'pending'
    };
    addSubmission(newSubmission);
    alert('Solution Submitted Successfully!');
  };

  return (
    <div className="w-full animate-fade-in px-6 pb-20">
      <div className="max-w-5xl mx-auto">
         
         <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="font-display text-4xl text-white uppercase tracking-widest mb-2">Challenger Dashboard</h1>
            <p className="text-slate-400 font-mono text-sm">Competitor ID: {user.username}</p>
         </div>

         <div className="space-y-8">
            {events.map(event => {
               const eventProblems = problems.filter(p => p.eventId === event.id);
               if (eventProblems.length === 0) return null;

               return (
                  <div key={event.id} className="bg-[#080816] border border-white/10 rounded-sm overflow-hidden">
                     <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
                        <h3 className="font-display text-white uppercase tracking-widest">{event.title}</h3>
                        <span className="text-[10px] font-mono text-purple-400 border border-purple-500/30 px-2 py-1">{event.category}</span>
                     </div>
                     
                     <div className="divide-y divide-white/10">
                        {eventProblems.map(prob => {
                           const submitted = hasSubmitted(prob.id);
                           return (
                             <div key={prob.id} className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                   <div>
                                      <h4 className="text-lg font-bold text-white mb-2">{prob.title}</h4>
                                      <p className="text-slate-400 text-sm mb-4">{prob.description}</p>
                                   </div>
                                   <div className="font-display text-purple-400 font-bold">{prob.points} PTS</div>
                                </div>

                                {submitted ? (
                                   <div className="flex items-center gap-2 text-green-400 bg-green-900/10 p-3 border border-green-500/20 rounded-sm">
                                      <CheckCircle size={16} />
                                      <span className="text-xs font-mono uppercase tracking-widest">Submission Received</span>
                                   </div>
                                ) : (
                                   <div className="flex gap-2">
                                      <div className="flex-grow flex items-center bg-[#030014] border border-white/20 p-2 focus-within:border-purple-500 transition-colors">
                                         <Github size={16} className="text-slate-500 mr-2" />
                                         <input 
                                           type="text" 
                                           placeholder="https://github.com/username/repo"
                                           className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-slate-600"
                                           value={repoUrls[prob.id] || ''}
                                           onChange={(e) => setRepoUrls({...repoUrls, [prob.id]: e.target.value})}
                                         />
                                      </div>
                                      <button 
                                        onClick={() => handleSubmit(prob.id)}
                                        disabled={!repoUrls[prob.id]}
                                        className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white px-6 font-display text-xs font-bold tracking-widest uppercase transition-all"
                                      >
                                         Submit
                                      </button>
                                   </div>
                                )}
                             </div>
                           );
                        })}
                     </div>
                  </div>
               );
            })}

            {problems.length === 0 && (
               <div className="text-center py-20 border border-white/10 border-dashed rounded-lg">
                  <p className="font-display text-slate-500 uppercase tracking-widest">No active challenges available yet.</p>
                  <p className="text-xs text-slate-600 mt-2">Check back after the admin posts new problem statements.</p>
               </div>
            )}
         </div>

      </div>
    </div>
  );
};
