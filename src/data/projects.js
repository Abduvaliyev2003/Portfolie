// ─── Projects Data ────────────────────────────────────────────
// Keyinchalik shu massivni backend API bilan almashtirasiz:
// const PROJECTS = await fetch('/api/projects').then(r => r.json())

export const PROJECTS = [
  {
    id: 1,
    title: "NexusDB Engine",
    description:
      "High-performance distributed database engine built in Go. Supports ACID transactions, horizontal sharding, and custom query planner with sub-millisecond latency.",
    tech_stack: ["Go", "gRPC", "Raft", "Prometheus", "Docker"],
    github_url: "https://github.com/asadbek",
    category: "Backend",
    status: "active",
  },
  {
    id: 2,
    title: "Secure API Gateway",
    description:
      "Enterprise-grade API Gateway with built-in rate limiting, JWT authentication, request validation, and real-time traffic analytics dashboard.",
    tech_stack: ["Python", "FastAPI", "Redis", "Nginx", "Kubernetes"],
    github_url: "https://github.com/asadbek",
    category: "DevOps",
    status: "active",
  },
  {
    id: 3,
    title: "CipherStream",
    description:
      "End-to-end encrypted messaging microservice. Uses Signal Protocol for key exchange, WebSockets for real-time delivery, and zero-knowledge message storage.",
    tech_stack: ["Rust", "WebSockets", "PostgreSQL", "Signal Protocol"],
    github_url: "https://github.com/asadbek",
    category: "Security",
    status: "active",
  },
  {
    id: 4,
    title: "Telegram Bot Platform",
    description:
      "Scalable multi-tenant Telegram bot platform. Handles 50k+ daily messages with aiogram, async task queues and PostgreSQL persistent storage.",
    tech_stack: ["Python", "aiogram", "PostgreSQL", "Celery", "Redis"],
    github_url: "https://github.com/asadbek",
    category: "Backend",
    status: "active",
  },
  {
    id: 5,
    title: "DevOps Automation Suite",
    description:
      "Infrastructure-as-Code toolkit for automated deployments. Integrates Docker, GitHub Actions CI/CD pipelines, and Ansible playbooks for zero-downtime releases.",
    tech_stack: ["Ansible", "Docker", "GitHub Actions", "Terraform", "Bash"],
    github_url: "https://github.com/asadbek",
    category: "DevOps",
    status: "active",
  },
  {
    id: 6,
    title: "Jarvis AI Assistant",
    description:
      "Fully offline voice-enabled Linux AI assistant. Integrates TinyLlama LLM, Whisper STT, and system control APIs for hands-free terminal automation.",
    tech_stack: ["Python", "TinyLlama", "Whisper", "pyttsx3", "Linux"],
    github_url: "https://github.com/asadbek",
    category: "AI/ML",
    status: "active",
  },
];

export const SKILLS = [
  { category: "Languages",   items: ["PHP", "JavaScript", "Python", "SQL", "HTML/CSS"] },
  { category: "Frameworks",  items: ["Laravel", "React.js", "Django", "Node.js", "Bootstrap"] },
  { category: "Databases",   items: ["MySQL", "MongoDB", "PostgreSQL", "Redis"] },
  { category: "Server/Cloud",items: ["Nginx", "Linux (Ubuntu)", "Git", "Docker", "REST API"] },
  { category: "Tools",       items: ["VS Code", "Postman", "Composer", "npm/yarn", "Telegram Bot API"] },
];
