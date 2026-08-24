# Maruthan Ayyavu — Solution Architect Portfolio

A single-page portfolio for a cloud solution architect: reference architecture diagram,
certification wall, filterable project gallery with blueprint modals, experience
timeline, and a searchable skills matrix.

Built with **React 19 + Vite + Tailwind CSS v4**. Static output — no backend required.

---

## ⚠ NOT READY TO PUBLISH

`src/content/profile.js` still contains **placeholders marked `TODO`**, and around 14 of them
render visibly on the page. They are deliberately visible so the site cannot be published by
accident. Before going live:

```bash
grep -n "TODO" src/content/profile.js
```

Outstanding items:

| Item | Where | Detail |
| --- | --- | --- |
| Employment history | `experience` | 12 TODOs — only SoftwareOne confirmed; titles, dates, prior roles missing |
| Hero stat #4 | `hero.stats` | "Workloads migrated" needs a real, defensible number |
| Contact email | `person.email` | Not set — decide which address to publish |
| Certification years | `certifications` | Issue dates not filled in |
| Education | `education` | Degree and years missing |
| `resume.pdf` | `public/` | Not present |

Projects are complete — 0 TODOs remain there.

### Two kinds of project — keep them distinct

Each entry in `projects` carries a `kind`, and the card shows a badge for it:

| `kind` | Badge | Meaning |
| --- | --- | --- |
| `engagement` | **Delivered** (green) | Real work you did. A claim about you. |
| `capability` | **Approach** (grey) | Documented methodology for a domain you work in. Not a claim you delivered it for a named client. |

The two NGFW projects are `engagement`. The other six are `capability` — their content comes from
vendor documentation and industry guidance, and their "Design targets" tiles carry an on-page note
saying the figures are reference values, not client outcomes.

**Do not quietly flip a `capability` card to `engagement`.** Promote one only when you have added
the real client context, your own design decisions, and numbers you can defend in an interview.

#### Sources used for the `capability` cards

