import React from "react";

interface P { size?: number; className?: string; style?: React.CSSProperties }

function I({ size = 24, className = "", style, children }: P & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"
      strokeLinejoin="round" className={className} style={style}>
      {children}
    </svg>
  );
}

export function IconBuildingBank(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="3" y1="21" x2="21" y2="21" /><line x1="3" y1="10" x2="21" y2="10" /><polyline points="5 10 5 21" /><polyline points="19 10 19 21" /><path d="M9 21v-8" /><path d="M15 21v-8" /><polyline points="3 10 12 3 21 10" /></I>;
}
export function IconCurrencyDollar(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></I>;
}
export function IconMapPin(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></I>;
}
export function IconBolt(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" /></I>;
}
export function IconHome(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="5 12 3 12 12 3 21 12 19 12" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></I>;
}
export function IconRefresh(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></I>;
}
export function IconBriefcase(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M3 13a20 20 0 0 0 18 0" /></I>;
}
export function IconFileDescription(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><line x1="9" y1="17" x2="15" y2="17" /><line x1="9" y1="13" x2="15" y2="13" /></I>;
}
export function IconCheck(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></I>;
}
export function IconPhone(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></I>;
}
export function IconBrandFacebook(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></I>;
}
export function IconBrandLinkedin(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x="4" y="4" width="16" height="16" rx="2" /><line x1="8" y1="11" x2="8" y2="16" /><line x1="8" y1="8" x2="8" y2="8.01" /><line x1="12" y1="16" x2="12" y2="11" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></I>;
}
export function IconArrowRight(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></I>;
}
export function IconTrendingUp(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></I>;
}
export function IconWallet(p: P) {
  return <I {...p}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" /><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" /></I>;
}

