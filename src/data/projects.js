export const PROJECTS = [
  {
    id: 'pulseos',
    name: 'PulseOS',
    subtitle: 'AI-Powered Clinic Management',
    badge: 'In Development',
    tagline: 'A full-stack medical office management system designed for private GP clinics in Jamaica — covering every step from patient registration to checkout.',
    description: `PulseOS is an AI-powered medical office management system built from the ground up for private GP clinics in Jamaica. During visits to a private medical clinic in Kingston, I observed the receptionist managing every appointment in a physical diary. Patient records lived in folders. Prescriptions were handwritten. Lab requisitions were filled out by hand, signed, and handed to patients to take to Caledonia or MDS themselves.\n\nPulseOS replaces every one of those paper-based workflows with a structured, role-based digital system that understands the Jamaican healthcare landscape — NHF coverage, DPA 2020 compliance, MCJ registration numbers on every document, and a print-and-sign workflow that matches how pharmacies and labs actually operate today.`,
    role: 'Sole developer — designing and building the entire system from database schema to frontend, AI integrations, and deployment pipeline.',
    stack: ['Node.js', 'Express', 'React', 'MySQL', 'Anthropic Claude API', 'Railway', 'Vercel', 'JWT', 'Tailwind CSS'],
    highlights: [
      'NHF integration flags subsidised medications and diagnostics for 28 chronic illnesses',
      'DPA 2020 compliance: immutable audit log, consent capture, breach notification workflow aligned with OIC',
      'Print-ready clinical documents auto-populated with clinic logo, doctor name, and MCJ number',
      'AI clinical note summarisation — free text in, structured clinical record out via Claude API',
      'Drug interaction flagging checks every new prescription against active medications and allergies',
      'Interactive SVG body map for injury annotation with freehand drawing saved as base64',
      'Symptom triage classifies urgency as Routine, Priority, or Emergency at booking time',
      'OCR pipeline for scanned lab results and historical patient cards with per-field confidence scores',
      'Self-registration tablet flow — patients register at reception, staff activates the record',
      'No-show prediction model flags high-risk appointments for targeted reminders',
    ],
    github: 'https://github.com/sydonaeengland/PulseOS.git',
    image: null,
    color: '#14B8A6',
  },
  {
    id: 'dlrsjam',
    name: 'DLRSJAM',
    subtitle: "Driver's Licence Renewal System of Jamaica",
    badge: 'Capstone',
    tagline: "Digitising Jamaica's driver's licence renewal process end-to-end.",
    description: `DLRSJAM is a full prototype Progressive Web Application built as a final year capstone project for COMP3901. Renewing a driver's licence in Jamaica currently requires a physical visit to a Tax Administration Jamaica branch, manual document checks, and a Justice of the Peace signature. The process is plagued by long queues, rural inaccessibility, and susceptibility to document fraud. DLRSJAM replaces this entirely with a guided, secure digital workflow.

The system uses a three-tier architecture: a React PWA frontend, a Python Flask REST API, and a PostgreSQL database. Three role-based portals serve applicants, TAJ officers, and supervisors, each with scoped access enforced server-side. The 8-step application workflow takes an applicant from transaction selection through document upload, AI-powered liveness verification, digital signature, and Stripe payment, ending with automated officer assignment and digital licence generation on approval.

The AI verification pipeline combines Tesseract OCR for document data extraction (98.2% accuracy, under 3 seconds), MediaPipe FaceMesh for client-side liveness detection using 468 3D facial landmarks and rPPG colour analysis, face-api.js for 128-dimensional face descriptor matching, DeepFace server-side anti-spoofing, and Claude Haiku via OpenRouter for document quality assessment. All 58 functional test cases passed at a 100% pass rate.`,
    role: 'Full-stack developer, sole developer on the frontend and co-developer on the backend.',
    stack: ['React', 'Python', 'Flask', 'PostgreSQL', 'MediaPipe', 'Tesseract', 'Stripe', 'JWT', 'DeepFace', 'OpenRouter'],
    highlights: [
      'Three role-based portals: applicant, TAJ officer, and supervisor with full audit trail',
      'Tesseract OCR extracts licence data with 98.2% accuracy in under 3 seconds',
      'Client-side liveness detection using MediaPipe FaceMesh with rPPG biological signal analysis',
      'face-api.js 128-dimensional face descriptor matching against uploaded licence photo',
      'DeepFace server-side anti-spoofing as a secondary verification gateway',
      'Claude Haiku document quality assessment with actionable officer feedback',
      'Automated officer assignment based on lowest active case count per branch',
      'Digital licence generation with background removal on approval',
      'Stripe payment processing, card data never stored by the system',
      '58 functional test cases, 100% pass rate',
    ],
    github: 'https://github.com/sydonaeengland',
    image: new URL('../assets/dlrsjam-1.JPG', import.meta.url).href,
    gallery: [
      new URL('../assets/dlrsjam-1.JPG', import.meta.url).href,
      new URL('../assets/dlrsjam-3.JPG', import.meta.url).href,
      new URL('../assets/dlrsjam-4.JPG', import.meta.url).href,
      new URL('../assets/dlrsjam-5.JPG', import.meta.url).href,
      new URL('../assets/dlrsjam-6.JPG', import.meta.url).href,
      new URL('../assets/dlrsjam-7.JPG', import.meta.url).href,
      new URL('../assets/dlrsjam-8.JPG', import.meta.url).href,
    ],
    color: '#00E5B4',
  },
  {
    id: 'clicksafe',
    name: 'ClickSafe',
    subtitle: 'AI-Powered Phishing Detection Platform',
    badge: 'Hackathon',
    tagline: '1st Place, UWI AI for Good Hackathon 2026.',
    description: `ClickSafe is an AI-powered phishing detection platform built in 24 hours at the UWI AI for Good Hackathon 2026. Phishing attacks are one of the most common and damaging forms of cybercrime, yet existing solutions are either too technical for everyday users or require expensive enterprise software. ClickSafe changes that by making AI-powered phishing protection accessible to anyone.

Users paste or submit a URL and ClickSafe analyses it instantly for phishing indicators, assessing link structure, domain reputation, redirect behaviour, and content patterns. Results are presented in plain language so non-technical users immediately understand whether a link is safe or dangerous.

The platform also connects to Gmail and Outlook via OAuth, letting users scan inbox emails directly without leaving the app. For suspicious screenshots or forwarded messages, users can upload an image and have the text extracted and scanned automatically. Every scan returns a risk score (0 to 100), a scam category, red flag breakdown, plain-language explanation, and actionable safety advice. Users can copy a full scan report or report directly to UWI IT in one click.

Awarded 1st Place at the UWI AI for Good Hackathon 2026, recognised for real-world impact potential and practical application of AI to a widespread social problem.`,
    role: 'Lead developer, designed and built the full frontend, integrated Gmail and Outlook OAuth flows, and connected the AI scan pipeline.',
    stack: ['Lovable', 'ChatGPT', 'Supabase', 'OpenRouter', 'TypeScript'],
    highlights: [
      'Awarded 1st Place, UWI AI for Good Hackathon 2026',
      'Real-time link scanning with AI-powered phishing detection',
      'Assesses link structure, domain reputation, redirect behaviour and content patterns',
      'Plain-language results built for everyday users, not security professionals',
      'Gmail and Outlook OAuth integration, scan inbox emails directly in the app',
      'Screenshot OCR, upload an image to extract and scan text automatically',
      'Colour-coded risk meter (0 to 100) with scam category and full red flag breakdown',
      'One-click report to UWI IT with exportable scan report',
      'Built end-to-end in under 24 hours',
    ],
    github: 'https://github.com/sydonaeengland/ClickSafe',
    image: new URL('../assets/clicksafe-1.jpg', import.meta.url).href,
    gallery: [
      new URL('../assets/clicksafe-1.jpg', import.meta.url).href,
      new URL('../assets/clicksafe-2.jpg', import.meta.url).href,
      new URL('../assets/clicksafe-3.jpg', import.meta.url).href,
    ],
    color: '#818CF8',
  },
  {
    id: 'learnwidmi',
    name: 'LearnWidMi',
    subtitle: 'AI Learning Platform for Jamaican Students',
    badge: 'Hackathon',
    tagline: 'Top 10 + Educational Impact Award, Intellibus x JDF Hackathon 2026.',
    description: `LearnWidMi is an AI-powered learning platform built to help Jamaican students truly understand their curriculum, not just memorise it. Most students naturally speak Jamaican Patois in daily life but are taught exclusively in Standard English, creating a gap that makes complex concepts harder to grasp. LearnWidMi bridges that gap by generating explanations in both languages, connecting academic content to how students actually communicate.

Built for the Intellibus x JDF Hackathon with a focus on PEP preparation, the platform is designed to grow into a full learning ecosystem supporting CSEC, CAPE, and potentially Caribbean Creole language learning beyond Jamaica. It earned a Top 10 finish and the Educational Impact Award.

The platform includes AI whiteboard explainer videos, flashcards, quizzes, mock exams, and past papers. Anansi, the built-in AI learning assistant, provides personalised study tips and recommendations. The Hall of Scholars gamification layer lets students earn badges and track their progress, keeping them motivated and consistent with their studies.`,
    role: 'Frontend developer and product co-designer, built the UI and integrated AI explanation and voice generation APIs.',
    stack: ['React', 'Supabase', 'ElevenLabs', 'OpenRouter'],
    highlights: [
      'Top 10 + Educational Impact Award, Intellibus x JDF Hackathon 2026',
      'AI explanations in both Standard English and Jamaican Patois',
      'AI whiteboard explainer videos that break down topics step by step',
      'Anansi AI learning assistant providing personalised study tips',
      'Hall of Scholars: gamified badges and progress tracking',
      'Flashcards, quizzes, mock exams and past papers in one platform',
      'Built to scale from PEP through CSEC and CAPE',
    ],
    github: 'https://github.com/sydonaeengland/learnwidmi',
    image: new URL('../assets/learnwidmi-1.jpg', import.meta.url).href,
    gallery: [
      new URL('../assets/learnwidmi-1.jpg', import.meta.url).href,
      new URL('../assets/learnwidmi-2.jpg', import.meta.url).href,
      new URL('../assets/learnwidmi-3.jpg', import.meta.url).href,
    ],
    color: '#F472B6',
  },
  {
    id: 'courseflow',
    name: 'CourseFlow',
    subtitle: 'Course Management Platform',
    badge: 'Academic',
    tagline: 'Full-stack course management with JWT auth and Docker deployment.',
    description: `CourseFlow is a full-stack course management platform built as an academic project. It supports student enrolment, assignment submission, grade tracking, and instructor management, covering the core operations of a learning management system.

The backend uses connection pooling for efficient database access under load, and the entire application is containerised with Docker for consistent deployment. Authentication uses JWT with refresh token rotation, and all API routes are protected with role-based middleware.`,
    role: 'Full-stack developer.',
    stack: ['Python', 'Flask', 'MySQL', 'JavaScript', 'Docker', 'JWT'],
    highlights: [
      'JWT authentication with refresh token rotation',
      'Connection pooling for high-throughput database access',
      'Dockerised deployment with docker-compose',
      'Role-based access for students and instructors',
      'Assignment submission and grade management',
    ],
    github: 'https://github.com/sydonaeengland',
    image: '/assets/images/projects/courseflow.png',
    color: '#FB923C',
  },
  {
    id: 'mrc',
    name: 'MRC School Management System',
    subtitle: 'Desktop School Administration System',
    badge: 'Academic',
    tagline: 'Replacing paper-based school administration with a structured, role-based desktop system.',
    description: `MRC Family School had no digital system. Student enrolment, class assignments, attendance, grades, and staff records were all managed by hand. This desktop application replaced every one of those manual processes with a centralised system built around a repository architecture pattern — each module is independent, connected through a central data layer, so changes in one area do not break another.

Two access levels keep things clean: teachers manage their own classes, attendance records, and grade entries; administrators have full access across all modules including student enrolment and staff records. Every staff action is logged for accountability.

Six modules cover the full scope of school administration: Student Management, Class Management, Attendance, Grade Management, Staff Management, and a Reporting and Analytics module that aggregates data across all of them to generate individual student summaries, class averages, and performance trends.`,
    role: 'Team member, led the Student Management and Grade Management modules.',
    stack: ['Java', 'MySQL'],
    highlights: [
      'Repository architecture keeps all six modules independent with a shared data layer',
      'Role-based access: teachers and administrators have separate, enforced permission levels',
      'Grade module automatically calculates student averages and class-wide performance trends',
      'Reporting module aggregates data across all modules for summaries and historical records',
      'All staff actions logged for accountability and compliance',
      'Offline-capable, no internet dependency required',
    ],
    github: 'https://github.com/sydonaeengland',
    image: '/assets/images/projects/mrc.png',
    color: '#60A5FA',
  },
  {
    id: 'care',
    name: 'CareLink',
    subtitle: 'Remote Elder Care Connection App',
    badge: 'Design',
    tagline: 'Giving overseas families a reliable way to care for elderly relatives back home.',
    description: `CareLink is a mobile app concept designed for INFO3170: User Interface Design. Many Jamaicans living overseas rely on informal WhatsApp coordination and money transfers to arrange care for elderly relatives at home. There is no tracking, no verification, no safety net — just hope that things go smoothly. CareLink was designed to replace that with a trusted, accessible platform built specifically for this situation.

The design process started with user research: interviews with elderly participants aged 70 to 82 and their overseas family members, focusing on daily routines, safety concerns, and existing workarounds. A review of three competing platforms confirmed the gap — no existing solution combines grocery delivery, medication pickup, verified caregivers, elderly-accessible design, and real-time family visibility in one place for the Jamaican market.

The resulting design prioritises trust, visibility, and accessibility at every step. Verified provider profiles with photos are visible to families before anyone arrives at the home. Every delivery requires photo confirmation. An emergency button sends simultaneous alerts to the family abroad, the assigned caregiver, and local responders. For elderly users specifically, the interface uses large fonts, voice assistance, one-tap confirmations, and plain-language prompts throughout — designed so that usability could be measured by how long elderly users take to complete core tasks without any help.`,
    role: 'Lead UI/UX Designer — conducted user research, designed all wireframes, and built the high-fidelity prototype in Figma.',
    stack: ['Figma'],
    highlights: [
      'User research with elderly participants and overseas family members informed every design decision',
      'Verified provider network with photo identification visible to families before anyone arrives',
      'Real-time tracking and photo confirmation required for every completed delivery or visit',
      'Emergency alert simultaneously notifies family abroad, assigned caregiver, and local responders',
      'Accessibility-first design: large fonts, voice assistance, one-tap confirmations, plain-language prompts',
      'SMS and offline fallback for rural areas with unreliable internet or power',
      'Full process from research and competitive analysis through wireframes to high-fidelity prototype',
    ],
    github: 'https://github.com/sydonaeengland',
    image: new URL('../assets/care-1.jpg', import.meta.url).href,
    gallery: [
      new URL('../assets/care-1.jpg', import.meta.url).href,
      new URL('../assets/care-2.png', import.meta.url).href,
      new URL('../assets/care-3.png', import.meta.url).href,
    ],
    color: '#C9A84C',
  },
];
