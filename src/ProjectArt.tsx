import { Icon } from './Icons';
import type { Project } from './content';
import styles from './ProjectArt.module.css';

// Prefer real project screenshots; label schematic illustrations explicitly.
export function ProjectArt({ project }: { project: Project }) {
  if (project.image) return (
    <div className={`project-art ${styles.screenshot}`}>
      <img src={project.image.src} alt={project.image.alt} width="1905" height="904" loading="lazy" />
      <span className={styles.screenshotLabel}>Actual website screenshot</span>
    </div>
  );
  if (project.art === 'transit') return (
    <div className="project-art transit-art" aria-hidden="true">
      <div className="art-topline"><span><Icon name="route" size={17} /> TAP-N-RIDE</span><span>NFC × GPS</span></div>
      <svg className="transit-map" viewBox="0 0 650 320" fill="none">
        <path className="map-grid" d="M0 80h650M0 160h650M0 240h650M80 0v320M160 0v320M240 0v320M320 0v320M400 0v320M480 0v320M560 0v320" />
        <path d="M-30 265H100c60 0 47-130 109-130h164c55 0 41-72 99-72h208" stroke="#b9d68e" strokeWidth="13" strokeLinecap="round" />
        <path d="M-30 265H100c60 0 47-130 109-130h164c55 0 41-72 99-72h208" stroke="#204b3c" strokeWidth="2" strokeDasharray="5 9" />
        <circle cx="91" cy="265" r="12" fill="#f2f0e4" stroke="#244f40" strokeWidth="6" />
        <circle cx="310" cy="135" r="12" fill="#f2f0e4" stroke="#244f40" strokeWidth="6" />
        <circle cx="537" cy="63" r="12" fill="#f2f0e4" stroke="#244f40" strokeWidth="6" />
      </svg>
      <div className="tap-card"><span className="tap-card-chip"><Icon name="code" size={22} /></span><span className="tap-card-name">A smarter<br />way to go.</span><span className="tap-card-footer">TAP. RIDE. ARRIVE.<span className="contactless">)))</span></span></div>
      <span className="map-label origin-label">TAP IN</span><span className="map-label destination-label">TAP OUT</span>
      <span className="illustration-label">Project illustration</span>
    </div>
  );
  if (project.art === 'loans') return (
    <div className="project-art lending-art" aria-hidden="true">
      <div className="art-topline"><span><Icon name="layers" size={17} /> DCLA LOAN SOLUTIONS</span><span>COLLECTIONS & REPAYMENTS</span></div>
      <div className="ledger-window">
        <div className="window-toolbar"><span className="window-dots"><i /><i /><i /></span><span>Records with a clear trail.</span></div>
        <div className="ledger-content"><div className="ledger-heading">From collection<br /><span>to confirmation.</span></div>
          <div className="ledger-row"><span className="ledger-icon">01</span><span>Record a collection<small>Cashier submission</small></span><Icon name="check" size={18} /></div>
          <div className="ledger-row"><span className="ledger-icon">02</span><span>Review & approve<small>Manager decision</small></span><Icon name="check" size={18} /></div>
          <div className="ledger-row"><span className="ledger-icon">03</span><span>Post the repayment<small>Ledger & schedule</small></span><Icon name="check" size={18} /></div>
        </div>
      </div>
      <span className="illustration-label">Project illustration</span>
    </div>
  );
  if (project.art === 'road') return (
    <div className={`project-art ${styles.road}`} aria-hidden="true">
      <div className="art-topline"><span><Icon name="route" size={17} /> ROADSENSE</span><span>WEB & API</span></div>
      <div className={styles.roadWindow}>
        <div className={styles.roadToolbar}><span><i /> ROAD MONITORING</span><Icon name="layers" size={13} /></div>
        <div className={styles.roadView}>
          <svg viewBox="0 0 360 200" fill="none"><path d="m84 210 65-220h75l65 220" fill="#354d50" /><path d="m186 210 1-220" stroke="#bdc9b7" strokeWidth="2" strokeDasharray="14 14" /><path d="m119 210 45-220m95 220L210-10" stroke="#aec4af" strokeOpacity=".45" /><rect x="195" y="75" width="29" height="48" rx="7" fill="#c3d5b2" /><path d="M201 87h17v14h-17z" fill="#354d50" /><path d="M189 68h12m-12 0v12m42-12h-12m12 0v12m-42 50h12m-12 0v-12m42 12h-12m12 0v-12" stroke="#dce8b6" strokeWidth="2" /><rect x="144" y="131" width="23" height="37" rx="6" fill="#d6b6a2" /></svg>
          <span className={styles.reviewLabel}>DETECTION → REVIEW</span>
        </div>
        <div className={styles.roadPipeline}><span>Camera input</span><span>Event data</span><span>Web dashboard</span></div>
      </div>
      <span className="illustration-label">Project illustration</span>
    </div>
  );
  if (project.art === 'wedding') return (
    <div className={`project-art ${styles.wedding}`} aria-hidden="true">
      <div className="art-topline"><span>THE INVITATION EXPERIENCE</span><span>NEXT.JS × SUPABASE</span></div>
      <div className={styles.invitation}>
        <span className={styles.invitationEyebrow}>TOGETHER WITH YOU</span>
        <span className={styles.invitationTitle}>An invitation.<br /><em>A shared moment.</em></span>
        <span className={styles.invitationRule} />
        <span className={styles.invitationNote}>A little story. A place to gather.</span>
        <span className={styles.rsvpCard}><Icon name="mail" size={16} /><span>Your reply matters.<small>RSVP & guest coordination</small></span><Icon name="arrow" size={15} /></span>
      </div>
      <span className={styles.weddingPetal} />
      <span className="illustration-label">Project illustration</span>
    </div>
  );
  return (
    <div className="project-art appointments-art" aria-hidden="true">
      <div className="art-topline"><span>PUBLIC ATTORNEY’S OFFICE</span><span>ONLINE APPOINTMENTS</span></div>
      <div className="appointment-graphic"><div className="calendar-sheet"><span className="calendar-binding"><i /><i /></span><div className="calendar-title">Make room<br />for a conversation.</div><div className="calendar-grid">{Array.from({ length: 21 }, (_, i) => <span key={i} className={i === 10 ? 'calendar-selected' : ''}>{i === 10 ? <Icon name="check" size={19} /> : <i />}</span>)}</div></div><span className="appointment-seal"><Icon name="check" size={28} /></span></div>
      <span className="illustration-label">Project illustration</span>
    </div>
  );
}
