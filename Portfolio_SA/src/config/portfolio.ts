// Portfolio Configuration
// Update these values to customize your portfolio

export const portfolioConfig = {
  // Personal Information
  name: "Sriram Atmakuri",
  description: "AWS Solutions Architect with six years shipping cloud infrastructure, ML systems, and backend services across AWS, Azure, and GCP. Built distributed systems at Amazon, IoT automation from hardware to cloud, and full-stack healthcare applications. Focused on data engineering, AI pipelines, and distributed architecture at production scale.",

  // Resume Configuration
  resumePath: "/Sriram_Atmakuri_Resume.pdf",

  // Social Links
  email: "sriramatmakuri1@gmail.com",
  github: "https://github.com/SriramAtmakuri",
  linkedin: "https://linkedin.com/in/sriramatmakuri/",

  // Education
  education: {
    degree: "Master of Science (M.S) – Computer Science",
    university: "University of Colorado Denver",
    location: "Denver, USA",
    period: "Aug 2021 - May 2023",
  },

  // Experience
  experiences: [
    {
      role: 'Senior Software Engineer',
      company: 'Digestive and Liver Center of Florida',
      location: 'Florida',
      period: 'Jan 2025 - Present',
      highlights: [
        'Delivered full-stack clinical applications using TypeScript, React, Node.js, and Docker with Redux and GraphQL APIs, improving patient workflow efficiency by 35% through responsive UI and real-time analytics dashboards.',
        'Integrated HIPAA-compliant billing and scheduling systems with contract validation and schema enforcement, reducing integration failures by 18% and portal accessibility issues by 30%.',
        'Optimized load time by 25% through webpack bundling and lazy loading, and incident response time by 30% through Prometheus and Grafana monitoring.',
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Amazon',
      location: 'Seattle',
      period: 'Dec 2023 - Dec 2024',
      highlights: [
        'Architected AWS supply chain and ML infrastructure using Lambda, S3, DynamoDB, SageMaker, and Redshift, automating order processing and demand forecasting with 28% throughput improvement through SQS orchestration and distributed model training.',
        'Developed document intelligence pipelines using Textract and Bedrock LLMs alongside Java, Kotlin, and Spring Boot backend services with EventBridge routing, raising throughput by 25% and cutting query latency by 35% through OpenSearch and ElastiCache Redis.',
        'Strengthened ML observability and platform security using SageMaker Model Monitor, CloudWatch, and AWS Config, reducing model drift detection time by 25% and vulnerability resolution time by 30% through automated CodePipeline validation.',
      ],
    },
    {
      role: 'Web Developer',
      company: 'University of Colorado Denver',
      location: 'Denver',
      period: 'Jan 2022 - May 2023',
      highlights: [
        'Redesigned university web applications using HTML, CSS, JavaScript, and Bootstrap with Figma prototyping, completing 95% of projects on time and reducing production issues by 70% through cross-browser validation.',
        'Built student analytics and enrollment reporting systems using SQL Server, Django, and C# APIs, increasing student retention by 25% through predictive enrollment analytics and data visualization dashboards.',
        'Enforced 90% test coverage through peer reviews, Git, and unit testing, while reducing page load time by 20% through asset compression and semantic HTML5 optimization.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Automate EM',
      location: 'India',
      period: 'May 2019 - Aug 2021',
      highlights: [
        'Engineered a full-stack home automation platform using Python, C#, and MySQL with event-driven architecture, improving device response time by 35% across IoT workflows.',
        'Provisioned Apache Kafka with Scala for real-time event streaming and Terraform infrastructure across Azure, cutting delivery cycles by 20% and environment setup time by 25%.',
        'Deployed CI/CD pipelines using Jenkins, Docker, Kubernetes, and Ansible, achieving 30% faster deployments through containerized builds and automated service mesh configuration.',
      ],
    },
  ],

  // Skills
  skills: {
    'Programming Languages': ['Java', 'Kotlin', 'Python', 'C#', 'C++', 'JavaScript', 'TypeScript', 'Scala', 'Go'],
    'Web Development': ['React.js', 'Next.js', 'Angular', 'Vue.js', 'Node.js', 'Tailwind CSS', 'Redux', 'GraphQL', 'WebRTC'],
    'Backend Technologies': ['Spring Boot', 'FastAPI', 'Django', 'Express.js', 'REST APIs', 'Apache Kafka', 'RabbitMQ', 'AWS SQS', 'WebSockets'],
    'Database & Storage': ['PostgreSQL', 'MySQL', 'DynamoDB', 'MongoDB', 'Redis', 'ChromaDB', 'pgvector', 'ElasticSearch', 'ClickHouse'],
    'Cloud & DevOps': ['AWS Lambda', 'AWS S3', 'SageMaker', 'Azure AKS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    'AI & ML': ['LangChain', 'LangGraph', 'RAG Architecture', 'Amazon Bedrock', 'PyTorch', 'TensorFlow', 'HuggingFace', 'MLflow', 'LLM APIs'],
    'Data Engineering': ['Apache Spark', 'Apache Airflow', 'dbt', 'AWS Glue', 'Snowflake', 'Redshift', 'BigQuery', 'Dagster', 'Apache Flink'],
    'Testing & Tools': ['JUnit', 'Jest', 'Pytest', 'Git', 'SonarQube', 'Postman', 'JIRA', 'GitHub Actions', 'Grafana'],
    'Architecture & Design': ['Microservices', 'Event-Driven Architecture', 'System Design', 'IoT', 'API Gateway', 'MQTT', 'MLOps', 'Serverless', 'CI/CD'],
  },

  // Projects
  projects: [
    {
      title: 'DevFlow - AI-Powered Knowledge Base',
      description: 'Engineered a transformative RAG application using React, FastAPI, and ChromaDB, enabling semantic search across personal coding documentation. Integrated an LLM for natural language query processing, surfacing precise answers from a self-hosted vector knowledge base.',
      descriptionSegments: [
        { text: 'Engineered a transformative RAG application using React, FastAPI, and ChromaDB,', ls: '-1.2px' },
        { text: ' enabling semantic search across personal coding documentation.', ls: '-1.4px' },
        { text: ' Integrated an LLM for natural language query processing, surfacing precise answers from a self-hosted vector knowledge base.', ls: '-1.2px' },
      ],
      tech: ['React', 'Vite', 'Python', 'FastAPI', 'ChromaDB', 'LLM Integration', 'SQLite', 'Sentence Transformers'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
      github: 'https://github.com/SriramAtmakuri/devflow',
      live: 'https://devflow-sriram.web.app/',
      caseStudy: {
        challenge: 'Developers accumulate extensive coding resources, documentation, and notes across fragmented platforms and files. Retrieving knowledge from this scattered landscape is slow, and keyword-based search fails to capture context or semantic meaning. The challenge demanded a system capable of indexing personal resources, understanding natural language queries, and surfacing contextually accurate answers from a unified knowledge base.',
        challengeSegments: [
          { text: 'Developers accumulate extensive coding resources, documentation, and notes across fragmented platforms and files. ' },
          { text: 'Retrieving knowledge from this scattered landscape is slow, and keyword-based search fails to capture context or semantic meaning. ', ls: '-1.0px' },
          { text: 'The challenge demanded a system capable of indexing personal resources, understanding natural language queries, and surfacing contextually accurate answers from a unified knowledge base.' },
        ],
        solution: 'Architected DevFlow, a full-stack RAG application for personal coding knowledge management. Engineered a React and Vite frontend with a FastAPI backend for high-performance search and indexing endpoints. Deployed ChromaDB as the vector store for cosine similarity search across document embeddings. Leveraged Sentence Transformers to generate semantic embeddings from documentation and code snippets. Designed a document indexing pipeline to process and vectorize uploaded files and URLs. Integrated an LLM API for natural language understanding and answer generation. Built SQLite for lightweight metadata persistence and a source management system for organizing indexed knowledge.',
        solutionSegments: [
          { text: 'Architected DevFlow, a full-stack RAG application for personal coding knowledge management. ', ls: '-1.0px' },
          { text: 'Engineered a React and Vite frontend with a FastAPI backend for high-performance search and indexing endpoints. Deployed ChromaDB as the vector store for cosine similarity search across document embeddings. Leveraged Sentence Transformers to generate semantic embeddings from documentation and code snippets. Designed a document indexing pipeline to process and vectorize uploaded files and URLs. Integrated an LLM API for natural language understanding and answer generation. Built SQLite for lightweight metadata persistence and a source management system for organizing indexed knowledge.' },
        ],
        impact: [
          'Enabled semantic search across personal coding documentation with vector similarity',
          'Processed and indexed various document formats including PDFs, markdown, and web pages',
          'Combined vector search with LLM generation for contextually accurate answers',
          'Designed an intuitive interface for managing and organizing coding knowledge sources',
          'Delivered a RAG pipeline with sub-second semantic retrieval across all indexed sources',
          'Surfaced real-time indexing status for every uploaded document',
          'Replaced keyword search with natural language querying across the full knowledge base'
        ],
        techDetails: 'React frontend with Vite for fast build times and hot module replacement. FastAPI backend providing RESTful endpoints for search, indexing, and source management. ChromaDB vector database for high-performance similarity search with cosine distance metrics. LLM API integration for natural language processing and answer generation. Sentence Transformers library for generating text embeddings from documentation. SQLite for lightweight persistent storage of metadata and application state. Custom document processing pipeline handling multiple file formats.'
      }
    },
    {
      title: 'GeoLens - Geospatial RAG Platform',
      description: 'Geospatial RAG platform combining PostGIS spatial filtering, pgvector similarity, and BM25 full-text ranking in a unified SQL query. Users sketch map polygons, pose natural language questions, and receive spatially scoped answers with citations, achieving 0.90 hit rate and 0.83 MRR across the NYC zoning benchmark.',
      descriptionSegments: [
        { text: 'Geospatial RAG platform combining PostGIS spatial filtering, pgvector similarity, and BM25 full-text ranking in a unified SQL query.', ls: '-1.2px' },
        { text: ' Users sketch map polygons, pose natural language questions, and receive spatially scoped answers with source citations across geographically filtered knowledge bases.', ls: '-1.2px' },
      ],
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'PostGIS', 'pgvector', 'React', 'TypeScript', 'Leaflet', 'Redis', 'Docker', 'OpenTelemetry'],
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop',
      github: 'https://github.com/SriramAtmakuri/GeoLens',
      caseStudy: {
        challenge: 'Traditional RAG systems treat all documents equally regardless of location, returning semantically relevant but geographically incorrect results. For zoning, permit, and regulatory queries, an answer that is technically correct but spatially wrong is useless. Standard vector search fails on exact regulation codes and parcel IDs, while BM25 alone misses paraphrased queries. The system needed to enforce geographic boundaries while handling semantic similarity and exact keyword matching in a single retrieval pass.',
        solution: 'Built a unified hybrid retrieval pipeline combining PostGIS ST_Within spatial filtering, pgvector cosine similarity, and BM25 ts_rank in a single PostgreSQL query. Implemented HyDE to improve recall on ambiguous queries by embedding generated hypothetical answers instead of raw questions. Added query expansion that generates three parallel LLM variations for each query before retrieval. Integrated a cross-encoder reranker to boost precision on top-k candidates. Used Rust-backed, tiktoken-aware semantic chunking that splits at sentence and paragraph boundaries instead of fixed token windows. Background ingestion runs through Redis ARQ job queues. The React and Leaflet frontend lets users draw polygons on the map and tune vector versus BM25 weight in real time. OpenTelemetry traces every request through to Jaeger for full observability.',
        solutionSegments: [
          { text: 'Built a unified hybrid retrieval pipeline combining PostGIS ST_Within spatial filtering, pgvector cosine similarity, ' },
          { text: 'and BM25 ts_rank in a single PostgreSQL query. Implemented HyDE to improve recall on ambiguous queries by embedding generated hypothetical answers instead of raw questions. ', ls: '-1.0px' },
          { text: 'Added query expansion that generates three parallel LLM variations for each query before retrieval. Integrated a cross-encoder reranker to boost precision on top-k candidates. Used Rust-backed, tiktoken-aware semantic chunking that splits at sentence and paragraph boundaries instead of fixed token windows. Background ingestion runs through Redis ARQ job queues. The React and Leaflet frontend lets users draw polygons on the map and tune vector versus BM25 weight in real time. OpenTelemetry traces every request through to Jaeger for full observability.' },
        ],
        impact: [
          'Hit Rate of 0.90 and MRR of 0.83 on the 10-query NYC zoning evaluation set',
          'Query expansion alone improved hit rate from 0.80 to 0.90',
          'Semantic chunking raised hit rate from 0.70 to 0.90 compared to fixed-window chunking',
          'Single SQL round-trip combining spatial, vector, and BM25 signals eliminates separate retrieval passes',
          'Live weight sliders allow real-time tuning of vector versus BM25 balance without redeployment',
          'Full distributed tracing through OpenTelemetry and Jaeger across ingestion, retrieval, and generation'
        ],
        techDetails: 'PostgreSQL with PostGIS for spatial indexing and pgvector for 384-dimensional embeddings using sentence-transformers all-MiniLM-L6-v2. Cross-encoder reranking using cross-encoder/ms-marco-MiniLM-L-6-v2. FastAPI with asyncpg for async database access. A configurable LLM provider for synthesis with source citations. Redis ARQ for distributed background ingestion workers. Rust-backed semantic chunker using semantic-text-splitter for token-aware boundary splitting. React with TypeScript and Leaflet for the map interface with CartoDB tile layers. OpenTelemetry instrumentation exporting traces to Jaeger.',
        techDetailsSegments: [
          { text: 'PostgreSQL with PostGIS for spatial indexing and pgvector for 384-dimensional embeddings using sentence-transformers all-MiniLM-L6-v2. ', ls: '-1.0px' },
          { text: 'Cross-encoder reranking using cross-encoder/ms-marco-MiniLM-L-6-v2. ', ls: '-1.0px' },
          { text: 'FastAPI with asyncpg for async database access. A configurable LLM provider for synthesis with source citations. ', ls: '-1.0px' },
          { text: 'Redis ARQ for distributed background ingestion workers. Rust-backed semantic chunker using semantic-text-splitter for token-aware boundary splitting. ', ls: '-0.8px' },
          { text: 'React with TypeScript and Leaflet for the map interface with CartoDB tile layers. OpenTelemetry instrumentation exporting traces to Jaeger.', ls: '-0.8px' },
        ],
      }
    },
    {
      title: 'Global Logistics Emissions Council',
      description: 'Serverless data validation framework built on AWS Lambda and Step Functions, processing carrier emissions data across 10+ languages with 15% accuracy improvement through automated schema compliance. Stores validation metadata in S3, enabling Amazon\'s carbon footprint tracking with full GLEC regulatory compliance.',
      descriptionSegments: [
        { text: 'Serverless data validation framework built on AWS Lambda and Step Functions, processing carrier emissions data across 10+ languages with 15% accuracy improvement through fully automated schema compliance.', ls: '-1.2px' },
        { text: ' Stores validation metadata in S3, enabling Amazon\'s carbon footprint tracking with full GLEC regulatory compliance.', ls: '-1.2px' },
      ],
      tech: ['Kotlin', 'Panther', 'AWS Lambda', 'Step Functions', 'S3', 'CloudWatch', 'EC2', 'React', 'Figma'],
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=500&fit=crop',
      caseStudy: {
        challenge: 'Amazon required a scalable solution to validate and process greenhouse gas emissions data from 50+ international logistics carriers across multiple regions. Carrier submissions spanned inconsistent formats, languages, and quality levels, complicating compliance with the Global Logistics Emissions Council (GLEC) Framework, the internationally recognized standard for harmonized logistics emissions reporting.',
        challengeSegments: [
          { text: 'Amazon required a scalable solution to validate and process greenhouse gas emissions data from 50+ international logistics carriers across multiple regions. Carrier submissions spanned inconsistent formats, languages, and quality levels, complicating compliance with the Global Logistics Emissions Council (GLEC) Framework', ls: '-1.06px' },
          { text: ', the internationally recognized standard for harmonized logistics emissions reporting.' },
        ],
        solution: 'Engineered a serverless data validation framework using AWS Lambda for scalable compute, S3 for durable storage, and Kotlin for type-safe validation logic. Integrated Panther for schema enforcement and GLEC compliance verification. Deployed multilingual support across 10+ languages to serve international carriers. Configured CloudWatch for real-time monitoring, threshold alerting, and processing metrics. The framework validates carrier submissions against predefined schemas, flags inconsistencies, and delivers feedback in the carrier\'s preferred language.',
        solutionSegments: [
          { text: 'Engineered a serverless data validation framework using AWS Lambda for scalable compute, S3 for durable storage', ls: '-1.0px' },
          { text: ', and Kotlin for type-safe validation logic. Integrated Panther for schema enforcement and GLEC compliance verification. Deployed multilingual support across 10+ languages to serve international carriers. Configured CloudWatch for real-time monitoring, threshold alerting, and processing metrics. The framework validates carrier submissions against predefined schemas, flags inconsistencies, and delivers feedback in the carrier\'s preferred language.' },
        ],
        impact: [
          'Improved data accuracy by 15% through automated validation and schema compliance checks',
          'Reduced manual data processing time by 40% with serverless automation',
          'Achieved 100% GLEC Framework compliance across all regions and carrier submissions',
          'Onboarded and validated emissions data from 50+ international logistics carriers',
          'Enabled real-time carbon footprint tracking for Amazon\'s global logistics operations',
          'Advanced Amazon\'s sustainability commitments under the Paris Climate Agreement'
        ],
        techDetails: 'Leveraged Kotlin\'s type safety for strict validation logic, reducing runtime errors. AWS Lambda provided cost-effective serverless compute that scaled automatically with data volume. S3 ensured durable, scalable storage for emissions data with lifecycle policies for compliance. CloudWatch enabled full-coverage monitoring with custom dashboards tracking validation rates, error patterns, and system performance. Panther\'s schema validation engine enforced data quality standards and generated detailed compliance reports.',
        techDetailsSegments: [
          { text: 'Leveraged Kotlin\'s type safety for strict validation logic, reducing runtime errors. ', ls: '-0.5px' },
          { text: 'AWS Lambda provided cost-effective serverless compute that scaled automatically with data volume. S3 ensured durable, scalable storage for emissions data with lifecycle policies for compliance. CloudWatch enabled full-coverage monitoring with custom dashboards tracking validation rates, error patterns, and system performance. Panther\'s schema validation engine enforced data quality standards and generated detailed compliance reports.' },
        ],
      }
    },
    {
      title: 'DataStream - Real-Time Data Pipeline',
      description: 'Streaming pipeline ingesting synthetic processed events through Kafka, aggregating results in ClickHouse across tumbling windows, and rendering instrumentation on a React dashboard. Handles out-of-order delivery, routes malformed records to a Dead Letter Queue, backed by Dagster orchestration and full observability through Prometheus and Grafana.',
      descriptionSegments: [
        { text: 'Streaming pipeline ingesting synthetic processed events through Kafka, aggregating results in ClickHouse across tumbling windows, and rendering instrumentation on a React dashboard.', ls: '-1.2px' },
        { text: ' Handles out-of-order delivery, routes malformed records to a Dead Letter Queue, backed by Dagster orchestration and full observability through Prometheus and Grafana.', ls: '-1.2px' },
      ],
      tech: ['Apache Kafka', 'Go', 'ClickHouse', 'Python', 'Dagster', 'Prometheus', 'Grafana', 'React', 'TypeScript', 'Docker'],
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop',
      github: 'https://github.com/SriramAtmakuri/DataStream',
      caseStudy: {
        challenge: 'Streaming data pipelines must handle high-volume event streams with real-world imperfections: out-of-order delivery, malformed records, and variable load. Batch pipelines introduce too much latency to power real-time dashboards. The system requires late-event handling, dead-letter routing, multi-window aggregations, and end-to-end observability across every pipeline stage.',
        solution: 'Built a streaming pipeline using Apache Kafka in KRaft mode, eliminating the ZooKeeper dependency. A Go and Gin producer generates synthetic order events and backdates 10% of events by up to 30 seconds to simulate real-world out-of-order delivery. A Python stream processor handles late arrivals with a 10-second tolerance window. ClickHouse stores aggregated results for sub-second OLAP queries. A Dead Letter Queue routes approximately 5% of malformed orders for audit. Dagster orchestrates three schedules: hourly and daily summaries, 15-minute DLQ reports, and 5-minute product performance runs. Prometheus scrapes the Go producer. Grafana serves pre-built operational dashboards. A React and TypeScript frontend with Recharts renders live metrics.',
        impact: [
          '1-minute tumbling windows for real-time order-throughput metrics',
          '5-minute aggregation windows for revenue-by-region and top-products analysis',
          'Out-of-order event handling with 30-second backdate simulation and 10-second late-arrival tolerance',
          'Dead Letter Queue captures approximately 5% malformed records for audit and replay',
          'Prometheus metrics track published orders, failed orders, and cumulative revenue from the Go producer',
          'Fully open-source stack with no proprietary vendor dependencies across all eight containerized services'
        ],
        techDetails: 'Apache Kafka in KRaft mode without ZooKeeper. Go with Gin for the event producer, instrumented with the Prometheus client library. Python kafka-python consumer for stream processing with configurable late-event tolerance. ClickHouse columnar database for high-speed analytical aggregations. Dagster with asset-based pipeline definitions for orchestration and scheduling. Prometheus for metrics collection and Grafana OSS with pre-configured dashboards for observability. Kafka UI for topic inspection and consumer group monitoring. React with TypeScript and Recharts for the live dashboard. Full Docker Compose stack orchestrating all eight services.',
        techDetailsSegments: [
          { text: 'Apache Kafka in KRaft mode without ZooKeeper. Go with Gin for the event producer, instrumented with the Prometheus client library. ', ls: '-1.0px' },
          { text: 'Python kafka-python consumer for stream processing with configurable late-event tolerance. ClickHouse columnar database for high-speed analytical aggregations. Dagster with asset-based pipeline definitions for orchestration and scheduling. Prometheus for metrics collection and Grafana OSS with pre-configured dashboards for observability. Kafka UI for topic inspection and consumer group monitoring. ' },
          { text: 'Grafana serves pre-built operational dashboards. A React and TypeScript frontend with Recharts renders live metrics.', ls: '-1.0px' },
        ],
      }
    },
    {
      title: 'InterviewAI - Technical Interview Platform',
      description: 'Full-stack interview preparation platform with adaptive questioning, sandboxed code execution across 10+ languages, and resume-driven question generation. Features session video recording for personal review, and a performance analytics dashboard tracking communication, depth, and problem-solving.',
      descriptionSegments: [
        { text: 'Full-stack interview preparation platform with adaptive questioning, sandboxed code execution across 10+ languages, and resume-driven question generation.', ls: '-1.2px' },
        { text: ' Features session video recording for personal review, and a performance analytics dashboard tracking communication, depth, and problem-solving.', ls: '-1.2px' },
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'LLM Integration', 'Firebase', 'WebRTC', 'WebSockets', 'Shadcn UI', 'Docker'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
      github: 'https://github.com/SriramAtmakuri/interviewai',
      caseStudy: {
        challenge: 'Technical interview preparation lacks realistic practice environments and personalized feedback. Generic prep tools fail to adapt to individual skills, offer no code execution, and provide no behavioral analysis. Candidates needed an immersive platform that simulates real interviews, executes code across multiple languages, generates resume-targeted questions, records sessions for review, and delivers actionable performance insights.',
        solution: 'Built InterviewAI, a full-stack interview preparation platform using React and TypeScript. Integrated an LLM for conducting adaptive, conversational interview sessions that adjust difficulty based on responses. Developed a sandboxed code execution environment using Docker containers supporting 10+ programming languages. Implemented a resume parsing and analysis engine using NLP to extract skills and generate targeted interview questions. Created a video recording system capturing interview sessions for behavioral analysis and self-review. Built Firebase authentication and user management for secure, personalized experiences. Developed a performance analytics dashboard tracking response time, code quality, problem-solving, and communication skills. Designed an accessible UI using Shadcn UI component library across devices. Implemented a real-time feedback system providing instant AI-generated suggestions during mock interviews.',
        impact: [
          'Delivered AI-powered adaptive questioning that adjusts difficulty in real time',
          'Deployed secure sandboxed code execution across 10+ programming languages',
          'Generated resume-targeted interview questions through NLP-driven skill extraction',
          'Captured session video recordings for behavioral self-assessment and improvement',
          'Tracked granular performance metrics across communication, depth, and problem-solving',
          'Accelerated interview skill development by 50% through instant AI feedback and adaptive mock sessions',
          'Engineered an immersive environment that mirrors real technical interview conditions',
          'Achieved 95% user satisfaction rate across beta testers for interview readiness improvement'
        ],
        techDetails: 'React frontend with TypeScript for type-safe component architecture and state management. Node.js backend with Express.js for RESTful API endpoints and real-time communication. LLM integration for natural language processing, adaptive questioning, and feedback generation. Firebase Authentication for secure user management and session handling. Firestore database for storing user profiles, interview history, and analytics data. Docker containerization for isolated, secure sandboxed code execution with timeout and resource limits. WebRTC integration for video recording and streaming capabilities. Shadcn UI component library built on Radix UI primitives for accessible, customizable interface. NLP-powered resume parser extracting skills, experience, and education for question generation. Performance analytics engine tracking problem-solving speed, code efficiency, and communication quality. Real-time WebSocket connections for instant AI feedback during interviews.'
      }
    },
    {
      title: 'Smart Appliance Automation',
      cardTextBalance: true,
      description: 'Engineered Deep Q-Learning and LSTM models in TensorFlow, trained on sensor and behavioral data to predict appliance usage patterns at 80% accuracy. Deployed across Azure with Kubernetes, Raspberry Pi edge nodes, and MQTT for real-time IoT device monitoring and control.',
      descriptionSegments: [
        { text: 'Engineered Deep Q-Learning and LSTM models in TensorFlow, trained on sensor and behavioral data to predict and optimize appliance usage patterns.', ls: '-1.4px' },
        { text: ' Deployed across Azure, Kubernetes, and Raspberry Pi edge nodes using MQTT for real-time IoT device monitoring and control.', ls: '-1.4px' },
        { text: ' Built a predictive scheduling layer to automate device state transitions driven by learned behavioral patterns and continuous sensor feedback.', ls: '-1.4px' },
      ],
      tech: ['Python', 'TensorFlow', 'MQTT', 'Raspberry Pi', 'Azure', 'Kubernetes', 'Terraform', 'Redis'],
      image: 'https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?w=800&h=500&fit=crop',
      caseStudy: {
        challenge: 'Traditional home automation systems relied on rigid manual configuration and lacked the intelligence to adapt to user behavior. Appliances operated on fixed schedules regardless of actual occupancy, driving unnecessary energy waste. Existing solutions were expensive, cloud-dependent, and privacy-invasive. The system needed to process real-time sensor data across multiple IoT devices, run ML predictions efficiently, and deliver reliable automation at low latency with high availability.',
        solution: 'Developed a home automation platform with event-driven architecture using Python for backend services and MySQL for persistent data storage. Built machine learning models using TensorFlow with Deep Q-Learning for reinforcement learning-based appliance control decisions and LSTM networks for temporal pattern recognition in usage data. Deployed the system on Azure cloud infrastructure with Kubernetes for container orchestration and automatic scaling. Integrated Raspberry Pi edge devices with IoT sensors for temperature, humidity, motion, and energy monitoring. Implemented MQTT protocol using Eclipse Mosquitto broker for lightweight messaging between edge devices and cloud services. Leveraged Redis for high-speed caching of sensor data and ML predictions. Integrated Home Assistant as the central automation hub with custom Python components. Deployed Apache Kafka with Scala for real-time event streaming and message queuing between microservices. Provisioned with Terraform for infrastructure-as-code deployments across development and production environments. Implemented Azure DevOps for CI/CD pipelines with automated testing and deployment workflows. Integrated Twilio for SMS and email alert notifications.',
        impact: [
          'Achieved 80% accuracy in predicting appliance usage patterns from sensor and behavioral data',
          'Reduced household energy consumption through predictive scheduling and automated control',
          'Processed real-time sensor data with sub-second latency across distributed IoT nodes',
          'Accelerated development time by 15% through reusable modular component architecture',
          'Reduced delivery cycles by 20% through agile workflows and automated CI/CD pipelines',
          'Maintained 95% code quality compliance through automated testing and peer review',
        ],
        techDetails: 'Raspberry Pi edge computing nodes for local sensor data collection and initial processing. Python backend microservices deployed on Azure Kubernetes Service (AKS) for orchestration and auto-scaling. TensorFlow for Deep Q-Network implementation with experience replay and epsilon-greedy exploration. LSTM neural networks for sequential pattern recognition in time-series sensor data. MySQL database for persistent storage of historical usage data and system configurations. Redis cache for high-throughput sensor data storage and ML prediction results. Eclipse Mosquitto MQTT broker for IoT device communication using pub/sub messaging pattern. Apache Kafka with Scala for distributed event streaming and real-time data pipelines between microservices. Terraform for infrastructure provisioning and management across Azure cloud resources. Azure DevOps for version control, CI/CD pipelines, and agile project management. Home Assistant integration for automation rule engine and device management. Custom Python scripts for data preprocessing, feature engineering, and model training pipelines. Twilio API for programmable notifications and alerts. Kubernetes deployments with horizontal pod autoscaling for handling variable loads.'
      }
    },
  ],

};
