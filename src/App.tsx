import { useEffect, useRef, useState } from 'react';
import { experience, profile, projects, resumeUrl, skillGroups, type Project } from './content';
import { Icon, type IconName } from './Icons';
import { ProjectArt } from './ProjectArt';
import { ProjectDialog } from './ProjectDialog';
import { QuickAnswers } from './QuickAnswers';
import portrait from '../images/clement.png';

const navigation = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];
const highlightIcons: IconName[] = ['code', 'layers', 'workflow', 'terminal'];
const freelanceProjects = projects.filter((project) => project.featured);
const collegeProjects = projects.filter((project) => !project.featured);

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#192e26' : '#f4f1e9');
  }, [theme]);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const followSystem = (event: MediaQueryListEvent) => {
      try { if (localStorage.getItem('clement-theme')) return; } catch { /* Storage can be unavailable. */ }
      const next = event.matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    preference.addEventListener('change', followSystem);
    return () => preference.removeEventListener('change', followSystem);
  }, []);
  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('clement-theme', next); } catch { /* The toggle still works without persistence. */ }
  }
  return <button className="icon-button theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}><Icon name={theme === 'light' ? 'moon' : 'sun'} size={19} /></button>;
}

export function App() {
  const [activeSection, setActiveSection] = useState('work');
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id === 'top' ? 'work' : visible.target.id);
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    ['top', ...navigation.map(({ id }) => id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      clearTimeout(copyTimer.current);
    };
  }, []);

  async function copyEmail() {
    clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState('copied');
    } catch { setCopyState('error'); }
    copyTimer.current = setTimeout(() => setCopyState('idle'), 3500);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="header-inner container">
          <a className="brand" href="#top" aria-label="Clement Rubiato, back to top"><span className="brand-mark">c<span>.</span></span><span className="brand-name">clement<span>.</span></span></a>
          <nav className="navigation" aria-label="Main navigation">{navigation.map(({ id, label }) => <a key={id} href={`#${id}`} className={activeSection === id ? 'is-active' : ''} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setActiveSection(id)}>{label}{id === 'work' && <span className="nav-slash" aria-hidden="true">/</span>}</a>)}</nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero container" id="top" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <span className="hero-orbit" aria-hidden="true" /><Icon name="spark" size={45} className="hero-spark" />
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER · PHILIPPINES</p>
          <h1 id="hero-title">Hi, I’m Clement.<br /><span>Software <em>Engineer.</em></span></h1>
          <p className="hero-description">{profile.introduction}</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <Icon name="down" size={17} /></a><a className="button button-secondary" href={resumeUrl} target="_blank" rel="noopener noreferrer">View résumé <Icon name="arrow" size={17} /></a></div>
          <div className="hero-bottom"><span><span className="small-cross" aria-hidden="true">✳</span> A little curiosity. A lot of building.</span><a href="#work" className="scroll-cue">SCROLL TO EXPLORE <Icon name="down" size={14} /></a></div>
        </section>

        <section className="work section container" id="work" aria-labelledby="work-title">
          <div className="section-topline"><span className="eyebrow">01 / SELECTED WORK</span><span className="section-note">From an idea to something useful.</span></div>
          <div className="section-heading"><h2 id="work-title">A few things<br />I’ve put <em>together.</em></h2><p>Freelance work spanning business applications, monitoring systems, and personal web experiences. Each project brings a different kind of problem to solve.</p></div>
          <div className="project-grid">{freelanceProjects.map((project) => <article key={project.id} className={`project project-${project.id}${project.layout === 'wide' ? ' project-wide' : ''}`}>
            <button className="project-open" onClick={() => setSelectedProject(project)} aria-label={`Explore ${project.title}`} aria-haspopup="dialog">
              <ProjectArt project={project} />
              <div className="project-info"><div className="project-title-row"><div><p className="project-category">{project.context} · {project.category}</p><h3>{project.title}</h3></div><span className="project-arrow"><Icon name="arrow" size={22} /></span></div><p className="project-summary">{project.summary}</p>{project.status && <span className="project-status"><span className="status-dot" />{project.status}</span>}<div className="project-technologies">{project.stack.slice(0, 4).join(' / ')}</div><span className="project-detail-link">Explore project <span aria-hidden="true">↗</span></span></div>
            </button>
          </article>)}</div>
          <div className="academic-work">
            <div className="academic-heading"><h3>Where it <em>started.</em></h3><p>College projects that helped build the foundation.</p></div>
            <div className="academic-grid">{collegeProjects.map((project) => <button key={project.id} className="academic-project" type="button" aria-label={`Explore ${project.title}`} aria-haspopup="dialog" onClick={() => setSelectedProject(project)}><span className="academic-number">{project.number}</span><span className="academic-copy"><span className="project-category">{project.context}</span><strong>{project.title}</strong><span className="academic-summary">{project.summary}</span><span className="project-technologies">{project.stack.slice(0, 4).join(' / ')}</span></span><Icon name="arrow" size={19} /></button>)}</div>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-link github-link">More on GitHub <Icon name="arrow" size={16} /></a>
        </section>

        <section className="experience section container" id="experience" aria-labelledby="experience-title">
          <div className="section-topline"><span className="eyebrow">02 / EXPERIENCE</span><span className="section-note">The work behind the work.</span></div>
          <div className="section-heading"><h2 id="experience-title">Building for<br />the <em>real world.</em></h2><p>{experience.summary}</p></div>
          <div className="experience-layout"><div className="experience-company"><span className="company-monogram" aria-hidden="true">s<span>↗</span></span><span className="current-role"><span className="status-dot" /> CURRENT ROLE</span><h3>{experience.role}</h3><p className="company-name">{experience.company}</p><p className="experience-meta">{experience.dates}<br />{experience.location}</p><a className="text-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">Read my résumé <Icon name="arrow" size={16} /></a></div>
            <div className="experience-highlights">{experience.highlights.map((item, index) => <div className="experience-item" key={item.title}><span className="experience-icon"><Icon name={highlightIcons[index]} size={21} /></span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}</div>
          </div>
        </section>

        <section className="about section container" id="about" aria-labelledby="about-title">
          <div className="section-topline"><span className="eyebrow">03 / A LITTLE ABOUT ME</span><span className="section-note">A person behind the pixels.</span></div>
          <div className="about-layout"><div className="portrait-card"><span className="portrait-orbit" aria-hidden="true" /><img src={portrait} width="920" height="920" loading="lazy" alt="John Clement Rubiato" /><span className="portrait-note">Hello from the Philippines <Icon name="spark" size={20} /></span><span className="portrait-caption"><Icon name="pin" size={15} /> PHILIPPINES · UTC+8</span></div>
            <div className="about-copy"><h2 id="about-title">Curious by nature.<br /><em>Engineer by doing.</em></h2><p>I’m John Clement Rubiato, a Software Engineer based in the Philippines. My work spans full-stack applications, system integrations, business process automation, and production troubleshooting.</p><p>From building an interface to connecting an API or untangling a workflow, I enjoy turning a practical problem into something people can use.</p><div className="education-note"><span className="eyebrow">WHERE IT STARTED</span><strong>BS in Information Technology</strong><span>Bukidnon State University · 2025</span></div></div>
          </div>
          <div className="toolbox"><div className="toolbox-heading"><h3>A flexible <em>toolbox.</em></h3><p>Tools I’ve worked with professionally.<br />The approach matters as much as the stack.</p></div><div className="skill-groups">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h4>{group.title}</h4><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}</div></div>
          <div className="learning-note"><span className="learning-icon"><Icon name="spark" size={23} /></span><div><span className="eyebrow">STILL CURIOUS</span><p>Next on my learning list: <strong>practical AI integrations.</strong> Building on my experience with web applications and automation.</p></div><span className="learning-doodle" aria-hidden="true">↗</span></div>
        </section>

        <section className="contact container" id="contact" aria-labelledby="contact-title"><div className="contact-panel"><span className="eyebrow">04 / WHAT’S NEXT?</span><span className="contact-spark" aria-hidden="true">✳</span><h2 id="contact-title">Good things start<br />with a <em>conversation.</em></h2><p>I’m interested in software engineering and full-stack opportunities.<br className="desktop-break" /> Have a role or a project in mind? Let’s talk.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <Icon name="arrow" size={18} /></a><button className="button button-secondary copy-button" onClick={copyEmail}><Icon name={copyState === 'copied' ? 'check' : 'copy'} size={17} />{copyState === 'copied' ? 'Email copied' : 'Copy email'}</button></div><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a><span className="copy-status" role="status">{copyState === 'error' ? 'Copy unavailable. You can use the email link above.' : copyState === 'copied' ? 'Email address copied to your clipboard.' : ''}</span></div></section>
      </main>

      <footer className="footer container"><div className="footer-top"><a className="brand footer-brand" href="#top">clement<span>.</span></a><p>Built with care. Always a work in progress.</p><a className="back-to-top text-link" href="#top">Back to top <Icon name="arrow" size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><div className="footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Icon name="arrow" size={13} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="arrow" size={13} /></a><a href={resumeUrl} target="_blank" rel="noopener noreferrer">Résumé <Icon name="arrow" size={13} /></a></div><span className="footer-location">Made in the Philippines <span aria-hidden="true">↗</span></span></div></footer>
      <QuickAnswers />
      {selectedProject && <ProjectDialog key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}
