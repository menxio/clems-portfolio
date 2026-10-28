export type IconName = 'arrow' | 'down' | 'sun' | 'moon' | 'code' | 'github' | 'linkedin' | 'mail' | 'copy' | 'check' | 'close' | 'pin' | 'spark' | 'route' | 'layers' | 'workflow' | 'terminal' | 'message' | 'reset' | 'file';

export function Icon({ name, size = 20, className }: { name: IconName; size?: number; className?: string }) {
  const paths = {
    message: <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-3 2 1.5-6A8.5 8.5 0 1 1 21 11.5ZM7 11h.01M12 11h.01M17 11h.01" />,
    reset: <><path d="M3 10a9 9 0 1 1 2.6 8.4M3 4v6h6" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6M8 13h8m-8 4h5" /></>,
    arrow: <path d="M6 18 18 6M6 6h12v12" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    moon: <path d="M20.7 13.1A8.8 8.8 0 0 1 10.9 3.3 9 9 0 1 0 20.7 13.1Z" />,
    code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />,
    github: <path d="M9 19c-4 1-4-2-6-2m12 5v-3.5c0-1 .1-1.4-.5-2 3.3-.4 6.5-1.5 6.5-7A5.4 5.4 0 0 0 19.5 6a5 5 0 0 0-.1-3.5S18.1 2.1 15 4a13 13 0 0 0-6 0C5.9 2.1 4.6 2.5 4.6 2.5A5 5 0 0 0 4.5 6 5.4 5.4 0 0 0 3 9.5c0 5.5 3.2 6.6 6.5 7-.6.6-.6 1.3-.5 2V22" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></>,
    copy: <><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    spark: <path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6Z" />,
    route: <><circle cx="6" cy="5" r="2" /><circle cx="18" cy="19" r="2" /><path d="M8 5h8a4 4 0 0 1 0 8H8a3 3 0 0 0 0 6h8" /></>,
    layers: <path d="m12 3 10 6-10 6L2 9Zm-9 11 9 5 9-5m-18 5 9 5 9-5" />,
    workflow: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h5a4 4 0 0 1 4 4v5M6 9v9h9" /></>,
    terminal: <><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m6 9 3 3-3 3m6 0h5" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{paths[name]}</svg>;
}
