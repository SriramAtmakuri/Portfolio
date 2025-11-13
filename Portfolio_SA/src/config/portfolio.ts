// Portfolio Configuration
// Update these values to customize your portfolio

export const portfolioConfig = {
  // Personal Information
  name: "Sriram Atmakuri",
  description: "Specialized in cloud architecture, full-stack development, and scalable systems. Hands-on experience in MERN stack, AWS, database design optimization, and agile software development lifecycle.",
  
  // Resume Configuration
  resumePath: "https://raw.githubusercontent.com/SriramAtmakuri/Portfolio/main/Portfolio_SA/public/Sriram_Atmakuri_Resume.pdf", // Upload your resume to /public/resume.pdf
  
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
      company: 'Dlcfl',
      location: 'Florida',
      period: 'Jan 2025 - Present',
      highlights: [
        'Developed clinical data management applications using React.js/TypeScript/Node.js and Docker, successfully integrating complex EHR systems via RESTful and GraphQL APIs.',
        'Secured 99.5% system uptime and enhanced architectural robustness, leading to a 10% improvement in user engagement through improved analytics and responsive design.',
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Amazon',
      location: 'Seattle',
      period: 'Dec 2023 - Dec 2024',
      highlights: [
        'Architected a scalable AWS serverless framework (Lambda, DynamoDB, OpenSearch) to automate purchase orders, optimizing performance by 15% via ElastiCache/SQS optimization.',
        'Enhanced system reliability by 20% and reduced defect rates by 80% through comprehensive Java/Kotlin/Spring backend optimization and utilizing rigorous CI/CD testing strategies.',
        'Led compliance and security initiatives using CloudWatch and AWS Config, collaborating with cross-functional teams to elevate user experience and maintain strict cloud-native design principles.',
      ],
    },
    {
      role: 'Web Developer',
      company: 'University of Colorado Denver',
      location: 'Denver',
      period: 'Apr 2022 - May 2023',
      highlights: [
        'Managed the full lifecycle of university web properties using HTML, CSS, JavaScript, and Bootstrap, ensuring cross-browser compatibility and modern UI/UX via Figma prototyping.',
        'Implemented student analytics and enrollment systems powered by SQL Server, PHP, and C# APIs, increasing student engagement by 25% through enhanced data visualization.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Automate EM',
      location: 'India',
      period: 'May 2020 - Aug 2021',
      highlights: [
        'Engineered a high-performance home automation application using a polyglot system (C++, Python, Java) with MySQL and the MQTT protocol for real-time communication.',
        'Spearheaded SDLC efficiency on Linux using Kubernetes/Terraform and deployed an Apache Kafka/Scala event-streaming solution, accelerating delivery cycles by 20%.',
      ],
    },
  ],

  // Skills
  skills: {
    'Programming Languages': ['Java', 'Kotlin', 'Python', 'C#', 'C++', 'JavaScript', 'TypeScript', 'Scala', 'Rust', 'Ruby'],
    'Web Development': ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Vue.js', 'Angular', 'jQuery', 'Tailwind CSS', 'Redux'],
    'Backend Technologies': ['Spring Boot', 'REST APIs', 'Node.js', 'Express.js', 'Django', 'FastAPI', 'Ruby on Rails', 'Twilio API' ],
    'Database & Storage': ['MySQL', 'MongoDB', 'PostgreSQL', 'DynamoDB', 'Redis', 'Vector DBs', 'ElasticSearch', 'ChromaDB', 'Neo4j'],
    'Cloud & DevOps': ['AWS Lambda', 'AWS S3', 'AWS EC2', 'AWS CloudWatch', 'AWS SQS', 'Docker', 'Kubernetes', 'Azure', 'Jenkins'],
    'Testing & Tools': ['JUnit', 'Jest', 'Selenium', 'Git', 'SonarQube', 'Postman', 'JIRA'],
    'AI & ML' : ['TensorFlow', 'NLP', 'RAG Architecture', 'LangChain', 'PyTorch', 'HuggingFace', 'Tesseract', 'SpaCy'],
    'Architecture & Design': ['Microservices', 'Event-Driven Architecture', 'System Design', 'IoT', 'Design Patterns', 'MVC Architecture', 'API Gateway', 'MQTT'],
    'Data Engineering' : ['Apache Spark', 'Apache Hadoop', 'Apache Kafka', 'AWS Redshift', 'AWS Glue', 'Snowflake', 'Dask']
  },

  // Projects
  projects: [
    {
      title: 'DevFlow - AI-Powered Coding Knowledge Base',
      description: 'Built full-stack RAG application using React, FastAPI, and ChromaDB for semantic search across coding documentation. Integrated Google Gemini AI for natural language focused query processing, enabling developers to search personal knowledge base achieving intelligent context-aware responses.',
      tech: ['React', 'Vite', 'Python', 'FastAPI', 'ChromaDB', 'Google Gemini', 'SQLite', 'Sentence Transformers'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
      github: 'https://github.com/SriramAtmakuri/devflow',
      live: 'https://devflow-sriram.web.app/',
      caseStudy: {
        challenge: 'Developers accumulate vast amounts of coding resources, documentation, and personal notes across multiple platforms and files. Searching through this scattered knowledge is time-consuming and traditional keyword-based search fails to understand context and semantic meaning. There was a need for an intelligent system that could index personal coding resources, understand natural language queries, and provide contextually relevant answers from the stored knowledge base.',
        solution: 'Architected and developed DevFlow, a full-stack RAG (Retrieval-Augmented Generation) application for personal coding knowledge management. Built React frontend with Vite for fast development and modern UI components. Developed Python backend using FastAPI framework for high-performance API endpoints. Implemented vector database using ChromaDB for storing and querying document embeddings. Integrated Google Gemini AI API for natural language understanding and response generation. Used Sentence Transformers for generating semantic embeddings of documentation and code snippets. Created document indexing pipeline to process and vectorize uploaded files and URLs. Built SQLite database for storing metadata about sources, files, and indexing status. Implemented semantic search functionality allowing natural language queries across the knowledge base. Created source management system for adding, organizing, and tracking indexed documentation.',
        impact: [
          'Enabled semantic search across personal coding documentation with vector similarity',
          'Processed and indexed various document formats including PDFs, markdown, and web pages',
          'Provided contextually relevant answers combining vector search with AI generation',
          'Built intuitive interface for managing and organizing coding knowledge sources',
          'Implemented efficient RAG pipeline for accurate information retrieval',
          'Created real-time indexing status tracking for uploaded documents',
          'Enabled natural language queries eliminating need for exact keyword matching'
        ],
        techDetails: 'React frontend with Vite for fast build times and hot module replacement. FastAPI backend providing RESTful endpoints for search, indexing, and source management. ChromaDB vector database for high-performance similarity search with cosine distance metrics. Google Gemini AI API integration for natural language processing and answer generation. Sentence Transformers library for generating text embeddings from documentation. SQLite for lightweight persistent storage of metadata and application state. Custom document processing pipeline handling multiple file formats. Vector embedding generation for semantic representation of code and documentation. RAG architecture combining retrieval from ChromaDB with generation from Gemini AI. RESTful API design with clear separation between frontend and backend services.'
    }
    },
    {
      title: 'Global Logistics Emission Council',
      description: 'Designed data validation framework using AWS integrations with localization in user preferred languages, improved accuracy by 15% and ensured schema compliance aligned for carrier emissions data supporting Amazon\'s carbon footprint tracking and overall GLEC compliance. This solution utilized AWS Step Functions for secure orchestration, leveraging Lambda for real-time validation and S3 for storing schema metadata, enabling automated end-to-end testing.',
      tech: ['Kotlin', 'Panther', 'AWS Lambda', 'S3', 'CloudWatch', 'EC2', 'React', 'Figma'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
      github: '',
      live: '',
      caseStudy: {
        challenge: 'Amazon needed a standardized, scalable solution to validate and process greenhouse gas (GHG) emissions data from 50+ international logistics carriers across multiple regions. The data came in various formats, languages, and quality levels, making it difficult to ensure accuracy and compliance with the Global Logistics Emissions Council (GLEC) Framework—the internationally recognized methodology for harmonized logistics emissions reporting aligned with ISO 14083 standards.',
        solution: 'Built a serverless data validation framework using AWS Lambda for scalable compute, S3 for reliable data storage, and Kotlin for type-safe validation logic. Integrated Panther for schema validation to ensure data quality and compliance with GLEC standards. Implemented comprehensive localization support for 10+ languages to accommodate international carriers. Utilized CloudWatch for real-time monitoring, alerting, and logging to track system health and data processing metrics. The framework automatically validates carrier submissions against predefined schemas, flags inconsistencies, and provides detailed feedback in the carrier\'s preferred language.',
        impact: [
          'Improved data accuracy by 15% through automated validation and schema compliance checks',
          'Reduced manual data processing time by 40% with serverless automation',
          'Achieved 100% GLEC Framework compliance across all regions and carrier submissions',
          'Successfully onboarded and validated emissions data from 50+ international logistics carriers',
          'Enabled real-time carbon footprint tracking for Amazon\'s global logistics operations',
          'Supported Amazon\'s sustainability goals and commitment to the Paris Climate Agreement'
        ],
        techDetails: 'Leveraged Kotlin\'s type safety for robust validation logic, reducing runtime errors. AWS Lambda provided cost-effective serverless compute that scaled automatically with data volume. S3 ensured durable, scalable storage for emissions data with lifecycle policies for compliance. CloudWatch enabled comprehensive monitoring with custom dashboards tracking validation rates, error patterns, and system performance. Panther\'s schema validation engine enforced data quality standards and generated detailed compliance reports.'
    }
    },
    {
      title: 'Business Management Platform',
      description: 'Orchestrated distributed intelligent microservices framework using Node.js Express, React and MongoDB with fully integrated Tesseract OCR and spaCy NLP models for automated document intelligence and quick smart categorization, achieving 90% accuracy consistent through Docker containerization.',
      tech: ['MERN Stack', 'Tesseract', 'spaCy', 'Docker', 'LangChain'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      github: '',
      live: '',
      caseStudy: {
        challenge: 'Small and medium-sized businesses struggled with managing large volumes of unstructured documents including invoices, receipts, contracts, and correspondence. Manual document categorization, data extraction, and organization consumed significant time and were prone to human error. Companies needed an intelligent solution that could automatically process documents, extract key information, categorize them appropriately, and make the data searchable and actionable.',
        solution: 'Developed a comprehensive business management platform using the MERN stack (MongoDB, Express.js, React, Node.js) with microservices architecture. Integrated Tesseract OCR engine for high-accuracy text extraction from scanned documents and images, supporting 100+ languages. Implemented spaCy NLP with custom-trained Named Entity Recognition (NER) models to identify and extract business entities like company names, dates, amounts, invoice numbers, and contract terms. Used LangChain for advanced document understanding and similarity search. Containerized all services with Docker for consistent deployment and scalability. Built an intuitive React-based interface for document upload, search, and management.',
        impact: [
          'Achieved 90% accuracy in automated document categorization and data extraction',
          'Reduced document processing time by 75% compared to manual methods',
          'Processed and categorized 10,000+ documents monthly across multiple business categories',
          'Enabled natural language search across entire document repository',
          'Improved data accuracy and eliminated manual transcription errors',
          'Reduced operational costs by 60% through automation',
          'Enabled real-time document insights and analytics for business intelligence'
        ],
        techDetails: 'Tesseract OCR with custom preprocessing pipelines for image enhancement, achieving 95%+ text recognition accuracy. spaCy NER models trained on domain-specific business documents with 50,000+ labeled entities. MongoDB for flexible document storage with full-text search indexes. Express.js RESTful APIs for document upload, processing, and retrieval. React frontend with Material-UI for responsive design. Docker Compose orchestration for local development and production deployment. Redis caching layer for improved search performance. LangChain integration for semantic search and document Q&A capabilities.'
    }
    },
    {
        title: 'Smart Appliance Automation',
        description: 'Constructed machine learning model using TensorFlow with Deep Q Learning and LSTM algorithms, trained on user behavior data events to achieve 80% accuracy in predicting appliance usage patterns for performance optimization.',
        tech: ['Python', 'TensorFlow', 'IoT', 'MQTT', 'Raspberry Pi', 'Redis', 'Azure', 'Kubernetes'],
        image: 'https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?w=800&h=500&fit=crop',
        github: '',
        live: '',
        caseStudy: {
          challenge: 'Traditional home automation systems required extensive manual programming and lacked intelligence to adapt to user behavior patterns. Homeowners struggled with energy waste as appliances operated on fixed schedules regardless of actual occupancy or usage needs. Existing solutions were often expensive, cloud-dependent, privacy-invasive, and failed to learn from user habits. The system needed to handle real-time sensor data from multiple IoT devices, process machine learning predictions efficiently, and provide reliable automation while maintaining low latency and high availability.',
          solution: 'Developed an intelligent home automation platform with event-driven architecture using Python for backend services and MySQL for persistent data storage. Built machine learning models using TensorFlow with Deep Q-Learning for reinforcement learning-based appliance control decisions and LSTM networks for temporal pattern recognition in usage data. Deployed the system on Azure cloud infrastructure with Kubernetes for container orchestration and automatic scaling. Integrated Raspberry Pi edge devices with IoT sensors including temperature, humidity, motion, and energy monitoring sensors. Implemented MQTT protocol via Eclipse Mosquitto broker for lightweight messaging between edge devices and cloud services. Used Redis for high-speed caching of sensor data and ML predictions. Integrated Home Assistant as the central automation hub with custom Python components. Deployed Apache Kafka with Scala for real-time event streaming and message queuing between microservices. Used Terraform for infrastructure-as-code deployments across development and production environments. Implemented Azure DevOps for CI/CD pipelines with automated testing and deployment workflows. Set up Twilio integration for SMS and email alert notifications. Created comprehensive API testing suite achieving high validation coverage across all endpoints.',
          impact: [
            'Achieved 80% accuracy in predicting appliance usage patterns based on historical behavioral data',
            'Architected the end-to-end system design including microservices architecture, event-driven patterns, and cloud infrastructure layout.',
            'Reduced household energy consumption through intelligent scheduling and automated control',
            'Enabled real-time processing of sensor data with sub-second latency for immediate responses',
            'Achieved 90% functional test success rate through comprehensive API testing validation',
            'Accelerated development time by 15% through reusable modular components architecture',
            'Expedited delivery cycles by 20% through agile workflows and automated CI/CD pipelines',
            'Maintained 95% code quality standards through automated testing and code review processes',
            'Successfully automated routine appliance operations based on learned user behavior patterns',
            'Provided scalable architecture handling multiple households with containerized microservices',
            'Enabled hybrid edge-cloud processing for both low-latency local control and advanced analytics'
          ],
          techDetails: 'Raspberry Pi edge computing nodes for local sensor data collection and initial processing. Python backend microservices deployed on Azure Kubernetes Service (AKS) for orchestration and auto-scaling. TensorFlow for Deep Q-Network implementation with experience replay and epsilon-greedy exploration. LSTM neural networks for sequential pattern recognition in time-series sensor data. MySQL database for persistent storage of historical usage data and system configurations. Redis cache for high-throughput sensor data storage and ML prediction results. Eclipse Mosquitto MQTT broker for IoT device communication using pub/sub messaging pattern. Apache Kafka with Scala for distributed event streaming and real-time data pipelines between microservices. Terraform for infrastructure provisioning and management across Azure cloud resources. Azure DevOps for version control, CI/CD pipelines, and agile project management. Home Assistant integration for automation rule engine and device management. Custom Python scripts for data preprocessing, feature engineering, and model training pipelines. RESTful APIs with comprehensive testing suite for device control and status monitoring. Twilio API for programmable notifications and alerts. Kubernetes deployments with horizontal pod autoscaling for handling variable loads. Event-driven architecture enabling loose coupling and independent scaling of services.'
      }
    },
  ],

  // Certifications
  certifications: [
    'AWS Solutions Architect Certified',
  ],
};
