import { useMemo, useState } from 'react';
import { skillCategories, skillGroups } from '../content/profile.js';
import { Panel, Reveal, Section, SectionHeading } from './ui.jsx';

export default function Skills() {
  const [category, setCategory] = useState('All Skills');
  const [query, setQuery] = useState('');

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skillGroups
      .filter((g) => category === 'All Skills' || g.category === category)
      .map((g) => ({
        ...g,
        items: q ? g.items.filter((i) => i.toLowerCase().includes(q)) : g.items,
      }))
      .filter((g) => g.items.length > 0);
  }, [category, query]);

  const total = useMemo(
    () => groups.reduce((sum, g) => sum + g.items.length, 0),
    [groups]
  );

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Technical Arsenal"
        title="Skills & Expertise Matrix"
        blurb="A directory of the technologies, frameworks, and engineering standards actually used on production systems — not an aspirational list."
      />

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {skillCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-lg border px-3.5 py-2 font-mono text-[11px] transition-colors ${
                category === c
                  ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                  : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter a specific tool (e.g. Terraform)..."
          aria-label="Filter skills"
          className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-2.5 font-mono text-xs text-slate-200 placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none lg:w-72"
        />
      </div>

      {groups.length === 0 ? (
        <Panel className="p-12 text-center">
          <p className="font-mono text-sm text-slate-500">Nothing matches that filter.</p>
        </Panel>
      ) : (
        <>
          <p className="mb-6 font-mono text-[11px] text-slate-600">
            {total} {total === 1 ? 'capability' : 'capabilities'} across {groups.length}{' '}
            {groups.length === 1 ? 'domain' : 'domains'}
          </p>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {groups.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 80}>
                <Panel className="h-full p-5 transition-colors hover:border-emerald-500/30">
                  <div className="mb-1 font-mono text-[9px] tracking-[0.2em] text-emerald-500/70 uppercase">
                    {g.category}
                  </div>
                  <h3 className="mb-4 text-sm leading-snug font-semibold text-slate-100">{g.title}</h3>
                  <ul className="space-y-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 font-mono text-[11px] leading-relaxed text-slate-400"
                      >
                        <span className="mt-[3px] h-1 w-1 shrink-0 rounded-full bg-emerald-400/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
