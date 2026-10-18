/**
 * ✏️  EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS.
 *
 * Every section of the site reads from here, so you never have to touch
 * the components to change text, links, skills or projects.
 * Values marked "TODO" are placeholders — replace them with your real details.
 */

export const profile = {
  firstName: 'Sandeep',
  lastName: 'Krishna', // TODO: your surname
  initials: 'SK',
  role: 'Frontend Developer',
  roles: ['React Developer', 'UI Engineer', 'Problem Solver', 'Pixel Pusher'],
  tagline: 'Creative developer · React & the modern web',
  bio: 'Frontend developer who turns ideas into fast, accessible and delightful interfaces. I work mostly with React, JavaScript and modern CSS, and I care about clean component architecture, performance and the small details that make a UI feel alive.',
  bioExtra: 'I enjoy working across the stack — from REST APIs and state management to motion design and responsive layouts.',
  quote: 'From the first commit to the last pixel.',
  // Put a photo at public/profile.jpg and set image: './profile.jpg'
  image: '',
  email: 'hello@example.com', // TODO: your email
  github: 'https://github.com/sandeepkrish8',
  linkedin: 'https://www.linkedin.com/in/your-handle', // TODO
  // Put your CV at public/resume.pdf
  resume: './resume.pdf',
  idNumber: 'SK-0001',
  year: '2026',
  facts: [
    { label: 'Based in', value: 'India' }, // TODO
    { label: 'Focus', value: 'Frontend · React' },
    { label: 'Studying', value: 'B.Tech, Computer Science' }, // TODO
    { label: 'Batch', value: '2022 — 2026' }, // TODO
    { label: 'Open to', value: 'Full-time & internships' },
  ],
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const skillFamilies = [
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'databases', label: 'Databases' },
  { id: 'tools', label: 'Tools' },
  { id: 'core', label: 'Core' },
];

// icon = path inside the Devicon set (https://devicon.dev). Leave it out to show the symbol instead.
export const skills = [
  { symbol: 'Js', name: 'JavaScript', family: 'languages', icon: 'javascript/javascript-original', note: 'ES6+, async/await, closures, the event loop.' },
  { symbol: 'Ts', name: 'TypeScript', family: 'languages', icon: 'typescript/typescript-original', note: 'Typed props, generics and safer refactors.' },
  { symbol: 'Py', name: 'Python', family: 'languages', icon: 'python/python-original', note: 'Scripting, automation and DSA practice.' },
  { symbol: 'Jv', name: 'Java', family: 'languages', icon: 'java/java-original', note: 'OOP fundamentals and problem solving.' },
  { symbol: 'Ht', name: 'HTML5', family: 'frontend', icon: 'html5/html5-original', note: 'Semantic, accessible markup.' },
  { symbol: 'Cs', name: 'CSS3', family: 'frontend', icon: 'css3/css3-original', note: 'Flexbox, Grid, animations, custom properties.' },
  { symbol: 'Re', name: 'React', family: 'frontend', icon: 'react/react-original', note: 'Hooks, Context, custom hooks, performance.' },
  { symbol: 'Rx', name: 'Redux', family: 'frontend', icon: 'redux/redux-original', note: 'Redux Toolkit, slices and async thunks.' },
  { symbol: 'Nx', name: 'Next.js', family: 'frontend', icon: 'nextjs/nextjs-original', note: 'Routing, SSR/SSG and API routes.' },
  { symbol: 'Tw', name: 'Tailwind CSS', family: 'frontend', icon: 'tailwindcss/tailwindcss-original', note: 'Utility-first, design-token driven UIs.' },
  { symbol: 'Sa', name: 'Sass', family: 'frontend', icon: 'sass/sass-original', note: 'Mixins, partials and BEM structure.' },
  { symbol: 'Vi', name: 'Vite', family: 'frontend', icon: 'vitejs/vitejs-original', note: 'Fast dev server and production builds.' },
  { symbol: 'No', name: 'Node.js', family: 'backend', icon: 'nodejs/nodejs-original', note: 'Runtime for APIs and tooling.' },
  { symbol: 'Ex', name: 'Express', family: 'backend', icon: 'express/express-original', note: 'Routing, middleware and REST endpoints.' },
  { symbol: 'Ra', name: 'REST APIs', family: 'backend', note: 'fetch/axios, status codes, pagination, caching.' },
  { symbol: 'Jw', name: 'JWT Auth', family: 'backend', note: 'Token-based auth and protected routes.' },
  { symbol: 'Mg', name: 'MongoDB', family: 'databases', icon: 'mongodb/mongodb-original', note: 'Documents, aggregation and Mongoose.' },
  { symbol: 'Sq', name: 'MySQL', family: 'databases', icon: 'mysql/mysql-original', note: 'Joins, indexes and normalisation.' },
  { symbol: 'Pg', name: 'PostgreSQL', family: 'databases', icon: 'postgresql/postgresql-original', note: 'Relational modelling and queries.' },
  { symbol: 'Fb', name: 'Firebase', family: 'databases', icon: 'firebase/firebase-original', note: 'Auth, Firestore and hosting.' },
  { symbol: 'Gt', name: 'Git', family: 'tools', icon: 'git/git-original', note: 'Branching, rebasing and clean history.' },
  { symbol: 'Gh', name: 'GitHub', family: 'tools', icon: 'github/github-original', note: 'PRs, code review and Actions.' },
  { symbol: 'Vs', name: 'VS Code', family: 'tools', icon: 'vscode/vscode-original', note: 'Debugging, snippets and extensions.' },
  { symbol: 'Fi', name: 'Figma', family: 'tools', icon: 'figma/figma-original', note: 'Reading designs and handing off to code.' },
  { symbol: 'Pm', name: 'Postman', family: 'tools', icon: 'postman/postman-original', note: 'Testing and documenting APIs.' },
  { symbol: 'Jt', name: 'Jest', family: 'tools', icon: 'jest/jest-plain', note: 'Unit tests and React Testing Library.' },
  { symbol: 'Ds', name: 'Data Structures', family: 'core', note: 'Arrays, maps, trees, graphs.' },
  { symbol: 'Al', name: 'Algorithms', family: 'core', note: 'Sorting, searching, two pointers, DP.' },
  { symbol: 'Op', name: 'OOP', family: 'core', note: 'Encapsulation, inheritance, composition.' },
  { symbol: 'Rd', name: 'Responsive Design', family: 'core', note: 'Mobile-first, fluid type, breakpoints.' },
  { symbol: 'Ax', name: 'Accessibility', family: 'core', note: 'ARIA, focus management, contrast.' },
  { symbol: 'Sd', name: 'System Design', family: 'core', note: 'Frontend architecture and trade-offs.' },
];

