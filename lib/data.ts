import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'Yahyabouzakri123@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Yahya, I am reaching out to you because...',

    oldPortfolio: 'https://www.yahyabouzekri.dev',
    upworkProfile: 'https://www.linkedin.com/in/yahya-bouzekri',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/te4axe' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/yahya-bouzekri' },
    { name: 'facebook', url: 'https://www.facebook.com/luffy.bou.3/' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Flight Booking Web Platform',
        slug: 'flight-booking-system',
        liveUrl: '', // TODO: dkhel URL dyal live demo ila kayna
        year: 2025,
        description: `
      A dynamic flight reservation web application allowing users to search, compare, and book airline tickets online with a smooth and intuitive user experience. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>✈️ Flight Search System: Search and filter available flights easily</li>
        <li>💳 Booking Flow: Simple and secure reservation process</li>
        <li>📱 Responsive UI: Optimized for mobile, tablet, and desktop</li>
        <li>⚡ Fast Navigation: Smooth and interactive frontend experience</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      <ul>
        <li>Built the entire UI using HTML, CSS, and JavaScript</li>
        <li>Implemented dynamic search and filtering logic</li>
        <li>Designed responsive layout for all devices</li>
        <li>Focused on UX simplicity and performance</li>
      </ul>
      `,
        techStack: ['HTML', 'CSS', 'JavaScript'],
        // TODO: bdel had l'image b thumbnail dyal flight booking project (ratio: 16/9 recommended)
        thumbnail: '/projects/thumbnail/flight-booking.webp',
        // TODO: bdel had l'image b long thumbnail dyal flight booking (ratio: portrait, 9/16)
        longThumbnail: '/projects/long/flight-booking.webp',
        images: [
            // TODO: zid screenshots dyal l'application — homepage, search results, booking page...
            '/projects/images/flight-booking-1.webp',
            '/projects/images/flight-booking-2.webp',
        ],
    },
    {
        title: 'School Management System',
        slug: 'school-management-system-upm',
        liveUrl: '', // TODO: dkhel URL ila kayna, wella sifet string khawi
        year: 2025,
        description: `
      A web-based academic management platform designed for Université Privée de Marrakech, enabling structured communication between administrators, teachers, and students. The system centralizes timetables, exercises, and attendance tracking in one unified platform. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>📅 Timetable Management: Students and teachers can access personalized schedules</li>
        <li>👨‍🏫 Teacher Portal: Teachers can publish exercises, manage classes, and mark attendance</li>
        <li>🎓 Student Portal: Students can view timetable, access assignments, and track lessons</li>
        <li>📝 Exercises System: Teachers assign tasks and students can view them online</li>
        <li>📊 Attendance Tracking: Teachers can record absences and monitor student presence</li>
        <li>🔐 Role-Based Access: Admin, teachers, and students each have dedicated dashboards</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      <ul>
        <li>Developed authentication and role-based access system</li>
        <li>Built admin dashboard for managing students and teachers</li>
        <li>Implemented timetable and class management modules</li>
        <li>Created attendance and exercises tracking features</li>
      </ul>
      `,
        techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        // TODO: bdel had l'image b thumbnail dyal school management system
        thumbnail: '/projects/thumbnail/school-management.webp',
        // TODO: bdel had l'image b long thumbnail dyal school management system
        longThumbnail: '/projects/long/school-management.webp',
        images: [
            // TODO: zid screenshots — admin dashboard, timetable page, teacher portal, student portal...
            '/projects/images/school-management-1.webp',
            '/projects/images/school-management-2.webp',
            '/projects/images/school-management-3.webp',
        ],
    },
    {
        title: 'Ultra PC Order Tracking & Production System',
        slug: 'ultra-pc-order-tracking',
        liveUrl: 'https://ups-umzl.vercel.app/',
        year: 2025,
        description: `
      A complete internal order tracking system developed for Ultra PC, managing the full production workflow from order reception to final delivery. The system ensures real-time tracking and smooth communication between all departments. <br/><br/>

      Workflow Process:<br/>
      <ul>
        <li>🛒 Reception: Customer order is received and registered</li>
        <li>🔧 Components Preparation: Required parts are collected and validated</li>
        <li>🖥️ Assembly: Technician assembles the PC</li>
        <li>📦 Packaging: Product is packaged and prepared for shipment</li>
        <li>🚚 Delivery: Order is shipped to the client</li>
        <li>✅ Client Confirmation: Client confirms reception via official website</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      <ul>
        <li>Designed and implemented full workflow system</li>
        <li>Built real-time notifications between departments</li>
        <li>Developed role-based system (Reception, Assembly, Delivery, Admin)</li>
        <li>Integrated client-side order tracking page</li>
      </ul>
      `,
        techStack: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
        // TODO: bdel had l'image b thumbnail dyal Ultra PC system
        thumbnail: '/projects/thumbnail/ultra-pc.webp',
        // TODO: bdel had l'image b long thumbnail dyal Ultra PC system
        longThumbnail: '/projects/long/ultra-pc.webp',
        images: [
            // TODO: zid screenshots — order list, production stages, tracking page, admin dashboard...
            '/projects/images/ultra-pc-1.webp',
            '/projects/images/ultra-pc-2.webp',
            '/projects/images/ultra-pc-3.webp',
        ],
    },
    {
        title: 'Storage Company Landing Page',
        slug: 'storage-company-landing',
        liveUrl: '', // TODO: dkhel URL dyal landing page
        year: 2025,
        description: `
      A dynamic landing page designed for a storage company, showcasing services, pricing, and customer benefits. Built to improve online presence and client engagement. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🏢 Services Showcase: Clear presentation of storage solutions</li>
        <li>📦 Modern UI: Clean and professional design</li>
        <li>📈 Conversion Focused: Optimized for client acquisition</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      <ul>
        <li>Designed and developed landing page from scratch</li>
        <li>Built responsive UI for all devices</li>
        <li>Improved UX to increase user engagement</li>
      </ul>
      `,
        techStack: ['HTML', 'CSS', 'JavaScript'],
        // TODO: bdel had l'image b thumbnail dyal storage landing page
        thumbnail: '/projects/thumbnail/storage-landing.webp',
        // TODO: bdel had l'image b long thumbnail dyal storage landing page
        longThumbnail: '/projects/long/storage-landing.webp',
        images: [
            // TODO: zid screenshots dyal landing page — hero section, services, pricing...
            '/projects/images/storage-landing-1.webp',
            '/projects/images/storage-landing-2.webp',
        ],
    },
    {
        title: 'Personal Developer Portfolio',
        slug: 'portfolio-2-0',
        liveUrl: '', // TODO: dkhel URL dyal portfolio dyalk
        year: 2026,
        description: `
      A modern personal portfolio website showcasing my projects, skills, and professional experience as an IT student and full-stack developer. Built with a focus on performance, animation, and clean UI/UX. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🎨 Modern UI Design: Smooth and visually appealing interface</li>
        <li>⚡ Fast Performance: Optimized for speed and responsiveness</li>
        <li>📱 Fully Responsive: Works on all devices</li>
        <li>🧩 Projects Showcase: Dynamic project listing section</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      <ul>
        <li>Designed and developed entire portfolio from scratch</li>
        <li>Implemented animations and interactive UI components</li>
        <li>Structured projects and experience sections professionally</li>
        <li>Deployed and optimized for production</li>
      </ul>
      `,
        techStack: ['React', 'Next.js', 'Tailwind CSS'],
        // TODO: bdel had l'image b thumbnail dyal portfolio (screenshot dyal homepage)
        thumbnail: '/projects/thumbnail/portfolio.webp',
        // TODO: bdel had l'image b long thumbnail dyal portfolio
        longThumbnail: '/projects/long/portfolio.webp',
        images: [
            // TODO: zid screenshots dyal portfolio — homepage, projects section, about, contact...
            '/projects/images/portfolio-1.webp',
            '/projects/images/portfolio-2.webp',
            '/projects/images/portfolio-3.webp',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'IT Support Intern',
        company: 'Aéroport Marrakech Menara',
        duration: 'Jun 2023 - Jul 2023',
    },
    {
        title: 'Database Intern',
        company: 'Bounassi Travaux',
        duration: 'Jun 2024 - Jul 2024',
    },
    {
        title: 'Backend & Database Intern',
        company: 'Ultra PC (Marrakech)',
        duration: 'Jul 2025 - Aug 2025',
    },
    {
        title: 'Database Intern',
        company: 'Bounassi Travaux',
        duration: 'Sep 2025 - Mar 2026',
    },
];