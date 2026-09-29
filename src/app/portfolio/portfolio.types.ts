export interface PortfolioProfile {
  meta: { title: string; description: string };
  hero: Hero;
  navigation: NavigationItem[];
  about: About;
  experience: Experience;
  projects: Project[];
  projectsIntro: string;
  security?: Security;
  competencyNote?: string;
  skillGroups: SkillGroup[];
  certificates: CertificateGroup[];
  badges: Badge[];
  footer: Footer;
}

export interface Hero { title: string; accent: string; description: string; status: string; }
export interface NavigationItem { label: string; anchor: string; }
export interface About { paragraphs: string[]; fileLabel: string; list: string[]; listType: 'ul' | 'ol'; }
export interface Experience { intro: string; role: string; period: string; note: string; highlights: string[]; }
export interface Project { group?: string; color: 'blue' | 'green' | 'red'; eyebrow: string; title: string; description: string; tags: string[]; links: Link[]; featured_color_red?: boolean; featured_color_green?: boolean; featured_color_blue?: boolean; }
export interface Link { label: string; url: string; }
export interface Security { paragraphs: string[]; fileLabel: string; list: string[]; }
export interface SkillGroup { label: string; color: 'blue' | 'green' | 'red'; items: string[]; featured_color_red?: boolean; featured_color_green?: boolean; featured_color_blue?: boolean; }
export interface CertificateGroup { label: string; color: 'blue' | 'green' | 'red'; items: Certificate[]; }
export interface Certificate { issuer: string; title: string; description: string; url: string; featured_color_red?: boolean; featured_color_green?: boolean; featured_color_blue?: boolean; }
export interface Badge { url: string; image: string; alt: string; }
export interface Footer { title: string; accent: string; description: string; }
