import { experience, profile, resumeUrl } from './content';
import type { IconName } from './Icons';

export type QuestionId = 'experience' | 'projects' | 'skills' | 'automation' | 'resume' | 'contact';

export type AnswerLink = {
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
};

type QuickAnswer = {
  question: string;
  icon: IconName;
  paragraphs: string[];
  links: AnswerLink[];
  followUps: QuestionId[];
};

// Curated facts, not generated replies. Keep these aligned with the résumé and content.ts.
export const quickAnswers: Record<QuestionId, QuickAnswer> = {
  experience: {
    question: 'Tell me about your experience',
    icon: 'code',
    paragraphs: [
      `I’m a ${experience.role} at ${experience.company} (${experience.dates}). My work includes full-stack business applications, API integrations, automated testing, and staging and production deployments.`,
      'I’ve also worked on business process automation with Power Apps, Power Automate, and SharePoint.',
    ],
    links: [{ label: 'Read my experience', href: '#experience', icon: 'arrow' }],
    followUps: ['skills', 'automation', 'resume'],
  },
  projects: {
    question: 'What have you built?',
    icon: 'layers',
    paragraphs: [
      'My freelance work includes DCLA Loan Solutions, a production lending application; web/API development for RoadSense, a client capstone; and a Next.js wedding invitation with a Supabase-backed RSVP workflow.',
      'My college work includes the Tap-N-Ride capstone and PAO Online Appointment System. Explore the project notes for workflows, technical decisions, and source links.',
    ],
    links: [
      { label: 'Explore selected work', href: '#work', icon: 'arrow' },
      { label: 'GitHub', href: profile.github, icon: 'github', external: true },
    ],
    followUps: ['skills', 'experience', 'contact'],
  },
  skills: {
    question: 'Which technologies have you used?',
    icon: 'terminal',
    paragraphs: [
      'My professional work includes React, Laravel, ASP.NET Core, Vue.js, Microsoft Graph, and Power Platform. I’ve used PHPUnit and Playwright for testing, and Docker, SSH, and AWS tools for delivery and troubleshooting.',
      'My freelance work also includes NestJS, PostgreSQL, TypeORM, Next.js, and Supabase. College projects use Node.js, Express, and MongoDB. You can see the context for each stack in the project notes.',
    ],
    links: [{ label: 'See my toolbox', href: '#about', icon: 'arrow' }],
    followUps: ['automation', 'projects', 'resume'],
  },
  automation: {
    question: 'What about AI and automation?',
    icon: 'workflow',
    paragraphs: [
      'I have professional automation experience with Power Apps, Power Automate, and SharePoint: leave-request approvals, notifications, skill tracking, and reminder workflows.',
      'RoadSense is a client capstone with a detection pipeline; my contribution was web/API development, not the hardware, IoT, or detection models. I want to explore practical AI integrations further. This helper itself uses prewritten answers.',
    ],
    links: [{ label: 'See my experience', href: '#experience', icon: 'arrow' }],
    followUps: ['experience', 'projects', 'contact'],
  },
  resume: {
    question: 'Can I see your résumé?',
    icon: 'file',
    paragraphs: [
      'Of course. My résumé covers my professional experience, technical skills, and education. You can open the PDF below, or download a copy.',
    ],
    links: [{ label: 'Open résumé · PDF', href: resumeUrl, icon: 'file', external: true }],
    followUps: ['experience', 'projects', 'contact'],
  },
  contact: {
    question: 'Let’s discuss an opportunity',
    icon: 'mail',
    paragraphs: [
      'I’m interested in Software Engineer and Full-Stack Developer opportunities. Email or LinkedIn is the best way to reach me.',
      `You can email me at ${profile.email}. I’d be happy to hear about the role or project you have in mind.`,
    ],
    links: [
      { label: 'Send an email', href: `mailto:${profile.email}`, icon: 'mail' },
      { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin', external: true },
    ],
    followUps: ['resume', 'projects', 'skills'],
  },
};

export const initialQuestions: QuestionId[] = ['experience', 'projects', 'skills', 'resume', 'contact'];