// visual: 'heatmap' | 'bars' | 'rings' | 'wave' — a generated animated preview for each project.
export const projects = [
  {
    title: 'DevBoard',
    subtitle: 'Kanban task manager',
    year: '2026',
    description: 'A drag-and-drop Kanban board with columns, labels and filters. State lives in Redux Toolkit and is persisted to localStorage, with optimistic updates for a snappy feel.',
    stack: ['React', 'Redux Toolkit', 'CSS Modules'],
    live: '#', // TODO
    code: 'https://github.com/sandeepkrish8',
    visual: 'heatmap',
  },
  {
    title: 'Pulse Weather',
    subtitle: 'Weather dashboard',
    year: '2025',
    description: 'Real-time weather from a REST API with search, debounced input, unit switching and a 7-day forecast chart. Built mobile-first with skeleton loaders and error states.',
    stack: ['React', 'REST API', 'Chart.js'],
    live: '#',
    code: 'https://github.com/sandeepkrish8',
    visual: 'bars',
  },
  {
    title: 'ShopLite',
    subtitle: 'E-commerce storefront',
    year: '2025',
    description: 'Product listing, filters, cart and checkout flow. Cart state is shared with the Context API + useReducer, and routes are code-split with React.lazy.',
    stack: ['React', 'Context API', 'Node.js', 'MongoDB'],
    live: '#',
    code: 'https://github.com/sandeepkrish8',
    visual: 'rings',
  },
  {
    title: 'Snippet Vault',
    subtitle: 'Code snippet manager',
    year: '2024',
    description: 'Save, tag and search code snippets with syntax highlighting. Includes keyboard shortcuts, fuzzy search and a dark mode that respects system preferences.',
    stack: ['React', 'Express', 'JWT'],
    live: '#',
    code: 'https://github.com/sandeepkrish8',
    visual: 'wave',
  },
];

export const experience = [
  {
    year: '2026',
    type: 'Experience',
    title: 'Frontend Developer Intern', // TODO
    org: 'Company Name',
    period: 'Jan 2026 — Present',
    points: [
      'Built reusable React components for a design system used across products.',
      'Improved Lighthouse performance score by lazy-loading routes and images.',
    ],
    tags: ['React', 'TypeScript', 'REST'],
  },
  {
    year: '2025',
    type: 'Open Source',
    title: 'Contributor',
    org: 'GitHub',
    period: '2025',
    points: [
      'Fixed UI bugs and improved docs in community React projects.',
      'Learned code review etiquette, Git workflows and CI pipelines.',
    ],
    tags: ['Git', 'GitHub', 'Collaboration'],
  },
  {
    year: '2022',
    type: 'Education',
    title: 'B.Tech, Computer Science', // TODO
    org: 'Your University',
    period: '2022 — 2026',
    points: [
      'Core coursework in data structures, algorithms, DBMS and web technologies.',
      'Led the college web-dev club workshops on HTML, CSS and React.',
    ],
    tags: ['DSA', 'DBMS', 'Web'],
  },
];

export const certifications = [
  { name: 'Meta Front-End Developer', issuer: 'Coursera', year: '2025' }, // TODO
  { name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2025' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2024' },
  { name: 'GitHub Foundations', issuer: 'GitHub', year: '2024' },
  { name: 'React — The Complete Guide', issuer: 'Udemy', year: '2024' },
  { name: 'MongoDB Basics', issuer: 'MongoDB University', year: '2023' },
];

// icon: 'code' | 'trophy' | 'flag' | 'star'
export const achievements = [
  { value: 300, suffix: '+', label: 'LeetCode', caption: 'Problems solved', icon: 'code' }, // TODO
  { value: 15, suffix: '+', label: 'Projects', caption: 'Built & shipped', icon: 'star' },
  { value: 1, prefix: 'No. ', label: 'Department', caption: 'Hackathon winner', icon: 'trophy' },
  { value: 500, suffix: '+', label: 'GitHub', caption: 'Contributions this year', icon: 'flag' },
];
