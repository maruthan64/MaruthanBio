import { hero, person } from '../content/profile.js';
import { Panel, StatusDot, scrollToSection } from './ui.jsx';

export default function Hero() {
  return (
    <section id="home" className="relative z-10 overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-18rem] left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-emerald-500/12 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
        {/* ---------------- Left: pitch ---------------- */}
        <div className="animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-slate-800 bg-slate-900/70 py-1.5 pr-4 pl-2.5">
            <StatusDot tone="ok" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
              {hero.statusLabel}
            </span>
            <span className="font-mono text-[11px] font-semibold text-emerald-400">
              {hero.statusValue}
            </span>
          </div>

          <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.4rem]">
            {hero.headlinePrefix}{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              {hero.headlineAccent}
            </span>
          </h1>

          <p className="mt-5 font-mono text-sm tracking-wide text-emerald-400/90">{hero.role}</p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
            I&apos;m <span className="font-semibold text-slate-200">{person.name}</span>. {hero.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection(hero.primaryCta.target)}
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              {hero.primaryCta.label}
              <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(hero.secondaryCta.target)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
            >
              {hero.secondaryCta.label}
            </button>
          </div>
        </div>

        {/* ---------------- Right: reference architecture ---------------- */}
        <Panel glow className="animate-fade-up p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="font-mono text-[11px] tracking-[0.2em] text-slate-500 uppercase">
              {hero.architecture.title}
            </h2>
            <span className="font-mono text-[9px] tracking-wider text-slate-600 uppercase">
              Reference pattern
            </span>
          </div>

          {/* SVG on tablet and up; a readable vertical flow on phones, where the
              scaled-down diagram text would drop below ~5px. */}
          <div className="hidden sm:block">
            <ArchitectureDiagram nodes={hero.architecture.nodes} />
          </div>
          <div className="sm:hidden">
            <ArchitectureFlow nodes={hero.architecture.nodes} />
          </div>

          <p className="mt-4 border-t border-slate-800 pt-3 font-mono text-[9.5px] leading-relaxed text-slate-600">
            {hero.architecture.caption}
          </p>
        </Panel>
      </div>

      {/* ---------------- Stats strip ---------------- */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {hero.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition-colors hover:border-emerald-500/30"
          >
            <div className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
              {s.label}
            </div>
            <div className="mt-2 text-2xl font-bold text-emerald-400">{s.value}</div>
            <div className="mt-1.5 text-xs leading-relaxed text-slate-500">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Phone layout: the same architecture as a vertical flow, so labels stay at a
   readable size instead of scaling down with the SVG.                          */

function FlowRow({ title, sub, accent = 'slate', wide = false }) {
  const accents = {
    slate: 'border-slate-700 bg-slate-900/60',
    violet: 'border-violet-500/50 bg-violet-500/10',
    cyan: 'border-cyan-500/50 bg-cyan-500/10',
    emerald: 'border-emerald-500/50 bg-emerald-500/10',
  };
  return (
    <div className={`rounded-lg border px-3 py-2 ${accents[accent]} ${wide ? '' : 'text-center'}`}>
      <div className="text-[12px] leading-tight font-semibold text-slate-100">{title}</div>
      {sub ? <div className="mt-0.5 font-mono text-[9.5px] text-slate-500">{sub}</div> : null}
    </div>
  );
}

function Connector() {
  return <div className="mx-auto my-1 h-3 w-px bg-slate-700" aria-hidden="true" />;
}

function ArchitectureFlow({ nodes }) {
  return (
    <div aria-hidden="true">
      <FlowRow title={nodes.internet} />
      <Connector />
      <FlowRow title={nodes.edge} />
      <Connector />
      <FlowRow title={nodes.northSouth.title} sub={nodes.northSouth.sub} accent="violet" />
      <Connector />
      <FlowRow title={nodes.hub.title} sub={nodes.hub.sub} accent="cyan" />
      <div className="my-1.5 flex items-center gap-2">
        <div className="h-px flex-1 bg-slate-800" />
        <span className="font-mono text-[9px] text-slate-600">{nodes.onPrem.title} · {nodes.onPrem.sub}</span>
        <div className="h-px flex-1 bg-slate-800" />
      </div>
      <FlowRow title={nodes.eastWest.title} sub={nodes.eastWest.sub} accent="emerald" />
      <Connector />
      <div className="grid grid-cols-2 gap-2">
        <FlowRow title={nodes.spokeA.title} sub={nodes.spokeA.sub} />
        <FlowRow title={nodes.spokeB.title} sub={nodes.spokeB.sub} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Static SVG. Colours are literal so the diagram renders identically wherever
   it is embedded, independent of Tailwind class purging.                      */

const INK = '#e2e8f0';
const DIM = '#94a3b8';
const FAINT = '#64748b';
const LINE = '#334155';

function Box({ x, y, w, h, stroke, fill, title, sub, mono = false }) {
  const cx = x + w / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10" fill={fill} stroke={stroke} strokeWidth="1.2" />
      <text
        x={cx}
        y={sub ? y + h / 2 - 3 : y + h / 2 + 4}
        textAnchor="middle"
        fill={INK}
        fontSize={mono ? '10.5' : '11.5'}
        fontWeight="600"
        fontFamily={mono ? 'ui-monospace, monospace' : 'inherit'}
      >
        {title}
      </text>
      {sub ? (
        <text
          x={cx}
          y={y + h / 2 + 11}
          textAnchor="middle"
          fill={FAINT}
          fontSize="8.5"
          fontFamily="ui-monospace, monospace"
        >
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function ArchitectureDiagram({ nodes }) {
  return (
    <svg
      viewBox="0 0 560 442"
      role="img"
      aria-label="Reference architecture: internet traffic passes through an external load balancer and a north-south firewall pair into a hub VPC, which connects to production and non-production spokes through an east-west firewall pair, with on-premises connectivity into the hub."
      className="h-auto w-full"
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={LINE} />
        </marker>
      </defs>

      {/* connectors */}
      <g stroke={LINE} strokeWidth="1.4" fill="none" markerEnd="url(#arrow)">
        <path d="M280,52 V76" />
        <path d="M280,110 V134" />
        <path d="M280,182 V208" />
        <path d="M280,256 V282" />
        <path d="M280,330 V350 H115 V368" />
        <path d="M280,330 V350 H445 V368" />
        <path d="M152,231 H176" />
      </g>

      {/* vertical axis labels */}
      <g fontFamily="ui-monospace, monospace" fontSize="8.5" fill={DIM}>
        <text x="392" y="160" fill="#a78bfa">north-south</text>
        <text x="392" y="308" fill="#34d399">east-west</text>
      </g>

      {/* internet */}
      <g>
        <rect x="215" y="20" width="130" height="32" rx="16" fill="#0f172a" stroke={LINE} strokeWidth="1.2" />
        <text x="280" y="40" textAnchor="middle" fill={DIM} fontSize="11" fontWeight="600">
          {nodes.internet}
        </text>
      </g>

      {/* external LB */}
      <Box x={200} y={76} w={160} h={34} stroke={LINE} fill="#0f172a" title={nodes.edge} mono />

      {/* north-south NGFW */}
      <Box
        x={176}
        y={134}
        w={208}
        h={48}
        stroke="#8b5cf6"
        fill="rgba(139,92,246,0.10)"
        title={nodes.northSouth.title}
        sub={nodes.northSouth.sub}
      />

      {/* hub */}
      <Box
        x={176}
        y={208}
        w={208}
        h={48}
        stroke="#22d3ee"
        fill="rgba(34,211,238,0.10)"
        title={nodes.hub.title}
        sub={nodes.hub.sub}
      />

      {/* east-west NGFW */}
      <Box
        x={176}
        y={282}
        w={208}
        h={48}
        stroke="#10b981"
        fill="rgba(16,185,129,0.10)"
        title={nodes.eastWest.title}
        sub={nodes.eastWest.sub}
      />

      {/* on-premises */}
      <Box
        x={16}
        y={208}
        w={136}
        h={48}
        stroke={LINE}
        fill="#0f172a"
        title={nodes.onPrem.title}
        sub={nodes.onPrem.sub}
      />

      {/* spokes */}
      <Box
        x={36}
        y={368}
        w={158}
        h={46}
        stroke={LINE}
        fill="#0f172a"
        title={nodes.spokeA.title}
        sub={nodes.spokeA.sub}
      />
      <Box
        x={366}
        y={368}
        w={158}
        h={46}
        stroke={LINE}
        fill="#0f172a"
        title={nodes.spokeB.title}
        sub={nodes.spokeB.sub}
      />
    </svg>
  );
}
