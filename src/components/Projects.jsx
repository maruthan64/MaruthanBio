import { useEffect, useMemo, useState } from 'react';
import { projectCategories, projects } from '../content/profile.js';
import { Chip, Panel, Reveal, Section, SectionHeading } from './ui.jsx';

export default function Projects() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCategory = category === 'All' || p.category === category;
      if (!inCategory) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [category, query]);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Demonstrated Work"
        title="Interactive Project Gallery"
        blurb="Production-grade cloud architectures, container orchestration, GitOps delivery, and agentic operations tooling. Open any card for the full blueprint."
      />

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-lg border px-3.5 py-2 font-mono text-[11px] transition-colors ${
                category === c
                  ? 'border-accent-500/50 bg-accent-500/10 text-accent-300'
                  : 'border-line bg-surface-raised/40 text-body hover:border-line-strong hover:text-heading'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-faint"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stack, title, keyword..."
            aria-label="Search projects"
            className="w-full rounded-lg border border-line bg-surface-raised/50 py-2.5 pr-3 pl-9 font-mono text-xs text-heading placeholder:text-faint focus:border-accent-500/50 focus:outline-none"
          />
        </div>
      </div>

      <p className="mb-6 font-mono text-[11px] text-faint">
        Showing {filtered.length} of {projects.length} {projects.length === 1 ? 'system' : 'systems'}
      </p>

      {filtered.length === 0 ? (
        <Panel className="p-12 text-center">
          <p className="font-mono text-sm text-muted">No systems match that filter.</p>
        </Panel>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90}>
              <ProjectCard project={p} onOpen={() => setOpen(p)} />
            </Reveal>
          ))}
        </div>
      )}

      {open ? <BlueprintModal project={open} onClose={() => setOpen(null)} /> : null}
    </Section>
  );
}

function ProjectCard({ project, onOpen }) {
  const visible = project.stack.slice(0, 4);
  const overflow = project.stack.length - visible.length;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full w-full flex-col rounded-2xl border border-line/80 bg-panel-solid/60 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-[0_0_40px_-20px_rgba(16,185,129,0.6)]"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] tracking-[0.18em] text-accent-400/80 uppercase">
          {project.category}
        </span>
        <KindBadge kind={project.kind} />
      </div>

      <h3 className="mt-3 text-lg leading-snug font-semibold text-heading transition-colors group-hover:text-accent-300">
        {project.title}
      </h3>

      <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-body">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {visible.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
        {overflow > 0 ? <Chip tone="accent">+{overflow} more</Chip> : null}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="font-mono text-[11px] text-accent-400 transition-transform group-hover:translate-x-0.5">
          View blueprint &rarr;
        </span>
        <span className="font-mono text-[9px] tracking-wider text-faint uppercase">
          {project.solution.length} steps
        </span>
      </div>
    </button>
  );
}

/* Distinguishes work actually delivered from a documented reference approach.
   Keep this visible — it is what stops the capability cards reading as
   client case studies. */
function KindBadge({ kind }) {
  if (kind === 'engagement') {
    return (
      <span className="shrink-0 rounded-md border border-accent-500/40 bg-accent-500/10 px-2 py-0.5 font-mono text-[9px] tracking-wider text-accent-400 uppercase">
        Delivered
      </span>
    );
  }
  return (
    <span className="shrink-0 rounded-md border border-line-strong bg-surface-2/50 px-2 py-0.5 font-mono text-[9px] tracking-wider text-body uppercase">
      Approach
    </span>
  );
}

function BlueprintModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} blueprint`}
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up my-auto w-full max-w-3xl rounded-2xl border border-line bg-panel-solid shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] tracking-[0.18em] text-accent-400/80 uppercase">
                {project.category}
              </span>
              <KindBadge kind={project.kind} />
            </div>
            <h3 className="mt-1.5 text-xl font-bold text-heading">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close blueprint"
            className="shrink-0 rounded-lg border border-line p-2 text-body transition-colors hover:border-line-strong hover:text-heading"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="space-y-7 px-6 py-6">
          <div>
            <h4 className="mb-3 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
              {project.kind === 'engagement' ? 'Outcome' : 'Design targets'}
            </h4>
            <div className="grid gap-3 sm:grid-cols-3">
              {project.impact.map((m) => (
                <div key={m.label} className="rounded-xl border border-line bg-surface-raised/40 p-4">
                  <div className="text-base leading-snug font-bold text-accent-400">{m.value}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-wide text-muted uppercase">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
            {project.kind !== 'engagement' ? (
              <p className="mt-3 font-mono text-[10px] leading-relaxed text-faint">
                Reference targets from vendor guidance and industry practice — not figures from a
                specific client engagement.
              </p>
            ) : null}
          </div>

          <Block title={project.kind === 'engagement' ? 'The problem' : 'When this applies'}>
            <p className="text-[13px] leading-relaxed text-body">{project.problem}</p>
          </Block>

          <Block title={project.kind === 'engagement' ? 'How it works' : 'How it is delivered'}>
            <ul className="space-y-2.5">
              {project.solution.map((s, i) => (
                <li key={i} className="flex gap-3 text-[13px] leading-relaxed text-body">
                  <span className="mt-0.5 font-mono text-[10px] text-accent-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Stack">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Chip key={s} tone="accent">
                  {s}
                </Chip>
              ))}
            </div>
          </Block>

          {project.links.repo || project.links.demo ? (
            <div className="flex gap-3 border-t border-line pt-5">
              {project.links.repo ? (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-lg border border-line-strong px-4 py-2 font-mono text-xs text-heading hover:border-accent-500/50 hover:text-accent-400"
                >
                  Source ↗
                </a>
              ) : null}
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-lg bg-accent-500 px-4 py-2 font-mono text-xs font-semibold text-slate-950 hover:bg-accent-400"
                >
                  Live demo ↗
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <h4 className="mb-3 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">{title}</h4>
      {children}
    </div>
  );
}