- [AWS — Best practices for Application Migration Service](https://docs.aws.amazon.com/mgn/latest/ug/best_practices_mgn.html)
- [AWS Prescriptive Guidance — Best practices for cutting over network traffic](https://docs.aws.amazon.com/pdfs/prescriptive-guidance/latest/best-practices-migration-cutover/best-practices-migration-cutover.pdf)
- [AWS Well-Architected — Migration Lens](https://docs.aws.amazon.com/wellarchitected/latest/migration-lens/migrate-perf.html)
- [Microsoft — What is an Azure landing zone?](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/)
- [Microsoft — Azure landing zone design principles](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-principles)
- [Microsoft — Subscription vending](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/subscription-vending)
- [Microsoft — Management group and subscription organisation](https://github.com/MicrosoftDocs/cloud-adoption-framework/blob/main/docs/ready/landing-zone/design-area/resource-org-management-groups.md)
- [Microsoft — AKS deployment and cluster reliability best practices](https://learn.microsoft.com/en-us/azure/aks/best-practices-app-cluster-reliability)
- [EKS architecture best practices for production clusters](https://tasrieit.com/blog/eks-architecture-best-practices-building-production-ready-kubernetes-clusters-on-aws-2026)
- [Microsoft — FSLogix profile containers for AVD](https://learn.microsoft.com/en-us/azure/virtual-desktop/fslogix-profile-containers)
- [Microsoft — AVD autoscale scaling plans](https://learn.microsoft.com/en-us/azure/virtual-desktop/autoscale-create-assign-scaling-plan)
- [Microsoft — Multiregion BCDR for Azure Virtual Desktop](https://learn.microsoft.com/en-us/azure/architecture/example-scenario/azure-virtual-desktop/azure-virtual-desktop-multi-region-bcdr)
- [AWS — Elastic Disaster Recovery concepts](https://docs.aws.amazon.com/drs/latest/userguide/CloudEndure-Concepts.html)
- [AWS Elastic Disaster Recovery vs Azure Site Recovery comparison](https://www.enterprisestorageforum.com/backup/aws-elastic-disaster-recovery-vs-azure-site-recovery/)
- [PII redaction at the gateway before data reaches providers](https://www.getmaxim.ai/articles/pii-redaction-at-the-gateway-before-data-reaches-providers/)
- [Document-level RBAC for RAG pipelines](https://truto.one/blog/how-to-maintain-document-level-rbac-in-enterprise-rag-pipelines/)
- [Enterprise AI security framework — LLMs, RAG and agentic AI](https://www.enkryptai.com/blog/enterprise-ai-security-framework-2025-securing-llms-rag-and-agentic-ai)

### Client confidentiality

The two NGFW projects are drawn from real engagements. The client name, internal IP ranges,
hostnames, cloud project IDs, region identifiers, and public domains have been **deliberately
stripped**. Keep them stripped.

This README is committed to a public repository, so the actual search terms are **not listed
here** — naming them would defeat the purpose. They live in `check-leaks.sh`, which is
gitignored and stays on your machine only. Run it before each publish:

```bash
./check-leaks.sh
```

If that file is missing (fresh clone), recreate it with the client name, internal IP prefixes,
hostname prefixes, and project-ID prefixes for any engagement referenced in `profile.js`.

### Certification discrepancy — CONFIRM BEFORE PUBLISHING

The source HTML profile says *AWS Certified Solutions Architect – **Associate***.
LinkedIn says *AWS Certified Solutions Architect – **Professional*** plus
*AWS Certified Security – Specialty*. The LinkedIn set is used here. **Verify this is correct** —
an overstated certification is the most damaging possible error on this page.

CKA is shown as lapsed (expired Dec 2024) rather than hidden. Set `expired: false` if renewed.

---

## Prerequisites

Node.js 20 or newer.

**On this machine** Node 24.19.0 is installed as a portable (no-admin) copy at
`%LOCALAPPDATA%\nodejs-portable`. The `winget` install needed admin rights, so the official
zip from nodejs.org was extracted there instead. Put it on `PATH` for the current shell:

```powershell
$env:Path = "$env:LOCALAPPDATA\nodejs-portable;$env:Path"
```

To make that permanent, add the same directory via *Environment Variables → User variables →
Path*. Alternatively install Node normally, with admin rights available:

```powershell
winget install OpenJS.NodeJS.LTS
```

## Run locally

```bash
npm install
```

```bash
npm run dev
```

The dev server starts on http://localhost:5173.

## Production build

```bash
npm run build
```

Output lands in `dist/` — plain static files. `npm run preview` serves that build locally on port 4173.

---

## Editing the content

**All visitor-facing text lives in one file: `src/content/profile.js`.**
No component changes are needed to rebrand the site for a different person.

| Export | Controls |
| --- | --- |
| `person` | Name, title, email, phone, location, social links |
| `hero` | Headline, intro, CTA labels, stat strip, architecture diagram labels |
| `about` | Profile narrative, quote, callout, competency and approach lists |
| `certifications` + `education` | The certification wall and education panel |
| `projects` + `projectCategories` | Project cards and their blueprint modal detail |
| `experience` | Roles, milestones, expandable operational-scope accordions |
| `skillGroups` + `skillCategories` | The searchable skills matrix |
| `contact` | Contact copy and the optional form endpoint |
| `nav` | Navigation items (the `id` must match a section `id`) |

### Adding a project

Append an object to `projects`. `category` must be one of `projectCategories`. `impact`
renders as the three metric tiles at the top of the blueprint modal.

### Making the contact form live

Set `contact.formEndpoint` to a form-backend URL (Formspree, Getform, Basin, or your own
endpoint). It receives a JSON POST of `{ name, email, subject, message }`. Left empty, the
form falls back to composing a `mailto:` message instead.

### Résumé download

Drop `resume.pdf` into a `public/` folder at the project root; `person.socials.resume`
already points at `/resume.pdf`.

---

## Customising the look

The palette and fonts are defined as Tailwind v4 theme tokens in `src/index.css` under
`@theme`. The accent colour is emerald with cyan as the secondary; changing
`--color-accent-*` plus the `emerald-` utility classes retones the whole site.

Fonts are Inter (UI) and JetBrains Mono (console/labels), loaded from Google Fonts in
`index.html`.

Motion is disabled automatically for visitors with `prefers-reduced-motion: reduce`.

---

## Deploying

The build is fully static, so any static host works.

**S3 + CloudFront**

```bash
aws s3 sync dist/ s3://YOUR-BUCKET --delete
```

Then invalidate the distribution:

```bash
aws cloudfront create-invalidation --distribution-id YOUR-DIST-ID --paths "/*"
```

**AWS Amplify Hosting / Netlify / Vercel** — connect the repo; build command `npm run build`,
publish directory `dist`.

**GitHub Pages** — if serving from a subpath, set `base: '/repo-name/'` in `vite.config.js`
before building.

Since the site is a single page with in-page anchors, no SPA rewrite rules are needed.

---

## Project structure

```
index.html                  Document shell, fonts, meta
vite.config.js              Vite + React + Tailwind plugins
src/
  main.jsx                  React entry
  App.jsx                   Section composition
  index.css                 Theme tokens, animations, base styles
  content/profile.js        >>> ALL CONTENT LIVES HERE <<<
  components/
    ui.jsx                  Section, Panel, Chip, StatusDot, Reveal, scroll helper
    Nav.jsx                 Sticky nav with scroll-spy + mobile menu
    Hero.jsx                Headline, reference architecture diagram, stats
    About.jsx               Profile narrative
    Projects.jsx            Filter + search gallery, blueprint modal
    Experience.jsx          Timeline with milestone cards and accordions
    Skills.jsx              Searchable, filterable skills matrix
    Certifications.jsx      Certification wall + education panel
    Contact.jsx             Contact details + form
    Footer.jsx              Footer nav
```

## A note on the architecture diagram

The hero diagram is a **static, illustrative reference pattern** — a segmented hub-and-spoke
with dual-vendor inspection. It is not any specific client design, and the caption on the page
says so. Keep that caption.
