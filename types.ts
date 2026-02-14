
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: 'Workshop' | 'Seminar' | 'Hackathon' | 'Social';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'PDF' | 'Code' | 'Video' | 'Link';
  size?: string;
  downloadUrl: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface User {
  username: string;
  avatarUrl: string;
  isAdmin: boolean;
}

export interface Problem {
  id: string;
  eventId: string;
  title: string;
  description: string;
  points: number;
}

export interface Submission {
  id: string;
  problemId: string;
  username: string;
  repoUrl: string;
  timestamp: number;
  status: 'pending' | 'accepted' | 'rejected';
}
