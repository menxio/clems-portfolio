import weddingPreview from './assets/wedding-invitation.jpg';

// Edit portfolio facts here. Keep outcomes and project responsibilities verifiable.
export const profile = {
  name: 'John Clement Rubiato',
  role: 'Software Engineer',
  email: 'jc.rubiato.career@gmail.com',
  github: 'https://github.com/menxio',
  linkedin: 'https://www.linkedin.com/in/clement-rubiato-b76b36252/',
  introduction: 'I build web applications and automate workflows, turning practical problems into reliable software.',
};

export const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

export type Project = {
  id: 'dcla' | 'roadsense' | 'wedding' | 'tap-n-ride' | 'appointments';
  number: string;
  title: string;
  context: 'Freelance' | 'College capstone' | 'College project';
  art: 'loans' | 'road' | 'wedding' | 'transit' | 'appointments';
  featured: boolean;
  layout?: 'wide';
  status?: string;
  contribution?: { summary: string; details: string[] };
  category: string;
  summary: string;
  description: string;
  stack: string[];
  repository: string;
  demoUrl?: string;
  image?: { src: string; alt: string };
  references?: { label: string; href: string }[];
  scope: { title: string; description: string }[];
};

export const projects: Project[] = [
  {
    id: 'dcla', number: '01', title: 'DCLA Loan Solutions',
    context: 'Freelance', art: 'loans', featured: true,
    status: 'Live in production',
    contribution: {
      summary: 'Full-stack contributor to a production lending application.',
      details: ['Implemented manager repayment approvals and center/date collection batches across the NestJS API and React interface.', 'Added role-gated backend endpoints and administrative user-management features.', 'Improved borrower details and invalid-posting checks in the approval screen, with focused unit and component tests.', 'Contributed opt-in loan-policy controls and cashier collections/savings interface improvements.'],
    },
    category: 'Lending operations · Full-stack',
    summary: 'Connecting borrowers, collections, approvals, and repayment records.',
    description: 'A loan and collections management application with a React/TypeScript interface and a NestJS API backed by PostgreSQL. The system separates payment requests, manager decisions, and posted transaction records across the lending workflow.',
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'TypeORM', 'Material UI'],
    repository: 'https://github.com/GMCEO-21/DCLA-Loan-Solutions',
    references: [
      { label: 'Architecture & collections flow', href: 'https://github.com/GMCEO-21/DCLA-Loan-Solutions/blob/master/ARCHITECTURE.md' },
      { label: 'Code: collection batches', href: 'https://github.com/GMCEO-21/DCLA-Loan-Solutions/commit/434b09558f6b2a84db2e24e9b1de7f17372c9e2a' },
      { label: 'Code: approval review & tests', href: 'https://github.com/GMCEO-21/DCLA-Loan-Solutions/commit/b6776779cd73fa3179516d4627591ac13445568c' },
    ],
    scope: [
      { title: 'The workflow', description: 'Member and center management connect to loan setup, daily collections, repayment schedules, savings, and reporting. Separate interfaces support administrators, managers, cashiers, and loan processors.' },
      { title: 'Approval before posting', description: 'Cashier payment requests enter a pending state. Manager approval applies the repayment to the loan and its schedule; rejected requests do not post to balances. Reversal requests reference the original payment and require their own approval.' },
      { title: 'Keeping records consistent', description: 'The backend uses PostgreSQL constraints, TypeORM transactions, and row locks around financial updates. Payment events, approval batches, and daily summaries serve distinct purposes rather than sharing one record.' },
      { title: 'Testing the boundaries', description: 'Jest backend tests and Vitest/Testing Library frontend tests cover application behavior. Database scenarios exercise concurrent savings operations, while approval-screen tests cover borrower details and invalid postings.' },
    ],
  },
  {
    id: 'roadsense', number: '02', title: 'RoadSense',
    context: 'Freelance', art: 'road', featured: true,
    status: 'Client capstone',
    contribution: {
      summary: 'Freelance web and API development for another team’s capstone project.',
      details: ['Connected Laravel real-time notification broadcasts to React notification and table updates.', 'Updated account registration and violation-management API handling.', 'My scope focused on the web application and API; the hardware, IoT, and detection models were handled separately.'],
    },
    category: 'Road monitoring · System integration',
    summary: 'Connecting camera-based detection with a road-monitoring dashboard.',
    description: 'A web dashboard and API for reviewing road-monitoring events produced by a camera-based detection pipeline. React, Laravel, and MongoDB support account management, violation records, and real-time notification updates.',
    stack: ['React', 'Laravel', 'MongoDB', 'REST APIs', 'Material UI'],
    repository: 'https://github.com/menxio/RoadSense-system',
    references: [{ label: 'Code: real-time notifications', href: 'https://github.com/menxio/RoadSense-system/commit/1fa7310c581c8902a195cea1c784765e14c563f7' }],
    scope: [
      { title: 'From camera to application', description: 'The repository brings together RTSP input, Python detection scripts, report uploads, API endpoints, and a web interface for reviewing road events.' },
      { title: 'Detection and review', description: 'Python scripts use YOLO, OpenCV, and OCR components for vehicle and plate-related processing. The web application exposes violation records and separate administrator and user views.' },
      { title: 'Working across system boundaries', description: 'MediaMTX, a Node.js upload process, a Laravel API, and MongoDB connect the detection pipeline to the dashboard. This project’s technical scope spans several services rather than a single web application.' },
      { title: 'Prototype scope', description: 'Built for demonstration and testing as part of a client capstone project.' },
    ],
  },
  {
    id: 'wedding', number: '03', title: 'Online Wedding Invitation',
    context: 'Freelance', art: 'wedding', featured: true, layout: 'wide',
    status: 'Public website',
    image: { src: weddingPreview, alt: 'The public wedding invitation website showing its hero design and navigation.' },
    category: 'Invitation & RSVP · Full-stack',
    summary: 'A personal invitation backed by a complete RSVP workflow.',
    description: 'A mobile-first wedding invitation built with Next.js and TypeScript. Configurable presentation sections sit alongside a Supabase-backed RSVP flow and an authenticated coordinator dashboard, bringing a personal visual experience and practical event administration into one application.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Zod'],
    repository: 'https://github.com/menxio/online-wedding-invitation',
    demoUrl: 'https://michael-and-marris.vercel.app/',
    references: [{ label: 'Architecture notes', href: 'https://github.com/menxio/online-wedding-invitation/blob/main/docs/architecture.md' }],
    scope: [
      { title: 'An invitation with a working backend', description: 'The presentation includes a countdown, story, gallery, venue sections, and optional content. Wedding facts, theme tokens, and section order are configuration-driven instead of embedded throughout the visual components.' },
      { title: 'RSVP and coordination', description: 'Guests submit a name and attendance response through a shared RSVP link. Coordinators use an authenticated dashboard to review, filter, and export responses.' },
      { title: 'Validation and access boundaries', description: 'The server route validates bounded input with Zod, verifies Turnstile, and uses database-backed rate limits. Supabase row-level security restricts response access, with privileged database operations kept on the server.' },
      { title: 'A deliberate tradeoff', description: 'The shared RSVP link does not authenticate each guest against an authoritative guest list. Names are not treated as proof of identity, and coordinators reconcile questionable or duplicate responses manually.' },
    ],
  },
  {
    id: 'tap-n-ride', number: '04', title: 'Tap-N-Ride',
    context: 'College capstone', art: 'transit', featured: false,
    category: 'Connected devices · Full-stack',
    summary: 'Connecting a physical journey to a digital fare system.',
    description: 'A public transportation fare system combining NFC tap-in and tap-out interactions, GPS journey data, and a web application. The project brings embedded hardware and web development together around a familiar everyday problem.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'NFC'],
    repository: 'https://github.com/Clem-Capstone/Tap-N-Ride',
    scope: [
      { title: 'The idea', description: 'Use the start and end of a passenger’s journey to calculate a fare through a tap-based experience.' },
      { title: 'The hardware', description: 'Raspberry Pi, ESP8266, PN532 NFC reader, and NEO6MV2 GPS module connect physical interactions and location data.' },
      { title: 'The application layer', description: 'An Express API and MongoDB models track cards, tap state, routes, balances, and transactions. The tap-out implementation calculates a fare from route distance and updates the passenger’s balance and tap state.' },
    ],
  },
  {
    id: 'appointments', number: '05', title: 'PAO Online Appointment System',
    context: 'College project', art: 'appointments', featured: false,
    category: 'Appointment system · Full-stack',
    summary: 'An online appointment system for the Public Attorney’s Office.',
    description: 'A college web project for managing legal consultation appointments. React provides the interface, while an Express API and MongoDB handle appointment requests and administrative workflows.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Material UI'],
    repository: 'https://github.com/menxio/PAO-OAS',
    scope: [
      { title: 'The purpose', description: 'Provide a web-based way for clients to book legal consultations with public attorneys.' },
      { title: 'The workflow', description: 'Clients create appointment requests; administrative and employee routes support appointment search, review, rescheduling, and cancellation.' },
      { title: 'The implementation', description: 'The appointment creation handler validates required fields, checks for an existing date conflict, and saves the request with a pending status.' },
    ],
  },
];

