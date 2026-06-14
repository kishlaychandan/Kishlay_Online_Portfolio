import { useTheme } from "../context/ThemeContext";

function ResumePage() {
  const { isDark } = useTheme();

  const work = [
    {
      company: "iCapo Tech Pvt Ltd (Living Things)",
      title: "DevOps Engineer",
      location: "On-site, IIT Bombay, Mumbai",
      period: "Feb 2025 – Present",
      bullets: [
        "Containerized microservices using Docker, Docker Compose, and Kubernetes with multistage and distroless images plus Trivy security scans.",
        "Built CI/CD pipelines with GitLab CI/CD and Gitea Actions, integrating SonarQube and Infisical for secure secrets and quality gates.",
        "Set up batch processing workflows for ML model deployment and undeployment and bill processing using GCP Pub/Sub, Cloud Jobs and Cloud Scheduler, ensuring reliable and scalable event-driven execution.",
        "Enabled Dev/UAT/Prod deployments, reducing release times by ~20–30%.",
        "Set up observability stack with custom Grafana dashboards, Prometheus, Loki, Alertmanager, Uptime Kuma, Blackbox Exporter, and proactive alert templates.",
        "Embedded firmware automation for 17 GSM and 17 WiFi protocols, streamlining development workflows and cutting release cycles from 2+ hours to ~40 minutes.",
        "Orchestrated a strategic multi-cloud migration (AWS/GCP to Azure), transitioning EKS/GKE clusters and S3/GCS storage with zero downtime.",
        "Migrated 100+ repositories from GitLab to self-hosted Gitea, ensuring full history preservation and data sovereignty.",
        "Architected CI/CD ecosystems using Gitea Actions and proactive observability stacks (Grafana/Prometheus) to monitor fleet-wide microservices.",
        "Architected a real-time OTP automation system using Redis and mobile automation, enabling autonomous electricity bill retrieval.",
        "Developed a centralized Fleet Release Hub with MAC-ID search and version filtering, orchestrating bulk firmware/app updates across thousands of IoT devices.",
        "Rolled out an internal AI enablement platform by deploying an AI proxy on Kubernetes backed by Azure OpenAI keys from Azure AI Foundry.",
        "Created teams, users, and individual virtual API keys in the AI proxy, replacing direct provider keys and enabling per-user and per-team usage tracking.",
        "Configured Goose/Codex on employees' local systems so teams could use governed AI assistance in everyday tasks and active project work.",
        "Set up PostgreSQL MCP servers for respective teams to support controlled AI-assisted database workflows.",
        "Implemented PostgreSQL least-privilege access by creating read-only team users and scoped service users instead of superuser credentials.",
        "Configured PostgreSQL backups and point-in-time recovery (PITR) using pgBackRest.",
      ],
    },
    {
      company: "Geekster",
      title: "Full Stack Developer Apprenticeship",
      location: "Remote",
      period: "Nov 2023 – Jan 2025",
      bullets: [
        "Shipped 4 full-stack applications (E-commerce, Food Delivery, Expense Tracker, and Chai Sutta Bar) using React, Node.js, Express.js, and MongoDB.",
        "Containerized all 4 applications with Docker and Docker Compose, reducing environment setup time from hours to under 5 minutes.",
        "Secured 1st place in solo and team categories at Geekathon among 50+ participants.",
      ],
    },
    {
      company: "Digisnare Technologies",
      title: "Full Stack Developer",
      location: "On-site, Gulbarga, Karnataka",
      period: "Mar 2023 – Jul 2023",
      bullets: [
        "Launched KKDIAL portal (500+ monthly queries), reducing manual lookups by ~60%.",
        "Developed optimized REST APIs with MySQL, cutting response latency by ~40%.",
        "Improved reliability by adding documentation and 20+ unit tests, lowering post-release issues by ~25%.",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-300 pb-16 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-slate-50 via-indigo-50/60 to-slate-100"
      }`}
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-32 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30 ${
            isDark ? "bg-indigo-700/50" : "bg-indigo-300/50"
          }`}
        />
        <div
          className={`absolute bottom-0 -left-32 h-80 w-80 rounded-full blur-3xl opacity-25 ${
            isDark ? "bg-sky-600/40" : "bg-sky-300/40"
          }`}
        />
      </div>

      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 space-y-6">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h1
            className={`text-3xl sm:text-4xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Kishlay Chandan
          </h1>
          <div className="mt-1 h-0.5 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500" />
          <p
            className={`mt-1 text-sm sm:text-base ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Full Stack Developer / DevOps Engineer
          </p>
        </header>

        {/* Work Experience */}
        <section
          className={`rounded-xl border ${
            isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-gray-50"
          } p-5 sm:p-6`}
        >
          <h2
            className={`text-lg font-semibold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Work Experience
          </h2>
          <div
            className={`mb-3 h-0.5 w-12 rounded-full ${
              isDark ? "bg-indigo-500/70" : "bg-indigo-500"
            }`}
          />
          <div
            className={`space-y-4 text-sm ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {work.map((job) => (
              <div
                key={job.company}
                className="border-l border-indigo-500/60 pl-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="font-semibold text-sm sm:text-base">
                    {job.title} — {job.company}
                  </p>
                  <p className="text-xs">{job.period}</p>
                </div>
                <p className="text-xs mb-1">{job.location}</p>
                <ul className="list-disc list-inside space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section
          className={`rounded-xl border ${
            isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"
          } p-5 sm:p-6`}
        >
          <h2
            className={`text-lg font-semibold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Skills
          </h2>
          <div
            className={`mb-3 h-0.5 w-12 rounded-full ${
              isDark ? "bg-indigo-500/70" : "bg-indigo-500"
            }`}
          />
          <div
            className={`text-sm space-y-2 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <p>
              <span className="font-semibold">Languages:</span> Java, JavaScript
            </p>
            <p>
              <span className="font-semibold">Web & Frameworks:</span> ReactJS,
              Redux, React Router, Node.js, Express.js, Tailwind CSS,
              Bootstrap, Chart.js
            </p>
            <p>
              <span className="font-semibold">DevOps & Orchestration:</span>{" "}
              Docker, Docker Compose, Kubernetes, AWS EKS, AKS, ArgoCD,
              Ansible, Infisical
            </p>
            <p>
              <span className="font-semibold">Cloud & Event-Driven:</span> GCP
              Pub/Sub, Cloud Job, GCS, AWS Lambda, AWS EventBridge, SageMaker,
              Azure Storage Account, Azure Event Grid, Azure Functions, Azure
              Container Apps/Jobs
            </p>
            <p>
              <span className="font-semibold">Observability:</span> Prometheus,
              Grafana, Loki, Uptime Kuma, Blackbox Exporter
            </p>
            <p>
              <span className="font-semibold">CI/CD & Version Control:</span>{" "}
              GitLab CI/CD, Gitea Actions, SonarQube, GitLab, Gitea
            </p>
            <p>
              <span className="font-semibold">Databases:</span> MySQL,
              PostgreSQL, MongoDB, Firebase
            </p>
            <p>
              <span className="font-semibold">Tools & Design:</span> VS Code,
              Postman, Canva, Adobe Suite, Figma, WordPress
            </p>
          </div>
        </section>

        {/* Projects */}
        <section
          className={`rounded-xl border ${
            isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"
          } p-5 sm:p-6`}
        >
          <h2
            className={`text-lg font-semibold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Projects
          </h2>
          <div
            className={`mb-3 h-0.5 w-12 rounded-full ${
              isDark ? "bg-indigo-500/70" : "bg-indigo-500"
            }`}
          />
          <div
            className={`space-y-4 text-sm ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <div>
              <p className="font-semibold">Ecommerce Application</p>
              <p className="mt-1">
                Designed and developed a scalable, customizable ecommerce
                platform featuring user authentication, wishlists, carts, and
                Razorpay payment integration, improving conversions by ~35%.
              </p>
              <p className="mt-1">
                Optimized frontend with debouncing and lazy loading, reducing
                page load times by ~45%.
              </p>
              <p className="mt-1 text-xs">
                <span className="font-semibold">Tech Stack:</span> React,
                Node.js, Express.js, MongoDB, Tailwind CSS, Razorpay, Git
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Orthopedic Haptic Simulator (DST-Funded Project)
              </p>
              <p className="mt-1">
                Collaborated on a Department of Science and Technology–funded
                project to enhance orthopedic surgical training through an
                advanced haptic simulation platform.
              </p>
              <p className="mt-1">
                Integrated haptic feedback and stepper motor control using
                Raspberry Pi and Arduino Uno; implemented collision detection
                and hardware synchronization for realistic simulation.
              </p>
              <p className="mt-1 text-xs">
                <span className="font-semibold">Focus:</span> Real‑time control
                algorithms, hardware integration, and immersive training
                experience.
              </p>
            </div>

            <div>
              <p className="font-semibold">Azure Cloud Cost Dashboard</p>
              <p className="mt-1">
                Engineered an automated data pipeline to visualize cloud spending
                by integrating Azure Portal CSV exports with Looker Studio.
              </p>
              <p className="mt-1">
                Developed custom Google Apps Script to automate data extraction
                from Google Drive to Google Sheets, providing stakeholders with
                clear visibility and analysis of Azure expenditure.
              </p>
              <p className="mt-1 text-xs">
                <span className="font-semibold">Tech Stack:</span> Azure Portal,
                Google Apps Script, Google Sheets, Looker Studio, Google Drive
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section
          className={`rounded-xl border ${
            isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"
          } p-5 sm:p-6`}
        >
          <h2
            className={`text-lg font-semibold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Education
          </h2>
          <div
            className={`mb-3 h-0.5 w-12 rounded-full ${
              isDark ? "bg-indigo-500/70" : "bg-indigo-500"
            }`}
          />
          <div
            className={`text-sm space-y-3 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <div>
              <p className="font-semibold">
                MCA, Central University of Karnataka
              </p>
              <p className="text-xs">2021 – 2023 · CGPA: 8.3</p>
            </div>
            <div>
              <p className="font-semibold">
                BCA, Aims Institute of Higher Education, Bengaluru
              </p>
              <p className="text-xs">2018 – 2021 · CGPA: 8.3</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section
          className={`rounded-xl border ${
            isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"
          } p-5 sm:p-6`}
        >
          <h2
            className={`text-lg font-semibold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Achievements & Activities
          </h2>
          <div
            className={`mb-3 h-0.5 w-12 rounded-full ${
              isDark ? "bg-indigo-500/70" : "bg-indigo-500"
            }`}
          />
          <ul
            className={`text-sm space-y-2 list-disc list-inside ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>UGC NET qualifier (June 2024)</li>
            <li>Completed Full Stack Developer Apprenticeship at Geekster</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default ResumePage;
