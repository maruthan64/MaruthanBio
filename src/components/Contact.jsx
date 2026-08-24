import { useState } from 'react';
import { contact, person } from '../content/profile.js';
import { Panel, Section, SectionHeading } from './ui.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    /* No backend configured — hand the message to the visitor's mail client. */
    if (!contact.formEndpoint) {
      const body = `${form.message}\n\n— ${form.name} (${form.email})`;
      window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(
        form.subject || 'Portfolio enquiry'
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <SectionHeading eyebrow={contact.eyebrow} title={contact.heading} blurb={contact.blurb} />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* ------- details ------- */}
        <Panel className="p-6">
          <h3 className="text-lg font-semibold text-slate-100">{contact.panelTitle}</h3>
          <p className="mt-2.5 text-[13px] leading-relaxed text-slate-400">{contact.panelBody}</p>

          <div className="mt-7 space-y-4">
            <Field label="Email">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${person.email}`}
                  className="font-mono text-sm text-emerald-400 hover:underline"
                >
                  {person.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="rounded-md border border-slate-800 px-2 py-1 font-mono text-[10px] text-slate-400 transition-colors hover:border-slate-700 hover:text-slate-200"
                >
                  {copied ? 'copied ✓' : 'copy'}
                </button>
              </div>
            </Field>

            <Field label="Phone">
              <span className="font-mono text-sm text-slate-300">{person.phoneMasked}</span>
            </Field>

            <Field label="Location">
              <span className="font-mono text-sm text-slate-300">{person.location}</span>
            </Field>

            <Field label="Availability">
              <span className="text-sm text-slate-300">{person.availability}</span>
            </Field>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
            <a
              href={person.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg border border-slate-700 px-4 py-2 font-mono text-xs text-slate-200 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
            >
              GitHub ↗
            </a>
            <a
              href={person.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg border border-slate-700 px-4 py-2 font-mono text-xs text-slate-200 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
            >
              LinkedIn ↗
            </a>
            <a
              href={person.socials.resume}
              className="rounded-lg border border-slate-700 px-4 py-2 font-mono text-xs text-slate-200 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
            >
              Résumé ↓
            </a>
          </div>
        </Panel>

        {/* ------- form ------- */}
        <Panel className="p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Name" value={form.name} onChange={set('name')} required />
              <Input label="Email" type="email" value={form.email} onChange={set('email')} required />
            </div>
            <Input label="Subject" value={form.subject} onChange={set('subject')} />

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                required
                value={form.message}
                onChange={set('message')}
                placeholder="Tell me about the role or the problem you're solving..."
                className="w-full resize-y rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' ? (
              <p className="font-mono text-xs text-emerald-400">
                {contact.formEndpoint
                  ? '✓ Message sent — thanks, I will reply shortly.'
                  : '✓ Your mail client should now be open with the message drafted.'}
              </p>
            ) : null}
            {status === 'error' ? (
              <p className="font-mono text-xs text-rose-400">
                ✕ Something went wrong. Please email {person.email} directly.
              </p>
            ) : null}
            {!contact.formEndpoint ? (
              <p className="font-mono text-[10px] leading-relaxed text-slate-600">
                Note: no form backend is configured, so submitting opens your mail client. Set
                <span className="text-slate-500"> contact.formEndpoint </span>
                in src/content/profile.js to post directly instead.
              </p>
            ) : null}
          </form>
        </Panel>
      </div>
    </Section>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <div className="mb-1 font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
        {label}
      </div>
      {children}
    </div>
  );
}

function Input({ label, type = 'text', value, onChange, required = false }) {
  const id = label.toLowerCase();
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none"
      />
    </div>
  );
}
