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

  /* >>> TODO <<< Decide which address to publish. Your personal gmail is
     deliberately NOT hard-coded here — putting it on a public page is your
     call. A dedicated alias is usually the better option. */
  email: 'TODO@example.com',

  /* >>> TODO <<< Remove entirely, or fill in, as you prefer. A public portfolio
     does not need a phone number. */
  phoneMasked: '',

  availability: 'Open to Solution Architect and Cloud Migration leadership engagements',
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
    /* >>> TODO <<< Replace with a real, defensible number from your delivery
       history — e.g. workloads migrated, or programmes delivered. */
    { label: 'Workloads migrated', value: 'TODO', note: 'Servers and databases moved across migration programmes' },
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
    period: '', // >>> TODO <<< add issue year
    expired: false,
    tone: 'aws',
  },
  {
    code: 'SCS',
    name: 'AWS Certified Security – Specialty',
    issuer: 'Amazon Web Services',
    period: '', // >>> TODO <<< add issue year
    expired: false,
    tone: 'aws',
  },
  {
    code: 'VCP',
    name: 'VMware Certified Professional 6.5 — Data Center Virtualization',
    issuer: 'VMware',
    period: '',
    expired: false,
    tone: 'vmware',
  },
  {
    code: 'CKA',
    name: 'Certified Kubernetes Administrator',
    issuer: 'The Linux Foundation / CNCF',
    period: 'Dec 2021 – Dec 2024',
    /* LinkedIn shows this as expired. Shown honestly rather than hidden —
       an expired CKA still evidences the skill. Set to false if renewed. */
    expired: true,
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
 *  >>> TODO — EMPLOYMENT HISTORY IS INCOMPLETE <<<
 *  Your LinkedIn public page is gated, so I could only confirm SoftwareOne
 *  India (Chennai) as your current employer. Job titles, dates, and all prior
 *  roles need to come from you or your CV.
 * ==========================================================================*/
export const experience = [
  {
    id: 'softwareone',
    period: 'TODO – Present',
    role: 'Solution Architect — Cloud Infrastructure & Modernisation',
    company: 'SoftwareOne India',
    location: 'Chennai, Tamil Nadu, India',
    scaleLabel: 'Focus',
    scaleValue: 'Cloud migration and modernisation across Azure, AWS, and Google Cloud',
    promotion: null,
    milestones: [
      'TODO — a migration programme you led, with its scale and outcome.',
      'TODO — a landing zone or governance design you owned end to end.',
      'TODO — a modernisation or automation initiative and what it changed.',
    ],
    domains: [
      {
        title: 'Migration & Modernisation',
        points: [
          'Delivered large-scale lift-and-shift and re-platforming programmes, including VMware vSphere to cloud migrations.',
          'Designed secure, highly available, and cost-optimised landing zones to receive migrated workloads.',
          'TODO — add specifics: assessment tooling, wave planning approach, cutover governance.',
        ],
      },
      {
        title: 'Architecture & Infrastructure as Code',
        points: [
          'Authored infrastructure as code across Terraform, ARM/Bicep, and Ansible.',
          'Built CI/CD automation with Jenkins, Azure DevOps Pipelines, and GitHub Actions.',
          'TODO — add specifics on module design, state management, and pipeline governance.',
        ],
      },
      {
        title: 'Container Platforms',
        points: [
          'Hands-on across managed Kubernetes on AKS, Amazon EKS, and GKE, with Docker and Helm.',
          'TODO — add specifics on cluster design, workload onboarding, and platform operations.',
        ],
      },
      {
        title: 'Hybrid Estate & Access Management',
        points: [
          'Deep Windows Server and Linux (RHEL, Ubuntu, CentOS) experience across hybrid estates.',
          'Centralised access and credential management for distributed infrastructure.',
          'TODO — add specifics on scale of estate and governance model.',
        ],
      },
    ],
  },
  {
    id: 'prior-roles',
    period: 'TODO',
    role: 'TODO — earlier roles',
    company: 'TODO',
    location: 'TODO',
    scaleLabel: 'Note',
    scaleValue:
      'Your 14+ years span roles before SoftwareOne that are not on your public LinkedIn page. Add them here, or delete this entry.',
    promotion: null,
    milestones: ['TODO'],
    domains: [{ title: 'TODO', points: ['TODO'] }],
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
