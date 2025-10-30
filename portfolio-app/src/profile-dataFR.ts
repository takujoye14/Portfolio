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

export const profileDataFR: ProfileData = {
  name: "Takuma Joye",
  title: "Étudiant en 3ème Année d'Ingénierie Informatique",
  tagline: "Concentré sur le développement full-stack, l'intégration de bases de données et l'exploitation de l'IA/LLMs pour créer des applications modernes et évolutives.",
  image: "",
  contact: {
    email: "takuma.joye@example.com",
    github: "https://github.com/takujoye14",
    linkedin: "https://linkedin.com/in/takujoye-dev",
  },
  sections: [
    {
      id: 'about',
      title: 'À Propos de Moi',
      icon: ICONS.User,
      content: "Je suis un étudiant proactif et adaptable en 3ème année d'Ingénierie Informatique à l'EPITA, très axé sur le développement full-stack, les fondamentaux du réseau et les technologies émergentes comme les Grands Modèles de Langage (LLMs). J'ai une expérience pratique dans le développement de plateformes web, d'applications mobiles (iOS), et la gestion de bases de données relationnelles et NoSQL, ainsi qu'une connaissance pratique du RGPD et de l'IAM. Je recherche activement un stage de 6 mois à partir de février 2026.",
    },
    {
      id: 'experience',
      title: 'Expérience Professionnelle & Projets',
      icon: ICONS.Briefcase,
      items: [
        {
          role: "Développeur Full-Stack & Chef de Projet IT (Personnel)",
          company: "",
          years: "2024 - Présent",
          description: "Conception et implémentation de plusieurs plateformes web et applications mobiles, y compris un suivi de gym iOS avec feedback personnalisé. Les projets impliquaient du développement full-stack (HTML, CSS, JS, Swift, Node.js) et l'intégration avec divers systèmes de base de données (Docker, MongoDB, AWS) et SQL pour un clone IMDB personnalisé. J'ai également construit un prototype de réseau en utilisant Cisco Packet Tracer et GNS3.",
        },
      ],
    },
    // NEW PROJECTS SECTION (FRENCH)
    {
      id: 'projects',
      title: 'Dépôts GitHub',
      icon: ICONS.Code,
      items: [
        {
          role: "Passerelle de Chat LLM",
          company: "https://github.com/takujoye14/llm-chat-gateway",
          years: "Node.js / API Gemini",
          description: "Un backend Node.js sécurisé et robuste utilisant l'API Gemini pour le traitement du langage naturel, servi via une passerelle Express avec limitation de débit et authentification.",
        },
        {
          role: "Gestionnaire de Cours EPITA",
          company: "https://github.com/takujoye14/epita-course-manager",
          years: "React / TypeScript / Docker",
          description: "Une application de gestion full-stack construite avec React et TypeScript, exploitant une instance MongoDB dockerisée pour gérer les horaires de cours universitaires et les données des étudiants.",
        },
        {
          role: "CLI de Sauvegarde AWS S3",
          company: "https://github.com/takujoye14/aws-s3-backup-cli",
          years: "Python / AWS",
          description: "Un utilitaire Python en ligne de commande pour la sauvegarde automatisée, la synchronisation et la vérification de l'intégrité des données avec les buckets Amazon S3.",
        },
      ],
    },
    // END NEW PROJECTS SECTION
    {
      id: 'skills',
      title: 'Compétences Techniques',
      icon: ICONS.Code,
      content: {
        languages: ["TypeScript", "JavaScript (ES6+)", "Python", "Swift", "C/C++", "SQL"],
        frontend: ["React", "HTML/CSS/Pur", "Conception Réactive", "Vite"],
        backend: ["Node.js", "Express", "Docker", "AWS", "Réseautage (GNS3)"],
        ai: ["API Gemini", "LLMs", "Fondamentaux du Machine Learning"],
      },
    },
    {
      id: 'education',
      title: 'Éducation',
      icon: ICONS.GraduationCap,
      items: [
        {
          degree: "Ingénierie Informatique (3ème Année)",
          institution: "EPITA",
          years: "2022 - Présent",
        },
      ],
    },
  ],
};

export const i18nLabels = {
    'en': {
        viewExperience: 'View Experience',
        footerBuiltWith: 'Built with React and CSS.',
        footerInternship: 'Seeking 6-month internship starting February 2026.',
    },
    'fr': {
        viewExperience: 'Voir l\'Expérience',
        footerBuiltWith: 'Construit avec React et CSS.',
        footerInternship: 'Recherche un stage de 6 mois à partir de février 2026.',
    }
}