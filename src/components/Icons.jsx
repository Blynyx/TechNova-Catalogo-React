import React from 'react';
const paths = {
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  arrow: <><path d="m5 12 14 0m-6-6 6 6-6 6"/></>,
  back: <><path d="m19 12-14 0m6 6-6-6 6-6"/></>,
  bag: <><rect x="4" y="7" width="16" height="14" rx="3"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  star: <path d="m12 2 3.1 6.3 7 .9-5.1 5 .9 7-5.9-3.2-5.9 3.2 1-7-5.1-5 7-.9z"/>,
  sliders: <><path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2" fill="currentColor"/><circle cx="16" cy="17" r="2" fill="currentColor"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  sparkle: <><path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z"/></>,
  box: <><path d="m3 7 9-4 9 4v10l-9 4-9-4z"/><path d="m3 7 9 4 9-4M12 11v10"/></>,
  close: <path d="M5 5 19 19M19 5 5 19"/>,
  heart: <path d="M20.8 4.6a5.3 5.3 0 0 0-7.5 0L12 5.9l-1.3-1.3a5.3 5.3 0 0 0-7.5 7.5L12 21l8.8-8.9a5.3 5.3 0 0 0 0-7.5z"/>
};
export default function Icon({name,size=20,fill='none',...props}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]||paths.box}</svg>;
}
