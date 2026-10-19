/**
 * ✏️  EDIT THIS FILE TO UPDATE THE PORTFOLIO.
 *
 * Every section of the site reads from here, so you never have to touch
 * the components to change text, links, skills or projects.
 */

export const profile = {
  firstName: 'Sandeep',
  lastName: 'Krishnan',
  initials: 'SK',
  role: 'Frontend Developer',
  roles: ['React Developer', 'TypeScript Engineer', 'Hackathon Winner', 'Published Researcher'],
  tagline: 'React · TypeScript · Chennai, India',
  bio: 'I build high-performance, strictly-typed SaaS interfaces and accessible web apps with React and TypeScript — from NexusHR, a full Employee Management System, to a full-stack movie discovery app and a 3D astronomy dashboard.',
  bioExtra: 'MCA 2025 graduate, trained as a frontend developer at Acciojob, 1st-prize winner at the Acciojob hackathon and published researcher (IRJMETS). I’m looking to bring strong fundamentals and fast execution to a frontend or product engineering team.',
  quote: 'Software should be robust, and satisfying to use.',
  image: './profile.jpg',
  email: 'sandeepskr008@gmail.com',
  github: 'https://github.com/Sandeepkrish8',
  linkedin: 'https://linkedin.com/in/sandeep-krishnan-p',
  leetcode: 'https://leetcode.com/u/Sandeepkr0108/',
  resume: './resume.pdf',
  idNumber: 'SK-0001',
  year: '2026',
  facts: [
    { label: 'Based in', value: 'Chennai, India' },
    { label: 'Focus', value: 'React · TypeScript' },
    { label: 'Education', value: 'MCA, CGPA 8.63' },
    { label: 'Graduated', value: '2025' },
    { label: 'Open to', value: 'Frontend roles' },
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
  { id: 'backend', label: 'Backend & IoT' },
  { id: 'databases', label: 'Databases' },
  { id: 'tools', label: 'Tools' },
  { id: 'core', label: 'Core' },
];

// icon = path inside the Devicon set (https://devicon.dev). Leave it out to show the symbol instead.
export const skills = [
  { symbol: 'Ts', name: 'TypeScript', family: 'languages', icon: 'typescript/typescript-original', note: 'Strict mode, typed API layers and props.' },
  { symbol: 'Js', name: 'JavaScript', family: 'languages', icon: 'javascript/javascript-original', note: 'ES6+, async/await, closures, the event loop.' },
  { symbol: 'Ht', name: 'HTML5', family: 'languages', icon: 'html5/html5-original', note: 'Semantic, accessible markup.' },
  { symbol: 'Cs', name: 'CSS3', family: 'languages', icon: 'css3/css3-original', note: 'Flexbox, Grid, animations, custom properties.' },
  { symbol: 'Py', name: 'Python', family: 'languages', icon: 'python/python-original', note: 'Used for the ML side of my sign language research.' },
  { symbol: 'Re', name: 'React', family: 'frontend', icon: 'react/react-original', note: 'Hooks, custom hooks, component architecture.' },
  { symbol: 'Rx', name: 'Redux Toolkit', family: 'frontend', icon: 'redux/redux-original', note: 'Slices and global state — used in HabitFlow.' },
  { symbol: 'Ca', name: 'Context API', family: 'frontend', icon: 'react/react-original', note: 'Shared state without prop drilling.' },
  { symbol: 'Rr', name: 'React Router', family: 'frontend', icon: 'reactrouter/reactrouter-original', note: 'Client-side routing and protected routes.' },
  { symbol: 'Tw', name: 'Tailwind CSS', family: 'frontend', icon: 'tailwindcss/tailwindcss-original', note: 'Utility-first, design-token driven UIs.' },
  { symbol: 'Bs', name: 'Bootstrap', family: 'frontend', icon: 'bootstrap/bootstrap-original', note: 'Quick responsive layouts and components.' },
  { symbol: 'Vi', name: 'Vite', family: 'frontend', icon: 'vitejs/vitejs-original', note: 'Fast dev server and production builds.' },
  { symbol: 'Th', name: 'Three.js', family: 'frontend', icon: 'threejs/threejs-original', note: 'React Three Fiber — the 3D telescope in SkyTonight.' },
  { symbol: 'Tq', name: 'TanStack Query', family: 'frontend', note: 'Caching, request cancellation and infinite scroll in Movie Discovery.' },
  { symbol: 'Gs', name: 'GSAP', family: 'frontend', note: 'Timelines and scroll-triggered animation.' },
  { symbol: 'Rc', name: 'Recharts', family: 'frontend', note: 'Dashboards and analytics charts.' },
  { symbol: 'Ra', name: 'REST APIs', family: 'backend', note: 'Typed API layers with loading and error states.' },
  { symbol: 'No', name: 'Node.js', family: 'backend', icon: 'nodejs/nodejs-original', note: 'TypeScript APIs — the Movie Discovery server.' },
  { symbol: 'Ex', name: 'Express', family: 'backend', icon: 'express/express-original', note: 'Routes, middleware and a single error handler.' },
  { symbol: 'Sf', name: 'Serverless', family: 'backend', icon: 'vercel/vercel-original', note: 'Vercel Functions to proxy API keys securely.' },
  { symbol: 'Tf', name: 'TensorFlow Lite', family: 'backend', icon: 'tensorflow/tensorflow-original', note: 'On-device (TinyML) gesture recognition.' },
  { symbol: 'Cv', name: 'OpenCV', family: 'backend', icon: 'opencv/opencv-original', note: 'Image processing for the ESP32-CAM pipeline.' },
  { symbol: 'Mg', name: 'MongoDB', family: 'databases', icon: 'mongodb/mongodb-original', note: 'Mongoose schemas — the Movie Discovery wishlist.' },
  { symbol: 'Sq', name: 'SQL', family: 'databases', note: 'Joins, normalisation — NPTEL DBMS certified.' },
  { symbol: 'Gt', name: 'Git', family: 'tools', icon: 'git/git-original', note: 'Branching, pull requests and code reviews.' },
  { symbol: 'Gh', name: 'GitHub', family: 'tools', icon: 'github/github-original', note: 'Repos, PRs and collaboration.' },
  { symbol: 'Vc', name: 'Vercel', family: 'tools', icon: 'vercel/vercel-original', note: 'Deploying and hosting every project.' },
  { symbol: 'Pm', name: 'Postman', family: 'tools', icon: 'postman/postman-original', note: 'Testing and debugging APIs.' },
  { symbol: 'Vs', name: 'VS Code', family: 'tools', icon: 'vscode/vscode-original', note: 'Debugging, snippets and extensions.' },
  { symbol: 'Rb', name: 'RBAC', family: 'core', note: 'Role-based access across 5 roles in NexusHR.' },
  { symbol: 'Ds', name: 'Data Structures', family: 'core', note: 'Arrays, maps, trees, graphs.' },
  { symbol: 'Al', name: 'Algorithms', family: 'core', note: 'Regular LeetCode practice.' },
  { symbol: 'Rd', name: 'Responsive Design', family: 'core', note: 'Mobile-first, fluid type, breakpoints.' },
  { symbol: 'Ax', name: 'Accessibility', family: 'core', note: 'Semantic HTML, focus states, reduced motion.' },
  { symbol: 'Pf', name: 'Performance', family: 'core', note: 'Lighthouse audits, lazy loading, DOM optimisation.' },
];

// visual: 'heatmap' | 'bars' | 'posters' | 'rings' | 'wave' — a generated animated preview for each project.
// live is optional; liveLabel changes the button text (e.g. "Read paper").
export const projects = [
  {
    title: 'NexusHR',
    subtitle: 'HR SaaS platform',
    year: '2026',
    description: 'An India-focused Employee Management System with role-based access for 5 corporate roles. Its payroll engine calculates PF, ESI, Professional Tax and TDS, alongside a drag-and-drop recruitment Kanban, shift schedules and attendance tracking.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    code: 'https://github.com/Sandeepkrish8/EMPLOYEE_Sys',
    visual: 'heatmap',
  },
  {
    title: 'Movie Discovery',
    subtitle: 'Full-stack movie browser',
    year: '2026',
    description: 'Browse films by genre and year, search, sort, scroll through endless results and keep a wishlist. The Express API caches TMDB responses, retries with backoff and serves stale data when the upstream is down; the React client debounces search and keeps all filters in the URL.',
    stack: ['React', 'TypeScript', 'TanStack Query', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://movie-discovery-tau.vercel.app/',
    code: 'https://github.com/Sandeepkrish8/movie-discovery',
    visual: 'posters',
  },
  {
    title: 'SkyTonight',
    subtitle: '3D astronomy dashboard',
    year: '2026',
    description: 'A real-time astronomy dashboard with an interactive 3D telescope view of live planet positions, moon phases and altitude/azimuth for your location. Pulls NASA APOD, ISS tracking and weather data through Vercel serverless functions, with an AR mode on mobile.',
    stack: ['React', 'Three.js', 'Tailwind CSS', 'Vercel'],
    live: 'https://sky-tonight-ten.vercel.app/',
    code: 'https://github.com/Sandeepkrish8/SkyTonight',
    visual: 'rings',
  },
  {
    title: 'HabitFlow',
    subtitle: 'Gamified habit tracker',
    year: '2026',
    description: 'A modern habit tracker with streaks, an SVG Pomodoro timer and progress charts. State is managed with Redux Toolkit, and the stats dashboard is built with Recharts.',
    stack: ['React', 'Redux Toolkit', 'Recharts', 'Tailwind CSS'],
    live: 'https://to-habit-trackerr-git-main-sandeep-krishs-projects.vercel.app/',
    code: 'https://github.com/Sandeepkrish8/To-Habit-Tracker',
    visual: 'bars',
  },
  {
    title: 'SignX',
    subtitle: 'Sign language recognition · IoT + ML',
    year: '2025',
    description: 'A real-time ASL gesture recognition system, from ESP32-CAM hardware to model deployment: ~85% on-device accuracy with TinyML and ~95% with edge-server inference. Published in IRJMETS (Vol. 07, Issue 06, June 2025).',
    stack: ['ESP32-CAM', 'TensorFlow Lite', 'CNN', 'OpenCV'],
    live: 'https://www.irjmets.com/upload_newfiles/irjmets70600077672/paper_file/irjmets70600077672.pdf',
    liveLabel: 'Read paper',
    code: 'https://github.com/Sandeepkrish8/SignX-Language-',
    visual: 'wave',
  },
];

export const experience = [
  {
    year: '2025',
    type: 'Training',
    title: 'Frontend Developer Course',
    org: 'Acciojob',
    period: '2025',
    points: [
      'Hands-on training in semantic HTML, CSS, Bootstrap and modern JavaScript (DOM, events, browser APIs).',
      'Built React apps and dozens of graded assignments, reviewed through GitHub.',
      'Won 1st prize at the Acciojob hackathon.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    year: '2024',
    type: 'Internship',
    title: 'Web Development Intern',
    org: 'Unified Mentor',
    period: 'May 2024 — Jun 2024',
    points: [
      'Built reusable, modular JavaScript components across multiple pages, reducing code duplication by ~30%.',
      'Improved UI responsiveness through CSS and DOM optimisations.',
      'Collaborated through Git workflows: branching, pull requests and code reviews.',
    ],
    tags: ['JavaScript', 'CSS', 'Git'],
  },
  {
    year: '2023',
    type: 'Education',
    title: 'Master of Computer Applications (MCA)',
    org: 'Dr. M.G.R. Educational and Research Institute, Chennai',
    period: '2023 — 2025 · CGPA 8.63',
    points: [
      'Published research on a Sign Language Recognition System using ESP32-CAM (IRJMETS, Impact Factor 8.187).',
    ],
    tags: ['MCA', 'Research', 'IoT'],
  },
  {
    year: '2020',
    type: 'Education',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Vel Tech Ranga Sanku Arts and Sciences College',
    period: '2020 — 2023 · CGPA 8.0',
    points: ['Foundations in programming, data structures, databases and web technologies.'],
    tags: ['BCA', 'DSA', 'DBMS'],
  },
];

export const certifications = [
  { name: 'Hand Gesture Recognition System Using IoT', issuer: 'IRJMETS · Publication', year: '2025' },
  { name: 'Frontend Developer Course', issuer: 'Acciojob', year: '2025' },
  { name: 'Database Management Systems', issuer: 'NPTEL', year: '' },
];

// icon: 'code' | 'trophy' | 'flag' | 'star'. decimals shows numbers like 8.63.
export const achievements = [
  { value: 1, prefix: 'No. ', label: 'Acciojob Hackathon', caption: '1st prize winner', icon: 'trophy' },
  { value: 8.187, decimals: 3, label: 'IRJMETS', caption: 'Journal impact factor', icon: 'star' },
  { value: 8.63, decimals: 2, label: 'MCA', caption: 'CGPA out of 10', icon: 'flag' },
  { value: 95, prefix: '~', suffix: '%', label: 'SignX model', caption: 'Edge-server accuracy', icon: 'code' },
];
