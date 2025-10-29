import React, { useState, useEffect } from 'react';
// Corrected the import from 'LinkedIn' to 'Linkedin' based on the previous error.
import { Github, Linkedin, Mail, Code, Zap, ArrowRight, Rss, Layers, User, Briefcase, GraduationCap } from 'lucide-react';

// --- 1. TYPE DEFINITIONS ---
// Define types based on the structure of the data to ensure type safety.

interface Contact {
  email: string;
  github: string;
  linkedin: string;
}

interface Item {
  role?: string;
  company?: string;
  years: string;
  description?: string;
  degree?: string;
  institution?: string;
}

interface SkillContent {
  languages: string[];
  frontend: string[];
  backend: string[];
  ai: string[];
}

interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  content?: string | SkillContent;
  items?: Item[];
}

interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  image: string;
  contact: Contact;
  sections: Section[];
}

// --- 2. MOCK DATA ---
const MOCK_PROFILE_DATA: ProfileData = {
  name: "Takuma Joye",
  title: "3rd Year Computer Engineering Student",
  tagline: "Focused on full-stack development, database integration, and leveraging AI/LLMs to build scalable and modern applications.",
  image: "https://placehold.co/400x400/1e293b/cbd5e1?text=TJ", // Using a dynamic placeholder
  contact: {
    email: "takuma.joye@example.com",
    github: "https://github.com/takujoye14",
    linkedin: "https://linkedin.com/in/takujoye-dev",
  },
  sections: [
    {
      id: 'about',
      title: 'About Me',
      icon: User,
      content: "I am a proactive and adaptable 3rd-year Computer Engineering student at EPITA, highly focused on full-stack development, networking fundamentals, and emerging technologies like Large Language Models (LLMs). I have hands-on experience developing web platforms, mobile applications (iOS), and managing relational and NoSQL databases, alongside practical knowledge of GDPR and IAM. I am actively seeking a 6-month internship starting February 2026.",
    },
    {
      id: 'experience',
      title: 'Professional Experience & Projects',
      icon: Briefcase,
      items: [
        {
          role: "Full-Stack Developer & Project Lead at IT Projects (Personal)",
          company: "",
          years: "2024 - Present",
          description: "Designed and implemented several web platforms and mobile applications, including an iOS gym tracking with personalized feedback. Projects involved full-stack development (HTML, CSS, JS, Swift, Node.js) and integration with various database systems (Docker, MongoDB, AWS) and SQL for a custom IMDB clone. Also, built a network prototype using Cisco Packet Tracer and GNS3.",
        },
      ],
    },
    {
      id: 'skills',
      title: 'Technical Skills',
      icon: Code,
      content: {
        languages: ["TypeScript", "JavaScript (ES6+)", "Python", "Swift", "C/C++", "SQL"],
        frontend: ["React", "HTML/CSS/Tailwind", "Responsive Design", "Vite"],
        backend: ["Node.js", "Express", "Docker", "AWS", "Networking (GNS3)"],
        ai: ["Gemini API", "LLMs", "Machine Learning Fundamentals"],
      } as SkillContent, // Explicit casting for complex object content
    },
    {
      id: 'education',
      title: 'Education',
      icon: GraduationCap,
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

// --- 3. REUSABLE COMPONENTS ---

/**
 * Renders the primary header with profile image and contact links.
 */
const Header: React.FC<{ profile: ProfileData; scrollToSection: (id: string) => void }> = ({ profile, scrollToSection }) => (
  <header className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl mb-10 transition-all duration-300 border-t-4 border-indigo-600/70">
    <img
      src={profile.image}
      alt={profile.name}
      className="w-40 h-40 rounded-full border-4 border-indigo-500/80 shadow-xl object-cover mb-6 transition-transform hover:scale-105"
    />
    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">{profile.name}</h1>
    <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">{profile.title}</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-xl mb-8 italic">"{profile.tagline}"</p>

    <div className="flex space-x-5">
      <SocialLink Icon={Mail} href={`mailto:${profile.contact.email}`} label="Email" />
      <SocialLink Icon={Github} href={profile.contact.github} label="GitHub" />
      <SocialLink Icon={Linkedin} href={profile.contact.linkedin} label="LinkedIn" />
    </div>

    <button
      onClick={() => scrollToSection('experience')}
      className="mt-8 px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group transform hover:-translate-y-0.5"
    >
      View Experience
      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
    </button>
  </header>
);

/**
 * A reusable link component for social media/contact.
 */
const SocialLink: React.FC<{ Icon: React.ElementType, href: string, label: string }> = ({ Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-gray-700 rounded-full hover:bg-indigo-200 dark:hover:bg-gray-600 transition-colors shadow-md hover:shadow-lg transform hover:scale-110"
  >
    <Icon className="w-6 h-6" />
  </a>
);

/**
 * Component to display a group of skills.
 */
const SkillGroup: React.FC<{ title: string, skills: string[], Icon: React.ElementType }> = ({ title, skills, Icon }) => (
  <div>
    <h4 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3 flex items-center border-b border-indigo-100 dark:border-indigo-900 pb-1">
      <Icon className="w-5 h-5 mr-2" /> {title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-lg shadow-sm hover:scale-[1.03] transition-transform"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);


/**
 * A general-purpose card for displaying content sections.
 */
const SectionCard: React.FC<{ section: Section }> = ({ section }) => {
  const IconComponent = section.icon;

  return (
    <div id={section.id} className="bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-8 border-l-4 border-indigo-500">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-4 mb-6 border-gray-200 dark:border-gray-700">
        <IconComponent className="w-7 h-7 text-indigo-600 dark:text-indigo-400 mr-3" />
        {section.title}
      </h3>

      {section.id === 'about' && typeof section.content === 'string' && (
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">{section.content}</p>
      )}

      {section.id === 'experience' && section.items && (
        <div className="space-y-8">
          {section.items.map((item, index) => (
            <div key={index} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-indigo-400 dark:before:bg-indigo-600">
              <p className="text-xl font-bold text-gray-900 dark:text-white">{item.role}</p>
              {item.company && <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mt-1">{item.company}</p>}
              <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">{item.years}</p>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {section.id === 'education' && section.items && (
        <div className="space-y-4">
          {section.items.map((item, index) => (
            <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center shadow-inner">
              <span className="text-lg font-medium text-gray-900 dark:text-white">{item.degree}</span>
              <span className="text-md text-gray-600 dark:text-gray-400 font-light">{item.institution} ({item.years})</span>
            </div>
          ))}
        </div>
      )}

      {section.id === 'skills' && section.content && typeof section.content !== 'string' && (
        <div className="space-y-8">
          <SkillGroup title="Core Languages" skills={section.content.languages} Icon={Code} />
          <SkillGroup title="Frontend Stack" skills={section.content.frontend} Icon={Layers} />
          <SkillGroup title="Backend & Deployment" skills={section.content.backend} Icon={Rss} />
          <SkillGroup title="AI & ML" skills={section.content.ai} Icon={Zap} />
        </div>
      )}
    </div>
  );
};


// --- 4. MAIN APPLICATION ---
/**
 * Main application component.
 */
const App: React.FC = () => {

  // Function to smoothly scroll to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // Set Inter font family (optional, but good practice for modern design)
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-[Inter,sans-serif] p-4 sm:p-10 transition-colors duration-500">
      <style jsx global>{`
        /* Import Inter font (needed if not preloaded by the environment) */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
      `}</style>
      <div className="max-w-4xl mx-auto">
        <Header profile={MOCK_PROFILE_DATA} scrollToSection={scrollToSection} />

        <main className="space-y-10">
          {MOCK_PROFILE_DATA.sections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </main>

        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 pt-8 border-t border-gray-300 dark:border-gray-700">
          <p>&copy; {new Date().getFullYear()} {MOCK_PROFILE_DATA.name}. Built with React and Tailwind CSS.</p>
          <p className="text-xs mt-1">Seeking 6-month internship starting February 2026.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
