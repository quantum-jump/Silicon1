import React, { createContext, useContext, useState } from 'react';
import { Problem, Submission, Event } from '../types';

interface DataContextType {
  events: Event[];
  problems: Problem[];
  submissions: Submission[];
  addProblem: (problem: Problem) => void;
  addSubmission: (submission: Submission) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Mock Initial Data
  const [events] = useState<Event[]>([
    { id: '1', title: 'VLSI CTF 2026', date: 'Feb 20-21, 2026', location: 'Campus', description: 'Capture The Flag, VLSI Edition.', category: 'Hackathon' },
    { id: '2', title: 'VYGES Verilog Workshop', date: 'Mar 07, 2026', location: 'Tech Hub', description: 'Intensive training on Verilog HDL.', category: 'Workshop' },
    { id: '3', title: 'PCB Design Workshop', date: 'Mar 26, 2026', location: 'Campus Tech', description: 'Hands on session on PCB design.', category: 'Workshop' },
  ]);

  const [problems, setProblems] = useState<Problem[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const addProblem = (problem: Problem) => {
    setProblems(prev => [...prev, problem]);
  };

  const addSubmission = (submission: Submission) => {
    setSubmissions(prev => [...prev, submission]);
  };

  return (
    <DataContext.Provider value={{ events, problems, submissions, addProblem, addSubmission }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
