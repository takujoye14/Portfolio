import { useState } from 'react'; // Only import what is needed (useState)
// Corrected import: Removed LucideIcon as it's not a named export. We will define the type from an existing imported icon.
import { Github, Linkedin, Mail, Code, Zap, ArrowRight, Rss, Layers, User, Briefcase, GraduationCap } from 'lucide-react';

// --- TYPE DEFINITIONS ---
// Define LucideIcon type based on the type of one of the imported icons (e.g., Github)
// This resolves the "does not provide an export named 'LucideIcon'" error.
type LucideIcon = typeof Github;

// Define the shape of the data for better type safety
interface Contact {
  email: string;
  github: string;
  linkedin: string;
}

interface Item {
  role?: string;
  company?: string;
  years?: string;
  description?: string;
  degree?: string;
  institution?: string;
}

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  content?: string | { [key: string]: string[] };
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

// Define the expected props for the Header component
interface HeaderProps {
    profile: ProfileData;
    scrollToSection: (id: string) => void;
}

interface SocialLinkProps {
    Icon: LucideIcon;
    href: string;
    label: string;
}

interface SectionCardProps {
    section: Section;
}

interface SkillGroupProps {
    title: string;
    skills: string[];
    Icon: LucideIcon;
}


// --- Mock Data Updated with Takuma Joye's CV Details ---
const MOCK_PROFILE_DATA: ProfileData = {
  // Data from CV (Takuma Joye)
  name: "Takuma Joye",
  title: "3rd Year Computer Engineering Student",
  tagline: "Focused on full-stack development, database integration, and leveraging AI/LLMs to build scalable and modern applications.",
  image: "https://placehold.co/400x400/1e293b/cbd5e1?text=TJ", // Updated initials
  contact: {
    email: "takuma.joye@epita.fr",
    github: "https://github.com/takuma-joye-dev", // Placeholder (update this with your actual GitHub link!)
    linkedin: "https://linkedin.com/in/takuma-joye", // Placeholder based on handle @takuma joye
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
      title: 'Professional Experience & Projects', // Updated title
      icon: Briefcase,
      items: [
        {
          role: "Full-Stack Developer & Project Lead",
          company: "IT Projects (Personal)",
          years: "2024 - Present",
          description: "Designed and implemented several web platforms and mobile applications, including an iOS app for gym tracking with personalized feedback. Projects involved full-stack development (HTML, CSS, JS, Swift, Node.js) and integration with various database systems (Docker, MongoDB, AWS) and SQL for a custom IMDB clone. Also, built a network prototype using Cisco Packet Tracer and GNS3.",
        },
        {
          role: "Event Management & Sales (Part-Time Missions)",
          company: "Various Clients (e.g., Microsoft, Herbalife)",
          years: "2024 - Present",
          description: "Managed and animated corporate events for major clients like Microsoft and Herbalife. Gained practical experience in sales environments, including working as a vendor at retail locations and exhibitions (Maison et Objets).",
        },
      ],
    },
    {
      id: 'skills',
      title: 'Technical Skills',
      icon: Code,
      // Skills updated based on your 'COMPÉTENCES' section
      content: {
        languages: ["JavaScript (ES6+)", "Python", "PHP", "Swift", "SQL"],
        frontend: ["React", "Vue.js", "HTML", "CSS", "Tailwind CSS"],
        backend: ["Node.js", "Express", "MongoDB (NoSQL)", "Docker", "AWS"],
        ai: ["IBM LLM Certification", "Networking Basics (GNS3/Cisco)", "GDPR & IAM Knowledge"],
      },
    },
    {
      id: 'education',
      title: 'Education & Certifications', // Updated title
      icon: GraduationCap,
      items: [
        {
          degree: "Bachelor of Science in Computer Engineering (3rd Year)",
          institution: "EPITA",
          years: "2023 - 2026",
        },
        {
          degree: "Baccalauréat Général (Mention Bien)",
          institution: "Lycée Français de Barcelone",
          years: "2017 - 2024",
        },
      ],
    },
  ],
};

