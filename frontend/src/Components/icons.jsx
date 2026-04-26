import React from 'react';

export const RocketLaunch = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className || (fontSize === 'medium' ? 'h-6 w-6' : 'h-5 w-5')}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.49 4.49 0 00-1.757 4.306 4.438 4.438 0 002.946-2.946 4.49 4.49 0 004.306-1.758c.15-.3.264-.615.337-.941a4.5 4.5 0 00-4.893-4.894c-.326.073-.64.187-.94.337z" />
  </svg>
)

export const MailOutline = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

export const LockOutlined = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0110 0v4"></path>
  </svg>
)

export const VisibilityOutlined = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
)

export const VisibilityOffOutlined = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"></path>
  </svg>
)

export const ArrowForward = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

export const Google = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
)

export const GitHub = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.004 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

export const Globe = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-9.5-8h19M2.5 10h19M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10A15.3 15.3 0 018 12 15.3 15.3 0 0112 2z" />
  </svg>
)

export const Megaphone = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="M21 9v2M12 4v2m-6 3H4a2 2 0 00-2 2v2a2 2 0 002 2h2m0-6l8-3 5.3 1.3a2 2 0 011.7 2v5.4a2 2 0 01-1.7 2L14 16l-8-3m0-6v6m4 3v5c0 1.1-.9 2-2 2h-1a2 2 0 01-2-2v-4" />
  </svg>
)

export const Receipt = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="M4 2v20l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2V2H4zM16 10H8M16 14H8M10 6H8" />
  </svg>
)

export const Chart = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="M21 4H10v11M21 4L11.5 13.5 7 9 2 14" />
  </svg>
)

export const Building = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="M4 21v-14a2 2 0 012-2h12a2 2 0 012 2v14M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4M12 9v4M8 9h.01M16 9h.01M8 13h.01M16 13h.01M12 13h.01" />
  </svg>
)

export const Apple = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="M17.05 20.28c-.98.95-2.05 1.9-3.24 1.9-1.21 0-1.69-.74-3.14-.74-1.44 0-1.9.74-3.14.74-1.2 0-2.28-.97-3.29-1.95-2.79-2.75-4.8-8-3.05-11.83C2.17 6.45 3.92 5 5.86 5c1.47 0 2.84 1.02 3.63 1.02.82 0 2.32-1.07 4.02-1.07 2.15 0 3.9 1.12 4.9 2.87-4.14 2.41-3.4 8.73.57 10.3-.77 2.03-1.95 3.9-3.48 5.16L17.05 20.28z M12.03 4.88c-.17-2.12 1.48-4.04 3.54-4.24.2 2.15-1.5 4.09-3.54 4.24z"/>
  </svg>
)

export const Storefront = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>
  </svg>
)

export const Briefcase = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
)

export const CheckCircle = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
  </svg>
)

export const Palette = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
)

export const Lightbulb = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
  </svg>
)

export const ArrowBack = ({ className, fontSize }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || (fontSize === 'small' ? 'h-5 w-5' : 'h-6 w-6')}>
    <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
  </svg>
)
