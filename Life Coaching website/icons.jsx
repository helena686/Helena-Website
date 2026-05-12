/* global React */
const { useState, useEffect, useRef } = React;

// =================================================================
// ICONS — small inline SVG set, kept in one place
// =================================================================
const Icon = {
  Sparkle: (p) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
      <circle cx="12" cy="12" r="3.5"/>
    </svg>
  ),
  Heart: (p) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20.8 8.6c0-2.5-2-4.6-4.5-4.6-1.7 0-3.2 1-4 2.4-.8-1.4-2.3-2.4-4-2.4-2.5 0-4.5 2.1-4.5 4.6 0 6 8.5 11 8.5 11s8.5-5 8.5-11z"/>
    </svg>
  ),
  Compass: (p) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="m15.5 8.5-2 5-5 2 2-5z"/>
    </svg>
  ),
  Sun: (p) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
    </svg>
  ),
  Moon: (p) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
    </svg>
  ),
  Leaf: (p) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9h6v6c0 5-4 9-9 9z"/>
      <path d="M4 20c4-3 6-7 8-12"/>
    </svg>
  ),
  Bloom: (p) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="2.5"/>
      <path d="M12 9.5c0-3 1.5-5 3.5-5s3 1.5 2.5 3.5-2 3-3.5 2.5"/>
      <path d="M12 14.5c0 3 1.5 5 3.5 5s3-1.5 2.5-3.5-2-3-3.5-2.5"/>
      <path d="M12 9.5c0-3-1.5-5-3.5-5s-3 1.5-2.5 3.5 2 3 3.5 2.5"/>
      <path d="M12 14.5c0 3-1.5 5-3.5 5s-3-1.5-2.5-3.5 2-3 3.5-2.5"/>
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="4 12 10 18 20 6"/>
    </svg>
  ),
  X: (p) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 6l12 12M18 6L6 18"/>
    </svg>
  ),
  ArrowDown: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  ),
  ArrowRight: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  ),
  Chevron: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  Quote: (p) => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" {...p}>
      <path d="M9.6 7C5.5 7 3 10.5 3 14.5V20h6v-7H6c0-2.5 1.4-4 3.6-4V7zm10 0c-4.1 0-6.6 3.5-6.6 7.5V20h6v-7h-3c0-2.5 1.4-4 3.6-4V7z"/>
    </svg>
  ),
};

window.Icon = Icon;
