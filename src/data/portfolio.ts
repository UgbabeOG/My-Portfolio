import type { Project, Skill, SocialLink } from '@/types';
import { Code2, Database, Server, Cloud, Smartphone, Palette, Linkedin, Github, Twitter, Mail, Briefcase, Brain } from 'lucide-react';

export const skills: Skill[] = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Python', icon: Code2 },
  { name: 'Databases', icon: Database },
  { name: 'Cloud Services', icon: Cloud },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'Mobile Development', icon: Smartphone },
  { name: 'AI Integration', icon: Brain },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with modern UI, payment integration, and admin dashboard.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online shopping',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '2',
    title: 'Project Management Tool',
    description: 'A collaborative tool for managing projects, tasks, and team communication efficiently.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'team collaboration',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'AI Powered Blog',
    description: 'A blog platform that uses AI to suggest content ideas and optimize articles for SEO.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence writing',
    tags: ['Python', 'Flask', 'OpenAI API', 'React'],
    repoUrl: '#',
  },
  {
    id: '4',
    title: 'Mobile Fitness App',
    description: 'A cross-platform mobile app for tracking workouts, setting fitness goals, and community engagement.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile fitness',
    tags: ['React Native', 'Firebase', 'GraphQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername' },
  { name: 'Email', icon: Mail, url: 'mailto:youremail@example.com' },
];

export const profile = {
  name: "Alex Johnson",
  title: "Full Stack Web Developer & AI Enthusiast",
  bio: "Passionate about creating innovative web solutions that solve real-world problems. Experienced in building scalable applications with modern technologies and integrating AI for enhanced user experiences. Always eager to learn and explore new frontiers in tech.",
  avatarUrl: "https://placehold.co/200x200.png",
  avatarHint: "professional portrait",
  resumeUrl: "#", // Link to resume PDF
};
