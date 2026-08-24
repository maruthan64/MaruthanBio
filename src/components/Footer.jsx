import { nav, person } from '../content/profile.js';
import { scrollToSection } from './ui.jsx';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold text-slate-200">{person.name}</div>
          <div className="mt-1 font-mono text-[11px] text-slate-500">{person.title}</div>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="font-mono text-[11px] text-slate-500 transition-colors hover:text-emerald-400"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="font-mono text-[11px] text-slate-600">
          © {new Date().getFullYear()} {person.name}
        </div>
      </div>
    </footer>
  );
}
