import type { LucideIcon } from 'lucide-react';

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  avatarHint?: string;
  resumeUrl: string;
  email: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
