/**
 * All site content lives here (PRD F-08). Edit this file to update the page —
 * no layout changes needed. Items marked TODO still need Raka's real data.
 *
 * Text fields that accept HTML use <em> for emphasis (rendered italic in --ink).
 */

export type IconName =
  | 'github'
  | 'linkedin'
  | 'telegram'
  | 'mail'
  | 'instagram'
  | 'globe'
  | 'check'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'menu'
  | 'close';

export interface SocialLink {
  label: string;
  icon: IconName;
  href: string;
  /** Email pills copy the address to the clipboard instead of navigating (F-07). */
  copy?: string;
}

export const site = {
  firstName: 'Raka',
  lastName: 'Murdiarta',
  handle: 'raka.murdiarta',
  role: 'Backend developer',
  title: 'Raka Murdiarta — Backend Developer',
  description:
    'Raka Murdiarta is a backend developer who builds reliable APIs, clean data models, and systems that stay calm under load.',
  ogTitle: 'Raka Murdiarta · Backend Developer',
  ogDescription: 'APIs, databases, and the quiet infrastructure that keeps products running.',
  status: 'Available for freelance & full-time roles',
  /** Pre-cropped 4:5 grayscale WebPs, keyed by width (px). */
  photo: { 480: '/images/profile-480.webp', 800: '/images/profile-800.webp', 1200: '/images/profile-1200.webp' },
  photoAlt: 'Raka Murdiarta, backend developer',
  credits: {
    // TODO: fill in who designed the site.
    designedBy: 'Raka',
    poweredBy: 'Astro',
  },
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contacts', href: '#contacts' },
];

