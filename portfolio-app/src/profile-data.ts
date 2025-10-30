import { Code, Zap, Rss, Layers, User, Briefcase, GraduationCap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ProfileData, Section } from './types';

const ICONS: Record<string, LucideIcon> = {
  User,
  Briefcase,
  Code,
  GraduationCap,
  Layers,
  Rss,
  Zap,
};

export const profileDataEN: ProfileData = { 
  name: "Takuma Joye",
  title: "3rd Year Computer Engineering Student",
  tagline: "Focused on full-stack development, database integration, and leveraging AI/LLMs to build scalable and modern applications.",
  image: "",
  contact: {
    email: "takuma.joye@example.com",
    github: "https://github.com/takujoye14",
    linkedin: "https://linkedin.com/in/takujoye-dev",
  },
  sections: [
    {
      id: 'about',
      title: 'About Me',
      icon: ICONS.User,
      content: "I am a proactive and adaptable 3rd-year Computer Engineering student at EPITA, highly focused on full-stack development, networking fundamentals, and emerging technologies like Large Language Models (LLMs). I have hands-on experience developing web platforms, mobile applications (iOS), and managing relational and NoSQL databases, alongside practical knowledge of GDPR and IAM. I am actively seeking a 6-month internship starting February 2026.",
    },
    {
      id: 'experience',
      title: 'Professional Experience & Projects',
      icon: ICONS.Briefcase,
      items: [
        {
          role: "Full-Stack Developer & Project Lead at IT Projects (Personal)",
          company: "",
          years: "2024 - Present",
          description: "Designed and implemented several web platforms and mobile applications, including an iOS gym tracking with personalized feedback. Projects involved full-stack development (HTML, CSS, JS, Swift, Node.js) and integration with various database systems (Docker, MongoDB, AWS) and SQL for a custom IMDB clone. Also, built a network prototype using Cisco Packet Tracer and GNS3.",
        },
      ],
    },
    // NEW PROJECTS SECTION
    {
      id: 'projects',
      title: 'GitHub Repositories',
      icon: ICONS.Code,
      items: [
        {
          role: "LLM Chat Gateway",
          company: "https://github.com/takujoye14/llm-chat-gateway",
          years: "Node.js / Gemini API",
          description: "A secure, robust Node.js backend using the Gemini API for natural language processing, served via an Express gateway with rate-limiting and authentication.",
        },
        {
          role: "EPITA Course Manager",
          company: "https://github.com/takujoye14/epita-course-manager",
          years: "React / TypeScript / Docker",
          description: "A full-stack management application built with React and TypeScript, leveraging a Dockerized MongoDB instance to manage university course schedules and student data.",
        },
        {
          role: "AWS S3 Backup CLI",
          company: "https://github.com/takujoye14/aws-s3-backup-cli",
          years: "Python / AWS",
          description: "A Python command-line utility for automated data backup, synchronization, and integrity checks against Amazon S3 buckets.",
        },
      ],
    },
    // END NEW PROJECTS SECTION
    {
      id: 'skills',
      title: 'Technical Skills',
      icon: ICONS.Code,
      content: {
        languages: ["TypeScript", "JavaScript (ES6+)", "Python", "Swift", "C/C++", "SQL"],
        frontend: ["React", "HTML/CSS/Pur", "Responsive Design", "Vite"],
        backend: ["Node.js", "Express", "Docker", "AWS", "Networking (GNS3)"],
        ai: ["Gemini API", "LLMs", "Machine Learning Fundamentals"],
      },
    },
    {
      id: 'education',
      title: 'Education',
      icon: ICONS.GraduationCap,
      items: [
        {
          degree: "Computer Engineering (3rd Year)",
          institution: "EPITA",
          years: "2022 - Present",
        },
      ],
    },
  ],
};