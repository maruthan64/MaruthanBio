import { useEffect, useState } from 'react';
import { nav, person } from '../content/profile.js';
import { scrollToSection } from './ui.jsx';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Highlight the section currently occupying the upper third of the viewport. */
  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <button
          type="button"
          onClick={() => go('home')}
          className="group flex items-center gap-3 text-left"
          aria-label={`${person.name} — go to home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/40 bg-emerald-500/10 font-mono text-xs font-bold text-emerald-400">
            {person.name
              .split(' ')
              .map((w) => w[0])
              .join('')
              .slice(0, 2)}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-slate-100">{person.name}</span>
            <span className="block font-mono text-[10px] tracking-wider text-slate-500 uppercase">
              {person.navTagline}
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                active === item.id
                  ? 'bg-slate-800/70 text-emerald-400'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={person.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in new tab)"
            className="hidden rounded-lg border border-slate-800 p-2 text-slate-400 transition-colors hover:border-slate-700 hover:text-slate-100 sm:block"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a
            href={person.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in new tab)"
            className="hidden rounded-lg border border-slate-800 p-2 text-slate-400 transition-colors hover:border-slate-700 hover:text-slate-100 sm:block"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => go('contact')}
            className="hidden rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 md:block"
          >
            Get In Touch
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-lg border border-slate-800 p-2 text-slate-300 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-800 bg-slate-950/95 px-5 py-3 backdrop-blur-xl lg:hidden">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm ${
                active === item.id ? 'bg-slate-800/70 text-emerald-400' : 'text-slate-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  );
}
