/**
 * Google Drive — CV / resume
 * - Use resumeViewUrl for the site button: opens Drive’s viewer (reliable).
 * - Direct uc?export=download often returns 403 unless the file is shared as
 *   “Anyone with the link” → Viewer (not “Restricted”), and even then Google may block it.
 * - For a true one-click download with no Drive page: add the PDF to /public (e.g. resume.pdf)
 *   and set resumeHostedUrl below.
 */
export const resumeFileId = '1qqR7W_y4t8_IjX9ByzeWdJ2605VGNget'

export const resumeViewUrl = `https://drive.google.com/file/d/${resumeFileId}/view`

/** Optional: e.g. '/resume.pdf' in public/ — used for one-click download when set */
export const resumeHostedUrl = null

export const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}`

export const profile = {
  name: 'Blessing Igwegbe',
  role: 'CRM Automation & Project Manager',
  location: 'Nottingham, England NG3 5JP, United Kingdom',
  email: 'hopmblessing@gmail.com',
  phone: '+44 7543 196059',
  about:
    'Welcome to my portfolio. I am a CRM Automation specialist and project manager focused on helping businesses replace manual work with practical systems that scale. I partner with teams to map their existing processes, identify bottlenecks, and implement clear workflows that improve consistency, speed, and visibility across operations. My work combines strategic planning with hands-on delivery, from CRM setup and automation design to reporting structures and stakeholder communication. Here you can explore my professional experience, selected project samples, and the methods I use to turn complex operational needs into reliable, user-friendly systems that support long-term growth.',
}

export const resumeGroups = [
  {
    title: 'Education',
    items: [
      {
        title: 'Nnamdi Azikiwe University',
        subtitle: 'Bachelor of Science, Anatomy',
        period: '2010 - 2013',
        text: 'Built strong analytical and process thinking foundations that later shaped my systems and operations approach.',
        color: '#3b82f6',
      },
      {
        title: 'ILX',
        subtitle: 'APM FQ and APM MQ',
        period: '2025',
        text: 'Completed project management qualifications focused on structured delivery, governance, and effective program execution.',
        color: '#2563eb',
      },
    ],
  },
  {
    title: 'Employment',
    items: [
      {
        title: 'Environment Agency',
        subtitle: 'Project Support Officer',
        period: '03.2024 - Present',
        text: 'Coordinate meetings, agendas, RAID/action logs, SharePoint resources, and portfolio reporting while supporting program documentation and communications.',
        color: '#22c55e',
      },
      {
        title: 'Upwork (Various Clients)',
        subtitle: 'Freelance Project Manager',
        period: '09.2021 - Present',
        text: 'Deliver client projects end-to-end by improving workflows, managing plans and stakeholder updates, tracking milestones, and supporting teams through delivery and handover.',
        color: '#14b8a6',
      },
      {
        title: 'Victory Finances LLC',
        subtitle: 'Operations/Project Manager',
        period: '02.2022 - Present',
        text: 'Led CRM selection and rollout, built automations that improved efficiency by 45%, created SOPs, onboarded clients, and managed key account operations.',
        color: '#06b6d4',
      },
      {
        title: 'STEDDY COMM. LLC',
        subtitle: 'Virtual Executive Assistant',
        period: '09.2021 - 12.2021',
        text: 'Supported CEO and sales operations through research reporting, calendar and communication management, document organization, and travel coordination.',
        color: '#3b82f6',
      },
      {
        title: 'CUTIX PLC',
        subtitle: 'Learning & Development Coordinator',
        period: '03.2020 - 10.2021',
        text: 'Managed training strategy and matrix for 200+ staff, coordinated providers, implemented learning programs, and supported onboarding and technical capability growth.',
        color: '#f59e0b',
      },
      {
        title: 'CUTIX PLC',
        subtitle: 'Quality Assurance Secretary',
        period: '10.2018 - 03.2020',
        text: 'Handled quality and administrative reporting, regulatory communication, documentation control, inventory, and office logistics support.',
        color: '#f97316',
      },
      {
        title: 'ESPORTA SPORTS & EVENTS',
        subtitle: 'Office Administrator',
        period: '06.2016 - 10.2016',
        text: 'Supervised office operations and outlets, improved workflows, managed inventory and client support, and strengthened B2B/B2C relationships that increased sales.',
        color: '#ef4444',
      },
    ],
  },
]

export const programmingSkills = [
  { name: 'CRM and Business Systems', value: 99, color: '#4566dc' },
  { name: 'Automation and Integrations', value: 99, color: '#25b9cf' },
  { name: 'AI and Communication Automation', value: 90, color: '#f2be4e' },
  { name: 'Project and Operations Management', value: 99, color: '#ff6b4a' },
]

export const languageSkills = [
  { name: 'English', level: 5, color: '#4566dc' },
  { name: 'Igbo', level: 5, color: '#25b9cf' },
  { name: 'Yoruba', level: 5, color: '#f2be4e' },
]

export const portfolioFilters = [
  'Show All',
  'CRM Systems',
  'Automation',
  'AI Comms',
  'Project Ops',
  'Tools',
]

export const portfolioItems = [
  {
    title: 'Mobile Auto Repair CRM & Automation | Voice & Chatbot Agent',
    category: 'CRM Systems',
    image: ['/portfolio/fieldd/1.png', '/portfolio/fieldd/2.png', '/portfolio/fieldd/3.png', '/portfolio/fieldd/4.png'],
    description: 'Built an integrated operations and customer communication system for a Dubai-based mobile auto repair business using Fieldd, Google Workspace, Google Calendar, Zapier, QuickBooks, Stripe, WhatsApp automation, and a Vapi voice agent. The solution covered technician scheduling, booking workflows, lead capture, AI chatbot and voice assistant integration, customer event notifications, and internal support processes to streamline field service operations and improve response speed.',
  },
  {
    title: 'Seamless Persona Registration & Zoho Lead Integration on WordPress',
    category: 'CRM Systems',
    description: 'Implemented a seamless lead capture system on a WordPress website by embedding a custom Persona registration form. When customers register, their data is automatically structured in Zoho CRM to create new leads, ensuring smooth tracking and management of incoming users.',
    image: ['/portfolio/persona/1.png', '/portfolio/persona/2.png', '/portfolio/persona/3.png', '/portfolio/persona/4.png', '/portfolio/persona/5.png'],
  },
  {
    title: 'Monday.com Workflows and Automation',
    category: 'CRM Systems',
    description: 'Created job boards that are linked to update information from one board to another without the need for back and forth and manual data entery. Created automations for the workflows, and integrations of monday to google apps relevant to the company',
    image: ['/portfolio/monday/1.png', '/portfolio/monday/2.png']
  },
  {
    title: 'Teams Meeting Note Taker | N8N',
    category: 'Automation',
    description: 'Automated Microsoft Teams meeting notes workflow that manages meetings end-to-end with no manual effort. It monitors Outlook for new meetings, auto-accepts invites, joins Teams meetings at the scheduled time, retrieves transcripts after the meeting, and uses AI to generate structured summaries, decisions, and action items. Final notes are automatically shared with all attendees, with built-in validation, error handling, and logging to prevent duplicates and failures.',
    image: ['/portfolio/notetaker/1.png', '/portfolio/notetaker/2.png', '/portfolio/notetaker/3.png', '/portfolio/notetaker/4.png', '/portfolio/notetaker/5.png', '/portfolio/notetaker/6.png', '/portfolio/notetaker/7.png', '/portfolio/notetaker/8.png', '/portfolio/notetaker/9.png'],
  },
  {
    title: 'Automated Response to Unanswered Questions | N8N',
    category: 'Automation',
    image: ['/portfolio/automated-response/1.png'],
    description: 'Daily 4 PM Microsoft Teams follow-up automation that detects and responds to unanswered messages automatically. The workflow scans all relevant Teams and primary channels, reviews messages from the past week, and identifies items without replies. Each message is analyzed by an AI agent, which generates a context-aware response using predefined templates and posts the reply in the correct channel—ensuring no client or support message is missed while keeping communication consistent and timely.',
  },
  {
    title: 'Monthly Checkin Workflow | N8N',
    category: 'Automation',
    image: ['/portfolio/monthly-checkin/1.png'],
    description: 'AI-powered Microsoft Teams check-in system built with n8n and Microsoft Graph. The automation detects project phase directly from Team names, monitors activity by analyzing recent channel messages, and sends monthly, phase-appropriate client check-ins only when needed. It prevents duplicate outreach, requires no manual tracking or databases, and runs fully on a schedule - delivering consistent, accurate client communication at scale with zero ongoing management.',
  },
  {
    title: 'Workflows in Taxdome',
    category: 'CRM Systems',
    image: ['/portfolio/taxdome/1.png', '/portfolio/taxdome/2.png', '/portfolio/taxdome/3.png'],
    description: 'Created and managed workflows for a finance company in Taxdome.',
  },
  {
    title: 'AI Triage Assistant for Client Support',
    category: 'AI Comms',
    image: 'https://picsum.photos/seed/ai1/600/600',
    description: 'Built an AI assistant that categorizes requests and guides users to the right channel instantly.',
  },
  {
    title: 'Voice Agent with Twilio and WhatsApp',
    category: 'AI Comms',
    image: 'https://picsum.photos/seed/ai2/600/600',
    description: 'Implemented voice and message automation for booking, follow-up, and client communication handoff.',
  },
  {
    title: 'Portfolio RAID Dashboard and Governance',
    category: 'Project Ops',
    image: 'https://picsum.photos/seed/ops1/600/600',
    description: 'Built portfolio controls with RAID visibility, action ownership, and recurring reporting cadence.',
  },
  {
    title: 'SOP Library and Workflow Mapping Rollout',
    category: 'Project Ops',
    image: 'https://picsum.photos/seed/ops2/600/600',
    description: 'Created SOP structures and process maps that improved handovers and operational consistency.',
  },
  {
    title: 'Cross-Team Workspace in Notion and ClickUp',
    category: 'Tools',
    image: 'https://picsum.photos/seed/tools1/600/600',
    description: 'Set up centralized project and knowledge workspaces for tracking tasks, risks, and team collaboration.',
  },
  {
    title: 'Executive Reporting with Miro and Dashboards',
    category: 'Tools',
    image: 'https://picsum.photos/seed/tools2/600/600',
    description: 'Delivered leadership-ready visual reporting for delivery status, resource planning, and priorities.',
  },
]

export const testimonials = [
  {
    name: 'Ahmed Mowafe',
    date: 'Mar 30, 2026',
    text: 'great experience working with Blessing! She was able to help us fix our KYC workflow when we got stuck Very happy with her work',
    initials: 'AM',
    image: 'testimonials/ahmed.jpg',
    color: '#4566dc',
  },
  {
    name: 'David Cohen',
    date: 'Mar 12, 2026',
    text: 'Very good communication, very friendly and knowledgeable. Over and above',
    initials: 'DC',
    color: '#22c55e',
    image: 'testimonials/david.jpg',
  },
  {
    name: 'Natally Huff',
    date: 'Mar 26, 2025',
    text: 'Blessing was amazing to work with. She made progress quickly, took the time to understand the assignments, delivered clear instructions with her deliverables. I will definitely be working with Blessing again, and will be happy to bring her on to a client as well.',
    initials: 'NH',
    color: '#f59e0b',
  },
  {
    name: 'Jessica Bogart Kasper',
    date: 'Oct 7, 2024',
    text: 'Blessing was an absolute delight to work with. Incredibly responsive, always quick to roll up her sleeves to solve whatever problem I through at her. I hired her to help build data field integrations between Pipedrive and Hubspot as well as help with various sales automations. I consider her a trusted partner and do plan to work with her again!',
    initials: 'JBK',
    color: '#f97316',
  },
  {
    name: 'Conrad Mar',
    date: 'Jul 10, 2023',
    text: 'Blessing was awesome - She took initiative and acted quickly. We only ended the contract after a short period because of some changes in what we are looking for.',
    initials: 'CM',
    color: '#ef4444',
    image: 'testimonials/conrad.png',
  }
]

export const sectionMeta = {
  resume: { title: 'Resume', color: '#28c2db' },
  portfolio: { title: 'Portfolio', color: '#f7c247' },
  testimonials: { title: 'Testimonials', color: '#ff7443' },
  contacts: { title: 'Contacts', color: '#ff4a53' },
}

export const sectionOrder = ['resume', 'portfolio', 'testimonials', 'contacts']

export const dots = [1, 2, 3, 4, 5]