export const experience = {
  company: 'Sprobe Inc.', role: 'Software Engineer',
  dates: 'Jun 2025 — Present', location: 'Cebu, Philippines',
  summary: 'Working across business applications, API integrations, automation, and the details that keep software running.',
  highlights: [
    { title: 'Building across the stack', description: 'Developed Laravel and React business applications, from memo editing and approval workflows to CSV imports, exports, and responsive interfaces.' },
    { title: 'Connecting systems', description: 'Integrated Microsoft Graph email with OAuth 2.0, token handling, bounded retries, and PHPUnit coverage. Migrated an Electron/Vue screen-sharing feature to an updated SkyWay API.' },
    { title: 'Making workflows work', description: 'Built Power Platform leave-request and skill-management solutions with role-based access, multi-stage approvals, notifications, and reminders.' },
    { title: 'Caring about what ships', description: 'Added PHPUnit and Playwright tests, investigated AWS RDS CPU spikes, and supported staging and production deployments with Docker and SSH.' },
  ],
};

export const skillGroups = [
  { title: 'Interfaces', skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Material UI', 'HTML & CSS'] },
  { title: 'Applications & data', skills: ['Laravel', 'Node.js', 'NestJS', 'ASP.NET Core', 'REST APIs', 'OAuth 2.0', 'MySQL', 'PostgreSQL'] },
  { title: 'Automation & integrations', skills: ['Power Apps', 'Power Automate', 'SharePoint', 'Microsoft Graph'] },
  { title: 'Quality & delivery', skills: ['PHPUnit', 'Playwright', 'Git', 'Docker', 'AWS', 'SSH'] },
];
