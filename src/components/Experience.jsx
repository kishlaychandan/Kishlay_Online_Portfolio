import { useTheme } from "../context/ThemeContext";
import {
  BsBriefcaseFill,
  BsCalendar3,
  BsCheckCircleFill,
  BsGeoAltFill,
} from "react-icons/bs";

function Experience() {
  const { isDark } = useTheme();

  const experiences = [
    {
      id: 1,
      company: "iCapo Tech Pvt Ltd (Living Things)",
      position: "DevOps Engineer",
      location: "On-site, IIT Bombay, Mumbai",
      period: "Feb 2025 – Present",
      description:
        "Owning full-stack and DevOps responsibilities across microservices, CI/CD, observability, and release automation for IoT and firmware platforms.",
      technologies: [
        "Docker",
        "Docker Compose",
        "Kubernetes",
        "GitLab CI/CD",
        "Gitea Actions",
        "SonarQube",
        "GCP",
        "AWS",
        "Azure OpenAI",
        "Goose",
        "Codex",
        "PostgreSQL",
        "MCP",
        "pgBackRest",
        "Grafana",
        "Prometheus",
        "Loki",
      ],
      achievements: [
        "Containerized microservices with Docker, multistage and distroless images, and Trivy-based vulnerability scanning.",
        "Built CI/CD pipelines with GitLab CI/CD and Gitea Actions, integrating SonarQube and Infisical for secure secrets.",
        "Enabled Dev/UAT/Prod deployments, reducing release times by ~20–30%.",
        "Set up observability stack with custom Grafana dashboards, Prometheus, Loki, Alertmanager, Uptime Kuma, Blackbox Exporter, and proactive alert templates.",
        "Automated firmware CI/CD for 17 GSM and 17 WiFi protocols using Gitea Actions, cutting release time from 2+ hours to ~40 minutes.",
        "Built a release dashboard with filters and MAC-ID search, reducing manual operations workload.",
        "Deployed an internal AI proxy on Kubernetes backed by Azure OpenAI, with virtual keys and per-user/team usage tracking.",
        "Configured Goose/Codex on employees' local systems so teams could use governed AI assistance in daily tasks and project workflows.",
        "Set up PostgreSQL MCP servers for teams and implemented least-privilege PostgreSQL users for team and service access.",
        "Configured PostgreSQL backups and point-in-time recovery using pgBackRest.",
      ],
    },
    {
      id: 2,
      company: "Geekster",
      position: "Full Stack Developer Apprenticeship",
      location: "Remote",
      period: "Nov 2023 – Jan 2025",
      description:
        "Completed a full-stack development apprenticeship focused on building, containerizing, and shipping production-style web applications.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "Docker Compose",
      ],
      achievements: [
        "Shipped 4 full-stack applications: E-commerce, Food Delivery, Expense Tracker, and Chai Sutta Bar.",
        "Built applications using React, Node.js, Express.js, and MongoDB with end-to-end frontend and backend workflows.",
        "Containerized all 4 applications with Docker and Docker Compose, reducing environment setup time from hours to under 5 minutes.",
        "Secured 1st place in solo and team categories at Geekathon among 50+ participants.",
      ],
    },
    {
      id: 3,
      company: "Digisnare Technologies",
      position: "Full Stack Developer",
      location: "On-site, Gulbarga, Karnataka",
      period: "Mar 2023 – Jul 2023",
      description:
        "Worked on a local information portal and backend services, focusing on performance, reliability, and documentation.",
      technologies: ["PHP", "MySQL", "JavaScript", "REST APIs"],
      achievements: [
        "Launched KKDIAL portal (500+ monthly queries), cutting manual lookups by ~60%.",
        "Developed optimized REST APIs with MySQL, reducing response latency by ~40%.",
        "Created documentation and 20+ unit tests, lowering post-release issues by ~25%.",
      ],
    },
  ];

  return (
    <section
      className={`${
        isDark
          ? 'bg-gradient-to-b from-gray-800 to-gray-900'
          : 'bg-gradient-to-b from-gray-50 to-white'
      } py-24 transition-colors duration-300`}
      id="Experience"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl font-bold tracking-tight sm:text-6xl mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className={`bg-gradient-to-r ${
              isDark ? 'from-purple-400 via-pink-400 to-blue-400' : 'from-purple-600 via-pink-600 to-blue-600'
            } bg-clip-text text-transparent`}>Experience</span>
          </h2>
          <div className={`h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500`}></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative group animate-scale-in ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl ring-1 ring-purple-500/20'
                  : 'bg-white/80 backdrop-blur-xl ring-1 ring-purple-200/50'
              } rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className={`absolute left-8 top-24 bottom-0 w-0.5 ${
                  isDark ? 'bg-gradient-to-b from-purple-500 to-transparent' : 'bg-gradient-to-b from-purple-400 to-transparent'
                } opacity-30`}></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Left Side - Icon & Timeline */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    isDark
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                      : 'bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <BsBriefcaseFill className="text-white text-xl" />
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.position}
                      </h3>
                      <p className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        isDark ? 'text-purple-400' : 'text-purple-600'
                      }`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className={`text-right ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <BsCalendar3 className="text-sm" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsGeoAltFill className="text-sm" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className={`mb-6 leading-7 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-700'
                    }`}>
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            isDark
                              ? 'bg-purple-900/50 text-purple-300 ring-1 ring-purple-500/30'
                              : 'bg-purple-100 text-purple-700 ring-1 ring-purple-200'
                          } hover:scale-105 hover:shadow-lg`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <p className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-700'
                    }`}>
                      Key Achievements:
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className={`flex items-start gap-3 transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          <BsCheckCircleFill className={`mt-1 flex-shrink-0 w-4 h-4 ${
                            isDark ? 'text-purple-400' : 'text-purple-600'
                          }`} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
