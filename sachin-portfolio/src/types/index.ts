// Shared content types — single source of truth for the data layer.
// Keeping these separate from components means data/content.ts can be
// edited (or swapped for a CMS fetch) without touching any UI code.

export interface NavLink {
  id: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  /** Lucide icon name, resolved in the Services section */
  icon: string;
  specs: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  impact: string;
  stack: string[];
  /** Optional — falls back to a generated gradient tile when absent */
  image?: string;
  href?: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: {
    name: string;
    level: number; // 0–100, used for the proficiency bar
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarInitials: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

export interface SiteContent {
  name: string;
  role: string;
  tagline: string;
  yearsExperience: number;
  location: string;
  email: string;
  availability: string;
  heroStack: string[];
  navLinks: NavLink[];
  about: {
    paragraphs: string[];
    stats: { label: string; value: string }[];
  };
  services: ServiceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  testimonials: TestimonialItem[];
  contact: {
    heading: string;
    subheading: string;
    details: ContactDetail[];
  };
}
