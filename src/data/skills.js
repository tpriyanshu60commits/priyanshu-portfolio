export const skillsCategories = [
  {
    category: "Languages",
    description: "Core programming and querying languages for web architecture.",
    skills: [
      { name: "JavaScript", isCore: true, color: "text-amber-500", bg: "bg-amber-50/90 border-amber-200" },
      { name: "Java", isCore: false, color: "text-red-500", bg: "bg-red-50/90 border-red-200" },
      { name: "SQL", isCore: false, color: "text-sky-600", bg: "bg-sky-50/90 border-sky-200" },
    ]
  },
  {
    category: "Frontend",
    description: "Building modern, scalable, and responsive web user interfaces.",
    skills: [
      { name: "React.js", isCore: true, color: "text-cyan-500", bg: "bg-cyan-50/90 border-cyan-200" },
      { name: "HTML5", isCore: false, color: "text-orange-500", bg: "bg-orange-50/90 border-orange-200" },
      { name: "CSS3", isCore: false, color: "text-blue-500", bg: "bg-blue-50/90 border-blue-200" },
      { name: "Bootstrap", isCore: false, color: "text-purple-500", bg: "bg-purple-50/90 border-purple-200" },
      { name: "Responsive Design", isCore: false, color: "text-teal-600", bg: "bg-teal-50/90 border-teal-200" },
    ]
  },
  {
    category: "Backend",
    description: "Architecting reliable REST APIs, middleware pipelines, and server runtime.",
    skills: [
      { name: "Node.js", isCore: true, color: "text-emerald-600", bg: "bg-emerald-50/90 border-emerald-200" },
      { name: "Express.js", isCore: true, color: "text-slate-800", bg: "bg-slate-50/90 border-slate-200" },
      { name: "REST APIs", isCore: true, color: "text-indigo-600", bg: "bg-indigo-50/90 border-indigo-200" },
      { name: "Middleware", isCore: false, color: "text-slate-700", bg: "bg-slate-50/90 border-slate-200" },
      { name: "API Integration", isCore: false, color: "text-teal-600", bg: "bg-teal-50/90 border-teal-200" },
    ]
  },
  {
    category: "Database",
    description: "Designing database schemas and object-data modeling.",
    skills: [
      { name: "MongoDB", isCore: true, color: "text-emerald-600", bg: "bg-emerald-50/90 border-emerald-200" },
      { name: "Mongoose", isCore: true, color: "text-rose-600", bg: "bg-rose-50/90 border-rose-200" },
    ]
  },
  {
    category: "Auth & Security",
    description: "Securing endpoints, cookies, tokens, and multi-role access control.",
    skills: [
      { name: "JWT", isCore: true, color: "text-purple-600", bg: "bg-purple-50/90 border-purple-200" },
      { name: "HTTP-only Cookies", isCore: false, color: "text-amber-600", bg: "bg-amber-50/90 border-amber-200" },
      { name: "Authentication", isCore: true, color: "text-blue-600", bg: "bg-blue-50/90 border-blue-200" },
      { name: "Authorization", isCore: true, color: "text-teal-600", bg: "bg-teal-50/90 border-teal-200" },
      { name: "Role-Based Access Control", isCore: true, color: "text-emerald-600", bg: "bg-emerald-50/90 border-emerald-200" },
    ]
  },
  {
    category: "AI / GenAI",
    description: "Integrating modern LLMs, streaming architectures, and prompt pipelines.",
    skills: [
      { name: "LLM API Integration", isCore: true, color: "text-violet-600", bg: "bg-violet-50/90 border-violet-200" },
      { name: "Prompt Engineering", isCore: false, color: "text-pink-600", bg: "bg-pink-50/90 border-pink-200" },
      { name: "Structured Outputs", isCore: false, color: "text-indigo-600", bg: "bg-indigo-50/90 border-indigo-200" },
      { name: "SSE Streaming", isCore: true, color: "text-teal-600", bg: "bg-teal-50/90 border-teal-200" },
    ]
  },
  {
    category: "APIs & Services",
    description: "Payment gateways, cloud storage CDN, mapping, and external services.",
    skills: [
      { name: "Razorpay", isCore: true, color: "text-blue-600", bg: "bg-blue-50/90 border-blue-200" },
      { name: "Cloudinary", isCore: true, color: "text-sky-600", bg: "bg-sky-50/90 border-sky-200" },
      { name: "Google Maps API", isCore: true, color: "text-emerald-600", bg: "bg-emerald-50/90 border-emerald-200" },
      { name: "External REST APIs", isCore: false, color: "text-slate-700", bg: "bg-slate-50/90 border-slate-200" },
    ]
  },
  {
    category: "Tools",
    description: "Version control, API testing tools, and developer environments.",
    skills: [
      { name: "Git", isCore: true, color: "text-orange-600", bg: "bg-orange-50/90 border-orange-200" },
      { name: "GitHub", isCore: true, color: "text-slate-900", bg: "bg-slate-50/90 border-slate-200" },
      { name: "Postman", isCore: true, color: "text-orange-500", bg: "bg-orange-50/90 border-orange-200" },
      { name: "VS Code", isCore: false, color: "text-blue-500", bg: "bg-blue-50/90 border-blue-200" },
    ]
  }
];

export const primaryStackHighlights = [
  { name: "React.js", category: "Frontend" },
  { name: "JavaScript", category: "Languages" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "GenAI & Agentic AI", category: "AI / GenAI" },
];
