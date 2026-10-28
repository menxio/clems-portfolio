import { useEffect, useRef } from 'react';
import { Icon } from './Icons';
import { ProjectArt } from './ProjectArt';
import type { Project } from './content';

export function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  return (
    <dialog ref={dialog} className="project-dialog" aria-labelledby="project-title" onClose={() => { if (!dialog.current?.open) onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="dialog-content">
        <div className="dialog-top"><span className="eyebrow">PROJECT NOTES / {project.number}</span><button className="icon-button" aria-label="Close project details" autoFocus onClick={() => dialog.current?.close()}><Icon name="close" /></button></div>
        <p className="project-category">{project.context} · {project.category}</p><h2 id="project-title">{project.title}</h2>
        {project.status && <span className="project-status"><span className="status-dot" />{project.status}</span>}
        <p className="dialog-intro">{project.description}</p>
        <div className="tags">{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div>
        <ProjectArt project={project} />
        {project.contribution && <section className="project-contribution"><span className="eyebrow">MY CONTRIBUTION</span><h3>{project.contribution.summary}</h3><ul>{project.contribution.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></section>}
        <div className="project-scope">{project.scope.map((item) => <section key={item.title}><h3>{item.title}</h3><p>{item.description}</p></section>)}</div>
        <div className="project-actions"><a className="button button-primary" href={project.repository} target="_blank" rel="noopener noreferrer">Explore the repository <Icon name="arrow" size={17} /></a>{project.demoUrl && <a className="button button-secondary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">View invitation <Icon name="arrow" size={17} /></a>}</div>
        {project.references && <div className="project-references">{project.references.map((reference) => <a className="text-link" key={reference.href} href={reference.href} target="_blank" rel="noopener noreferrer">{reference.label}<Icon name="arrow" size={14} /></a>)}</div>}
        <p className="dialog-footnote">{project.image ? 'Screenshot captured from the public invitation website.' : 'The visual above is a project illustration, not a screenshot of the application.'}</p>
      </div>
    </dialog>
  );
}
