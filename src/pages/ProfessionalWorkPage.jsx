import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from 'react';
import {
  BsBarChartLineFill,
  BsBoxSeamFill,
  BsBroadcastPin,
  BsCashCoin,
  BsClipboardCheck,
  BsCloudArrowUpFill,
  BsClockHistory,
  BsCpuFill,
  BsDiagram3Fill,
  BsExclamationTriangleFill,
  BsEyeFill,
  BsFileEarmarkCodeFill,
  BsGearWideConnected,
  BsLightningChargeFill,
  BsPersonFillLock,
  BsPhoneVibrateFill,
  BsRobot,
  BsRouterFill,
  BsShieldFillCheck,
  BsShieldLockFill,
  BsSignpost2Fill,
  BsSpeedometer2,
} from 'react-icons/bs';
import {
  SiAirbyte,
  SiApachekafka,
  SiArgo,
  SiClickhouse,
  SiDocker,
  SiGitea,
  SiGithubactions,
  SiGitlab,
  SiGoogle,
  SiGooglecloud,
  SiGrafana,
  SiHelm,
  SiKubernetes,
  SiMicrosoftazure,
  SiMqtt,
  SiOpenai,
  SiPodman,
  SiPostgresql,
  SiPrometheus,
  SiRedis,
  SiSnowflake,
  SiSonarqube,
  SiTerraform,
  SiTraefikproxy,
  SiUptimekuma,
} from 'react-icons/si';
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
      icon: SiDocker,
      color: 'from-purple-500 to-indigo-500',
      details: [
        { text: 'Introduced multistage builds and distroless images to harden runtime containers.', icon: SiDocker },
        { text: 'Integrated Trivy into build pipeline for automated vulnerability scanning.', icon: BsShieldFillCheck },
        { text: 'Reduced image size and improved security posture across services.', icon: BsSpeedometer2 },
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
      icon: SiMicrosoftazure,
      color: 'from-blue-400 to-indigo-600',
      details: [
        { text: 'Conducted end-to-end requirement gathering, strategic planning, and risk assessment for multi-cloud migration.', icon: BsClipboardCheck },
        { text: 'Migrated Kubernetes clusters from AWS EKS and GCP GKE to Azure Kubernetes Service (AKS).', icon: SiKubernetes },
        { text: 'Transitioned large-scale data storage from S3 Buckets and GCS to Azure Storage Accounts/Blobs.', icon: SiMicrosoftazure },
        { text: 'Executed multiple dry runs and validation cycles to ensure a seamless production cutover.', icon: BsShieldFillCheck },
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
      icon: SiGitea,
      color: 'from-orange-400 to-red-500',
      details: [
        { text: 'Planned and executed the migration of all organization repositories, including history and metadata.', icon: SiGitlab },
        { text: 'Configured self-hosted Gitea on private infrastructure for enhanced security.', icon: SiGitea },
        { text: 'Ensured zero downtime and data integrity during the repository transition.', icon: BsShieldFillCheck },
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
        'Trivy',
        'AKS',
        'Kubernetes',
        'Infisical',
        'Custom Runner Image'
      ],
      status: 'completed',
      icon: SiArgo,
      color: 'from-blue-500 to-cyan-500',
      details: [
        { text: 'Designed and implemented automated CI pipelines using Gitea Actions and GitHub Actions for microservices and firmware repositories.', icon: SiGithubactions },
        { text: 'Built a custom CI runner image with SonarQube scanner, Trivy, and other pipeline dependencies pre-installed, cutting per-run tool download/setup time out of every pipeline.', icon: SiDocker },
        { text: 'Built container build pipelines that automatically build, tag, and push Docker images to container registries.', icon: SiDocker },
        { text: 'Integrated SonarQube to enforce automated code quality gates and security scanning in CI pipelines.', icon: SiSonarqube },
        { text: 'Implemented GitOps deployment strategy using ArgoCD for Kubernetes workloads.', icon: SiArgo },
        { text: 'Configured automated application deployments to Azure Kubernetes Service (AKS) clusters.', icon: SiKubernetes },
        { text: 'Integrated Infisical for secure management of secrets and environment variables in CI/CD workflows.', icon: BsShieldLockFill },
        { text: 'Reduced deployment cycles by ~30% while improving reliability and traceability of releases.', icon: BsSpeedometer2 },
      ],
    },
    {
      id: 27,
      title: 'DevSecOps: CI/CD Security Gates, Infisical Secrets Management & SSO Rollout',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Ongoing',
      description:
        'Embedded automated security gates directly into build pipelines and put every internal service and website behind a single sign-on layer — catching vulnerabilities before merge and closing off unauthenticated access at the edge.',
      technologies: ['SonarQube', 'Trivy', 'SAST', 'GitLab CI/CD', 'Gitea Actions', 'Infisical', 'Reloader', 'Quality Gates', 'OAuth2 Proxy', 'Google OAuth', 'Microsoft Entra ID', 'SSO'],
      status: 'completed',
      icon: SiSonarqube,
      color: 'from-red-500 to-rose-600',
      details: [
        { text: 'Integrated SonarQube SAST into every pipeline run to catch code smells, bugs, and security hotspots at PR time, not in production.', icon: SiSonarqube },
        { text: 'Added Trivy scanning across the full surface — source dependencies, secrets, IaC/Dockerfile misconfigurations, and the final built container image.', icon: BsShieldFillCheck },
        { text: 'Configured pipelines to fail the build on CRITICAL/HIGH findings, turning scanning from a report nobody reads into an actual merge gate.', icon: BsExclamationTriangleFill },
        { text: 'Set up Infisical as the central secrets manager, maintaining separate secret sets per environment (Dev/UAT/Prod) instead of one shared credential pool.', icon: BsShieldLockFill },
        { text: 'Synced Infisical secrets into Kubernetes and paired it with Reloader on Dev/UAT so deployments there automatically roll and pick up the latest secret values with no manual pod restarts, while Prod rollouts stay manually controlled.', icon: BsClockHistory },
        { text: 'Ensured credentials never sit in plaintext env files or get baked into images.', icon: BsShieldFillCheck },
        { text: 'Deployed an OAuth2 proxy in front of internal services and websites to enforce authentication before any request reaches the backend.', icon: BsShieldLockFill },
        { text: 'Integrated Google OAuth and Microsoft Entra ID (Azure AD) as identity providers, giving centralized, credential-free sign-in across either account.', icon: SiGoogle },
        { text: 'Rolled SSO out across all internal services and websites, removing scattered per-app logins and shared/local credentials.', icon: BsPersonFillLock },
        { text: 'Why: catching a vulnerable dependency at PR time costs minutes, not an incident — and a single provider-backed SSO layer centralizes access revocation to one place instead of many.', icon: BsClockHistory },
      ],
    },
    {
      id: 5,
      title: 'Observability & Proactive Alerting (Grafana, Prometheus & Loki)',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 5',
      description:
        'Set up a full observability stack with custom alert templates to monitor microservices, infrastructure, and external dependencies post-migration.',
      technologies: [
        'Prometheus',
        'Grafana',
        'Loki',
        'Alertmanager',
        'Uptime Kuma',
        'Blackbox Exporter',
      ],
      status: 'completed',
      icon: SiGrafana,
      color: 'from-pink-500 to-rose-500',
      details: [
        { text: 'Built custom Grafana dashboards for microservices, events, data loss, PostgreSQL, MongoDB, Kafka, Kafka Connectors, Nginx/Traefik, storage databases, and PVC usage.', icon: SiGrafana },
        { text: 'Designed dedicated infrastructure dashboards for database PVCs, Kafka PVCs, service health, traffic patterns, and platform capacity trends.', icon: BsBarChartLineFill },
        { text: 'Configured proactive alerts for microservices, PVC pressure, event failures, service errors, data loss signals, and infrastructure saturation.', icon: BsExclamationTriangleFill },
        { text: 'Set up Uptime Kuma to monitor service availability and send uptime alerts before users or operations teams were impacted.', icon: SiUptimekuma },
        { text: 'Created custom alert notification templates to make incidents easier to read, triage, and route to the right team.', icon: BsFileEarmarkCodeFill },
        { text: 'Introduced synthetic checks and blackbox probes for external endpoints and critical user-facing flows.', icon: BsEyeFill },
      ],
    },
    {
      id: 6,
      title: 'Embedded IoT Device Firmware CI/CD: Build, Versioning & Fleet OTA Operations',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 6',
      description:
        'Built the full firmware pipeline end to end — automated build, versioning, and release on the CI side, and a centralized fleet dashboard for OTA rollout and status tracking across thousands of IoT devices on the CD side.',
      technologies: ['Gitea Actions', 'GCS', 'Versioning', 'Embedded Systems', 'React', 'Node.js', 'REST APIs', 'Fleet Management', 'OTA'],
      status: 'completed',
      icon: BsCpuFill,
      color: 'from-indigo-500 to-purple-500',
      details: [
        { text: 'CI — Automated firmware build and release workflows for the embedded team, covering 17 GSM and 17 WiFi protocol variants, with dependency handling and versioned uploads to Google Cloud Storage.', icon: SiGooglecloud },
        { text: 'CI — Reduced firmware release cycle from 2+ hours to around 40 minutes through build automation.', icon: BsSpeedometer2 },
        { text: 'CD — Built a multi-tenant fleet release dashboard with granular filters for Device Type, HW Version, and Library dependencies to control what ships to which devices.', icon: BsBarChartLineFill },
        { text: 'CD — Implemented MAC-ID based targeting for single-device debugging alongside bulk OTA rollout for fleet-wide updates.', icon: BsCpuFill },
        { text: 'CD — Automated release validation before rollout, reducing manual operations overhead by ~70%.', icon: BsShieldFillCheck },
        { text: 'CD — Built real-time OTA deployment tracking and status monitoring so the team can see rollout progress and failures across the entire device network as they happen.', icon: BsBroadcastPin },
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
        { text: 'Automated SMS forwarding from dedicated client SIMs using mobile automation (Automate app).', icon: BsPhoneVibrateFill },
        { text: 'Engineered a high-speed Redis caching layer for secure OTP storage with automated expiry (TTL).', icon: SiRedis },
        { text: 'Developed an operational OTP dashboard for real-time monitoring.', icon: BsBarChartLineFill },
        { text: 'Integrated a chatbot for headless authentication on utility portals, enabling autonomous bill downloads.', icon: BsRobot },
      ],
    },
    {
      id: 12,
      title: 'Snowflake Access Control, Role-Based Permission Management & Resource Consumption Reporting',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 12',
      description:
        'Designed and implemented robust role-based access control (RBAC) in Snowflake to manage user permissions securely and efficiently.',
      technologies: ['Snowflake', 'RBAC', 'SQL', 'Data Governance', 'Access Control', 'Warehouses', 'Consumption Reporting'],
      status: 'completed',
      icon: SiSnowflake,
      color: 'from-cyan-500 to-blue-600',
      details: [
        { text: 'Designed role hierarchy for different user groups including automation, analytics, and operations teams.', icon: SiSnowflake },
        { text: 'Granted fine-grained permissions (SELECT, INSERT, UPDATE) at database, schema, and table levels.', icon: BsShieldLockFill },
        { text: 'Implemented warehouse access control to enable query execution for specific roles.', icon: SiSnowflake },
        { text: 'Managed user-role assignments ensuring least-privilege access principle.', icon: BsPersonFillLock },
        { text: 'Automated permission grants for future tables using Snowflake role inheritance.', icon: BsGearWideConnected },
        { text: 'Sized and governed warehouses per team/workload, with auto-suspend/auto-resume tuned per usage pattern to avoid idle credit burn.', icon: SiSnowflake },
        { text: 'Built consumption reports on warehouse credit usage and query load per role/team, using Snowflake\'s account usage views for visibility into who is spending what.', icon: BsCashCoin },
        { text: 'Improved data security, governance, and auditability across the data platform.', icon: BsShieldFillCheck },
      ],
    },
    {
      id: 13,
      title: 'Kafka to Snowflake & CDC Streaming Platform',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 13',
      description:
        'Set up a production-ready Kafka and CDC platform for streaming MQTT data: MQTT → Kafka → Snowflake & ClickHouse for warehousing, analytics, and monitoring.',
      technologies: [
        'Strimzi Operator',
        'Kubernetes CRDs',
        'Apache Kafka',
        'Kafka Brokers',
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
        'Snowpipe Streaming',
        'Azure Blob Storage'
      ],
      status: 'completed',
      icon: SiApachekafka,
      color: 'from-cyan-500 to-blue-500',
      details: [
        { text: 'Ran the Strimzi Operator on Kubernetes, managing Kafka brokers, Kafka Connect workers, and individual connectors declaratively through Kafka/KafkaConnect/KafkaConnector CRDs instead of hand-managed StatefulSets.', icon: SiKubernetes },
        { text: 'Deployed Strimzi Kafka clusters for Dev, UAT, and Prod environments with clean separation between workloads.', icon: SiApachekafka },
        { text: 'Designed Kafka topics, partitions, and naming conventions for scalable MQTT telemetry ingestion.', icon: SiApachekafka },
        { text: 'Integrated MQTT to Kafka pipelines to stream real-time device data into structured Kafka topics.', icon: SiMqtt },
        { text: 'Built Kafka to Snowflake and ClickHouse ingestion paths for warehousing, analytics, and operational reporting.', icon: SiSnowflake },
        { text: 'Configured Kafka Connect Snowflake connectors in Snowpipe Streaming mode for low-latency, row-level loads instead of batch file staging.', icon: SiSnowflake },
        { text: 'Implemented PostgreSQL to Snowflake and ClickHouse Change Data Capture (CDC) for database change synchronization.', icon: SiPostgresql },
        { text: 'Configured dead-letter queues, retry handling, and monitoring to improve pipeline reliability.', icon: BsExclamationTriangleFill },
        { text: 'Applied schema mapping and validation so raw MQTT events became analytics-ready warehouse records.', icon: BsShieldFillCheck },
        { text: 'Enabled analytics and operations teams to access near real-time device and database metrics from Snowflake and ClickHouse.', icon: SiClickhouse },
      ],
    },
    {
      id: 25,
      title: 'Live Kafka-to-ClickHouse Streaming & DLQ Reliability',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 25',
      description:
        'Built a live, production-grade streaming pipeline into ClickHouse for high-volume IoT device event data, then re-architected it on Bento to solve a batch-rejection problem inherent to ClickHouse\'s ingestion model, giving true per-message error isolation and a fully observable dead-letter queue.',
      technologies: [
        'ClickHouse',
        'Bento',
        'Kafka Connect',
        'Kafka',
        'Airbyte',
        'Kubernetes',
        'Strimzi',
        'DLQ',
        'Prometheus',
        'Grafana',
        'Schema Design',
      ],
      status: 'completed',
      icon: SiClickhouse,
      color: 'from-yellow-500 to-orange-500',
      details: [
        { text: 'Set up a production-grade, self-hosted ClickHouse database on Kubernetes, migrating off Bitnami\'s legacy paid-subscription images to the free, open-source HelmForge chart, including cluster sizing, storage provisioning, and database/table/DLQ schema design for high-volume IoT device event data.', icon: SiClickhouse },
        { text: 'Configured 12 Kafka Connect sink connectors (one per topic) to stream live device data from Kafka directly into the new ClickHouse deployment.', icon: SiApachekafka },
        { text: 'Diagnosed and root-caused a ClickHouse-specific batch-rejection behavior (confirmed against official ClickHouse and Snowflake connector source code) where a single bad record could reject an entire batch of otherwise-valid records, and tuned buffer settings to balance data safety against ClickHouse insert-rate limits.', icon: BsExclamationTriangleFill },
        { text: 'Built full DLQ error observability by integrating a header-to-field Kafka Connect transform, capturing exact error messages, stacktraces, and original topic/partition/offset directly in a queryable ClickHouse DLQ table.', icon: BsFileEarmarkCodeFill },
        { text: "Root-caused and fixed a timestamp precision bug causing records to store as 1970-epoch dates by aligning ClickHouse column precision with Kafka Connect's actual millisecond-based timestamps.", icon: BsClockHistory },
        { text: 'Diagnosed inconsistent handling of malformed sensor values (e.g. non-numeric strings in numeric fields) across Snowflake and ClickHouse connectors, and designed a schema-level fix using raw-text-plus-materialized-column pairs to safely convert bad values without dropping records.', icon: BsShieldFillCheck },
        { text: 'Validated a real production bulk sync of ~54 million rows into ClickHouse via Airbyte, confirming throughput and stability at scale.', icon: SiAirbyte },
        { text: 'Re-architected the ingestion layer on Bento (a Benthos-derived Go stream processor) to eliminate batch-level rejection at the source: bad values are cleaned to NULL inline via Bloblang instead of failing the whole batch, and any message that still fails is routed individually to a dead-letter table with the raw payload and exact error reason.', icon: BsLightningChargeFill, isNew: true },
        { text: 'Added a payload-drift safeguard that rejects only messages containing genuinely unmapped fields to the DLQ (visible, actionable) rather than silently inserting partial rows, catching device-firmware changes the moment they appear.', icon: BsEyeFill, isNew: true },
        { text: 'Instrumented the pipeline with Prometheus metrics and a custom Grafana dashboard covering per-topic throughput, DLQ rate, processor errors, Kafka connection health, and insert latency.', icon: SiGrafana, isNew: true },
      ],
    },
    {
      id: 29,
      title: 'ClickHouse Operator: Primary + Read-Replica via Helm',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Ongoing',
      description:
        'Replaced a single, non-replicated ClickHouse instance with a genuine primary + read-replica cluster using the official ClickHouse Kubernetes Operator, root-causing and fixing several real issues along the way rather than following a happy-path install guide.',
      technologies: ['ClickHouse', 'Kubernetes Operator', 'Helm', 'Keeper', 'cert-manager', 'ReplicatedMergeTree'],
      status: 'completed',
      icon: SiHelm,
      color: 'from-yellow-500 to-orange-600',
      details: [
        { text: "Chose ClickHouse Inc's own official Kubernetes Operator over Altinity's and the unverified ArtifactHub listing — verified the chart's authenticity byte-for-byte against the source on GitHub before trusting it in a real cluster.", icon: SiClickhouse },
        { text: 'Installed via Helm straight from the official OCI registry (operator chart + cluster chart), after confirming the hard prerequisite (cert-manager, needed for the operator\'s admission webhook) was already healthy in the cluster.', icon: SiHelm },
        { text: 'Root-caused the original outage: the old standalone instance\'s internal query-memory tracker was being squeezed to ~1.1GiB by background caches inside a flat 2Gi container cap, so any moderately heavy SELECT got killed by ClickHouse\'s own OvercommitTracker.', icon: BsExclamationTriangleFill },
        { text: 'Sized storage and resource limits from actual measured usage (real disk usage, real node headroom) instead of copying the old instance\'s over-provisioned defaults or its under-provisioned memory cap — fixing both problems at once.', icon: BsCpuFill },
        { text: 'Caught a real auth gap before go-live: the default ClickHouse user ships with no password unless explicitly configured, and the new CRD exposes a completely different mechanism for it than the old Helm chart — wired a Secret-backed password through it rather than assuming parity.', icon: BsShieldLockFill },
        { text: 'Stood up genuine replication: 1 shard × 3 ClickHouse replicas (peer-to-peer via ReplicatedMergeTree, not primary-led) coordinated by a 3-node Keeper quorum, then deliberately dedicated one replica to write traffic so a heavy read query crashing a different replica can never take down ingestion.', icon: SiKubernetes },
        { text: 'Cut over live Bento ingestion with zero data loss: replayed the full Kafka backlog into the new cluster, then separately re-cut to a clean "start from now" state by resetting all 11 consumer group offsets and truncating tables in lockstep, not by guesswork.', icon: BsLightningChargeFill },
        { text: 'Diagnosed a transient frp tunnel port conflict during a rolling restart (old pod still holding the port while the new one tried to bind it), confirmed via logs that it was a benign race that self-healed on automatic retry rather than a real misconfiguration.', icon: BsRouterFill },
      ],
    },
    {
      id: 14,
      title: 'CDC: PostgreSQL to Snowflake & ClickHouse (Debezium, Apicurio, PeerDB, Airbyte & Snowflake Connector for PostgreSQL Evaluation)',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 14',
      description:
        'Implemented Debezium for efficient Change Data Capture (CDC) from PostgreSQL into both Snowflake and ClickHouse via Kafka, using Apicurio Registry for schema management, after evaluating it against newer managed alternatives.',
      technologies: ['Debezium', 'PostgreSQL', 'Kafka', 'Snowflake', 'ClickHouse', 'Apicurio Registry', 'PeerDB', 'Airbyte', 'CDC'],
      status: 'completed',
      icon: SiPostgresql,
      color: 'from-cyan-500 to-blue-600',
      details: [
        { text: 'Configured Debezium connectors to capture real-time changes from PostgreSQL databases.', icon: SiPostgresql },
        { text: 'Integrated Kafka topics for reliable data streaming with a reduced storage footprint using Apicurio Registry for schema management.', icon: SiApachekafka },
        { text: 'Evaluated alternative CDC approaches — PeerDB, Airbyte, and the Snowflake Connector for PostgreSQL (Snowflake\'s own Snowpipe Streaming–based Native App, available directly from Snowflake Marketplace) — before settling on the self-hosted Debezium + Kafka + Apicurio stack for full control over the pipeline.', icon: SiAirbyte },
        { text: 'Reused the same Debezium + Kafka + Apicurio pipeline to also stream Postgres changes into ClickHouse, avoiding a second bespoke CDC setup for the second target.', icon: SiClickhouse },
        { text: 'Established a single Postgres-to-Kafka capture stage feeding both Snowflake and ClickHouse sinks for consistent, low-latency synchronization.', icon: SiSnowflake },
        { text: 'Optimized Kafka topic storage by leveraging Apicurio schema evolution and compression techniques.', icon: BsDiagram3Fill },
        { text: 'Hit and resolved a real schema-evolution conflict: an upstream Postgres column type change broke Apicurio compatibility checks mid-flight, requiring a coordinated schema registration change rather than a simple connector restart to avoid stalling the whole topic.', icon: BsExclamationTriangleFill },
        { text: 'Ensured data consistency and low-latency updates for analytics and reporting on both targets.', icon: BsShieldFillCheck },
      ],
    },
    {
      id: 16,
      title: 'PostgreSQL Access Control & PITR Backup',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 16',
      description:
        'Improved PostgreSQL security and recoverability by enforcing least-privilege users and production-grade backup workflows.',
      technologies: ['PostgreSQL', 'RBAC', 'pgBackRest', 'PITR', 'Databasus', 'Backup', 'Access Control'],
      status: 'completed',
      icon: SiPostgresql,
      color: 'from-emerald-500 to-teal-500',
      details: [
        { text: 'Created read-only PostgreSQL users for each team to provide safe access without exposing elevated privileges.', icon: SiPostgresql },
        { text: 'Provisioned individual service users with scoped permissions lower than superuser access for application workloads.', icon: BsPersonFillLock },
        { text: 'Reduced operational risk by replacing broad database credentials with least-privilege access patterns.', icon: BsShieldLockFill },
        { text: 'Set up PostgreSQL backups using pgBackRest (full/incremental/differential) for reliable restore operations.', icon: SiPostgresql },
        { text: 'Configured point-in-time recovery (PITR) support to recover databases to specific moments when needed, using Databasus as the backup agent for centralized scheduling and unified restore workflows.', icon: BsClockHistory },
      ],
    },
    {
      id: 23,
      title: 'CloudNativePG Platform & Postgres Disaster Recovery',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 20',
      description:
        'Ran PostgreSQL as a managed platform on Kubernetes with CloudNativePG, backed by continuous backups, point-in-time recovery, auditing, and monitoring.',
      technologies: [
        'CloudNativePG',
        'PostgreSQL',
        'Barman Cloud',
        'PITR',
        'pgAudit',
        'Grafana',
        'Kubernetes',
      ],
      status: 'completed',
      icon: SiPostgresql,
      color: 'from-sky-500 to-cyan-600',
      details: [
        { text: 'Deployed CloudNativePG for a partner team with connection pooler setup and initial-restore bootstrap from existing backups.', icon: SiPostgresql },
        { text: 'Configured Barman Cloud for continuous backups and point-in-time recovery of CloudNativePG clusters.', icon: BsClockHistory },
        { text: 'Enabled pgAudit for query-level auditing to support security review and compliance needs.', icon: BsShieldFillCheck },
        { text: 'Debugged a real failover edge case where the connection pooler briefly kept routing to the demoted primary after a switchover, causing transient write errors — resolved by tightening the pooler\'s health-check interval instead of just re-running the failover and hoping.', icon: BsExclamationTriangleFill },
        { text: 'Built Grafana dashboards and alerts for cluster health, replication state, and PVC capacity trends.', icon: SiGrafana },
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
      icon: SiOpenai,
      color: 'from-violet-500 to-fuchsia-500',
      details: [
        { text: 'Deployed an AI proxy on Kubernetes and backed it with Azure OpenAI provider keys from Azure AI Foundry.', icon: SiOpenai },
        { text: 'Created teams, users, and individual virtual API keys in the proxy application instead of sharing actual provider keys.', icon: BsPersonFillLock },
        { text: 'Enabled usage tracking at individual and team levels for visibility, governance, and cost accountability.', icon: BsBarChartLineFill },
        { text: "Configured Goose/Codex on employees' local systems and connected them to the governed AI proxy for everyday work.", icon: SiOpenai },
        { text: 'Distributed controlled AI access across employees to support faster engineering and operational workflows.', icon: BsGearWideConnected },
        { text: 'Set up PostgreSQL MCP servers and shared them with respective teams for controlled AI-assisted database interactions.', icon: SiPostgresql },
      ],
    },
    {
      id: 20,
      title: 'Edge Delivery & CDN as Code (Bunny.net + Terraform + Atlantis)',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 17',
      description:
        'Moved frontend delivery to Bunny.net CDN and codified the entire edge setup in Terraform, with Atlantis driving plan/apply from pull requests so infrastructure changes get reviewed like application code.',
      technologies: [
        'Terraform',
        'Atlantis',
        'Bunny.net',
        'Pull Zones',
        'Edge Rules',
        'CDN',
        'Azure Storage',
        'GitOps',
        'IaC',
      ],
      status: 'completed',
      icon: SiTerraform,
      color: 'from-amber-400 to-orange-500',
      details: [
        { text: 'Deployed frontend applications on Bunny.net using storage-account backed pull zones for globally cached delivery.', icon: BsCloudArrowUpFill },
        { text: 'Wrote Terraform modules for pull zones, storage zones, hostnames, TLS, and cache behaviour so the edge is reproducible from code.', icon: SiTerraform },
        { text: 'Configured CDN edge rules (caching, redirects, header and origin routing) declaratively instead of clicking through the provider console.', icon: BsRouterFill },
        { text: 'Set up Atlantis so terraform plan runs automatically on every pull request and apply happens only after review and approval.', icon: SiGitea },
        { text: 'Eliminated local state drift and shared provider credentials by centralizing runs through Atlantis with remote state.', icon: SiTerraform },
        { text: 'Gave the team a safe, auditable workflow for infrastructure changes — every edge change is a reviewable diff with a visible plan.', icon: BsShieldFillCheck },
      ],
    },
    {
      id: 21,
      title: 'Air-Gapped On-Premise Enterprise Deployments',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 18',
      description:
        'Delivered complete air-gapped production stacks for 2 enterprise clients — a global IT firm and a major Indian retailer — running entirely on customer infrastructure with no internet dependency.',
      technologies: [
        'Podman',
        'On-Premise',
        'Air-Gapped',
        'MinIO',
        'PostgreSQL',
        'Reverse Proxy',
        'VAPT',
        'Trivy',
        'SonarQube',
      ],
      status: 'completed',
      icon: SiPodman,
      color: 'from-slate-500 to-zinc-600',
      details: [
        { text: 'Packaged and deployed frontend, backend, databases, object storage, reverse proxy, log streaming, and monitoring as a self-contained stack using Podman.', icon: SiPodman },
        { text: 'Designed the stack to run fully offline, with images and dependencies pre-staged for environments that have no outbound connectivity.', icon: BsBoxSeamFill },
        { text: 'Passed customer VAPT alongside Trivy and SonarQube gates — 0 critical CVEs approved for production.', icon: SiSonarqube },
        { text: 'Authored client-handover runbooks and architecture diagrams so customer teams could operate the stack independently.', icon: BsFileEarmarkCodeFill },
      ],
    },
    {
      id: 22,
      title: 'FinOps Cost Attribution & Dashboards',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 9–19',
      description:
        'Made cloud spend visible and accountable — strict prod/non-prod governance, per-team cost attribution, and dashboards that put spend in front of the people who cause it.',
      technologies: [
        'OpenCost',
        'Kubernetes',
        'Azure',
        'Azure Portal',
        'Google Sheets',
        'Looker Studio',
        'Google Apps Script',
        'FinOps',
      ],
      status: 'completed',
      icon: SiMicrosoftazure,
      color: 'from-lime-500 to-green-600',
      details: [
        { text: 'Designed strict separation between production and non-production (dev, QA, POC) environments as the governance baseline for cost accountability.', icon: BsDiagram3Fill },
        { text: 'Set up OpenCost for detailed Kubernetes cost reporting with per-namespace and per-team attribution.', icon: BsCashCoin },
        { text: 'Built an automated Azure cost pipeline (Azure Portal CSV export → Google Drive → Google Sheets via Apps Script) feeding Looker Studio dashboards, broken down by service name, resource type, and category.', icon: SiMicrosoftazure },
        { text: 'Gave every team direct visibility into what their workloads actually cost, turning cost from a finance-only concern into an engineering one.', icon: BsCashCoin },
      ],
    },
    {
      id: 28,
      title: 'Cost Optimization: Autoscaling, Right-Sizing & Consolidation',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 9–26',
      description:
        'Turned FinOps visibility into actual savings — Karpenter for just-in-time batch capacity, Goldilocks-driven right-sizing, event-driven document batch processing, off-hours suspension, ML model suspend-after-use, and consolidating LoadBalancers via frp.',
      technologies: ['Karpenter', 'Goldilocks', 'Kubernetes', 'GCP Pub/Sub', 'Cloud Scheduler', 'frp', 'Cost Optimization'],
      status: 'completed',
      icon: SiKubernetes,
      color: 'from-lime-500 to-green-600',
      details: [
        { text: 'Deployed Karpenter to autoscale nodes for cron and batch workloads, provisioning capacity on demand instead of running idle nodes.', icon: SiKubernetes },
        { text: 'Ran Goldilocks (VPA-based) across namespaces to generate resource request/limit recommendations, right-sizing pods that were over-provisioned.', icon: BsGearWideConnected },
        { text: 'Applied the right-sizing recommendations cluster-wide, cutting reserved CPU/memory that was never actually used at runtime.', icon: BsCashCoin },
        { text: 'Identified and decommissioned unused VM instances, services, and orphaned resources found outside the autoscaled workloads.', icon: BsCashCoin },
        { text: 'Automated suspension of non-production (dev, QA, POC) VMs during off-hours instead of leaving them running 24/7.', icon: BsClockHistory },
        { text: 'Ran ML model usage as batch jobs, deploying the model only for the run and automatically suspending/undeploying it right after completion instead of keeping it always-on.', icon: BsCpuFill },
        { text: 'Moved document/bill processing to event-driven batch jobs using GCP Pub/Sub for triggering and Cloud Scheduler for recurring runs, instead of an always-on processing service.', icon: SiGooglecloud },
        { text: 'Replaced multiple paid per-service LoadBalancers with a single self-hosted frp tunnel: frps (server) as the one public entry point, frpc (client) tunneling internally to each service by cluster DNS name, with the control connection secured by a shared token in a Kubernetes Secret.', icon: BsSignpost2Fill },
        { text: 'Exposed the app, ClickHouse, and Postgres (via PgBouncer) through the single frp public IP on dedicated ports, then removed the old per-service LoadBalancers once validated end to end.', icon: BsRouterFill },
        { text: 'Combined, these autoscaling, right-sizing, suspension, and consolidation measures reduced overall cloud costs by ~20%.', icon: BsCashCoin },
      ],
    },
    {
      id: 24,
      title: 'Load Testing & Independent Project Delivery',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 21',
      description:
        'Independently owned 3 high-priority full-stack projects end-to-end under tight deadlines — from proposal through deployment and performance validation.',
      technologies: [
        'Locust',
        'Load Testing',
        'React',
        'Node.js',
        'Kubernetes',
        'Project Ownership',
      ],
      status: 'completed',
      icon: BsSpeedometer2,
      color: 'from-fuchsia-500 to-pink-600',
      details: [
        { text: 'Owned planning, design, proposal, development, deployment, and validation for 3 high-priority projects without hand-off.', icon: BsClipboardCheck },
        { text: 'Ran load tests with Locust to establish throughput and latency baselines before production release.', icon: BsSpeedometer2 },
        { text: 'Built a custom load-testing tool for scenarios the off-the-shelf tooling did not cover.', icon: BsCpuFill },
        { text: 'Documented results in delivery reports so stakeholders could see capacity limits and performance evidence, not just a shipped feature.', icon: BsFileEarmarkCodeFill },
      ],
    },
    {
      id: 17,
      title: 'Traefik API Gateway Modernization',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Phase 17',
      description:
        'Replaced Nginx with Traefik and open-source gateway components to add advanced routing, identity, visibility, traffic control, and security features.',
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
      status: 'completed',
      icon: SiTraefikproxy,
      color: 'from-red-500 to-rose-600',
      details: [
        { text: 'Replaced Nginx with Traefik to build a more flexible open-source edge and API gateway layer.', icon: SiTraefikproxy },
        { text: 'Identity Layer: ForwardAuth + Custom SSO verifies user sessions before traffic reaches backend services.', icon: BsPersonFillLock },
        { text: 'Visibility Layer: Prometheus + Grafana establishes traffic and error monitoring for gateway operations.', icon: SiPrometheus },
        { text: 'Traffic Control: Redis + Traefik plugin adds cluster-wide per-user and per-application rate limits.', icon: SiRedis },
        { text: 'Shield Layer: Coraza WAF adds deep request inspection to protect services from SQL injection and XSS patterns.', icon: BsShieldLockFill },
        { text: 'Why: Strengthens security and governance while avoiding lock-in to expensive proprietary API gateway features.', icon: BsGearWideConnected },
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
        { text: 'Configuring router-level controls to securely manage IoT device connectivity across networks and environments.', icon: BsRouterFill },
        { text: 'Setting up WAF policies to protect IoT-facing APIs and portals from common web attack patterns.', icon: BsShieldLockFill },
        { text: 'Integrating RADIUS-based authentication to centralize access control for device and network entry points.', icon: BsPersonFillLock },
        { text: 'Applying firewall and routing rules to reduce exposure and make IoT access paths easier to audit.', icon: BsShieldFillCheck },
        { text: 'Why: Builds a stronger security foundation before IoT traffic reaches applications and platform services.', icon: BsExclamationTriangleFill },
      ],
    },
    {
      id: 30,
      title: 'Product Temporary Shutdown: Infra Teardown & Cost Elimination',
      company: 'iCapo Tech Pvt Ltd (Living Things)',
      period: 'Ongoing',
      description:
        'Executed a full, reversible infrastructure teardown for one product\'s temporary production shutdown on shared infrastructure — audited real cloud spend, drained the Kubernetes cluster, cleaned up every resource still billing after the workloads were down, and verified backups before powering off VMs, while keeping every other product on the same infrastructure running with zero impact.',
      technologies: ['Kubernetes', 'ArgoCD', 'CronJobs', 'LoadBalancer Services', 'Disk Management', 'Database Backup', 'VM Snapshots', 'FinOps'],
      status: 'completed',
      icon: BsBoxSeamFill,
      color: 'from-zinc-500 to-slate-700',
      details: [
        { text: 'Pulled a full monthly cost report broken down by Kubernetes/node compute, disk, object storage, and networking to establish the real spend baseline before deciding what to tear down.', icon: BsCashCoin },
        { text: 'Scoped every teardown action to just this one product\'s namespaces, nodes, and resources on the shared cluster/infra.', icon: BsShieldFillCheck },
        { text: 'Every other product on the same infrastructure kept running normally throughout, with zero downtime or performance impact.', icon: BsShieldFillCheck },
        { text: 'Disabled ArgoCD auto-sync first, so nothing self-heals back up mid-teardown.', icon: SiArgo },
        { text: 'Scaled every Deployment and StatefulSet in the product\'s namespaces down to zero replicas.', icon: SiKubernetes },
        { text: 'Suspended every Kubernetes CronJob so nothing keeps firing against a cluster that is intentionally down.', icon: BsClockHistory },
        { text: 'Ran a disk sanity pass, removing unmounted and not-required disks that were still billing with nothing attached to them.', icon: BsCpuFill },
        { text: 'Removed all LoadBalancer-type Kubernetes Services — the resource category that keeps billing per-hour even after every workload behind it is scaled to zero.', icon: BsRouterFill },
        { text: 'Took a full database backup and restored it into a fresh database to verify it actually works.', icon: BsShieldFillCheck },
        { text: 'Archived the verified backup to blob storage as the durable recovery point.', icon: BsCloudArrowUpFill },
        { text: 'Took disk snapshots of every VM before shutdown, so any VM can be rebuilt exactly as it was.', icon: BsCloudArrowUpFill },
        { text: 'Powered down all VMs as the final step, only once compute, scheduling, storage, and networking were all confirmed clean and backed up.', icon: BsGearWideConnected },
        { text: 'Why: ordered the teardown so nothing gets removed before its backup or snapshot is verified — the environment shuts down to near-zero spend while staying fully restorable.', icon: BsClockHistory },
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
        { text: 'Refining pipelines and dashboards based on feedback from developers and operations.', icon: BsGearWideConnected },
        { text: 'Improving alert quality to reduce noise while keeping strong coverage.', icon: BsExclamationTriangleFill },
        { text: 'Supporting new features and services as the product evolves.', icon: BsLightningChargeFill },
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
                          {work.details.map((detail, i) => {
                            const hasIcon = typeof detail === 'object' && detail !== null;
                            const text = hasIcon ? detail.text : detail;
                            const DetailIcon = hasIcon ? detail.icon : null;
                            const isNew = hasIcon && detail.isNew;
                            return (
                              <li key={i} className="flex items-start gap-3 group/item">
                                {DetailIcon ? (
                                  <DetailIcon className={`mt-0.5 flex-shrink-0 text-base ${
                                    isNew
                                      ? (isDark ? 'text-teal-400' : 'text-teal-600')
                                      : (isDark ? 'text-indigo-400' : 'text-indigo-500')
                                  } group-hover/item:scale-125 transition-transform`} />
                                ) : (
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover/item:scale-150 transition-transform flex-shrink-0" />
                                )}
                                <span className={`text-sm md:text-base ${
                                  isNew
                                    ? (isDark ? 'text-teal-300' : 'text-teal-700')
                                    : (isDark ? 'text-slate-300' : 'text-slate-600')
                                }`}>
                                  {text}
                                  {isNew && (
                                    <span className={`ml-2 align-middle text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                      isDark ? 'bg-teal-500/20 text-teal-300' : 'bg-teal-100 text-teal-700'
                                    }`}>
                                      New
                                    </span>
                                  )}
                                </span>
                              </li>
                            );
                          })}
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
