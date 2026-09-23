// Portfolio Configuration Data
// Edit this file to update your portfolio content without touching HTML/CSS/JS

const portfolioData = {
  profile: {
    name: 'Yasmin Haytham Eid',
    firstName: 'Yasmin',
    role: 'Full-Stack Developer',
    location: 'Alexandria, Egypt',
    email: 'yasmina.haytham@gmail.com',
    phone: '+20 109 470 7353',
    github: 'https://github.com/yasminhaytham',
    linkedin: 'https://www.linkedin.com/in/yasmin-haytham-b10738360',
    resume: 'yasmin-haytham-resume.pdf',
    tagline: 'I am a full-stack developer who builds complete, end-to-end web products — with my core strength on the back end.',
    bio: [
      'I am a full-stack developer and a computer & communications engineering student at Alexandria University. I love turning ideas into fast, accessible, and visually polished web experiences from the database all the way to the interface.',
      'My core strength is back-end development — designing data models, APIs, and application logic — and I pair it with solid front-end skills in HTML, CSS, and JavaScript to ship complete products. I work across Python (Django), Node.js, and MongoDB, and I am always deepening my back-end expertise.',
    ],
  },

  skillGroups: [
    {
      title: 'Front-End (Proficient)',
      accent: 'violet',
      items: [
        { name: 'HTML', level: 'Proficient' },
        { name: 'CSS', level: 'Proficient' },
        { name: 'JavaScript', level: 'Proficient' },
      ],
    },
    {
      title: 'Back-End & Frameworks (Growing)',
      accent: 'fuchsia',
      items: [
        { name: 'Node.js', level: 'Beginner' },
        { name: 'Angular', level: 'Beginner' },
        { name: 'MongoDB', level: 'Experienced' },
      ],
    },
    {
      title: 'Languages & Tools',
      accent: 'cyan',
      items: [
        { name: 'C', level: '' },
        { name: 'Java', level: '' },
        { name: 'Python', level: '' },
        { name: 'Django', level: '' },
      ],
    },
  ],

  experiences: [
    // ---- Experiences (newest first) ----
    {
      type: 'Experience',
      title: 'Internship — NTI (National Telecommunication Institute)',
      date: 'Aug 2026 — Sep 2026',
      points: [
        'Learned ES6, Node.js, TypeScript, and MongoDB through hands-on back-end training.',
        'Built the PhysioProgress rehabilitation platform as the internship capstone project.',
      ],
    },
    {
      type: 'Experience',
      title: 'Intern — Alexandria Electricity Distribution Company (AEDC)',
      date: 'Aug 2025',
      points: [
        'Attended theoretical sessions on Cybersecurity, Database Systems, and Python Back-End (Django).',
        'Participated in hands-on sessions covering Database Systems and Python Back-End (Django).',
      ],
    },
    {
      type: 'Experience',
      title: 'Student Volunteer — Alexandria University Student Union',
      date: 'Sep 2024',
      points: [
        'Assisted in registering new students during enrollment periods.',
        'Answered student inquiries about academic structure and procedures.',
        'Supported administrative activities for smooth onboarding and student services.',
      ],
    },
    {
      type: 'Experience',
      title: 'Student Volunteer — British Language School',
      date: '2019 — 2021',
      points: [
        'Helped organize school events and ceremonies and coordinated guest seating.',
        'Participated in on-stage presentations during official school events.',
        'Assisted visitors and guests with inquiries to ensure a positive experience.',
      ],
    },

    // ---- Projects (newest first) ----
    {
      type: 'Project',
      title: 'PhysioProgress — Digital Physical Rehabilitation Platform',
      date: '2025',
      tag: 'Built during NTI internship',
      points: [
        'Built a platform connecting therapists with patients to track sessions, pain levels, and treatment protocol adherence in real time.',
        'Patient session logs support adding, editing, and deleting sessions, an SVG pain trend chart, and an adherence-rate view.',
        'Therapist hub lets therapists select a patient, choose a date range, view records, and see alert cards for high pain levels (above 6) with weekly/monthly adherence rates.',
        'Added instant filtering by date (7/30/60 days or custom), pagination, and confirmation toasts.',
      ],
      images: [
        './images/PP1.png',
        './images/PP2.png',
        './images/PP3.png',
        './images/PP4.png',
        './images/PP5.png',
      ],
    },
    {
      type: 'Project',
      title: 'Twimba — X (Twitter) Clone',
      date: '2025',
      points: [
        'Built a social feed where users can post new tweets and interact with existing posts.',
        'Implemented one-click retweet/repost with a live counter and a like toggle button with a live counter.',
        'Added an expandable, read-only comments section below each post.',
      ],
      images: [
        './images/T1.png',
        './images/T2.png',
        './images/T3.png',
        './images/T4.png',
      ],
    },
    {
      type: 'Project',
      title: "Jimmy's Diner — Food Ordering Web App",
      date: '2025',
      points: [
        'Built a dynamic menu with items, prices, ingredients, and quick add buttons.',
        'Implemented cart management with quantity adjustment and automatic total calculation.',
        'Added a secure popup payment modal and an instant personalized order confirmation message.',
      ],
      images: [
        './images/R1.png',
        './images/R2.png',
        './images/R3.png',
        './images/R4.png',
        './images/R5.png',
      ],
    },
    {
      type: 'Project',
      title: 'SkillForge — Java Swing Desktop Application',
      date: 'Nov 2025',
      points: [
        'Built a Java Swing desktop app for course management, quizzes, and certification tracking.',
        'Developed interactive GUI components and application logic using object-oriented programming.',
        'Used CSV files for data storage and management.',
      ],
      images: [
        'placeholder.svg',
        'placeholder.svg',
        'placeholder.svg',
      ],
    },
    {
      type: 'Project',
      title: 'Sudoku Game — Java Swing Desktop Application',
      date: 'Nov 2025',
      points: [
        'Built a Sudoku app using the MVC architecture and software design patterns.',
        'Implemented validated puzzle generation with Easy, Medium, and Hard difficulty levels.',
        'Developed board verification, incorrect-cell highlighting, undo, and auto-solve features.',
        'Applied OOP principles to create a modular, maintainable system.',
      ],
      images: [
        'placeholder.svg',
        'placeholder.svg',
        'placeholder.svg',
      ],
    },
    {
      type: 'Project',
      title: 'Hotel Management System — C',
      date: 'Dec 2024',
      points: [
        'Developed a console-based hotel management system in C.',
        'Implemented reservation, check-in, check-out, cancellation, and customer record management.',
        'Generated daily reports and maintained records with file-handling operations.',
        'Used text (.txt) and binary (.bin) files for persistent data storage and retrieval.',
      ],
      images: [
        'placeholder.svg',
        'placeholder.svg',
        'placeholder.svg',
      ],
    },
  ],

  education: [
    {
      school: 'Alexandria University — SSP (Specialized Scientific Programs)',
      detail: "Pursuing a Bachelor's degree in Computer & Communications Engineering.",
      date: '2023 — Present',
    },
    {
      school: 'British Language School',
      detail: 'Graduated with Excellent grades.',
      date: '2007 — 2023',
    },
  ],

  spokenLanguages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'French', level: 'Intermediate' },
  ],

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}