import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, useRef } from 'react';
import {
  BsRocketFill,
  BsCodeSlash,
  BsPaletteFill,
  BsCloudFill,
  BsGearFill,
  BsCheckCircleFill,
  BsArrowRepeat,
  BsLightningFill,
  BsShieldCheck
} from 'react-icons/bs';
import Footer from "../components/Footer";

function ProfessionalWorkPage() {
  const { isDark } = useTheme();
  const [hoveredId, setHoveredId] = useState(null);
  const [forceClosedId, setForceClosedId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < professionalWork.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 200);
    return () => clearInterval(timer);
  }, []);

  const professionalWork = [
    {
      id: 1,
      title: 'Containerization & Secure Images',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 1',
      description:
        'Containerized microservices using Docker and Docker Compose, standardizing environments for development, staging, and production.',
      technologies: ['Docker', 'Docker Compose', 'Kubernetes', 'Trivy'],
      status: 'completed',
      icon: BsRocketFill,
      color: 'from-purple-500 to-indigo-500',
      details: [
        'Introduced multistage builds and distroless images to harden runtime containers.',
        'Integrated Trivy into build pipeline for automated vulnerability scanning.',
        'Reduced image size and improved security posture across services.',
      ],
    },
    {
      id: 2,
      title: 'Strategic Cloud Migration (AWS/GCP to Azure)',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 2',
      description:
        'Orchestrated a massive infrastructure migration from AWS and GCP to Microsoft Azure, ensuring high availability and zero data loss.',
      technologies: ['Azure AKS', 'EKS/GKE', 'Storage Accounts', 'Azure Monitor', 'Migration'],
      status: 'completed',
      icon: BsArrowRepeat,
      color: 'from-blue-400 to-indigo-600',
      details: [
        'Conducted end-to-end requirement gathering, strategic planning, and risk assessment for multi-cloud migration.',
        'Migrated Kubernetes clusters from AWS EKS and GCP GKE to Azure Kubernetes Service (AKS).',
        'Transitioned large-scale data storage from S3 Buckets and GCS to Azure Storage Accounts/Blobs.',
        'Executed multiple dry runs and validation cycles to ensure a seamless production cutover.',
      ],
    },
    {
      id: 3,
      title: 'Repository Migration (GitLab to Gitea)',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 3',
      description:
        'Successfully migrated all source code repositories from GitLab to a self-hosted Gitea instance for better control and data sovereignty.',
      technologies: ['GitLab', 'Gitea', 'Self-hosting', 'Migration'],
      status: 'completed',
      icon: BsArrowRepeat,
      color: 'from-orange-400 to-red-500',
      details: [
        'Planned and executed the migration of all organization repositories, including history and metadata.',
        'Configured self-hosted Gitea on private infrastructure for enhanced security.',
        'Ensured zero downtime and data integrity during the repository transition.',
      ],
    },
    {
      id: 4,
      title: 'CI/CD Platform Engineering (Gitea, GitHub Actions & ArgoCD)',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 4',
      description:
        'Designed and implemented a production-grade CI/CD ecosystem enabling automated builds, security scanning, container publishing, and GitOps-based deployments to Azure Kubernetes Service (AKS).',
      technologies: [
        'Gitea Actions',
        'GitHub Actions',
        'ArgoCD',
        'Docker',
        'SonarQube',
        'AKS',
        'Kubernetes',
        'Infisical'
      ],
      status: 'completed',
      icon: BsCodeSlash,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Designed and implemented automated CI pipelines using Gitea Actions and GitHub Actions for microservices and firmware repositories.',
        'Built container build pipelines that automatically build, tag, and push Docker images to container registries.',
        'Integrated SonarQube to enforce automated code quality gates and security scanning in CI pipelines.',
        'Implemented GitOps deployment strategy using ArgoCD for Kubernetes workloads.',
        'Configured automated application deployments to Azure Kubernetes Service (AKS) clusters.',
        'Integrated Infisical for secure management of secrets and environment variables in CI/CD workflows.',
        'Reduced deployment cycles by ~30% while improving reliability and traceability of releases.',
      ],
    },
    {
      id: 5,
      title: 'Observability & Proactive Alerting',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 5',
      description:
        'Set up a full observability stack to monitor microservices, infrastructure, and external dependencies post-migration.',
      technologies: [
        'Prometheus',
        'Grafana',
        'Loki',
        'Alertmanager',
        'Uptime Kuma',
        'Blackbox Exporter',
      ],
      status: 'completed',
      icon: BsPaletteFill,
      color: 'from-pink-500 to-rose-500',
      details: [
        'Created 15+ Grafana dashboards for services, infrastructure, and SLIs.',
        'Configured 50+ proactive alerts to catch incidents before they impact users.',
        'Introduced synthetic checks and blackbox probes for external endpoints.',
      ],
    },
    {
      id: 6,
      title: 'Embedded Firmware Automation',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 6',
      description:
        'Automated firmware development workflows and build/release processes for IoT devices across GSM and WiFi protocols.',
      technologies: ['Gitea Actions', 'GCS', 'Versioning', 'Embedded Systems'],
      status: 'completed',
      icon: BsLightningFill,
      color: 'from-indigo-500 to-purple-500',
      details: [
        'Automated work processes for the embedded team to streamline development.',
        'Implemented robust automation for 17 GSM and 17 WiFi firmware protocols.',
        'Automated dependency handling and uploads to Google Cloud Storage.',
        'Reduced firmware release cycle from 2+ hours to around 40 minutes.',
      ],
    },
    {
      id: 7,
      title: 'Fleet Release & Operations Hub',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 7',
      description:
        'Developed a centralized dashboard to orchestrate large-scale firmware and application deployments across thousands of IoT devices.',
      technologies: ['React', 'Node.js', 'REST APIs', 'Fleet Management'],
      status: 'completed',
      icon: BsShieldCheck,
      color: 'from-green-500 to-emerald-500',
      details: [
        'Built a multi-tenant release interface with granular filters for Device Type, HW Version, and Library dependencies.',
        'Implemented high-precision targeting using MAC-ID search for single-device debugging and bulk updates for fleet rollouts.',
        'Automated the release validation workflow, reducing manual operations overhead by ~70%.',
        'Integrated real-time deployment tracking and status monitoring for the entire device network.',
      ],
    },
    {
      id: 8,
      title: 'Real-time OTP Automation & Retrieval',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 8',
      description:
        'Architected a seamless OTP collection and bill retrieval system, eliminating manual intervention for electricity bill downloads.',
      technologies: ['Redis', 'Automate App', 'Node.js', 'React', 'Dashboards'],
      status: 'completed',
      icon: BsShieldCheck,
      color: 'from-orange-500 to-amber-500',
      details: [
        'Automated SMS forwarding from dedicated client SIMs using mobile automation (Automate app).',
        'Engineered a high-speed Redis caching layer for secure OTP storage with automated expiry (TTL).',
        'Developed an operational OTP dashboard for real-time monitoring.',
        'Integrated a chatbot for headless authentication on utility portals, enabling autonomous bill downloads.',
      ],
    },
    {
      id: 9,
      title: 'Azure Cost Dashboard & Data Pipeline',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 9',
      description:
        'Engineered an automated data pipeline to visualize cloud spending by integrating Azure Portal CSV exports with Looker Studio.',
      technologies: [
        'Azure Portal',
        'Google Drive',
        'Google Sheets',
        'Google Apps Script',
        'Looker Studio',
      ],
      status: 'completed',
      icon: BsCloudFill,
      color: 'from-blue-600 to-indigo-600',
      details: [
        'Objective: Create an Azure Cost Dashboard for clear visibility and analysis of cloud spending.',
        'Architecture: Azure Portal → CSV → Google Drive Folder → Google Sheet (Apps Script) → Looker Studio.',
        'Developed custom Google Apps Script to automate data extraction from Google Drive to Google Sheets.',
        'Enabled granular analysis of cloud expenditure using Looker Studio visualizations.',
      ],
    },
    {
      id: 10,
      title: 'GCP Event-Driven Batch Processing',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 10',
      description:
        'Set up batch processing workflows for ML model deployment and undeployment and bill processing using GCP.',
      technologies: ['GCP Pub/Sub', 'Cloud Jobs', 'Cloud Scheduler', 'MLOps'],
      status: 'completed',
      icon: BsCloudFill,
      color: 'from-sky-500 to-indigo-500',
      details: [
        'Ensured reliable and scalable event-driven execution using Pub/Sub and Cloud Scheduler.',
        'Automated the entire lifecycle of ML model deployment and undeployment.',
        'Architected robust bill processing workflows reducing manual intervention.',
      ],
    },
    {
      id: 11,
      title: 'Cloud Cost Optimization & Resource Governance',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 11',
      description:
        'Implemented proactive cost-optimization strategies by controlling non-production workloads, optimizing resource usage, and introducing batch-based execution models.',
      technologies: [
        'Azure',
        'AKS',
        'Kubernetes',
        'Batch Jobs',
        'Automation',
        'Monitoring',
      ],
      status: 'completed',
      icon: BsCheckCircleFill,
      color: 'from-teal-500 to-emerald-500',
      details: [
        'Designed strict separation between production and non-production (dev, QA, POC) environments.',
        'Automated shutdown of development and test environments during non-working hours to reduce idle cloud spend.',
        'Identified and decommissioned unused VM instances, services, and orphaned resources.',
        'Implemented batch-processing workflows for heavy and non-real-time workloads instead of always-on services.',
        'Reduced overall cloud operational costs significantly while maintaining performance and reliability.',
      ],
    }
    ,
    {
      id: 12,
      title: 'Real-Time Data Streaming & CDC Platform',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 12',
      description:
        'Designed and implemented a scalable real-time data platform to ingest IoT sensor data and database changes into Snowflake for analytics and monitoring.',
      technologies: [
        'Apache Kafka',
        'Kafka Connect',
        'MQTT',
        'Snowflake',
        'PostgreSQL',
        'CDC',
        'Snowflake Connector',
        'Azure Blob Storage'
      ],
      status: 'completed',
      icon: BsLightningFill,
      color: 'from-cyan-500 to-blue-500',
      details: [
        'Deployed and configured Apache Kafka cluster for high-throughput streaming of device telemetry.',
        'Integrated MQTT to Kafka connector to ingest real-time sensor data from IoT devices.',
        'Built Kafka → Snowflake streaming pipeline using Snowflake Sink Connector for near real-time analytics.',
        'Implemented PostgreSQL → Snowflake Change Data Capture (CDC) using Snowflake Agent.',
        'Designed schema mapping and transformation logic to flatten device telemetry events.',
        'Ensured reliable ingestion with retry handling, dead-letter queues, and monitoring.',
        'Enabled analytics teams to access live device metrics and operational data directly in Snowflake.',
      ],
    },
    {
      id: 13,
      title: 'Ongoing Improvements',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Ongoing',
      description:
        'Continuously iterating on performance, reliability, and developer experience across the platform.',
      technologies: ['DevOps', 'Full Stack', 'Monitoring'],
      status: 'in-progress',
      icon: BsGearFill,
      color: 'from-orange-500 to-red-500',
      details: [
        'Refining pipelines and dashboards based on feedback from developers and operations.',
        'Improving alert quality to reduce noise while keeping strong coverage.',
        'Supporting new features and services as the product evolves.',
      ],
    },
  ];

  const handleMouseEnter = (id) => {
    setHoveredId(id);
    setForceClosedId(null);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setForceClosedId(null);
  };

  const handleClick = (id) => {
    if (hoveredId === id) {
      setForceClosedId(id);
    }
  };

  return (
    <div className={`min-h-screen ${isDark
        ? 'bg-slate-950 text-white'
        : 'bg-slate-50 text-slate-900'
      } transition-colors duration-500 pb-20`}>

      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-indigo-600' : 'bg-indigo-400'
          }`} />
        <div className={`absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-10 ${isDark ? 'bg-purple-600' : 'bg-purple-400'
          }`} />
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <header className="text-center mb-20 animate-fade-in">
          <h1 className={`text-4xl md:text-6xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'
            }`}>
            Professional <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Journey</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
            A detailed look into my professional milestones and technical contributions at Living Things.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {professionalWork.map((work, index) => {
            const Icon = work.icon;
            const isExpanded = hoveredId === work.id && forceClosedId !== work.id;
            const isVisible = index < visibleCount;

            return (
              <div
                key={work.id}
                onMouseEnter={() => handleMouseEnter(work.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(work.id)}
                className={`group relative rounded-3xl transition-all duration-700 cursor-pointer overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${isExpanded
                    ? 'scale-[1.02] z-20'
                    : 'scale-100 z-10'
                  } ${isDark
                    ? 'bg-slate-900/50 backdrop-blur-xl border border-slate-800'
                    : 'bg-white border border-slate-200 shadow-sm'
                  } hover:shadow-2xl hover:shadow-indigo-500/10`}
              >
                {/* Accent Line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${work.color}`} />

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-6">
                    {/* Icon Box */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${work.color} shadow-lg transition-transform duration-500 ${isExpanded ? 'rotate-12 scale-110' : 'group-hover:rotate-6'}`}>
                      <Icon className="text-3xl text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className={`text-xl md:text-2xl font-bold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {work.title}
                        </h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${work.status === 'completed'
                            ? 'bg-emerald-500/10 text-emerald-500'
                            : 'bg-amber-500/10 text-amber-500 animate-pulse'
                          }`}>
                          {work.status}
                        </span>
                      </div>
                      <p className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {work.company} • {work.period}
                      </p>
                    </div>

                    <div className={`hidden md:block transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Summary (always visible) */}
                  <p className={`mt-6 text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isExpanded ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
                    {work.description}
                  </p>

                  {/* Details (Expandable) */}
                  <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="space-y-6 pt-6 border-t border-slate-800/50">
                      <div>
                        <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                          Deep Dive & Achievements
                        </h4>
                        <ul className="space-y-3">
                          {work.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 group/item">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover/item:scale-150 transition-transform`} />
                              <span className={`text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                          Core Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {work.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${isDark
                                  ? 'bg-slate-800 text-slate-300 hover:bg-indigo-500/20 hover:text-indigo-400'
                                  : 'bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600'
                                }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProfessionalWorkPage;
