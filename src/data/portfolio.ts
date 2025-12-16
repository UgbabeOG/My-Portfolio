import type { Project, Skill, SocialLink } from '@/types';
import { Code2, Database, Cloud, Smartphone, Palette, Linkedin, Github, Twitter, Mail, Brain } from 'lucide-react';


export const skills: Skill[] = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Databases', icon: Database },
  { name: 'Cloud Services', icon: Cloud },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'Mobile Development', icon: Smartphone },
  { name: 'AI Integration', icon: Brain },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'CircuitSoul Blog',
    description: 'A tech blog platform that keeps you up-to-date with trending technology topics sourced from Google Trends, powered by Gemini AI.',
    imageUrl: '/circuitsoul_blog_preview_1765890589285.png',
    imageHint: 'tech blog',
    tags: ['Next.js', 'TypeScript', 'Gemini AI', 'Google Trends'],
    liveUrl: 'https://the-circuit-soul-blog.vercel.app',
    repoUrl: 'https://github.com/UgbabeOG/the-circuit-soul-blog',
  },
  {
    id: '2',
    title: 'ScheduleAI',
    description: 'An AI-powered schedule generator that creates personalized schedules from natural language prompts and seamlessly integrates with Google Calendar.',
    imageUrl: '/scheduleai_preview_1765890695333.png',
    imageHint: 'AI scheduling',
    tags: ['Next.js', 'TypeScript', 'Gemini AI', 'Google Calendar API'],
    liveUrl: 'https://schedule-ai-xi.vercel.app',
    repoUrl: 'https://github.com/UgbabeOG/ScheduleAI-',
  },
  {
    id: '3',
    title: 'Handy-Connect',
    description: 'A service marketplace platform connecting users with skilled handymen. Features user authentication, task management, reviews, and AI-powered service suggestions.',
    imageUrl: '/handyconnect_preview_1765891068997.png',
    imageHint: 'service marketplace',
    tags: ['Next.js', 'Firebase', 'TypeScript', 'AI'],
    liveUrl: 'https://studio-iota-ashy.vercel.app',
    repoUrl: 'https://github.com/UgbabeOG/handyConnect',
  },
  {
    id: '4',
    title: 'DevFind',
    description: 'An open-source platform for developers to showcase their skills and connect with collaborators through searchable profiles with powerful skill-based filtering.',
    imageUrl: '/devfind_preview_1765891174480.png',
    imageHint: 'developer platform',
    tags: ['Next.js', 'TypeScript', 'pnpm', 'Open Source'],
    liveUrl: 'https://dev-find.vercel.app',
    repoUrl: 'https://github.com/UgbabeOG/devFind',
  },
  {
    id: '5',
    title: 'Image Search App',
    description: 'A sleek image search application built with React and Vite, featuring fast search capabilities and a modern, responsive interface.',
    imageUrl: '/image_search_preview_1765891328926.png',
    imageHint: 'image search',
    tags: ['React', 'Vite', 'JavaScript', 'API Integration'],
    repoUrl: 'https://github.com/UgbabeOG/image-search-app',
  },
  {
    id: '6',
    title: 'Post-It-App',
    description: 'A social forum platform for sharing thoughts and connecting with people. Features real-time notifications and community engagement with React and SQL.',
    imageUrl: '/postitapp_preview_1765891491513.png',
    imageHint: 'social forum',
    tags: ['React', 'Novu', 'SQL', 'Real-time'],
    repoUrl: 'https://github.com/UgbabeOG/Post-It-App',
  },
  {
    id: '7',
    title: 'Tweet Craft',
    description: 'An AI-powered application that generates creative tweets based on user descriptions using Gemini API, perfect for quick social media content.',
    imageUrl: '/project-placeholder.svg',
    imageHint: 'AI tweet generation',
    tags: ['Next.js', 'Gemini AI', 'TypeScript', 'Social Media'],
    liveUrl: 'https://vimeo.com/1043260556',
    repoUrl: 'https://github.com/UgbabeOG/tweet-craft',
  },
  {
    id: '8',
    title: 'Recipe Generator',
    description: 'A recipe discovery application that helps users find and explore delicious recipes with an intuitive, user-friendly interface.',
    imageUrl: '/project-placeholder.svg',
    imageHint: 'recipe app',
    tags: ['React', 'JavaScript', 'API', 'Food'],
    repoUrl: 'https://github.com/UgbabeOG/recipe-app',
  },
  {
    id: '9',
    title: 'Analog Clock',
    description: 'An elegant analog clock built with HTML, CSS, and JavaScript featuring smooth animations and a modern design.',
    imageUrl: '/project-placeholder.svg',
    imageHint: 'analog clock',
    tags: ['HTML', 'CSS', 'JavaScript', 'Animation'],
    repoUrl: 'https://github.com/UgbabeOG/analogClock',
  },
  {
    id: '10',
    title: 'TicTacToe',
    description: 'Classic two-player tic-tac-toe game with an interactive UI, win detection, and clean modern design.',
    imageUrl: '/project-placeholder.svg',
    imageHint: 'tic-tac-toe game',
    tags: ['HTML', 'CSS', 'JavaScript', 'Game'],
    repoUrl: 'https://github.com/UgbabeOG/Tic-Tac-Toe',
  },
  {
    id: '11',
    title: 'Rock Paper Scissors',
    description: 'Interactive rock-paper-scissors game where you play against the computer with score tracking and engaging animations.',
    imageUrl: '/project-placeholder.svg',
    imageHint: 'rock paper scissors game',
    tags: ['HTML', 'CSS', 'JavaScript', 'Game'],
    repoUrl: 'https://github.com/UgbabeOG/rock-paper-scissor-master',
  },
  {
    id: '12',
    title: 'Calculator',
    description: 'A functional calculator application with a sleek interface supporting basic arithmetic operations.',
    imageUrl: '/project-placeholder.svg',
    imageHint: 'calculator app',
    tags: ['HTML', 'CSS', 'JavaScript', 'Utility'],
    repoUrl: 'https://github.com/UgbabeOG/calculator',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername' },
  { name: 'Email', icon: Mail, url: 'mailto:ugbabe.og@gmail.com' },
];

export const profile = {
  name: "Ugbabe Choco",
  title: "Full Stack Web Developer & Tech Enthusiast",
  bio: "Passionate about creating innovative web solutions that solve real-world problems. Experienced in building scalable applications with modern technologies and integrating AI for enhanced user experiences. Always eager to learn and explore new frontiers in tech.",
  avatarUrl: "/cyborbMe.jpeg",
  avatarHint: "professional portrait",
  resumeUrl: "https://docs.google.com/document/d/1IBfIJsTuLvP9tBfuEjxmkCXfvPEMTtindrXAY5NAwho/edit?usp=sharing", // Link to resume PDF
  email: "Ugbabe.og@gmail.com", // email address
};
