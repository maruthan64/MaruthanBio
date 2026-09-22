/* ============================================================================
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 *  ---------------------------------------------------------------------------
 *  Everything the visitor reads lives in this file.
 *
 *  SOURCES USED
 *    · "Maruthan Ayyavu.html" profile  -> summary, skills matrix, stats
 *    · linkedin.com/in/maruthanayyavu  -> certifications, education, location
 *
 *  ⚠  ITEMS STILL NEEDING YOUR INPUT ARE MARKED  >>> TODO <<<
 *     Search this file for "TODO" before publishing.
 * ==========================================================================*/

export const person = {
  name: 'Maruthan Ayyavu',
  title: 'Solution Architect — Cloud Infrastructure & Modernisation',
  navTagline: 'Cloud Architecture Portfolio',
  location: 'Chennai, Tamil Nadu, India',

  email: 'maruthan64@gmail.com',

  /* >>> TODO <<< Remove entirely, or fill in, as you prefer. A public portfolio
     does not need a phone number. */
  phoneMasked: '',

  availability:
    'Open to Solution Architect and Cloud Migration leadership engagements, technical training delivery, and AI automation initiatives',
  socials: {
    github: 'https://github.com/maruthan64',
    linkedin: 'https://www.linkedin.com/in/maruthanayyavu/',
    resume: '/resume.pdf', // >>> TODO <<< drop resume.pdf into public/
  },
};

export const hero = {
  statusLabel: 'ENGAGEMENT POSTURE',
  statusValue: 'AVAILABLE FOR ARCHITECTURE ENGAGEMENTS',
  headlinePrefix: 'Architecting Secure,',
  headlineAccent: 'Cloud-Native Migrations',
  role: 'Solution Architect · Azure · AWS · Google Cloud',
  intro:
    'I turn business requirements into resilient, well-governed cloud architectures — planning and delivering large-scale VMware-to-cloud migrations, re-platforming programmes, and the landing zones underneath them.',
  primaryCta: { label: 'Explore My Work', target: 'projects' },
  secondaryCta: { label: 'Get In Touch', target: 'contact' },

  /* Static reference architecture rendered beside the headline. Illustrative
     of the segmented hub-and-spoke pattern — not any specific client design. */
  architecture: {
    title: 'Segmented Hub & Spoke',
    caption:
      'Illustrative reference architecture — dual-vendor inspection across both traffic axes. Not a specific client design.',
    nodes: {
      internet: 'Internet',
      edge: 'External Load Balancer',
      northSouth: { title: 'North-South NGFW', sub: 'Active-passive HA · DNAT in, SNAT out' },
      hub: { title: 'Hub VPC', sub: 'Centralised routing · hybrid connectivity' },
      eastWest: { title: 'East-West NGFW', sub: 'Active-passive HA · inter-spoke inspection' },
      spokeA: { title: 'Spoke', sub: 'Production' },
      spokeB: { title: 'Spoke', sub: 'Non-production' },
      onPrem: { title: 'On-Premises', sub: 'VPN / Interconnect' },
    },
  },

  stats: [
    { label: 'Years in IT & cloud', value: '14+', note: 'Infrastructure, virtualisation, and cloud architecture' },
    { label: 'Cloud platforms', value: '3', note: 'Microsoft Azure, AWS, and Google Cloud — hands-on across all three' },
    { label: 'Certifications', value: '4', note: 'AWS Professional & Specialty, VMware VCP, CNCF CKA' },
    /* >>> TODO <<< A fourth stat (e.g. workloads/programmes delivered) can go
       here once you have a real, defensible number — see hero.stats grid in
       Hero.jsx, which is already set up for 3 or 4 cards. */
  ],
};

export const about = {
  eyebrow: 'Architecture Identity',
  heading: 'Migration. Modernisation. Governed Cloud.',
  quote:
    'Turning business requirements into resilient, well-governed cloud architectures — and then actually delivering them.',
  paragraphs: [
    'I am a Solution Architect with 14+ years of IT infrastructure and cloud experience, specialising in cloud migration and modernisation across Microsoft Azure, AWS, and Google Cloud.',
    'I have delivered large-scale lift-and-shift and re-platforming programmes, including VMware vSphere to cloud migrations, and designed secure, highly available, cost-optimised landing zones to receive them.',
    'I stay hands-on: container platforms (Kubernetes on AKS, EKS, and GKE), infrastructure as code (Terraform, ARM/Bicep, Ansible), and CI/CD automation (Jenkins, Azure DevOps, GitHub Actions) — backed by deep Windows and Linux server experience and centralised access and credential management for hybrid estates.',
    'More recently I have been building with LLM and agentic tooling — RAG pipelines, LLM gateways and routing, and n8n agent workflows — applying them to infrastructure and delivery problems rather than treating them as a separate discipline.',
  ],
  callout: {
    title: 'Stakeholder-Led Architecture',
    body:
      'I work closely with business and technical stakeholders to translate requirements into architectures that survive contact with governance, security review, and a real budget.',
  },
  competencies: {
    title: 'Core Competence',
    items: [
      'Cloud Migration & Modernisation — VMware vSphere to cloud, lift-and-shift, re-platforming, wave planning',
      'Landing Zone Design — secure, highly available, cost-optimised foundations across Azure and AWS',
      'Infrastructure as Code — Terraform, ARM/Bicep, Ansible, CloudFormation',
      'Container Platforms — Kubernetes across AKS, EKS, and GKE, with Docker and Helm',
      'Hybrid Estate Operations — Windows and Linux at depth, centralised access and credential management',
    ],
  },
  approach: {
    title: 'Engineering Approach',
    items: [
      'Assess before you move — discovery and dependency mapping decide the wave plan, not guesswork',
      'Governed by default — least-privilege RBAC, policy guardrails, and centralised secrets from day one',
      'Codified, never clicked — infrastructure as code so environments are reproducible and auditable',
      'Cost is a design constraint — right-sizing and commitment planning belong in the architecture, not the post-mortem',
      'Prove the rollback — a cutover plan without a tested reversal is a hope, not a plan',
    ],
  },
};

/* --- Certifications --------------------------------------------------------
 * ⚠ DISCREPANCY TO RESOLVE:
 *   Your HTML profile lists "AWS Certified Solutions Architect – ASSOCIATE".
 *   Your LinkedIn lists "AWS Certified Solutions Architect – PROFESSIONAL"
 *   plus "AWS Certified Security – Specialty" (absent from the HTML).
 *   I have used the LinkedIn set as the more current source. CONFIRM before
 *   publishing — an overstated certification is the worst possible error here.
 * ------------------------------------------------------------------------ */
export const certifications = [
  {
    code: 'SAP',
    name: 'AWS Certified Solutions Architect – Professional',
    issuer: 'Amazon Web Services',
    period: '',
    tone: 'aws',
  },
  {
    code: 'SCS',
    name: 'AWS Certified Security – Specialty',
    issuer: 'Amazon Web Services',
    period: '',
    tone: 'aws',
  },
  {
    code: 'VCP',
    name: 'VMware Certified Professional 6.5 — Data Center Virtualization',
    issuer: 'VMware',
    period: '',
    tone: 'vmware',
  },
  {
    code: 'CKA',
    name: 'Certified Kubernetes Administrator',
    issuer: 'The Linux Foundation / CNCF',
    period: 'Dec 2021',
    tone: 'k8s',
  },
];

export const education = {
  institution: 'K.L.N. College of Engineering',
  location: 'Pottapalayam, Sivagangai District, Tamil Nadu',
  degree: '', // >>> TODO <<< add degree and field
  period: '', // >>> TODO <<< add years
};

export const projectCategories = [
  'All',
  'Network Security',
  'Cloud Migration',
  'Landing Zone & Governance',
  'Containers & Modernisation',
  'AI & Automation',
  'Resilience & DR',
  'Observability & Logging',
  'Greenfield Builds',
];

