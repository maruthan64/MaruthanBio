import { useState } from 'react';
import { experience } from '../content/profile.js';
import { Panel, Reveal, Section, SectionHeading } from './ui.jsx';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Professional History" title="Work Experience" />

      <div className="relative">
        {/* vertical spine */}
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent-500/60 via-line to-transparent md:left-[9px]"
        />

        <div className="space-y-10">
          {experience.map((role, i) => (
            <Reveal key={role.id} delay={i * 100}>
              <RoleEntry role={role} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function RoleEntry({ role }) {
  const [openDomain, setOpenDomain] = useState(0);

  return (
    <div className="relative pl-8 md:pl-12">
      <span className="absolute top-1.5 left-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent-500 bg-panel-solid md:h-5 md:w-5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
      </span>

      <div className="mb-1 font-mono text-[11px] tracking-wider text-accent-400">{role.period}</div>
      <h3 className="text-xl leading-snug font-bold text-heading">{role.role}</h3>
      <div className="mt-1 text-sm text-body">
        {role.company} <span className="text-faint">·</span> {role.location}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <Panel className="p-4">
          <div className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            {role.scaleLabel}
          </div>
          <div className="mt-1.5 text-[13px] leading-relaxed text-body">{role.scaleValue}</div>
        </Panel>

        {role.promotion ? (
          <Panel className="border-accent-500/30 bg-accent-500/[0.06] p-4">
            <div className="font-mono text-[10px] tracking-[0.18em] text-accent-400 uppercase">
              {role.promotion.title}
            </div>
            <div className="mt-1.5 text-[13px] leading-relaxed text-body">{role.promotion.body}</div>
          </Panel>
        ) : null}
      </div>

      {role.milestones.length > 0 ? (
        <div className="mt-6">
          <h4 className="mb-3 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            Key achievements
          </h4>
          <div className="grid gap-3 md:grid-cols-3">
            {role.milestones.map((m, i) => (
              <div key={i} className="rounded-xl border border-line/80 bg-surface-raised/30 p-4">
                <div className="font-mono text-[9px] tracking-[0.18em] text-accent-500/70 uppercase">
                  Milestone {i + 1}
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-body">{m}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-6">
        <h4 className="mb-3 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          Operational scope
        </h4>
        <div className="divide-y divide-line overflow-hidden rounded-xl border border-line">
          {role.domains.map((d, i) => {
            const isOpen = openDomain === i;
            return (
              <div key={d.title}>
                <button
                  type="button"
                  onClick={() => setOpenDomain(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 bg-surface-raised/40 px-4 py-3.5 text-left transition-colors hover:bg-surface-raised/70"
                >
                  <span
                    className={`text-sm font-medium ${isOpen ? 'text-accent-400' : 'text-heading'}`}
                  >
                    {d.title}
                  </span>
                  <span
                    className={`shrink-0 font-mono text-xs transition-transform ${
                      isOpen ? 'rotate-180 text-accent-400' : 'text-faint'
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {isOpen ? (
                  <ul className="space-y-2.5 bg-panel-solid/60 px-4 pt-1 pb-4">
                    {d.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-[13px] leading-relaxed text-body">
                        <span className="mt-1.5 shrink-0 font-mono text-[10px] text-accent-400">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