export const footerNav = [
  { label: 'Main', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
];

const email = 'dewamurdiarta@gmail.com';
const github: SocialLink = { label: 'GitHub', icon: 'github', href: 'https://github.com/RakaMurdiarta' };
const linkedin: SocialLink = { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/rakamurdiarta/' };
const mail: SocialLink = { label: 'Email', icon: 'mail', href: `mailto:${email}`, copy: email };
const instagram: SocialLink = { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/rakamurdiartaa/' };
const website = (href: string): SocialLink => ({ label: 'Website', icon: 'globe', href });

export const socials = {
  github,
  hero: [github, linkedin, mail, instagram],
  footer: [github, linkedin, mail, instagram],
};

export const hero = {
  lineOne: 'Backend',
  lineTwo: 'Developer',
  lead: 'My goal is to build <em>reliable, well-structured systems</em> and <em>APIs that are a pleasure to consume</em> — so the product on top of them can move fast without breaking.',
};

export const about = {
  /** `{years}` is replaced with the experience computed from `work` below. */
  intro: "Hi! I'm Raka, a <em>backend developer</em>. I've spent <em>{years}</em> designing APIs, modeling data, and keeping services fast and dependable.",
  body: 'I care about the parts users never see: clear database schemas, predictable APIs, sensible caching, and logs that actually help at 2 a.m. I like writing code the next developer can read without a guide.',
  caption: 'Some of my <em>favorite technologies, tools, and topics</em> that I work with',
};

// TODO: adjust to Raka's real stack. The first card is shown as "active".
export const skills = [
  { title: 'Languages & Frameworks', items: ['Go', 'Gin', 'Node.js', 'NestJS', 'PHP', 'Laravel', 'TypeScript'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'] },
  { title: 'Architecture', items: ['REST', 'gRPC', 'GraphQL', 'Microservices', 'Kafka', 'RabbitMQ'] },
  { title: 'DevOps', items: ['Docker', 'Nginx', 'CI/CD', 'Linux', 'Kubernetes', 'Bash'] },
];

/**
 * Work history, newest first. Dates are "YYYY-MM", or just "YYYY" if the month isn't known.
 * Omit `end` for the current job. When only years are known, set `months` to the actual
 * length so the duration and total stay exact. `focus` (tech stack) is optional.
 */
export const work: { start: string; end?: string; months?: number; company: string; role: string; focus?: string }[] = [
  { start: '2024-08', company: 'Tunas Jaya Sanur Group', role: 'IT Programmer & DevOps' },
  { start: '2023', end: '2024', months: 12, company: 'PT Baliola', role: 'Backend Developer' },
  { start: '2022', end: '2023', months: 12, company: 'DJOIN', role: 'Data Engineer' },
  { start: '2022', end: '2022', months: 3, company: 'DJOIN', role: 'Data Analyst Intern' },
];

/** Illustrations drawn by Mock.astro, used where a project has no screenshots. */
export type MockVariant = 'dashboard' | 'phone' | 'chat' | 'scene' | 'glyph';

export interface Project {
  name: string;
  /** Which group of the list the project appears under. */
  category: 'work' | 'freelance';
  /** Who it was built for, shown under the name in the list and above the title. */
  client: string;
  /** Tagline under the title. */
  summary: string;
  /** Three short points shown as a checklist. */
  highlights: string[];
  tags: string[];
  links: SocialLink[];
  /** Set for apps behind a login; the button then reads "Open app" and shows this note. */
  access?: string;
  /**
   * Screenshots in /public/images/projects: desktop 1200×750, mobile 400×866 (WebP).
   * Without them the showcase draws a mock dashboard and shows `glyph` on the phone.
   */
  shots?: { desktop: string; mobile: string };
  glyph?: string;
}

const shots = (slug: string) => ({
  desktop: `/images/projects/${slug}-desktop.webp`,
  mobile: `/images/projects/${slug}-mobile.webp`,
});

// TODO: `tags` for the TJS/Baliola apps are a best guess — adjust to the real stack.
export const projects: Project[] = [
  {
    name: 'e.id',
    category: 'work',
    client: 'Baliola × PANDI',
    summary: 'A <em>digital identity wallet</em>: verified once, trusted everywhere.',
    highlights: [
      'Holders keep IDs, work badges, diplomas, and tickets in <em>one wallet</em> and <em>choose what to share</em>.',
      'Verifiers <em>check credentials cryptographically</em>, without having to contact the issuer.',
      'Built on <em>W3C standards</em> and the <em>IDCHAIN</em> blockchain, with <em>passwordless SSO</em> and 50K+ verified users.',
    ],
    tags: ['Next.js', 'Verifiable Credentials', 'IDCHAIN', 'SSO'],
    links: [website('https://e.id/')],
    shots: shots('e-id'),
  },
  {
    name: 'SMIS',
    category: 'work',
    client: 'Tunas Jaya Sanur',
    summary: 'Manages <em>project workers</em>, from <em>attendance</em> to <em>payment</em>.',
    highlights: [
      '<em>Daily attendance</em> is recorded on site for every project.',
      'Work progress is measured through <em>opname</em> (work-volume checks).',
      'Those records turn straight into <em>worker payments</em>, with no spreadsheets to reconcile.',
    ],
    tags: ['Next.js', 'Workforce', 'Attendance', 'Payroll'],
    links: [website('https://smis-client.tjstestapp.com/')],
    access: 'Internal app · login required',
    glyph: 'SMIS',
  },
  {
    name: 'IPMS',
    category: 'work',
    client: 'Tunas Jaya Sanur',
    summary: 'Plan, track, and report on <em>every project</em> in one place.',
    highlights: [
      'The company’s internal <em>project management</em> system.',
      'Keeps <em>schedules, progress, and reports</em> together.',
      'Gives the office and the site <em>the same view</em> of each project.',
    ],
    tags: ['Project Management', 'Dashboard', 'REST API'],
    links: [website('https://ipms.pttjs.id/')],
    access: 'Internal app · login required',
    glyph: 'IPMS',
  },
  {
    name: 'SIA',
    category: 'work',
    client: 'Tunas Jaya Sanur',
    summary: 'Every transaction <em>recorded, balanced, and reported</em>.',
    highlights: [
      'The company’s internal <em>accounting</em> app (Sistem Informasi Akuntansi).',
      'Turns daily transactions into <em>books and financial reports</em>.',
      'Backed by an API where <em>every number has to add up</em>.',
    ],
    tags: ['Accounting', 'General Ledger', 'Financial Reports'],
    links: [website('https://tjssia.com')],
    access: 'Internal app · login required',
    glyph: 'SIA',
  },
  {
    name: 'Penida Tour Island',
    category: 'freelance',
    client: 'Tour operator · Nusa Penida',
    summary: 'Private island tours, <em>booked in one tap</em>.',
    highlights: [
      'Day tours, snorkeling, overnight stays, and temple trips with <em>clear prices and inclusions</em>.',
      '<em>One-tap WhatsApp booking</em> on every page, fast on mobile.',
      '<em>5.0 Tripadvisor</em> rating, a gallery, and an FAQ up front to build trust.',
    ],
    tags: ['Astro', 'Vercel', 'SEO', 'WhatsApp Booking'],
    links: [website('https://penidatourbali.vercel.app')],
    shots: shots('penida-tour'),
  },
  {
    name: 'Rumah Sunat Permadi',
    category: 'freelance',
    client: 'Clinic · South Kalimantan',
    summary: 'Helping parents <em>choose with confidence</em>, then book on WhatsApp.',
    highlights: [
      'Explains services <em>from infants to adults</em>, run by Dr. Gilir Permadi.',
      'Compares five methods, including the <em>needle-free Combo Sealer</em>, plus home visits.',
      'Every page leads to a <em>free WhatsApp consultation</em>.',
    ],
    tags: ['Astro', 'Vercel', 'SEO', 'WhatsApp Booking'],
    links: [website('https://rumah-sunat-permadi.vercel.app/')],
    shots: shots('rumah-sunat-permadi'),
  },
  {
    name: 'Umah Luwung',
    category: 'freelance',
    client: 'Interior studio · Bali',
    summary: 'Custom interiors, from <em>portfolio to free consultation</em>.',
    highlights: [
      '<em>Bilingual (ID / EN)</em> site for a custom interior and furniture maker in Singaraja.',
      'Project portfolio and a <em>five-step process</em> from design to installation.',
      '<em>4.9★ Google reviews</em>, with a WhatsApp consultation on every page.',
    ],
    tags: ['Astro', 'i18n', 'SEO', 'Vercel'],
    links: [website('https://umah-luwung.vercel.app/id')],
    shots: shots('umah-luwung'),
  },
];

export const contacts = {
  cta: 'Have a system that needs to be <em>fast, stable, and easy to maintain?</em> Let’s talk.',
};
