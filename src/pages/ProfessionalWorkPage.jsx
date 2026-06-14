import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from 'react';
import {
  BsActivity,
  BsBarChartLineFill,
  BsBoxSeamFill,
  BsBroadcastPin,
  BsCashCoin,
  BsCloudArrowUpFill,
  BsCloudLightningFill,
  BsCpuFill,
  BsDatabaseFillLock,
  BsDatabaseGear,
  BsDiagram3Fill,
  BsGearWideConnected,
  BsGit,
  BsHddNetworkFill,
  BsPersonFillLock,
  BsPhoneVibrateFill,
  BsRobot,
  BsRouterFill,
  BsShieldLockFill,
} from 'react-icons/bs';
import Footer from "../components/Footer";

function ProfessionalWorkPage() {
  const { isDark } = useTheme();
  const [expandedId, setExpandedId] = useState(null);
  const [pinnedId, setPinnedId] = useState(null);
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
      icon: BsBoxSeamFill,
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
      icon: BsCloudArrowUpFill,
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
      icon: BsGit,
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
      icon: BsDiagram3Fill,
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
      icon: BsActivity,
      color: 'from-pink-500 to-rose-500',
      details: [
        'Built custom Grafana dashboards for microservices, events, data loss, PostgreSQL, MongoDB, Kafka, Kafka Connectors, Nginx/Traefik, storage databases, and PVC usage.',
        'Designed dedicated infrastructure dashboards for database PVCs, Kafka PVCs, service health, traffic patterns, and platform capacity trends.',
        'Configured proactive alerts for microservices, PVC pressure, event failures, service errors, data loss signals, and infrastructure saturation.',
        'Set up Uptime Kuma to monitor service availability and send uptime alerts before users or operations teams were impacted.',
        'Created custom alert notification templates to make incidents easier to read, triage, and route to the right team.',
        'Introduced synthetic checks and blackbox probes for external endpoints and critical user-facing flows.',
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
      icon: BsCpuFill,
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
      icon: BsHddNetworkFill,
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
      icon: BsPhoneVibrateFill,
      color: 'from-orange-500 to-amber-500',
      details: [
        'Automated SMS forwarding from dedicated client SIMs using mobile automation (Automate app).',
        'Engineered a high-speed Redis caching layer for secure OTP storage with automated expiry (TTL).',
        'Developed an operational OTP dashboard for real-time monitoring.',
        'Integrated a chatbot for headless authentication on utility portals, enabling autonomous bill downloads.',
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
      icon: BsCloudLightningFill,
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
      icon: BsCashCoin,
      color: 'from-teal-500 to-emerald-500',
      details: [
        'Designed strict separation between production and non-production (dev, QA, POC) environments.',
        'Automated shutdown of development and test environments during non-working hours to reduce idle cloud spend.',
        'Identified and decommissioned unused VM instances, services, and orphaned resources.',
        'Implemented batch-processing workflows for heavy and non-real-time workloads instead of always-on services.',
        'Reduced overall cloud operational costs significantly while maintaining performance and reliability.',
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
      icon: BsBarChartLineFill,
      color: 'from-blue-600 to-indigo-600',
      details: [
        'Objective: Create an Azure Cost Dashboard for clear visibility and analysis of cloud spending.',
        'Architecture: Azure Portal → CSV → Google Drive Folder → Google Sheet (Apps Script) → Looker Studio.',
        'Developed custom Google Apps Script to automate data extraction from Google Drive to Google Sheets.',
        'Enabled granular analysis of cloud expenditure using Looker Studio visualizations.',
      ],
    },
    {
      id: 12,
      title: 'Snowflake Access Control & Role-Based Permission Management',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 12',
      description:
        'Designed and implemented robust role-based access control (RBAC) in Snowflake to manage user permissions securely and efficiently.',
      technologies: ['Snowflake', 'RBAC', 'SQL', 'Data Governance', 'Access Control'],
      status: 'completed',
      icon: BsPersonFillLock,
      color: 'from-cyan-500 to-blue-600',
      details: [
        'Designed role hierarchy for different user groups including automation, analytics, and operations teams.',
        'Granted fine-grained permissions (SELECT, INSERT, UPDATE) at database, schema, and table levels.',
        'Implemented warehouse access control to enable query execution for specific roles.',
        'Managed user-role assignments ensuring least-privilege access principle.',
        'Automated permission grants for future tables using Snowflake role inheritance.',
        'Improved data security, governance, and auditability across the data platform.',
      ],
    },
    {
      id: 13,
      title: 'Kafka & CDC Streaming Platform',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 13',
      description:
        'Set up a production-ready Kafka and CDC platform for streaming MQTT data: MQTT → Kafka → Snowflake & ClickHouse for warehousing, analytics, and monitoring.',
      technologies: [
        'Strimzi Kafka',
        'Apache Kafka',
        'Kafka Connect',
        'MQTT',
        'Snowflake',
        'ClickHouse',
        'PostgreSQL',
        'CDC',
        'Dev/UAT/Prod',
        'Topic Design',
        'Partitioning',
        'Snowflake Connector',
        'Azure Blob Storage'
      ],
      status: 'completed',
      icon: BsBroadcastPin,
      color: 'from-cyan-500 to-blue-500',
      details: [
        'Deployed Strimzi Kafka clusters for Dev, UAT, and Prod environments with clean separation between workloads.',
        'Designed Kafka topics, partitions, and naming conventions for scalable MQTT telemetry ingestion.',
        'Integrated MQTT to Kafka pipelines to stream real-time device data into structured Kafka topics.',
        'Built Kafka to Snowflake and ClickHouse ingestion paths for warehousing, analytics, and operational reporting.',
        'Implemented PostgreSQL to Snowflake and ClickHouse Change Data Capture (CDC) for database change synchronization.',
        'Configured dead-letter queues, retry handling, and monitoring to improve pipeline reliability.',
        'Applied schema mapping and validation so raw MQTT events became analytics-ready warehouse records.',
        'Enabled analytics and operations teams to access near real-time device and database metrics from Snowflake and ClickHouse.',
      ],
    },
    {
      id: 14,
      title: 'Debezium-Based CDC for Postgres to Snowflake',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 14',
      description:
        'Implemented Debezium for efficient Change Data Capture (CDC) from PostgreSQL to Snowflake via Kafka, utilizing schema registry for optimized storage.',
      technologies: ['Debezium', 'PostgreSQL', 'Kafka', 'Snowflake', 'Schema Registry', 'CDC'],
      status: 'completed',
      icon: BsDatabaseGear,
      color: 'from-cyan-500 to-blue-600',
      details: [
        'Configured Debezium connectors to capture real-time changes from PostgreSQL databases.',
        'Integrated Kafka topics for reliable data streaming with reduced storage footprint using schema registry.',
        'Established direct pipeline from Postgres to Kafka to Snowflake for seamless data synchronization.',
        'Optimized Kafka topic storage by leveraging schema evolution and compression techniques.',
        'Ensured data consistency and low-latency updates for analytics and reporting.',
      ],
    },
    {
      id: 15,
      title: 'Organization-wide AI Enablement Platform',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 15',
      description:
        'Rolled out a governed AI access platform across the organization to help employees use AI securely and speed up day-to-day work.',
      technologies: [
        'Kubernetes',
        'Azure OpenAI',
        'Azure AI Foundry',
        'AI Proxy',
        'Virtual API Keys',
        'Goose',
        'Codex',
        'MCP',
        'PostgreSQL'
      ],
      status: 'completed',
      icon: BsRobot,
      color: 'from-violet-500 to-fuchsia-500',
      details: [
        'Deployed an AI proxy on Kubernetes and backed it with Azure OpenAI provider keys from Azure AI Foundry.',
        'Created teams, users, and individual virtual API keys in the proxy application instead of sharing actual provider keys.',
        'Enabled usage tracking at individual and team levels for visibility, governance, and cost accountability.',
        "Configured Goose/Codex on employees' local systems and connected them to the governed AI proxy for everyday work.",
        'Distributed controlled AI access across employees to support faster engineering and operational workflows.',
        'Set up PostgreSQL MCP servers and shared them with respective teams for controlled AI-assisted database interactions.',
      ],
    },
    {
      id: 16,
      title: 'PostgreSQL Access Control & PITR Backup',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 16',
      description:
        'Improved PostgreSQL security and recoverability by enforcing least-privilege users and production-grade backup workflows.',
      technologies: ['PostgreSQL', 'RBAC', 'pgBackRest', 'PITR', 'Backup', 'Access Control'],
      status: 'completed',
      icon: BsDatabaseFillLock,
      color: 'from-emerald-500 to-teal-500',
      details: [
        'Created read-only PostgreSQL users for each team to provide safe access without exposing elevated privileges.',
        'Provisioned individual service users with scoped permissions lower than superuser access for application workloads.',
        'Reduced operational risk by replacing broad database credentials with least-privilege access patterns.',
        'Set up PostgreSQL backups using pgBackRest for reliable restore operations.',
        'Configured point-in-time recovery (PITR) support to recover databases to specific moments when needed.',
      ],
    },
    {
      id: 17,
      title: 'Traefik API Gateway Modernization',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'In Progress',
      description:
        'Replacing Nginx with Traefik and open-source gateway components to add advanced routing, identity, visibility, traffic control, and security features.',
      technologies: [
        'Traefik',
        'Kubernetes',
        'ForwardAuth',
        'Custom SSO',
        'Prometheus',
        'Grafana',
        'Redis',
        'Traefik Plugin',
        'Coraza WAF'
      ],
      status: 'in-progress',
      icon: BsShieldLockFill,
      color: 'from-red-500 to-rose-600',
      details: [
        'Replacing Nginx with Traefik to build a more flexible open-source edge and API gateway layer.',
        'Identity Layer: ForwardAuth + Custom SSO verifies user sessions before traffic reaches backend services.',
        'Visibility Layer: Prometheus + Grafana establishes traffic and error monitoring for gateway operations.',
        'Traffic Control: Redis + Traefik plugin adds cluster-wide per-user and per-application rate limits.',
        'Shield Layer: Coraza WAF adds deep request inspection to protect services from SQL injection and XSS patterns.',
        'Why: Strengthens security and governance while avoiding lock-in to expensive proprietary API gateway features.',
      ],
    },
    {
      id: 18,
      title: 'IoT Router, WAF & RADIUS Security Setup',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'In Progress',
      description:
        'Setting up network edge controls for IoT device connectivity, combining routing, web application firewall, and RADIUS-based access for stronger authentication.',
      technologies: [
        'IoT Devices',
        'Router',
        'WAF',
        'RADIUS',
        'Network Security',
        'Access Control',
        'Authentication',
        'Firewall Rules'
      ],
      status: 'in-progress',
      icon: BsRouterFill,
      color: 'from-amber-500 to-orange-600',
      details: [
        'Configuring router-level controls to securely manage IoT device connectivity across networks and environments.',
        'Setting up WAF policies to protect IoT-facing APIs and portals from common web attack patterns.',
        'Integrating RADIUS-based authentication to centralize access control for device and network entry points.',
        'Applying firewall and routing rules to reduce exposure and make IoT access paths easier to audit.',
        'Why: Builds a stronger security foundation before IoT traffic reaches applications and platform services.',
      ],
    },
    {
      id: 19,
      title: 'Ongoing Improvements',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Ongoing',
      description:
        'Continuously iterating on performance, reliability, and developer experience across the platform.',
      technologies: ['DevOps', 'Full Stack', 'Monitoring'],
      status: 'in-progress',
      icon: BsGearWideConnected,
      color: 'from-orange-500 to-red-500',
      details: [
        'Refining pipelines and dashboards based on feedback from developers and operations.',
        'Improving alert quality to reduce noise while keeping strong coverage.',
        'Supporting new features and services as the product evolves.',
      ],
    },
  ];

  const handleMouseEnter = (id) => {
    if (!pinnedId) setExpandedId(id);
  };

  const handleMouseLeave = () => {
    if (!pinnedId) setExpandedId(null);
  };

  const handleClick = (id) => {
    setPinnedId((currentId) => {
      const nextId = currentId === id ? null : id;
      setExpandedId(nextId);
      return nextId;
    });
  };

  const handleKeyDown = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(id);
    }
  };

  return (
    <div className={`min-h-screen ${isDark
        ? 'bg-slate-950 text-white'
        : 'bg-slate-50 text-slate-900'
      } transition-colors duration-500`}>

      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-indigo-600' : 'bg-indigo-400'
          }`} />
        <div className={`absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-10 ${isDark ? 'bg-purple-600' : 'bg-purple-400'
          }`} />
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <header className="text-center mb-12 animate-fade-in sm:mb-16 lg:mb-20">
          <h1 className={`mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl ${isDark ? 'text-white' : 'text-slate-900'
            }`}>
            Professional <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent sm:inline">Journey</span>
          </h1>
          <p className={`mx-auto mt-5 max-w-lg text-base leading-7 sm:max-w-2xl sm:text-lg md:text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
            A detailed look into my professional milestones and technical contributions at Living Things.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {professionalWork.map((work, index) => {
            const Icon = work.icon;
            const isExpanded = expandedId === work.id;
            const isVisible = index < visibleCount;

            return (
              <div
                key={work.id}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onMouseEnter={() => handleMouseEnter(work.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(work.id)}
                onKeyDown={(event) => handleKeyDown(event, work.id)}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-700 cursor-pointer sm:rounded-3xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex items-start gap-4 sm:items-center sm:gap-6">
                    {/* Icon Box */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br sm:h-16 sm:w-16 sm:rounded-2xl ${work.color} shadow-lg transition-transform duration-500 ${isExpanded ? 'rotate-12 scale-110' : 'group-hover:rotate-6'}`}>
                      <Icon className="text-2xl text-white sm:text-3xl" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                        <h3 className={`min-w-0 text-lg font-bold leading-snug sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
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

                    <div className={`flex-shrink-0 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-slate-400 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