// --- Components ---

/**
 * Renders the primary header with profile image and contact links.
 */
const Header = ({ profile, scrollToSection }: HeaderProps) => (
  <header className="flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg mb-8 transition-all duration-300">
    <img
      src={profile.image}
      alt={profile.name}
      className="w-32 h-32 rounded-full border-4 border-indigo-500/50 shadow-xl object-cover mb-4"
    />
    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-1">{profile.name}</h1>
    <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">{profile.title}</h2>
    <p className="text-gray-600 dark:text-gray-400 text-center max-w-lg mb-6 italic">"{profile.tagline}"</p>

    <div className="flex space-x-4">
      <SocialLink Icon={Mail} href={`mailto:${profile.contact.email}`} label="Email" />
      <SocialLink Icon={Github} href={profile.contact.github} label="GitHub" />
      <SocialLink Icon={Linkedin} href={profile.contact.linkedin} label="LinkedIn" />
    </div>

    <button
      onClick={() => scrollToSection('experience')}
      className="mt-6 px-6 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg flex items-center group"
    >
      View Work
      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
    </button>
  </header>
);

/**
 * A reusable link component for social media/contact.
 */
const SocialLink = ({ Icon, href, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-full hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-md hover:shadow-lg"
  >
    <Icon className="w-6 h-6" />
  </a>
);

/**
 * A general-purpose card for displaying content sections.
 */
const SectionCard = ({ section }: SectionCardProps) => {
  const IconComponent = section.icon;

  // Type assertion for skills content
  const skillsContent = section.content as { [key: string]: string[] } | undefined;

  return (
    <div id={section.id} className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01] mb-8">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mb-5 border-indigo-100 dark:border-indigo-900">
        <IconComponent className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
        {section.title}
      </h3>

      {section.id === 'about' && (
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{section.content as string}</p>
      )}

      {section.id === 'experience' && (
        <div className="space-y-6">
          {section.items?.map((item, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-4">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">{item.role} at {item.company}</p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">{item.years}</p>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {section.id === 'education' && (
        <div className="space-y-4">
          {section.items?.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-b last:border-b-0 pb-2">
              <span className="text-lg font-medium text-gray-900 dark:text-white">{item.degree}</span>
              <span className="text-md text-gray-600 dark:text-gray-400">{item.institution} ({item.years})</span>
            </div>
          ))}
        </div>
      )}

      {section.id === 'skills' && skillsContent && (
        <div className="space-y-6">
          <SkillGroup title="Core Languages" skills={skillsContent.languages} Icon={Code} />
          <SkillGroup title="Frontend Stack" skills={skillsContent.frontend} Icon={Layers} />
          <SkillGroup title="Backend & DB" skills={skillsContent.backend} Icon={Rss} />
          <SkillGroup title="AI & Governance" skills={skillsContent.ai} Icon={Zap} /> {/* Updated title */}
        </div>
      )}
    </div>
  );
};

/**
 * Component to display a group of skills.
 */
const SkillGroup = ({ title, skills, Icon }: SkillGroupProps) => (
  <div>
    <h4 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3 flex items-center">
      <Icon className="w-5 h-5 mr-2" /> {title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full shadow-sm hover:scale-105 transition-transform"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

/**
 * Main application component.
 */
const App = () => {
  // Function to smoothly scroll to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans p-4 sm:p-8 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <Header profile={MOCK_PROFILE_DATA} scrollToSection={scrollToSection} />

        <main className="space-y-8">
          {MOCK_PROFILE_DATA.sections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </main>

        <footer className="mt-12 text-center text-gray-500 dark:text-gray-400 pt-8 border-t border-gray-300 dark:border-gray-700">
          &copy; {new Date().getFullYear()} {MOCK_PROFILE_DATA.name}. Built with React and Tailwind CSS.
        </footer>
      </div>
    </div>
  );
};

export default App;
