const s = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconHome() {
  return <svg {...s}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}

export function IconRoad() {
  return <svg {...s}><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/></svg>;
}

export function IconFence() {
  return <svg {...s}><path d="M4 3v18"/><path d="M12 3v18"/><path d="M20 3v18"/><path d="M4 9h8"/><path d="M12 9h8"/><path d="M4 15h8"/><path d="M12 15h8"/></svg>;
}

export function IconStorefront() {
  return <svg {...s}><path d="M2 7l2-4h16l2 4"/><path d="M2 7h20v13a2 2 0 01-2 2H4a2 2 0 01-2-2V7z"/><path d="M9 22V12h6v10"/></svg>;
}

export function IconParking() {
  return <svg {...s}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 010 6H9"/></svg>;
}

export function IconDroplet() {
  return <svg {...s}><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>;
}

export function IconShield() {
  return <svg {...s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}

export function IconLeaf() {
  return <svg {...s}><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 20 2 20 2s-1.2 5.5-5 10c-1 1.2-2 2.2-3 3"/><path d="M4 20l6-6"/></svg>;
}

export function IconClock() {
  return <svg {...s}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}

export function IconDollar() {
  return <svg {...s}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>;
}

export function IconPhone() {
  return <svg {...s}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>;
}

export function IconMail() {
  return <svg {...s}><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/></svg>;
}

export function IconMapPin() {
  return <svg {...s}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}

export function IconStar() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
}

export function IconCheck() {
  return <svg {...s} width="20" height="20"><polyline points="20 6 9 17 4 12"/></svg>;
}

export function IconMenu() {
  return <svg {...s} width="24" height="24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
}
