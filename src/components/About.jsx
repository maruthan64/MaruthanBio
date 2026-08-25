import { about } from '../content/profile.js';
import { Panel, Reveal, Section, SectionHeading } from './ui.jsx';

export default function About() {
  return (
    <Section id="profile">
      <SectionHeading eyebrow={about.eyebrow} title={about.heading} />

      <Reveal>
        <blockquote className="mb-12 border-l-2 border-accent-500/60 pl-6 text-xl leading-relaxed font-medium text-body italic sm:text-2xl">
          &ldquo;{about.quote}&rdquo;
        </blockquote>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-body">
              {p}
            </p>
          ))}

          <Panel className="mt-8 p-5">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent-500/40 bg-accent-500/10 text-accent-400">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-semibold text-heading">{about.callout.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-body">{about.callout.body}</p>
              </div>
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={120} className="space-y-6">
          <ListPanel title={about.competencies.title} items={about.competencies.items} tone="emerald" />
          <ListPanel title={about.approach.title} items={about.approach.items} tone="cyan" />
        </Reveal>
      </div>
    </Section>
  );
}

function ListPanel({ title, items, tone }) {
  const bullet = tone === 'emerald' ? 'text-accent-400' : 'text-cyan-glow';
  return (
    <Panel className="p-6">
      <h3 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">{title}</h3>
      <ul className="space-y-3.5">
        {items.map((item) => {
          const [head, ...rest] = item.split(' — ');
          return (
            <li key={item} className="flex gap-3 text-[13px] leading-relaxed">
              <span className={`mt-1.5 shrink-0 font-mono text-[10px] ${bullet}`}>▸</span>
              <span className="text-body">
                <span className="font-medium text-heading">{head}</span>
                {rest.length ? <span> — {rest.join(' — ')}</span> : null}
              </span>
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
