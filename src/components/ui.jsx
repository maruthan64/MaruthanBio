import { useEffect, useRef, useState } from 'react';

/* Shared layout + presentational primitives used across every section. */

/* Reads/writes the .dark class on <html> and persists the choice.
   index.html runs an inline pre-paint copy of this same default logic so
   there's no flash of the wrong theme on load. */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? stored : 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return [theme, toggle];
}

export function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative z-10 mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 md:py-14 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-accent-400/60" />
      <span className="font-mono text-[11px] tracking-[0.28em] text-accent-400 uppercase">
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, blurb }) {
  return (
    <header className="mb-12 max-w-3xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl leading-tight font-bold tracking-tight text-heading sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {blurb ? <p className="mt-5 text-base leading-relaxed text-body">{blurb}</p> : null}
    </header>
  );
}

export function Panel({ children, className = '', glow = false }) {
  return (
    <div
      className={`relative rounded-2xl border border-line bg-panel-solid/60 shadow-[0_0_0_1px_rgba(52,211,153,0.05),0_10px_28px_-16px_rgba(0,0,0,0.45)] backdrop-blur-sm ${
        glow ? 'shadow-[0_0_0_1px_rgba(52,211,153,0.1),0_0_60px_-25px_rgba(16,185,129,0.5)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Chip({ children, tone = 'default' }) {
  const tones = {
    default: 'border-line-strong/70 bg-surface-2/50 text-body',
    accent: 'border-accent-500/40 bg-accent-500/10 text-accent-300',
    cyan: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
  };
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/* Terminal-style status dot. */
export function StatusDot({ tone = 'ok', pulse = true }) {
  const colors = { ok: 'bg-accent-400', warn: 'bg-amber-400', error: 'bg-rose-500', idle: 'bg-line-strong' };
  return (
    <span
      className={`inline-block h-2 w-2 shrink-0 rounded-full ${colors[tone]} ${
        pulse && tone === 'ok' ? 'animate-pulse-ring' : ''
      }`}
    />
  );
}

/* Reveal-on-scroll. Returns [ref, isVisible]; add `animate-fade-up` when visible. */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`${visible ? 'animate-fade-up' : 'opacity-0'} ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