/* ============================================================================
 *  PROJECTS — two distinct kinds, and the distinction is deliberate.
 *  ---------------------------------------------------------------------------
 *  kind: 'engagement'  Real delivered work, anonymised. Claims about what YOU
 *                      did. Only add entries here you can defend in detail.
 *
 *  kind: 'capability'  Methodology and reference approach for a domain you
 *                      work in. Describes HOW the pattern is delivered, not a
 *                      claim that you delivered it for a named client. Content
 *                      is sourced from vendor documentation and industry
 *                      guidance (see README for the source list).
 *
 *  Why the split: filling capability cards with invented client metrics would
 *  read as delivered case studies you cannot substantiate in an interview.
 *  Promote any card to 'engagement' once you add the real client context,
 *  your own decisions, and numbers you can stand behind.
 * ==========================================================================*/
export const projects = [
  /* ------------------------------------------------------------------
   * REAL ENGAGEMENTS — anonymised.
   * Client name, internal IP ranges, hostnames, project IDs, and public
   * domains have been deliberately stripped. Keep them stripped.
   * ---------------------------------------------------------------- */
  {
    id: 'ngfw-east-west',
    kind: 'engagement',
    category: 'Network Security',
    title: 'FortiGate NGFW Cluster — East-West Segmentation',
    summary:
      'Active-passive FortiGate HA cluster inspecting all east-west traffic — VPC-to-VPC and hybrid on-premises — for a regulated financial services production environment on Google Cloud.',
    stack: [
      'FortiGate NGFW',
      'FortiOS 8.0',
      'FGCP Active-Passive HA',
      'Google Cloud',
      'Network Connectivity Center',
      'Internal Load Balancer',
      'Cloud Router / Cloud NAT',
      'Terraform',
    ],
    problem:
      'Spoke-to-spoke and hybrid traffic in a regulated production environment was crossing VPC boundaries without inspection. The client needed enforced east-west segmentation with no single point of failure, and an operations team able to run it without the original build engineers.',
    solution: [
      'Designed an active-passive FortiGate HA pair (FGCP) spanning two zones, with four interfaces separating untrust, trust, management, and HA heartbeat traffic.',
      'Used a Network Connectivity Center hub in STAR topology so every edge spoke is forced through the centre VPC — making inspection unavoidable by design rather than by policy.',
      'Fronted the trust interface with an internal load balancer and used next-hop-ILB routes so failover is transparent to workloads and requires no route changes.',
      'Documented the non-obvious traps that break these builds: FortiOS port numbering does not follow GCP NIC index, FGCP does not synchronise secondary IPs, and the passive node reporting UNHEALTHY to the load balancer is correct behaviour rather than a fault.',
      'Delivered a full operations handover — IP inventory, firewall rule set, route tables, HA configuration, verification commands, security findings, and a runbook for the issues most likely to recur.',
    ],
    impact: [
      { label: 'HA model', value: 'Active-passive, multi-zone' },
      { label: 'Inspection coverage', value: 'All east-west + hybrid' },
      { label: 'Handover', value: 'Runbook + findings' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'ngfw-dual-vendor',
    kind: 'engagement',
    category: 'Network Security',
    title: 'Dual-Vendor NGFW Perimeter — FortiGate East-West, Palo Alto North-South',
    summary:
      'Split-vendor firewall architecture on Google Cloud: a FortiGate cluster enforcing east-west segmentation alongside a Palo Alto VM-Series pair handling all internet-facing north-south traffic, ingress DNAT, and egress SNAT.',
    stack: [
      'Palo Alto VM-Series',
      'PAN-OS 11.1',
      'FortiGate NGFW',
      'Active-Passive HA',
      'Google Cloud',
      'External / Internal / Global Load Balancing',
      'Cloud NAT',
      'API Gateway Tier',
    ],
    problem:
      'The client wanted vendor separation between perimeter and internal inspection, so that a compromise or misconfiguration in one control plane could not remove inspection from both traffic axes. Both estates had to run active-passive with automatic failover and share a single hub network.',
    solution: [
      'Partitioned responsibility cleanly: Palo Alto owns north-south — inbound DNAT from the external load balancer and outbound SNAT through Cloud NAT — while FortiGate owns east-west between spokes and back to on-premises.',
      'Solved the PAN-OS health-check problem with mgmt-interface-swap: GCP always probes nic0, PAN-OS puts management there by default, so probes hit the management plane and fail permanently. Swapping makes nic0 the untrust dataplane and the probes land correctly.',
      'Built the PAN-OS zone model around untrust, trust, and a dedicated probes zone on a loopback so load-balancer health checks are answered without loosening production security policy.',
      'Designed the inbound path for repeatability — a documented checklist covering the forwarding rule, NAT rule, security policy, and health-check return route needed to onboard each new published application.',
      'Extended the design to a global load balancer failover path into an API gateway tier for disaster recovery, with the NAT and policy changes specified for the operations team to apply under change control.',
    ],
    impact: [
      { label: 'Traffic axes', value: 'North-south + east-west' },
      { label: 'Vendor separation', value: 'Palo Alto / Fortinet' },
      { label: 'Failover', value: 'Automatic, both pairs' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'cloud-security-posture',
    kind: 'capability',
    category: 'Network Security',
    title: 'Cloud Security Posture & Kubernetes Hardening',
    summary:
      'Continuous cloud security posture management (AWS Security Hub, Microsoft Defender for Cloud) paired with Kubernetes admission control, image scanning, and centralised secrets — enforced before deploy, not audited after the fact.',
    stack: [
      'AWS Security Hub',
      'Microsoft Defender for Cloud',
      'Amazon GuardDuty',
      'Kyverno / OPA Gatekeeper',
      'Trivy',
      'HashiCorp Vault / AWS Secrets Manager',
      'CIS Benchmarks',
    ],
    problem:
      'Applies wherever workloads span multiple accounts or subscriptions and security posture is otherwise only as good as whichever engineer last remembered to check it — no continuous view of misconfiguration, no automated response to a real threat signal, no enforced baseline for what a workload is allowed to run as.',
    solution: [
      'Centralised cloud security posture management via AWS Security Hub and Microsoft Defender for Cloud, both configured against CIS Benchmark standards, so drift from a known-good baseline — an open security group, a public storage bucket, an unencrypted disk — surfaces as a finding rather than being discovered during an audit or an incident.',
      'GuardDuty and Defender for Cloud\'s threat detection are wired to automated response, not just a dashboard, so a genuinely suspicious signal — a credential-exfiltration pattern, an anomalous API call from a region the account never operates in — triggers containment within minutes rather than waiting for someone to read an alert email.',
      'Kubernetes admission control (Kyverno) enforces the security baseline before a workload ever runs: no privileged containers, no host network or PID namespace access, required resource limits, images only from an approved registry — rejected at admission, not flagged after the fact.',
      'Every image is scanned with Trivy in CI and again at admission via a policy that blocks deploys carrying a critical CVE with an available fix, closing the gap between "we scan images" and a known-vulnerable image still reaching production because nobody was watching the scan output.',
      'Secrets never live in environment variables, Helm values, or source control — Vault or the cloud-native secrets manager is the single path, with short-lived dynamic database credentials wherever the backend supports it, so a leaked secret has a blast radius measured in minutes, not until someone remembers to rotate it.',
      'IAM and RBAC access is reviewed against actual usage, not granted intent — unused permissions on a role are the norm, and the review process removes them rather than only adding new ones, since a role\'s real risk is everything it could do, not what it was originally requested for.',
    ],
    impact: [
      { label: 'Baseline enforcement', value: 'Admission control, pre-deploy' },
      { label: 'Threat response', value: 'Automated containment' },
      { label: 'Secrets', value: 'Vault / Secrets Manager only' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'vmware-aws-migration',
    kind: 'capability',
    category: 'Cloud Migration',
    title: 'VMware vSphere to AWS Migration',
    summary:
      'Wave-based lift-and-shift of a virtualised estate into AWS — dependency-mapped discovery, continuous block-level replication, and a gated test-cutover before any production traffic moves.',
    stack: ['AWS MGN', 'Application Discovery Service', 'Migration Hub', 'VMware vSphere', 'Terraform', 'DMS', 'SCT', 'DataSync'],
    problem:
      'Applies to datacentre exit, hardware refresh, licensing pressure, or capacity limits — anywhere a virtualised estate has to move without a rewrite and without a long outage.',
    solution: [
      'Discovery first: Application Discovery Service builds the dependency graph, and a maintained inventory becomes the single source of truth for the whole programme.',
      'Waves are grouped by dependency so tightly coupled servers move together — a low-risk internal workload goes in wave one to prove the mechanics before anything critical moves.',
      'MGN holds a live replica through continuous block-level replication, which is what reduces production cutover downtime from hours to minutes.',
      'Test cutover runs into an isolated VPC at least two weeks ahead of the real one, leaving time to find and fix problems, and requires application-owner sign-off before a cutover is scheduled.',
      'Cutover discipline: no source reboots beforehand, and sources are retained — not archived or disconnected — until the launched instances are proven good, which is the rollback path.',
      'The first 30 days after landing are treated as part of the programme: right-sizing, storage review, and security hardening are where the cost case is actually proved.',
    ],
    impact: [
      { label: 'Cutover downtime', value: 'Minutes' },
      { label: 'Test-cutover lead', value: '≥ 2 weeks' },
      { label: 'Optimisation window', value: 'First 30 days' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'vmware-azure-migration',
    kind: 'engagement',
    category: 'Cloud Migration',
    title: 'VMware vSphere to Azure Migration — Azure Migrate & Replication Appliance',
    summary:
      'Wave-based migration of an on-premises VMware estate into Azure IaaS ahead of a data-centre exit, using Azure Migrate for agentless discovery, performance-based sizing, and appliance-driven replication.',
    stack: [
      'Azure Migrate',
      'Azure Migrate Server Assessment',
      'Replication Appliance',
      'Azure Site Recovery',
      'ExpressRoute',
      'Azure Files',
      'Terraform',
      'PowerShell',
    ],
    problem:
      'A VMware vSphere estate needed to move to Azure ahead of a fixed data-centre exit deadline, with accurate target sizing, minimal cutover downtime, and a tested rollback rather than a one-way move.',
    solution: [
      'Deployed the Azure Migrate appliance for agentless discovery, capturing performance data over a multi-week window rather than relying on a static as-is mapping.',
      'Sized target VMs from observed CPU, memory, and disk utilisation rather than source specification, which is what kept target SKUs right-sized instead of over-provisioned.',
      'Grouped servers into replication groups matching application dependency rather than moving them individually, so multi-tier applications stayed consistent across the cutover boundary.',
      'Ran test migrations into an isolated VNet ahead of every wave, validating boot, network connectivity, and application function without disturbing the source VM\'s ongoing replication.',
      'Sequenced cutover around a defined maintenance window per wave, applying the final replication delta immediately before power-on, with the source VM retained — not deleted — as the rollback path until sign-off.',
      'Validated disk performance tier, NSG rule parity with the source, and backup policy attachment on day one, rather than leaving them as post-migration follow-up items.',
    ],
    impact: [
      { label: 'Discovery mode', value: 'Agentless, appliance-based' },
      { label: 'Sizing basis', value: 'Performance-based, not as-is' },
      { label: 'Rollback path', value: 'Source retained until sign-off' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'gcp-migration',
    kind: 'engagement',
    category: 'Cloud Migration',
    title: 'VMware to Google Cloud Migration — Migrate for Compute Engine',
    summary:
      'Migration of a VMware-virtualised workload set into Google Compute Engine using Migrate for Compute Engine, with streaming replication and a mandatory test-clone validation step ahead of every wave cutover.',
    stack: [
      'Migrate for Compute Engine (M4CE)',
      'Google Cloud VPC',
      'Cloud NAT',
      'Persistent Disk',
      'Terraform',
      'Cloud Monitoring',
    ],
    problem:
      'VMware workloads needed to move into Google Cloud with minimal downtime, and the client wanted application behaviour validated against the real target platform before committing to each wave\'s cutover.',
    solution: [
      'Used Migrate for Compute Engine\'s streaming architecture, which boots the target VM from replicated data while the sync is still in progress — cutting replication-ready-to-live to minutes rather than hours.',
      'Ran a non-disruptive test clone of the target VM for every server ahead of its real cutover, so application validation happened against a real target instance rather than a checklist assumption.',
      'Chose disk type per workload tier — Persistent Disk SSD for latency-sensitive services, standard for archival and batch — sized against observed source disk performance rather than a single default.',
      'Mirrored the target VPC subnet plan against the source network\'s existing segmentation, so firewall and routing rules ported across with minimal rework.',
      'Finalised each wave by completing replication, powering down the source, and promoting the target, with the source VM kept available — not deleted — for the agreed soak period as the fallback.',
      'Attached Cloud Monitoring alerting and the workload\'s original backup cadence on day one, rather than treating observability as a follow-up task.',
    ],
    impact: [
      { label: 'Migration engine', value: 'Migrate for Compute Engine' },
      { label: 'Cutover method', value: 'Streaming replication' },
      { label: 'Validation step', value: 'Test clone per wave' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'database-migration',
    kind: 'engagement',
    category: 'Cloud Migration',
    title: 'Heterogeneous Database Migration — Schema Conversion & CDC Replication',
    summary:
      'Migration of on-premises SQL Server and Oracle databases to managed cloud database engines, using Schema Conversion Tool for heterogeneous conversion and continuous CDC replication to hold cutover downtime to a short write-freeze.',
    stack: [
      'AWS DMS',
      'Schema Conversion Tool (SCT)',
      'Azure Database Migration Service',
      'Amazon RDS',
      'Azure SQL Database',
      'T-SQL',
      'CloudWatch',
    ],
    problem:
      'Legacy on-premises SQL Server and Oracle databases were licensing- and hardware-constrained and needed a heterogeneous move to managed engines without a multi-hour outage or a fully manual schema rewrite.',
    solution: [
      'Ran an SCT assessment first to categorise every stored procedure, trigger, and function by conversion action required, surfacing incompatible objects before migration started rather than mid-cutover.',
      'Used a full-load-plus-CDC pattern in DMS: bulk data moved first, then ongoing changes streamed continuously, so the source stayed live and query-able throughout the migration window.',
      'Ran continuous data validation comparing row counts and checksums between source and target, catching drift before cutover rather than discovering it after.',
      'Objects SCT could not auto-convert — application-embedded SQL, some proprietary functions — were rewritten and tested against the target engine ahead of migration, not left as post-cutover defects.',
      'Scheduled cutover as a short application write-freeze rather than a full outage: once CDC lag reached zero, the freeze covered only the final sync and the connection-string switch.',
      'Kept the source database live and intact, receiving no further writes, for a defined soak period — giving a same-day rollback path if a target-side issue surfaced.',
    ],
    impact: [
      { label: 'Conversion method', value: 'SCT + manual for incompatible objects' },
      { label: 'Cutover window', value: 'Write-freeze only, not full outage' },
      { label: 'Validation', value: 'Continuous row/checksum compare' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'datacenter-exit',
    kind: 'engagement',
    category: 'Cloud Migration',
    title: 'Data Centre Exit — Multi-Wave Decommission Programme',
    summary:
      'Full exit of a physical data centre into cloud against a fixed lease-end date — wave sequencing, cross-team dependency validation, and physical decommission tracked as their own workstream rather than an afterthought.',
    stack: [
      'Azure Migrate',
      'AWS Application Discovery Service',
      'Terraform',
      'ServiceNow',
      'CMDB reconciliation',
      'Migration Hub',
    ],
    problem:
      'A fixed lease-end and contract-exit date, combined with an inventory of uncertain accuracy, made this a hard "racks empty by the deadline" requirement rather than a best-effort migration.',
    solution: [
      'Reconciled the CMDB against actual discovery data first — the two rarely agreed, and the gap itself became the first entry on the programme risk register rather than something found mid-migration.',
      'Built the wave plan backwards from the lease-end date rather than forwards from convenience, so the hardest and most dependent workloads carried the most schedule buffer, not the least.',
      'Owned a single cross-team dependency matrix spanning application, database, network, and security, so no wave was scheduled until every dependency it touched had a confirmed migration slot.',
      'Tracked physical asset decommission — servers, storage, network gear — as its own workstream with its own sign-off, separate from application go-live, since "migrated" and "decommissioned" are different milestones.',
      'Held contingency capacity back specifically for the final two waves, because that is where schedule slip concentrates on a programme of this shape.',
      'Reported weekly at executive level as a burn-down against the lease date rather than a generic migration status update, since the deadline was contractual and immovable.',
    ],
    impact: [
      { label: 'Deadline type', value: 'Contractual lease-end' },
      { label: 'Inventory approach', value: 'CMDB reconciled against discovery' },
      { label: 'Decommission tracking', value: 'Separate workstream from go-live' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'landing-zone',
    kind: 'capability',
    category: 'Landing Zone & Governance',
    title: 'Multi-Account Cloud Landing Zone',
    summary:
      'Secure, highly available landing zone built from custom Terraform modules — account structure, network topology, identity, policy guardrails, and centralised logging.',
    stack: ['Terraform', 'AWS Organizations', 'Transit Gateway', 'IAM', 'KMS', 'CloudTrail', 'Azure Policy', 'Entra ID'],
    problem:
      'Applies before any significant migration lands. Without a governed foundation, accounts multiply ad hoc, identity and network patterns diverge, and retrofitting guardrails later means touching live workloads.',
    solution: [
      'Structured against the Cloud Adoption Framework design areas — billing and tenant, identity and access, resource organisation, network topology, security, management, governance, and platform automation — so nothing is left to be discovered late.',
      'Management group and OU hierarchy exists for policy assignment, deliberately not for billing or RBAC convenience, which is the distinction that keeps the hierarchy stable as the estate grows.',
      'Subscription and account vending makes the subscription the unit of workload scale rather than the resource group, and turns provisioning into a self-service request with governance already attached.',
      'Network topology is hub-and-spoke with centralised egress and hybrid connectivity terminating in the hub, so inspection and routing policy live in one place.',
      'Everything is Terraform with remote locked state — the foundation is reproducible, reviewable, and diffable rather than a one-off console build.',
    ],
    impact: [
      { label: 'CAF design areas', value: '8 covered' },
      { label: 'Unit of scale', value: 'Subscription / account' },
      { label: 'Provisioning', value: 'Self-service vending' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'kubernetes-platform',
    kind: 'capability',
    category: 'Containers & Modernisation',
    title: 'Managed Kubernetes Platform',
    summary:
      'Container platform delivered on managed Kubernetes with Helm-based deployment, registry integration, RBAC, and CI/CD pipelines feeding it.',
    stack: ['Kubernetes', 'AKS', 'Amazon EKS', 'Docker', 'Helm', 'Azure Container Registry', 'Azure DevOps', 'GitHub Actions'],
    problem:
      'Applies when applications are being re-platformed rather than lifted, and several teams need to ship onto shared infrastructure without each inventing their own cluster, pipeline, and security posture.',
    solution: [
      'System node pools run a minimum of two nodes so the control-plane add-ons survive an upgrade or node restart, with separate user pools sized to their workload rather than one uniform baseline.',
      'Pod disruption budgets protect availability during scale-down and node rotation — the practice most often skipped, and the one that turns a routine upgrade into an outage.',
      'Workload identity replaces stored credentials entirely: IRSA on EKS and its Entra equivalent on AKS, each service account bound to a single narrowly scoped role.',
      'Pod Security Standards enforced at baseline or restricted, with an admission controller such as Kyverno or OPA Gatekeeper blocking non-compliant workloads before they reach the cluster.',
      'Delivery is declarative — Helm and Kustomize overlays per environment, digest-pinned images promoted between environments rather than rebuilt, so rollback is a known-good digest away.',
      'Capacity is tuned per workload against observed utilisation, because applying identical requests, limits, and scaling policy to every service is the fastest route to both waste and instability.',
    ],
    impact: [
      { label: 'System node pool', value: '≥ 2 nodes' },
      { label: 'Pod security', value: 'Baseline enforced' },
      { label: 'Credentials in pods', value: 'None' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'k8s-ingress',
    kind: 'capability',
    category: 'Containers & Modernisation',
    title: 'Kubernetes Ingress Architecture — Multi-Cloud Traffic Routing',
    summary:
      'Cloud-native Ingress on EKS and AKS — the AWS Load Balancer Controller and Azure Application Gateway Ingress Controller (AGIC) each translate Kubernetes Ingress resources into the cloud\'s own L7 load balancer, with cert-manager and ExternalDNS handling TLS and DNS.',
    stack: [
      'NGINX Ingress Controller',
      'AWS Load Balancer Controller',
      'Application Gateway Ingress Controller (AGIC)',
      'cert-manager',
      'ExternalDNS',
      'Kubernetes Gateway API',
    ],
    problem:
      'Applies whenever a cluster needs to expose HTTP(S) services to the internet through the cloud\'s native load balancer rather than a bespoke NodePort setup — and the correct pattern differs meaningfully between AWS and Azure, not just in naming.',
    solution: [
      'On EKS, the AWS Load Balancer Controller provisions an ALB per Ingress (or a shared one via IngressGroup) with target-type ip, routing directly to pod IPs over the VPC CNI rather than through NodePort — the design choice that keeps latency and hop count down.',
      'On AKS, AGIC translates Ingress resources directly into Application Gateway listeners, rules, and backend pools — deployed as the AKS-managed add-on for simplicity, or via Helm only when more than one AGIC instance needs to target a shared Application Gateway, since the add-on is capped at one AGIC per cluster.',
      'Treated AGIC\'s default "full ownership" behaviour as a hard constraint, not a surprise: it overwrites any listener, rule, or backend pool on the Application Gateway that isn\'t defined through Kubernetes Ingress, so existing App Gateway configurations were backed up and re-expressed as Ingress manifests before enabling it — never layered on top informally.',
      'Standardised TLS issuance across both clouds on cert-manager via ACME rather than uploading certificates per ingress by hand, with ExternalDNS keeping DNS records in sync with whichever load balancer currently owns a hostname.',
      'Chose Azure CNI Overlay for the AKS network model specifically for IP-address efficiency at scale, having confirmed the /24 Application Gateway subnet ceiling and the same-region VNet peering constraint against the target topology before commissioning it, not after.',
      'Where a routing requirement outgrew annotation-based Ingress — traffic splitting, header-based routing — migrated the affected services to the Kubernetes Gateway API instead of stacking more controller-specific annotations onto a resource type never designed to express them.',
    ],
    impact: [
      { label: 'Cert issuance', value: 'cert-manager, ACME' },
      { label: 'Pod routing (EKS)', value: 'Direct via IP target-type' },
      { label: 'AGIC ownership', value: 'Backed up before enabling' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'helm-release-management',
    kind: 'capability',
    category: 'Containers & Modernisation',
    title: 'Helm-Based Application Packaging & Release Management',
    summary:
      'Chart-driven packaging for Kubernetes applications — one chart per service, environment differences confined to values, versioned and distributed through an OCI registry alongside the images they deploy.',
    stack: [
      'Helm',
      'OCI chart registries (ECR / ACR)',
      'Chart Testing (ct)',
      'helm-diff',
      'Kustomize overlays',
      'helm lint',
    ],
    problem:
      'Applies once more than a couple of services deploy to Kubernetes and copy-pasted manifests per environment become the actual source of drift — the "quick fix" edited directly on staging that never makes it back into the chart.',
    solution: [
      'Charts store only what varies as values — image tag, replica count, resource limits, per-environment feature flags — with everything structural fixed in the templates, so a values diff between environments reads as actual intent, not noise.',
      'Chart versions follow SemVer independently of the application\'s own version, and every merge to main runs helm lint plus a template render as a CI gate, catching a malformed chart before it reaches a real cluster.',
      'Releases install with --atomic, so a failed upgrade rolls itself back automatically rather than leaving the release half-applied; helm history gives the exact prior revision for a manual rollback when the failure isn\'t caught by health checks alone.',
      'Chart artefacts publish to an OCI registry (ECR / ACR) alongside the container images they deploy, versioned and promoted together, rather than living in a separate chart repository that can drift out of step with what was actually built.',
      'Namespace is never hardcoded into a template — it\'s supplied at install time — which is what lets the same chart deploy unmodified across dev, staging, and production instead of being forked per environment.',
      'helm-diff runs before every apply in CI, showing exactly which Kubernetes objects would change ahead of the upgrade, so a reviewer approves a diff of real cluster impact rather than a values-file PR on faith.',
    ],
    impact: [
      { label: 'Rollback', value: '--atomic + helm rollback' },
      { label: 'Chart distribution', value: 'OCI registry, versioned with image' },
      { label: 'Pre-apply visibility', value: 'helm-diff in CI' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'k8s-gitops-cicd',
    kind: 'capability',
    category: 'Containers & Modernisation',
    title: 'Kubernetes CI/CD — GitOps Delivery Pipeline',
    summary:
      'CI/CD for Kubernetes split deliberately in two: CI builds, scans, and pushes images; Argo CD reconciles the cluster continuously against a Git manifests repository, with Argo Rollouts gating promotion on live metrics.',
    stack: [
      'GitHub Actions / Azure DevOps Pipelines',
      'Argo CD',
      'Argo Rollouts',
      'Kustomize',
      'Trivy',
      'OCI registries',
    ],
    problem:
      'Applies once deployment itself becomes the risk — a pipeline that runs kubectl apply straight from CI leaves no record of what the cluster\'s state should be independent of who last ran a command, and no audit trail beyond CI logs.',
    solution: [
      'Split CI from CD deliberately: CI builds, scans with Trivy, and pushes the image, then updates the image tag in a separate manifests repository — it never touches the cluster directly, which is what makes the manifests repo the actual source of truth rather than "whatever CI last applied."',
      'Argo CD watches the manifests repository and reconciles the cluster to match it continuously, so a manual kubectl edit against the live cluster is detected as drift and flagged, not silently accepted as the new state.',
      'Progressive delivery via Argo Rollouts replaces a straight rolling update for anything customer-facing: canary steps gated on automated analysis against error-rate and latency metrics, so a bad release is caught and rolled back on its own before it reaches full traffic.',
      'Every sync ties back to a Git commit, giving a real audit trail — which commit, which image digest, who approved the merge — instead of reconstructing what actually got deployed from CI run history after an incident.',
      'Environment promotion is a Git operation — merging a manifest change from the staging overlay into production\'s — not a separate pipeline job with its own credentials, which keeps production deploy access scoped to Git permissions rather than a second CI service account.',
      'Rollback is git revert against the manifests repo, not a re-run of a CI pipeline against a potentially different source commit, so there is exactly one deployment mechanism to reason about in both directions.',
    ],
    impact: [
      { label: 'Source of truth', value: 'Git manifests repo' },
      { label: 'Rollout strategy', value: 'Canary, metric-gated' },
      { label: 'Rollback path', value: 'git revert' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'karpenter-autoscaling',
    kind: 'capability',
    category: 'Containers & Modernisation',
    title: 'Kubernetes Node Autoscaling with Karpenter',
    summary:
      'Just-in-time node provisioning for EKS — Karpenter sizes and launches nodes directly from pending pod requirements, consolidates continuously for cost, and handles Spot interruption natively.',
    stack: [
      'Karpenter',
      'Amazon EKS',
      'NodePool / EC2NodeClass',
      'Spot Instances',
      'Interruption Handling',
      'Terraform',
    ],
    problem:
      'Applies wherever static managed node groups either over-provision — paying for headroom that sits idle most of the day — or under-provision, leaving pods stuck Pending during a burst, because capacity is shaped in advance rather than in response to what is actually scheduled.',
    solution: [
      'Karpenter provisions nodes directly from pending pod requirements — instance family, architecture, zone, capacity type — rather than from a pre-selected set of node group shapes, so a workload needing a large-memory or GPU instance gets exactly that node instead of waiting on a group never sized for it.',
      'NodePools express the constraints — allowed instance families, zones, the Spot/on-demand mix — while EC2NodeClass carries the AWS-specific build detail: AMI, subnet selection, security groups. Keeping "what\'s allowed" separate from "how it\'s built" makes each independently reviewable.',
      'Consolidation runs continuously by default: Karpenter looks for a cheaper node shape or a tighter bin-pack and replaces underutilised nodes automatically, rather than leaving them running until someone notices the bill.',
      'Spot is the default capacity type for interruption-tolerant workloads, with native interruption handling draining a node on the two-minute Spot reclaim notice so pods are rescheduled ahead of the hard kill, not lost to it.',
      'Disruption budgets cap how many nodes Karpenter can consolidate or drain at once per NodePool, so a cost-optimisation pass can\'t take out availability during a traffic spike just because it found a cheaper layout at that moment.',
      'Drift detection flags nodes whose underlying NodeClass or AMI has since changed, so a security patch to the launch template propagates by replacing drifted nodes rather than leaving old AMIs running indefinitely.',
    ],
    impact: [
      { label: 'Provisioning', value: 'Per-pod, just-in-time' },
      { label: 'Capacity type', value: 'Spot-first, interruption-aware' },
      { label: 'Cost lever', value: 'Continuous consolidation' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'greenfield-aws',
    kind: 'capability',
    category: 'Greenfield Builds',
    title: 'Greenfield Cloud-Native Platform — AWS (EKS)',
    summary:
      'A new-build Kubernetes platform on AWS with no legacy estate to accommodate — multi-account boundary, IRSA-only pod identity, and just-in-time node provisioning decided before the first workload, not retrofitted after.',
    stack: [
      'Amazon EKS',
      'Multi-AZ VPC',
      'IRSA',
      'Karpenter',
      'AWS Load Balancer Controller',
      'Terraform',
      'AWS Organizations',
    ],
    problem:
      'Applies to a new product or team building on AWS with nothing to migrate. The risk isn\'t legacy constraints — it\'s under-designing the foundation because nothing forces the decision early, and retrofitting an account boundary or network topology after workloads are live is expensive.',
    solution: [
      'Account structure decided before the first workload: a dedicated AWS account per environment under AWS Organizations from day one, rather than namespace-only separation inside one account, so a blast-radius or billing boundary never needs a painful account-splitting migration later.',
      'VPC designed multi-AZ from the start with private subnets for worker nodes and NAT per AZ, since a greenfield build has no excuse to accept the single point of failure a migrated legacy network sometimes has to tolerate.',
      'IRSA is the only path pods use to reach AWS APIs — no node-level IAM role is broad enough to reach S3, DynamoDB, or anything else — so a compromised pod cannot pivot to a service it was never granted.',
      'Node provisioning uses Karpenter instead of static managed node groups, so capacity is chosen per pending pod\'s actual requirements — instance type, AZ, spot vs on-demand — rather than pre-provisioned into a fixed set of node group shapes.',
      'VPC, cluster, IAM, and add-ons are Terraform from the first commit, with the EKS module version pinned and upgraded deliberately, so cluster upgrades are a reviewed plan/apply rather than an in-place console change with no diff.',
      'Cost and security guardrails — Kyverno policies, resource quotas, budget alerts — are part of the initial platform, not backfilled after the first overrun or the first incident, which is the one advantage a greenfield build has no excuse to waste.',
    ],
    impact: [
      { label: 'Account boundary', value: 'Per-environment, Organizations' },
      { label: 'Pod AWS access', value: 'IRSA only' },
      { label: 'Node provisioning', value: 'Karpenter, just-in-time' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'greenfield-azure',
    kind: 'capability',
    category: 'Greenfield Builds',
    title: 'Greenfield Cloud-Native Platform — Azure (AKS)',
    summary:
      'A new-build AKS platform on Azure with the identity and network model decided up front — Workload Identity only, CAF-aligned management groups, and policy enforced before the first namespace exists.',
    stack: [
      'Azure Kubernetes Service (AKS)',
      'Azure CNI Overlay',
      'Workload Identity',
      'Application Gateway for Containers',
      'Terraform',
      'Azure Policy',
      'Management Groups',
    ],
    problem:
      'Same greenfield framing, Azure-specific: a new AKS platform with no legacy workloads to accommodate, where under-designing the identity and network model is paid for later as a migration rather than a config change.',
    solution: [
      'Management group and subscription structure follows the Cloud Adoption Framework landing zone pattern from the outset — platform subscription separate from workload subscriptions — so policy assignment has a stable hierarchy to attach to before the estate has any reason to grow into it.',
      'Workload Identity, not the deprecated pod-managed identity, is the only way pods authenticate to Azure services, federated per service account, so no pod carries a credential broader than the one Entra app registration it was actually issued.',
      'Azure CNI Overlay chosen for the cluster network model for IP-address efficiency at scale, with the /24 Application Gateway subnet and same-region VNet peering constraints validated against the target topology before the network was cut over, not discovered mid-build.',
      'Azure Policy initiatives — no privileged containers, required resource limits, approved registries only — are attached at the management group level before the first workload namespace exists, so non-compliant workloads are rejected by admission control rather than caught in a later audit.',
      'Cluster and node pool definitions are Terraform-first, with system and user node pools split from the initial apply: system pool at a minimum of two nodes for control-plane add-on resilience, user pools sized and autoscaled per workload profile rather than one shared default.',
      'With no legacy traffic pattern to preserve, ingress went straight to Application Gateway for Containers rather than classic AGIC, avoiding a migration this platform would otherwise face in a year or two as Microsoft\'s own ingress guidance shifts.',
    ],
    impact: [
      { label: 'Identity model', value: 'Workload Identity only' },
      { label: 'Policy enforcement', value: 'Management-group level, pre-workload' },
      { label: 'Ingress', value: 'App Gateway for Containers' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'dr-resilience',
    kind: 'capability',
    category: 'Resilience & DR',
    title: 'Cloud Disaster Recovery Design',
    summary:
      'Cross-region disaster recovery for business-critical workloads with defined RPO/RTO targets, automated failover, and scheduled drill validation.',
    stack: ['AWS Elastic Disaster Recovery', 'Azure Site Recovery', 'Terraform', 'Ansible', 'AWS Backup', 'Route 53'],
    problem:
      'Applies where recovery objectives are contractual or regulatory. The common failure is not the absence of a DR plan but an unvalidated one — objectives written down, never proven against the real application topology.',
    solution: [
      'Continuous block-level replication from VMware, Hyper-V, or physical sources into the recovery region, giving crash-consistent recovery points measured in seconds rather than scheduled backup windows.',
      'Recovery plans sequence dependent tiers explicitly — database, then application, then web — because parallel power-on is what makes a technically successful failover fail functionally.',
      'Drills run as non-disruptive test failovers into an isolated network, so recovery is proven against production data without redirecting production traffic.',
      'Vendor SLA figures are treated as a ceiling, not an outcome: achievable RPO and RTO depend on application topology, dataset size, and orchestration, so both are measured in the drill and evidenced.',
      'Tier 0 and Tier 1 systems are re-validated at least quarterly, with the timing captured automatically into an audit-ready evidence bundle, and a documented failback procedure.',
    ],
    impact: [
      { label: 'Replication', value: 'Continuous, block-level' },
      { label: 'Drill mode', value: 'Non-disruptive' },
      { label: 'Re-validation', value: 'Quarterly (Tier 0/1)' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'opensearch-logging',
    kind: 'engagement',
    category: 'Observability & Logging',
    title: 'OpenSearch Centralised Logging Platform — Collection, DR, and PII Masking',
    summary:
      'Centralised logging platform on OpenSearch collecting application and OS logs fleet-wide through Fluent Bit, with a cross-region DR posture for the cluster itself and PII masking enforced before any record is indexed.',
    stack: [
      'OpenSearch',
      'OpenSearch Dashboards',
      'Fluent Bit',
      'Index State Management (ISM)',
      'Cross-Cluster Replication',
      'Snapshot / Restore (S3 repository)',
      'Grok / regex processors',
      'Terraform',
    ],
    problem:
      'Application and OS logs were scattered per host with no common retention, search, or alerting surface, and no answer for what happens if the logging cluster itself is unavailable. Raw application logs also carried PII, so a naive "ship everything" pipeline would have made the log store itself a compliance liability.',
    solution: [
      'Rolled out Fluent Bit as the collection agent on every host, tailing both OS-level logs (syslog / journald / Windows Event Log) and application log paths, with per-source parsers so structured and unstructured logs land normalised rather than as opaque blobs.',
      'Enforced PII masking in the pipeline itself, not at query time: Fluent Bit filters and Grok/regex processors redact or hash emails, card numbers, tokens, and other sensitive fields before a record ever leaves the host, so the masking cannot be bypassed by a direct index query.',
      'Designed index templates and Index State Management policies per log type — hot for active search, rolled to warm/cold on age, then deleted — so retention is enforced automatically instead of by someone remembering to clean up.',
      'Built the DR posture for the logging platform itself: cross-cluster replication into a secondary region plus scheduled snapshots to an S3 repository, so log history survives a regional loss of the primary cluster rather than disappearing with it.',
      'Delivered runbooks and dashboards for both operational triage (error-rate, host health) and DR validation (replication lag, snapshot success), so the platform is verified working rather than assumed working.',
    ],
    impact: [
      { label: 'Log sources', value: 'App + OS, fleet-wide' },
      { label: 'PII masking point', value: 'Agent, pre-index' },
      { label: 'DR mechanism', value: 'Cross-region replication + snapshots' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'aws-observability',
    kind: 'capability',
    category: 'Observability & Logging',
    title: 'AWS-Native Observability — CloudWatch, X-Ray, and Managed Grafana',
    summary:
      'Unified metrics, logs, and distributed tracing for AWS-hosted workloads — CloudWatch as the metrics/log backbone, X-Ray for cross-service latency tracing, and Amazon Managed Grafana as the single dashboard surface, with alerting built on golden signals rather than per-metric thresholds.',
    stack: [
      'Amazon CloudWatch',
      'CloudWatch Logs Insights',
      'AWS X-Ray',
      'Amazon Managed Service for Prometheus',
      'Amazon Managed Grafana',
      'Amazon SNS',
      'Terraform',
    ],
    problem:
      'Applies once workloads span more than a couple of AWS services: metrics, logs, and traces end up scattered across consoles with no correlation, alerting is ad hoc per team, and a latency spike has no clear path to "which hop caused it."',
    solution: [
      'Standardised custom application metrics on CloudWatch Embedded Metric Format so services emit structured metrics directly through their existing logs, without adding a separate metrics agent per service.',
      'Instrumented service-to-service calls with X-Ray so a slow request shows its full latency breakdown across hops, replacing guesswork with an actual trace when triaging a regression.',
      'Put Amazon Managed Grafana in front of both Amazon Managed Prometheus (infrastructure and container metrics) and CloudWatch (AWS-native service metrics), so on-call has one dashboard surface instead of switching consoles mid-incident.',
      'Saved the most common CloudWatch Logs Insights queries as reusable runbook queries tied to specific incident patterns, rather than every on-call engineer re-deriving the same query at 3am.',
      'Built alarms against golden signals — latency, traffic, errors, saturation — per service, routed through SNS with severity-based topics, replacing noisy single-metric threshold alarms that paged on the wrong things.',
      'Set log retention and metric namespace policy deliberately per source rather than leaving CloudWatch defaults in place, since unmanaged retention is one of the most common silent cost leaks on AWS observability spend.',
    ],
    impact: [
      { label: 'Tracing', value: 'X-Ray, cross-service' },
      { label: 'Dashboards', value: 'Managed Grafana, unified' },
      { label: 'Alerting', value: 'Golden-signal, SNS-routed' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'avd-workspace',
    kind: 'capability',
    category: 'Cloud Migration',
    title: 'Azure Virtual Desktop Deployment',
    summary:
      'End-user computing platform on Azure Virtual Desktop with image management, identity integration, profile storage, and conditional access.',
    stack: ['Azure Virtual Desktop', 'Entra ID', 'Azure Files', 'Azure Policy', 'PowerShell', 'Azure Monitor'],
    problem:
      'Applies to secure remote access, contractor and BYOD scenarios, or replacing ageing on-premises VDI — cases where the desktop must be centrally governed rather than trusted to the endpoint.',
    solution: [
      'Host pools are segmented by user profile rather than pooled uniformly: general knowledge workers on a shared pool, power users and developers on personal hosts, and GPU pools only where the workload genuinely needs them.',
      'Load balancing is chosen deliberately — breadth-first spreads users for consistent performance, depth-first fills hosts sequentially and pairs better with autoscaling for cost.',
      'Session hosts are kept stateless: FSLogix profile containers on Azure Files in the same region as the hosts, and OneDrive Known Folder Move for documents, so any host can be reimaged or replaced without data loss.',
      'A golden image pipeline keeps images versioned and identical across regions, which is what makes the DR host pool a real failover target rather than a divergent second build.',
      'Autoscale scaling plans shut capacity down outside business hours — the single largest cost lever in AVD, worth roughly 40–60% against fixed-price alternatives for standard-hours usage.',
      'Right-sizing is continuous: consistently below 50% utilisation means a smaller SKU, consistently above 80% means more hosts or a larger one.',
    ],
    impact: [
      { label: 'Session hosts', value: 'Stateless' },
      { label: 'Profiles', value: 'FSLogix on Azure Files' },
      { label: 'Autoscale saving', value: '~40–60%' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'infra-ops-agent',
    kind: 'engagement',
    category: 'AI & Automation',
    title: 'Agentic Infra Ops Assistant — Ticket Triage & Gated Remediation',
    summary:
      'An agent that triages incoming infrastructure alerts and tickets, proposes a remediation runbook grounded in the actual environment, and executes only pre-approved low-risk fixes automatically — everything else waits for a human.',
    stack: [
      'n8n',
      'Claude / LLM tool calling',
      'RAG (runbook retrieval)',
      'ServiceNow API',
      'Azure Monitor / CloudWatch webhooks',
      'PowerShell / Bash tool functions',
      'Python',
    ],
    problem:
      'Alerts and low-priority tickets were queuing faster than the on-call rotation could triage them, and most followed a small set of known patterns — a disk filling up, a service failing to restart, a certificate nearing expiry — that a human was diagnosing from scratch every time.',
    solution: [
      'The agent ingests the alert or ticket, retrieves the matching runbook and recent history for that host or service through RAG, and produces a diagnosis with its confidence and the evidence behind it, not just a suggested action.',
      'A fixed action allowlist separates what the agent may execute unattended (service restart, disk cleanup on a known-safe path, cert renewal trigger) from what it may only propose — anything touching production data, network policy, or IAM is drafted, never run.',
      'Every autonomous action is logged with the triggering alert, the tool calls made, and the outcome, so the audit trail reads as a decision record rather than a bare command log.',
      'Confidence and blast-radius thresholds gate escalation: low-confidence diagnoses and any high-risk action are routed to the on-call engineer with the agent\'s findings attached, turning triage time into review time instead of investigation time.',
      'The runbook corpus is versioned alongside the infrastructure it describes, so a stale runbook is a visible drift issue rather than a silent source of bad automated advice.',
      'Rolled out incrementally by alert type — starting with the highest-volume, lowest-risk pattern — so the allowlist grew from evidence of correct triage, not from a day-one blanket grant.',
    ],
    impact: [
      { label: 'Action scope', value: 'Allowlisted, low-risk only' },
      { label: 'High-risk actions', value: 'Proposed, human-executed' },
      { label: 'Audit trail', value: 'Full decision + tool-call log' },
    ],
    links: { repo: '', demo: '' },
  },
  {
    id: 'ai-automation',
    kind: 'capability',
    category: 'AI & Automation',
    title: 'LLM Gateway & Agentic Workflow Automation',
    summary:
      'Governed LLM access layer with routing across providers, plus n8n agent workflows and RAG pipelines applied to infrastructure and delivery tasks.',
    stack: ['Amazon Bedrock', 'Azure OpenAI Service', 'LangChain', 'n8n', 'Vector Databases', 'Python', 'RAG'],
    problem:
      'Applies when teams are already using LLMs through scattered, ungoverned routes. The risk is not the models — it is unlogged prompts carrying internal data to third-party providers with no consistent policy.',
    solution: [
      'A single gateway owns model routing, quota enforcement, prompt templates, and safety policy, so one proxy sees every request instead of each application implementing its own controls.',
      'PII redaction sits at the gateway, before the call leaves the network. This placement matters specifically because documents pulled in by a retrieval step are almost never scrubbed — an input guardrail watching only the user message never sees them.',
      'A policy engine enforces data entitlements, approved tools, and egress rules as code, with full audit logging for compliance review.',
      'RAG pipelines carry document-level access control through retrieval, so the model can only ground answers in documents the requesting user is already entitled to read.',
      'Agentic workflows use adaptive retrieval — deciding whether to retrieve at all and from which source — and chain tool calls, but every write action is gated behind human approval driven by confidence and risk thresholds.',
      'High-stakes actions are escalated for review by design rather than by exception, which is the difference between an assistant and an unsupervised operator.',
    ],
    impact: [
      { label: 'Redaction point', value: 'Gateway, pre-egress' },
      { label: 'Policy', value: 'Policy-as-code' },
      { label: 'Write actions', value: 'Human-gated' },
    ],
    links: { repo: '', demo: '' },
  },
];

/* ============================================================================
 *  >>> TODO — EMPLOYMENT HISTORY IS PARTIALLY INCOMPLETE <<<
 *  Current employer name is deliberately not disclosed on this public page
 *  — set by request. Start date and three headline milestones still need to
 *  come from you or your CV — search "TODO" below. Prior roles are omitted
 *  entirely rather than shown as placeholder text; add a second entry here
 *  once you have the details.
 * ==========================================================================*/
export const experience = [
  {
    id: 'current-role',
    period: 'Present',
    role: 'Solution Architect — Cloud Infrastructure & Modernisation',
    company: 'A Global IT & Managed Services Provider',
    location: 'Chennai, Tamil Nadu, India',
    scaleLabel: 'Focus',
    scaleValue: 'Cloud migration and modernisation across Azure, AWS, and Google Cloud',
    promotion: null,
    /* >>> TODO <<< replace with three real, specific milestones — a
       programme you led, a design you owned, an initiative and its outcome.
       Left empty rather than showing placeholder text; the "Key achievements"
       block hides itself while this is empty. */
    milestones: [],
    domains: [
      {
        title: 'Migration & Modernisation',
        points: [
          'Delivered large-scale lift-and-shift and re-platforming programmes, including VMware vSphere to cloud migrations.',
          'Designed secure, highly available, and cost-optimised landing zones to receive migrated workloads.',
        ],
      },
      {
        title: 'Architecture & Infrastructure as Code',
        points: [
          'Authored infrastructure as code across Terraform, ARM/Bicep, and Ansible.',
          'Built CI/CD automation with Jenkins, Azure DevOps Pipelines, and GitHub Actions.',
        ],
      },
      {
        title: 'Container Platforms',
        points: [
          'Hands-on across managed Kubernetes on AKS, Amazon EKS, and GKE, with Docker and Helm.',
        ],
      },
      {
        title: 'Hybrid Estate & Access Management',
        points: [
          'Deep Windows Server and Linux (RHEL, Ubuntu, CentOS) experience across hybrid estates.',
          'Centralised access and credential management for distributed infrastructure.',
        ],
      },
    ],
  },
];

export const skillCategories = [
  'All Skills',
  'Cloud Platforms',
  'Migration & DR',
  'IaC & Automation',
  'Containers',
  'AI & LLM',
  'Networking & Security',
  'Ops & Data',
];

export const skillGroups = [
  {
    category: 'Cloud Platforms',
    title: 'Cloud Platforms & Services',
    items: [
      'Microsoft Azure',
      'AWS',
      'Google Cloud (GCP)',
      'VMware vSphere 6.x',
      'Hybrid Cloud',
      'Azure Virtual Desktop (AVD/WVD)',
      'IaaS',
      'Serverless Computing',
    ],
  },
  {
    category: 'Cloud Platforms',
    title: 'AWS Services',
    items: [
      'IAM', 'EC2', 'AMI', 'EBS', 'S3', 'VPC', 'Transit Gateway (TGW)', 'Route 53',
      'ELB / ALB', 'Auto Scaling Groups', 'RDS', 'Lambda', 'EKS', 'ECR',
      'CloudFormation', 'CloudWatch', 'CloudTrail', 'Direct Connect', 'KMS',
      'SNS', 'SQS', 'Backup', 'Certificate Manager', 'Amazon Connect',
      'Amazon Lex', 'Amazon Bedrock',
    ],
  },
  {
    category: 'Cloud Platforms',
    title: 'Azure Services',
    items: [
      'Entra ID', 'Management Groups & Subscriptions', 'Virtual Machines', 'VNet',
      'NSG', 'Load Balancer', 'Application Gateway', 'Azure Firewall', 'ExpressRoute',
      'VPN Gateway', 'Azure SQL Database', 'Storage Accounts', 'Key Vault',
      'Azure Monitor', 'Log Analytics', 'Azure Backup', 'Site Recovery', 'AVD/WVD',
      'AKS', 'Azure Policy', 'RBAC', 'Azure DevOps', 'Azure Automation',
    ],
  },
  {
    category: 'Cloud Platforms',
    title: 'GCP Services',
    items: [
      'GKE',
      'Compute Engine',
      'Cloud Storage',
      'VPC',
      'Cloud IAM',
      'Cloud Monitoring',
      'Network Connectivity Center (NCC)',
      'Cloud Router & Cloud NAT',
      'Internal / External / Global Load Balancing',
    ],
  },
  {
    category: 'Migration & DR',
    title: 'Migration to AWS (VMware & Hyper-V)',
    items: [
      'AWS Application Migration Service (MGN)',
      'AWS Server Migration Service (SMS)',
      'VM Import/Export',
      'AWS Migration Hub',
      'AWS Application Discovery Service',
      'AWS Database Migration Service (DMS)',
      'Schema Conversion Tool (SCT)',
      'AWS DataSync',
      'AWS Elastic Disaster Recovery (DRS)',
      'VMware Cloud on AWS',
      'AWS Snowball / Snowball Edge',
    ],
  },
  {
    category: 'IaC & Automation',
    title: 'Infrastructure as Code',
    items: ['Terraform', 'ARM Templates', 'Bicep', 'Ansible', 'AWS CloudFormation'],
  },
  {
    category: 'IaC & Automation',
    title: 'CI/CD & Automation',
    items: ['Jenkins', 'Azure DevOps Pipelines', 'GitHub Actions'],
  },
  {
    category: 'IaC & Automation',
    title: 'Scripting & Programming',
    items: ['PowerShell', 'Bash', 'Python', 'YAML', 'JSON', 'T-SQL'],
  },
  {
    category: 'Containers',
    title: 'Containerization & Orchestration',
    items: ['Kubernetes', 'AKS', 'Amazon EKS', 'GKE', 'Docker', 'Azure Container Registry', 'Helm'],
  },
  {
    category: 'AI & LLM',
    title: 'AI & LLM Tooling',
    items: [
      'Large Language Models (LLM)',
      'LLM Routing / Gateway',
      'n8n',
      'Prompt Engineering',
      'RAG (Retrieval-Augmented Generation)',
      'LangChain',
      'Amazon Bedrock',
      'Azure OpenAI Service',
      'Vector Databases',
      'AI Agent Workflows',
      'GitHub Copilot',
    ],
  },
  {
    category: 'Networking & Security',
    title: 'Next-Generation Firewalls & Segmentation',
    items: [
      'FortiGate NGFW (FortiOS 8.x)',
      'FGCP Active-Passive HA Clustering',
      'Palo Alto VM-Series (PAN-OS 11.x)',
      'PAN-OS Zones, Security Policy & NAT',
      'East-West Micro-segmentation',
      'North-South Perimeter Design',
      'Inbound DNAT / Outbound SNAT Architectures',
      'NGFW Health-Check & Load-Balancer Integration',
      'Cloud-Native Firewall Insertion (next-hop-ILB)',
      'Firewall Operations Handover & Runbooks',
    ],
  },
  {
    category: 'Networking & Security',
    title: 'Networking & Security',
    items: [
      'DNS', 'SSL/TLS', 'SSH', 'TCP/IP', 'Load Balancing', 'Firewalls',
      'Network Security Groups', 'Azure Firewall', 'ExpressRoute',
      'Site-to-Site & Point-to-Site VPN', 'Bastion / Jump Hosts', 'RBAC', 'DevSecOps',
    ],
  },
  {
    category: 'Networking & Security',
    title: 'Code Quality & Security',
    items: [
      'DevSecOps Best Practices',
      'Azure Policy',
      'Least-Privilege / RBAC Design',
      'Centralised Credential & Secret Management',
    ],
  },
  {
    category: 'Ops & Data',
    title: 'Monitoring & Observability',
    items: ['Azure Monitor', 'Log Analytics', 'Application Insights', 'Amazon CloudWatch'],
  },
  {
    category: 'Ops & Data',
    title: 'Operating Systems & Virtualization',
    items: [
      'Windows Server', 'Linux (RHEL)', 'Ubuntu', 'CentOS',
      'VMware vSphere / ESXi 6.x', 'vCenter', 'Hyper-V',
    ],
  },
  {
    category: 'Ops & Data',
    title: 'Databases',
    items: ['Azure SQL Database', 'Microsoft SQL Server', 'MySQL', 'Amazon RDS'],
  },
  {
    category: 'Ops & Data',
    title: 'Caching & Messaging',
    items: ['Azure Service Bus', 'Azure Storage Queues', 'Amazon SNS', 'Amazon SQS'],
  },
  {
    category: 'Ops & Data',
    title: 'ITSM & Collaboration',
    items: [
      'ServiceNow', 'Jira', 'Confluence', 'Azure DevOps Boards',
      'Microsoft Teams', 'Devolutions RDM',
    ],
  },
];

export const contact = {
  eyebrow: "Let's Talk Architecture",
  heading: 'Get In Touch',
  blurb:
    'Available for solution architecture, cloud migration, and modernisation engagements. LinkedIn is the fastest way to reach me.',
  panelTitle: 'Start a Conversation',
  panelBody:
    'Whether you are planning a datacentre exit, designing a landing zone, or modernising onto containers — send a note describing the problem and I will come back to you.',
  /* Set to a Formspree / Getform / Basin endpoint to make the form live.
     Leave empty to fall back to composing a mailto: message. */
  formEndpoint: '',
};

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];
