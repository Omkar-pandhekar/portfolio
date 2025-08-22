export const projects = [
  {
    id: "1",
    key: "health",
    title: "Healthcare Portal",
    description: "Telemedicine Platform",
    intro:
      "The Healthcare Portal is a telemedicine platform that connects patients, doctors, and hospitals. It facilitates appointment booking, secure file sharing, and provides an AI-powered symptom checker to improve healthcare accessibility.",
    overview:
      "Built with Next.js and MongoDB, this platform offers a scalable and secure solution for digital healthcare. It features a multi-role system and real-time chat to enhance patient-doctor communication and streamline medical services.",
    year: 2024,
    techstack: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "NextAuth.js",
    ],
    features: {
      "Multi-Role System":
        "Dedicated dashboards and permissions for Patients, Doctors, Hospital Staff, and Admins.",
      "Appointment Management":
        "Allows users to book, reschedule, cancel, and track the status of medical appointments.",
      "AI Symptom Checker":
        "Provides an intelligent health assessment for users based on their symptoms.",
      "Secure File Sharing":
        "Enables secure upload, download, and exchange of medical documents between patients and doctors.",
      "Real-time Chat":
        "WebSocket-powered, real-time communication system for direct patient-doctor interaction.",
    },
    href: "https://github.com/Omkar-pandhekar/smart-healthcare-portal",
    src: "/projects/healthcare/Home.png",
    img1: "/projects/healthcare/Home.png",
    screens: [
      "/projects/healthcare/User-Overview.png",
      "/projects/healthcare/Appointments.png",
      "/projects/healthcare/Chat.png",
      "/projects/healthcare/Files.png",
      "/projects/healthcare/Doctor-Overview.png",
      "/projects/healthcare/Hospital-Overview.png",
    ],
  },
  {
    id: "2",
    key: "rentease",
    title: "RentEase",
    description: "Real Estate Platform",
    intro:
      "A full-stack rental property management platform that connects property managers with tenants, streamlining the entire rental process from discovery to lease management.",
    overview:
      "Developed using Next.js 15 (React 19) and a PostgreSQL backend with PostGIS, RentEase provides a type-safe, mobile-first experience. Its architecture is built for performance and scalability, featuring interactive maps and a modern, user-friendly interface to simplify property management.",
    year: 2024,
    techstack: [
      "Next.js",
      "React 19",
      "PostgreSQL",
      "Prisma",
      "AWS S3",
      "Tailwind CSS",
    ],
    features: {
      "Advanced Property Discovery":
        "Interactive Mapbox integration allows for location-based searching and filtering by price, amenities, and property type.",
      "Dual-Role System":
        "Custom dashboards and functionalities for both Tenants and Property Managers.",
      "Lease Management":
        "A streamlined rental application process with digital tracking for Pending, Approved, or Denied statuses.",
      "Geospatial Queries":
        "Utilizes PostGIS for powerful location-based data filtering and neighborhood searches.",
      "Secure Payment System":
        "Manages monthly rent, security deposits, and tracks payment history with multiple statuses.",
    },
    href: "/projects/rentease",
    src: "/projects/rentease/Intro.png",
    img1: "/projects/rentease/Home-1.png",
    screens: ["/projects/rentease/home.png", "/projects/rentease/search.png"],
  },
  {
    id: "3",
    key: "notion",
    title: "AI-Notion",
    description: "Collaborative AI Editor",
    intro:
      "A modern document editor that combines real-time collaboration with powerful AI capabilities for translation, summarization, and document analysis.",
    overview:
      "Using Next.js 15 with Turbopack, Liveblocks for collaboration, and Firebase for the backend, AI-Notion delivers a seamless, high-performance editing experience. It's a sophisticated tool designed for today's distributed work environments, bridging the gap between traditional editors and intelligent, collaborative platforms.",
    year: 2024,
    techstack: [
      "Next.js",
      "Firebase",
      "Liveblocks",
      "TypeScript",
      "Clerk",
      "Tailwind CSS",
    ],
    features: {
      "Real-time Collaboration":
        "Live, multi-user editing with presence indicators, cursors, and conflict-free data sync using Liveblocks and Yjs.",
      "AI Document Chat":
        "Allows users to ask questions about the document's content and receive intelligent, AI-powered responses.",
      "Multi-Language Translation":
        "Translate entire documents into over 12 languages, including Hindi, Spanish, German, and Japanese.",
      "Rich Text Editor":
        "Features a powerful, block-based rich text editor powered by BlockNote, with hierarchical document organization.",
      "Permission Management":
        "Securely invite users to documents and manage their access with Owner and Editor roles via Clerk authentication.",
    },
    href: "https://ai-notion-m0yakz7yl-omkarpandhekar-8907s-projects.vercel.app",
    src: "/projects/Notion/Poster.png",
    img1: "/projects/ai-notion/editor.png",
    screens: [
      "/projects/ai-notion/dashboard.png",
      "/projects/ai-notion/collaboration.png",
      "/projects/ai-notion/ai-chat.png",
    ],
  },
  {
    id: "4",
    key: "social-shelf",

    title: "Social Shelf",
    description: "Library Management & Social Platform",
    intro:
      "A comprehensive library management system that combines traditional services with modern social features, allowing users to rent and donate books, join events, and connect with other readers.",
    overview:
      "Built with Next.js 15 and MongoDB, Social Shelf offers a modern, scalable solution for libraries and educational institutions. It features a responsive, mobile-first design with a theme toggle for dark/light mode and smooth animations to create an engaging user experience.",
    year: 2023,
    techstack: [
      "Next.js",
      "MongoDB",
      "NextAuth.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: {
      "Book Rental & Fines":
        "Users can rent books with due dates, track status, and the system automatically calculates fines for overdue items.",
      "Event Management":
        "Admins can create and manage library events, while users can register for them and track capacity.",
      "Book Donation System":
        "A dedicated portal for users to donate books, which includes an admin approval and condition assessment process.",
      "Admin Dashboard":
        "A powerful dashboard for managing users, book inventory, rentals, donations, events, and viewing analytics.",
      "Multi-Role Authentication":
        "Secure, role-based access control with distinct features for Students, Admins, and regular users.",
    },
    href: "/projects/social-shelf",
    src: "/projects/Socialshelf/Intro.png",
    img1: "/projects/Socialshelf/Home.png",
    screens: [
      "/projects/Socialshelf/Student-Dashboard.png",
      "/projects/SocialShelf/admin-dashboard.png",
    ],
  },

  {
    id: "5",
    key: "alumni",

    title: "Alumni Association Platform",
    description: "Community Networking Platform",
    intro:
      "A comprehensive web application designed to connect alumni, students, and administrators of the Deogiri Institute, fostering lifelong relationships and professional networking.",
    overview:
      "Built with the MERN stack (MongoDB, Express.js, React, Node.js) and Vite, this platform uses a modern component-based architecture and a mobile-first design. It serves as a centralized hub for community engagement, offering tools for career development, event management, and institutional support.",
    year: 2023,
    techstack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    features: {
      "Role-Based Access":
        "Tailored dashboards and features for three distinct user roles: Admin, Alumni, and Student.",
      "Career & Networking Hub":
        "Includes a dedicated job board for posting opportunities and searchable directories for both alumni and current students.",
      "Donation & Scholarship System":
        "Allows alumni to make donations to specific projects and lets students apply for and manage scholarships.",
      "Event Management":
        "Admins can post and manage events like reunions and workshops, while users can register and participate.",
      "Cloud Media Management":
        "Integrates with Cloudinary for efficient cloud storage and delivery of images for the gallery and user profiles.",
    },
    href: "/projects/alumni-platform",
    src: "/projects/alumni/Intro.png",
    img1: "/projects/alumni/home.png",
    screens: [
      "/projects/alumni/directory.png",
      "/projects/alumni/events.png",
      "/projects/alumni/donations.png",
    ],
  },
  {
    id: "6",
    key: "car-prediction",
    title: "Car Price Prediction",
    description: "Machine Learning Model",
    intro:
      "A machine learning web application that predicts the selling price of used cars based on various vehicle characteristics and specifications for the Indian market.",
    overview:
      "Built with Python and Streamlit, this application uses a trained Linear Regression model to provide accurate price estimates. It features a comprehensive data preprocessing pipeline and an interactive user interface for real-time predictions.",
    year: 2023,
    techstack: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy"],
    features: {
      "Interactive UI":
        "Sliders and dropdowns for car brand, year, mileage, fuel type, and more.",
      "Real-time Prediction":
        "Instant price calculation based on user-selected input parameters.",
      "Data Preprocessing":
        "Features automatic brand name extraction and categorical encoding for the model.",
      "Model Persistence":
        "Uses a pre-trained model loaded via Pickle for efficient and fast predictions.",
      "Market Intelligence":
        "Provides data-driven price insights for buyers and sellers in the automotive market.",
    },
    href: "/projects/car-price-predictor",
    src: "/projects/CarPricePrediction/Intro.png",
    img1: "/projects/car-predictor/ui.png",
    screens: ["/projects/CarPricePrediction/Page.png"],
  },
];
