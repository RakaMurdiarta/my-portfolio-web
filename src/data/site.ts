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
// TODO: only used by the placeholder Anime Sentry project; replace or remove with the real projects.
const telegram: SocialLink = { label: 'Telegram', icon: 'telegram', href: 'https://t.me/' };

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

/**
 * Collage tiles are placed with CSS grid areas on a 6-column grid (`areas`).
 * Each tile uses either a real image (`src` + `alt`) or a built-in illustration (`mock`).
 * NOTE: projects are placeholders from the reference design until Raka's are ready.
 */
export type MockVariant = 'dashboard' | 'phone' | 'chat' | 'scene' | 'glyph';

export interface ProjectTile {
  area: string;
  src?: string;
  alt?: string;
  mock?: MockVariant;
  glyph?: string;
  tone?: 'ink' | 'soft' | 'surface' | 'mint';
}

export interface Project {
  name: string;
  tags: string[];
  description: string[];
  links: SocialLink[];
  areas: string[];
  tiles: ProjectTile[];
}

export const projects: Project[] = [
  {
    name: 'Gostat',
    tags: ['Golang', 'TypeScript', 'Gin', 'Next.js', 'PostgreSQL', 'Redis'],
    description: [
      '<em>GoStat</em> — a <em>microservice-based</em> application designed to handle <em>HTTP request authentication</em> and statistics with finesse.',
      'The project <em>comprises several key microservices</em>, each contributing to its overall functionality and reliability.',
    ],
    links: [github],
    areas: ['a a a a b b', 'a a a a b b', 'a a a a b b', '. . c c . .', '. . c c . .'],
    tiles: [
      { area: 'a', mock: 'dashboard', tone: 'ink' },
      { area: 'b', mock: 'scene', tone: 'ink' },
      { area: 'c', mock: 'scene', tone: 'mint' },
    ],
  },
  {
    name: 'Kana Master',
    tags: ['TypeScript', 'React Native', 'Redux Toolkit', 'i18n', 'iOS'],
    description: [
      'Kana Master is an <em>iOS application</em> designed for <em>learning Katakana and Hiragana</em>. It includes various <em>tests and practical exercises</em> that help in learning and memorizing Japanese characters.',
      'The app also offers <em>audio training for correct pronunciation</em> and demonstrates how to properly <em>draw each character</em>.',
    ],
    links: [github],
    areas: ['. . c c . .', '. . c c . .', 'b b a a a a', 'b b a a a a', '. . a a a a'],
    tiles: [
      { area: 'a', mock: 'phone', tone: 'soft' },
      { area: 'b', mock: 'glyph', glyph: 'ア', tone: 'surface' },
      { area: 'c', mock: 'glyph', glyph: 'あ', tone: 'ink' },
    ],
  },
  {
    name: 'Anime Sentry',
    tags: ['Golang', 'GORM', 'PostgreSQL', 'i18n', 'goquery', 'gocron'],
    description: [
      '<em>Hey, anime fans!</em> Struggling to track new episodes? Anime Sentry is your solution. <em>Get auto-notifications for new episode releases!</em>',
      '<em>How it works:</em><ul><li>Send the bot <em>your anime link</em>.</li><li>Get release schedules instantly. Skip searching the web or social media.</li><li><em>Every 30 mins, the bot checks for new episodes using a cron schedule.</em> Be the first to know about voice or subtitle updates!</li></ul>',
      '<em>Connect now and never miss an episode!</em>',
    ],
    links: [telegram, github],
    areas: ['c c a a b b', 'c c a a b b', 'd d a a b b', 'd d a a . .', 'd d . . . .'],
    tiles: [
      { area: 'a', mock: 'chat', tone: 'soft' },
      { area: 'b', mock: 'scene', tone: 'mint' },
      { area: 'c', mock: 'glyph', glyph: '▶', tone: 'ink' },
      { area: 'd', mock: 'scene', tone: 'soft' },
    ],
  },
];

export const contacts = {
  cta: 'Have a system that needs to be <em>fast, stable, and easy to maintain?</em> Let’s talk.',
};
