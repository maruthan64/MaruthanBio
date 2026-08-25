import { certifications, education } from '../content/profile.js';
import { Panel, Reveal, Section, SectionHeading } from './ui.jsx';

const BADGE_TONES = {
  aws: 'border-amber-500/40 bg-amber-500/15 text-amber-300',
  vmware: 'border-violet-500/40 bg-violet-500/15 text-violet-300',
  k8s: 'border-cyan-500/40 bg-cyan-500/15 text-cyan-300',
  default: 'border-accent-500/40 bg-accent-500/15 text-accent-300',
};

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Verified Credentials"
        title="Certifications"
        blurb="Vendor and foundation certifications held across cloud architecture, cloud security, virtualisation, and container orchestration."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={(i % 2) * 90}>
            <Panel className="flex h-full items-start gap-4 p-5 transition-colors hover:border-accent-500/30">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border font-mono text-xs font-bold ${
                  BADGE_TONES[c.tone] ?? BADGE_TONES.default
                }`}
              >
                {c.code}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm leading-snug font-semibold text-heading">{c.name}</h3>
                <div className="mt-1 font-mono text-[11px] text-muted">{c.issuer}</div>

                {c.period ? (
                  <div className="mt-2.5 font-mono text-[10px] text-muted">{c.period}</div>
                ) : null}
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>

      {education.institution ? (
        <Reveal delay={140}>
          <Panel className="mt-6 p-5">
            <div className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
              Education
            </div>
            <h3 className="mt-2 text-sm font-semibold text-heading">{education.institution}</h3>
            <div className="mt-1 text-[13px] text-body">
              {[education.degree, education.location, education.period]
                .filter(Boolean)
                .join(' · ')}
            </div>
          </Panel>
        </Reveal>
      ) : null}
    </Section>
  );
}
