import { useState } from 'react';
import { TbBrandAws, TbBrandAzure } from 'react-icons/tb';
import { SiAnsible, SiClaude, SiGooglecloud, SiKubernetes, SiRedhat } from 'react-icons/si';
import { LuArrowLeftRight, LuShieldCheck } from 'react-icons/lu';
import { hero, person } from '../content/profile.js';
import { scrollToSection } from './ui.jsx';

/* Floating stack badges around the headshot — real brand icons from
   react-icons (Simple Icons / Tabler / Lucide), verified against the
   installed package rather than hand-drawn. */
const ICONS = {
  AWS: TbBrandAws,
  AZ: TbBrandAzure,
  GCP: SiGooglecloud,
  K8s: SiKubernetes,
  ANS: SiAnsible,
  RH: SiRedhat,
  AI: SiClaude,
  MIG: LuArrowLeftRight,
  FW: LuShieldCheck,
};

/* Brand-ish accent per icon — the tile itself stays neutral (like an app
   icon), so colour lives on the glyph rather than the badge background. */
const BRAND_COLORS = {
  AWS: '#ff9900',
  AZ: '#38bdf8',
  GCP: '#818cf8',
  K8s: '#326ce5',
  ANS: '#ee0000',
  RH: '#ee0000',
  AI: '#d97757',
  MIG: '#34d399',
  FW: '#fb923c',
};

/* 9 badges, evenly spaced at 40° so the orbit stays balanced. */
const TECH_BADGES = [
  { code: 'AWS', label: 'Amazon Web Services', angle: -90 },
  { code: 'AZ', label: 'Microsoft Azure', angle: -50 },
  { code: 'GCP', label: 'Google Cloud', angle: -10 },
  { code: 'K8s', label: 'Kubernetes', angle: 30 },
  { code: 'RH', label: 'Red Hat', angle: 70 },
  { code: 'FW', label: 'Firewall / NGFW', angle: 110 },
  { code: 'MIG', label: 'Cloud migration', angle: 150 },
  { code: 'ANS', label: 'Ansible', angle: 190 },
  { code: 'AI', label: 'Claude / LLM tooling', angle: 230 },
];

/* Each badge sits on a dashed orbit ring around the photo and actually
   travels around it: the outer layer spins continuously (animate-orbit)
   while every badge counter-spins at the same speed (animate-orbit-reverse)
   so the glyph itself stays upright as it orbits, rather than tumbling. */
function OrbitBadge({ code, label, angle }) {
  const Icon = ICONS[code];
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(9.5rem)` }}
    >
      <span
        title={label}
        aria-label={label}
        className="animate-orbit-reverse pointer-events-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-line-strong/80 bg-surface-2/90 shadow-lg shadow-black/50 backdrop-blur-sm sm:h-14 sm:w-14"
      >
        <Icon size={30} color={BRAND_COLORS[code]} />
      </span>
    </div>
  );
}

/* Follow-me row glyphs — same marks used in Nav/Contact, kept local so this
   file has no cross-component coupling. */
function GithubGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}
function LinkedinGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
function MailGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function FollowRow() {
  const links = [
    { href: person.socials.github, label: 'GitHub', Icon: GithubGlyph },
    { href: person.socials.linkedin, label: 'LinkedIn', Icon: LinkedinGlyph },
    { href: `mailto:${person.email}`, label: 'Email', Icon: MailGlyph },
  ];
  return (
    <div className="mt-7 flex items-center gap-3">
      <span className="text-sm text-muted">Follow me</span>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-raised/60 text-body transition-colors hover:border-accent-500/50 hover:text-accent-400"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

/* Decorative underline squiggle beneath the role line. */
function Squiggle() {
  return (
    <svg viewBox="0 0 160 20" className="mt-4 h-4 w-40 text-accent-400" aria-hidden="true">
      <path
        d="M2 14 C 20 2, 40 2, 58 10 S 96 18, 114 8 S 150 2, 158 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhotoCard() {
  const [imgOk, setImgOk] = useState(true);
  const initials = person.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="relative mx-auto flex h-72 w-72 animate-fade-up items-center justify-center sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]">
      {/* Static dashed orbit path — a visual reference for where the badges travel. */}
      <div aria-hidden="true" className="absolute inset-0 hidden rounded-full border border-dashed border-line-strong/70 sm:block" />

      {imgOk ? (
        <img
          src="/images/profile.jpg"
          alt={person.name}
          onError={() => setImgOk(false)}
          className="h-[62%] w-[62%] rounded-full border-4 border-surface object-cover shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]"
        />
      ) : (
        <div className="flex h-[62%] w-[62%] items-center justify-center rounded-full border-4 border-surface bg-surface-raised font-mono text-4xl font-bold text-accent-400 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]">
          {initials}
        </div>
      )}

      <div className="animate-orbit pointer-events-none absolute inset-0 hidden sm:block">
        {TECH_BADGES.map((b) => (
          <OrbitBadge key={b.code} {...b} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative z-10 overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-18rem] left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-accent-500/[0.03] blur-[120px] dark:bg-accent-500/12"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* ---------------- Left: pitch ---------------- */}
        <div className="animate-fade-up">
          <p className="mb-3 flex items-center gap-2 text-base text-body">
            <span aria-hidden="true">👋</span> Hi, I&apos;m{' '}
            <span className="font-semibold text-accent-400">{person.name}</span>
          </p>

          <h1 className="text-3xl leading-[1.1] font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            {hero.headlinePrefix}{' '}
            <span className="text-accent-400">{hero.headlineAccent}</span>
          </h1>

          <p className="mt-5 font-mono text-sm tracking-wide text-accent-400/90">{hero.role}</p>
          <Squiggle />

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">{hero.intro}</p>

          <FollowRow />

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection(hero.primaryCta.target)}
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-400"
            >
              {hero.primaryCta.label}
              <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(hero.secondaryCta.target)}
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface-raised/60 px-6 py-3 text-sm font-semibold text-heading transition-colors hover:border-accent-500/50 hover:text-accent-400"
            >
              {hero.secondaryCta.label}
            </button>
          </div>
        </div>

        {/* ---------------- Right: headshot with floating stack badges ---------------- */}
        <PhotoCard />
      </div>

      {/* ---------------- Stats strip ---------------- */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {hero.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-line/80 bg-surface-raised/40 p-5 transition-colors hover:border-accent-500/30"
          >
            <div className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {s.label}
            </div>
            <div className="mt-2 text-2xl font-bold text-accent-400">{s.value}</div>
            <div className="mt-1.5 text-xs leading-relaxed text-muted">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

