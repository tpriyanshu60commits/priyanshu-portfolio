import cravingsHeroImg from "../assets/images/cravings/cravings-hero.png";
import verdantxHeroImg from "../assets/images/verdantx/verdantx-hero.png";

export const projectsData = [
  {
    id: "cravings",
    title: "Cravings",
    roleTitle: "Full-Stack Food Delivery Platform",
    subtitle: "Full-Stack Food Delivery Platform",
    tagline: "A multi-role food delivery platform with dedicated workflows for Customers, Restaurants, Riders, and Admins, featuring live GPS tracking and Razorpay payments.",
    description: "Cravings is a full-stack food delivery platform built with React.js, Node.js, Express.js, and MongoDB. It features multi-role access control, restaurant ordering workflows, Razorpay payment processing, Cloudinary media uploads, and Google Maps GPS rider tracking.",
    category: "Full-Stack Platform",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary", "Google Maps"],
    image: cravingsHeroImg,
    accentColor: "from-orange-500/20 to-rose-500/20",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    liveDemo: "https://cravings-liart.vercel.app",
    github: "https://github.com/tpriyanshu60commits/Cravings",
    caseStudyUrl: "/projects/cravings",
    overview: "Built and deployed an end-to-end multi-role food delivery platform engineered with React.js, Node.js, Express.js, and MongoDB. The system streamlines real-time coordination across customers, restaurants, delivery riders, and administrators with secure payment processing and live map tracking.",
    resumeBullets: [
      "Built and deployed a multi-role food delivery platform with dedicated workflows for Customers, Restaurants, Riders, and Admins.",
      "Implemented JWT-based authentication and role-based access control to secure protected REST APIs and application workflows.",
      "Developed end-to-end restaurant ordering and order-status workflows, including customer ordering, restaurant processing, rider pickup, and delivery tracking.",
      "Integrated Razorpay payment processing, Cloudinary media uploads, GPS-based rider tracking, Google Maps navigation, and order tracking."
    ],
    features: [
      {
        title: "Multi-Role Workflows (4 Roles)",
        description: "Dedicated interfaces and authorization pipelines for Customers, Restaurants, Delivery Riders, and Platform Admins."
      },
      {
        title: "JWT Authentication & Role-Based Access Control",
        description: "Protected REST APIs secured with JWT verification and strict role-based permission guards."
      },
      {
        title: "End-to-End Order Lifecycle Workflows",
        description: "Seamless state transitions from customer ordering, restaurant preparation and processing, rider assignment, to final delivery tracking."
      },
      {
        title: "Razorpay Online Payment Processing",
        description: "Secure checkout pipeline handling payment verification, webhook signatures, and transactional order confirmation."
      },
      {
        title: "Google Maps Navigation & Rider Tracking",
        description: "GPS-based rider location tracking and interactive Google Maps routing for real-time order delivery updates."
      },
      {
        title: "Cloudinary Cloud Media Management",
        description: "Optimized storage and delivery of restaurant banners, menu imagery, and proof-of-delivery uploads."
      }
    ],
    architecture: {
      frontend: "React.js (Vite) + Responsive UI + Client State Management",
      apiLayer: "Protected REST APIs with Express Router & JWT Auth Guards",
      backend: "Node.js + Express.js handling multi-role order workflows",
      database: "MongoDB with Mongoose ODM (Users, Restaurants, Orders, Delivery Logs)",
      integrations: "Razorpay Payment Gateway, Cloudinary Media CDN, Google Maps API"
    }
  },
  {
    id: "verdantx",
    title: "VerdantX",
    roleTitle: "Environmental Intelligence & Health Advisory Platform",
    subtitle: "Environmental Intelligence & Health Advisory Platform",
    tagline: "An environmental intelligence platform integrating real-time AQI and weather APIs, an EPA risk engine, and an SSE-streaming Groq LLM health assistant.",
    description: "VerdantX is an environmental intelligence and health advisory platform built with React.js, Node.js, Express.js, and MongoDB. It combines real-time AQI and weather APIs with an EPA-based risk engine, Groq LLMs for structured health reports, an SSE-streaming AI assistant, and Leaflet environmental mapping.",
    category: "AI & Environmental Platform",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq AI", "Leaflet", "SSE"],
    image: verdantxHeroImg,
    accentColor: "from-emerald-500/20 to-teal-500/20",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    liveDemo: "https://hack-in-motion-ricr-him-1092.vercel.app",
    github: "https://github.com/tpriyanshu60commits/HackInMotion-RICR-HIM-1092",
    caseStudyUrl: "/projects/verdantx",
    overview: "Developed and presented at the HackInMotion Hackathon (Secured 10th position among 120 teams). VerdantX delivers real-time environmental monitoring, algorithmic health risk classifications, and AI-powered personalized health advisories powered by Groq LLMs.",
    resumeBullets: [
      "Built environmental dashboards integrating real-time AQI and weather APIs with an EPA-based risk engine for environmental health classification.",
      "Integrated Groq LLMs to generate structured health reports and developed an SSE-streaming environmental AI assistant for incremental responses.",
      "Developed route pollution analysis, civic issue reporting, automated alerts, and Leaflet-based environmental mapping using multiple external APIs."
    ],
    features: [
      {
        title: "Real-Time AQI & Weather Integration",
        description: "Aggregates environmental data streams from external APIs with an EPA-based algorithmic risk classification engine."
      },
      {
        title: "Groq LLM Structured Health Reports",
        description: "Utilizes high-speed Groq AI inference to synthesize environmental parameters into actionable, personalized health advisories."
      },
      {
        title: "SSE-Streaming Environmental AI Assistant",
        description: "Server-Sent Events (SSE) streaming pipeline delivering instant, low-latency incremental responses for user health queries."
      },
      {
        title: "Leaflet Environmental & Pollution Mapping",
        description: "Interactive geospatial visualization rendering regional air quality heatmaps and environmental hotspots."
      },
      {
        title: "Route Pollution Analysis & Commute Advisory",
        description: "Evaluates transit paths against real-time pollution metrics to suggest lower-exposure travel alternatives."
      },
      {
        title: "Civic Issue Reporting & Automated Alerts",
        description: "Enables community members to report local environmental concerns with automated risk threshold notifications."
      }
    ],
    architecture: {
      frontend: "React.js with interactive Leaflet Maps & SSE Stream Listener",
      apiLayer: "REST Endpoints & Server-Sent Events (SSE) streaming channels",
      backend: "Node.js + Express.js handling EPA Risk Engine & API Orchestration",
      database: "MongoDB for environmental logs, user profiles, and civic reports",
      integrations: "Groq LLM AI Engine, Real-time AQI & Weather APIs, Leaflet Maps"
    }
  }
];
