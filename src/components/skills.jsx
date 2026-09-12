import "../style/Skills.css";
import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoPhp,
} from "react-icons/bi";
import { DiMysql, DiJavascript } from "react-icons/di";
import {
  SiExpress,
  SiTaichigraphics,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiPrometheus,
  SiGrafana,
  SiGithubactions,
  SiGitlab,
  SiSonarqube,
  SiArgo,
  SiHelm,
  SiLinux,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTraefikproxy,
  SiApachekafka,
  SiSnowflake,
  SiClickhouse,
  SiPodman,
  SiNginx,
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import {
  BsCodeSlash,
  BsCpuFill,
  BsGearWideConnected,
  BsLightningChargeFill,
  BsShieldFillCheck,
  BsShieldLockFill,
} from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const skillGroups = [
  {
    title: "Platform & DevOps",
    summary: "Kubernetes-first delivery, automation, and release operations.",
    Icon: BsGearWideConnected,
    kind: "devops",
    skills: [
      { label: "DevOps", Icon: BsGearWideConnected },
      { label: "Docker", Icon: FaDocker },
      { label: "Kubernetes", Icon: SiKubernetes },
      { label: "Helm", Icon: SiHelm },
      { label: "Terraform", Icon: SiTerraform },
      { label: "Atlantis", Icon: SiTerraform },
      { label: "Ansible", Icon: SiAnsible },
      { label: "Podman", Icon: SiPodman },
      { label: "Linux", Icon: SiLinux },
    ],
  },
  {
    title: "Networking & Edge",
    summary: "Ingress, CDN delivery, and traffic protection at the edge.",
    Icon: SiTraefikproxy,
    kind: "cloud",
    skills: [
      { label: "Traefik", Icon: SiTraefikproxy },
      { label: "Nginx", Icon: SiNginx },
      { label: "Bunny.net CDN", Icon: BsLightningChargeFill },
      { label: "CrowdSec", Icon: BsShieldLockFill },
      { label: "Rate Limiting", Icon: BsGearWideConnected },
    ],
  },
  {
    title: "DevSecOps & CI/CD",
    summary: "Secure pipelines, quality gates, and GitOps workflows.",
    Icon: BsShieldFillCheck,
    kind: "security",
    skills: [
      { label: "DevSecOps", Icon: BsShieldFillCheck },
      { label: "Trivy", Icon: BsShieldLockFill },
      { label: "SonarQube", Icon: SiSonarqube },
      { label: "GitLab CI/CD", Icon: SiGitlab },
      { label: "GitHub Actions", Icon: SiGithubactions },
      { label: "ArgoCD", Icon: SiArgo },
    ],
  },
  {
    title: "Cloud & Observability",
    summary: "Cloud operations with dashboards, metrics, and proactive alerts.",
    Icon: SiGrafana,
    kind: "cloud",
    skills: [
      { label: "AWS", Icon: SiAmazonaws },
      { label: "Azure", Icon: SiMicrosoftazure },
      { label: "GCP", Icon: SiGooglecloud },
      { label: "Prometheus", Icon: SiPrometheus },
      { label: "Grafana", Icon: SiGrafana },
    ],
  },
  {
    title: "Data & Streaming",
    summary: "Messaging, storage, and analytics systems for production workloads.",
    Icon: SiApachekafka,
    kind: "data",
    skills: [
      { label: "Kafka", Icon: SiApachekafka },
      { label: "Redis", Icon: SiRedis },
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "MySQL", Icon: DiMysql },
      { label: "MongoDB", Icon: SiMongodb },
      { label: "Snowflake", Icon: SiSnowflake },
      { label: "ClickHouse", Icon: SiClickhouse },
    ],
  },
  {
    title: "Application Engineering",
    summary: "Full-stack delivery across APIs, UI, and product workflows.",
    Icon: BsCodeSlash,
    kind: "app",
    skills: [
      { label: "JavaScript", Icon: DiJavascript },
      { label: "React.js", Icon: BiLogoReact },
      { label: "HTML, CSS", Icon: BiLogoCss3 },
      { label: "Tailwind CSS", Icon: BiLogoTailwindCss },
      { label: "Node.js", Icon: BiLogoNodejs },
      { label: "Express.js", Icon: SiExpress },
      { label: "PHP", Icon: BiLogoPhp },
      { label: "API Design", Icon: BsCodeSlash },
    ],
  },
  {
    title: "Design & AI",
    summary: "Useful interfaces, product visuals, and ML experimentation.",
    Icon: SiTaichigraphics,
    kind: "design",
    skills: [
      { label: "UI/UX Design", Icon: SiTaichigraphics },
      { label: "Machine Learning", Icon: BsCpuFill },
    ],
  },
];

function SkillPill({ skill }) {
  const Icon = skill.Icon;

  return (
    <span className="skill-chip">
      <Icon aria-hidden="true" />
      {skill.label}
    </span>
  );
}

function SkillGroup({ group }) {
  const Icon = group.Icon;

  return (
    <article className={`skill-group skill-group-${group.kind}`}>
      <div className="skill-group__top">
        <span className="skill-group__icon">
          <Icon aria-hidden="true" />
        </span>
        <div>
          <h3>{group.title}</h3>
          <p>{group.summary}</p>
        </div>
      </div>
      <div className="skill-chip-list">
        {group.skills.map((skill) => (
          <SkillPill key={skill.label} skill={skill} />
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section
      id="Skills"
      className={`skills-section ${
        isDark
          ? "skills-dark bg-slate-900"
          : "skills-light bg-gradient-to-b from-white via-slate-50 to-sky-50"
      } body-font relative transition-colors duration-300 py-16 sm:py-20`}
    >
      <div className="container px-5 py-8 mx-auto sm:py-10">
        <div className="flex flex-col text-center w-full mb-10 sm:mb-12 animate-fade-in">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className={`bg-gradient-to-r ${isDark ? 'from-purple-400 via-pink-400 to-blue-400' : 'from-purple-600 via-pink-600 to-blue-600'} bg-clip-text text-transparent`}>My</span> Skills
          </h2>
          <div className="h-1 w-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
          <p
            className={`mx-auto max-w-2xl text-sm sm:text-base ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A practical stack for shipping reliable apps, secure pipelines,
            cloud platforms, and observable production systems.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>

        <div className="skills-strip" aria-label="Core focus areas">
          {["Kubernetes", "DevSecOps", "Observability", "Automation", "Full Stack"].map(
            (item) => (
              <span key={item}>{item}</span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
