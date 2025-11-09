// Portfolio Configuration
// Update these values to customize your portfolio

export const portfolioConfig = {
  // Personal Information
  name: "Your Name",
  title: "Senior Software Engineer & Cloud Developer",
  description: "Specialized in cloud architecture, full-stack development, and scalable systems. Hands-on experience in MERN stack, database design optimization, and agile software development lifecycle.",
  
  // Resume Configuration
  resumePath: "/resume.pdf", // Upload your resume to /public/resume.pdf
  
  // Social Links
  email: "hello@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourhandle",

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
        'Developed applications for clinical data management using React.js, TypeScript and Node.js, containerized with Docker for seamless deployment, delivered 10% improvement in user engagement through enhanced analytics and responsive design',
        'Integrated EHR systems using RESTful and GraphQL APIs with Jest testing and PostgreSQL, utilized Git for version control supporting patient billing and scheduling modules, and achieved 99.5% system uptime',
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Amazon',
      location: 'Seattle',
      period: 'Dec 2023 - Dec 2024',
      highlights: [
        'Architected a scalable AWS framework using Lambda, S3, DynamoDB and OpenSearch to automate purchase orders, optimized performance by 15% through ElastiCache and SQS while maintaining reliability by following cloud native design principles',
        'Led security initiatives to address compliance requirements using CloudWatch monitoring and AWS Config rules, reduced vulnerability resolution time by 30% and improved system reliability by 20% through CloudTrail alerts',
        'Collaborated with cross-functional teams to elevate user experience by 15%, conducting design and code reviews while implementing comprehensive JUnit, MockK testing strategies within CodePipeline workflows, and minimizing defect rates by 80%',
        'Optimized backend performance using Java, Kotlin and Spring with SNS messaging, EventBridge routing, Step Functions workflows and IAM security controls, enhancing system efficiency by 15% and reducing bugs by 10%',
      ],
    },
    {
      role: 'Web Developer',
      company: 'University of Colorado Denver',
      location: 'Denver',
      period: 'Apr 2022 - May 2023',
      highlights: [
        'Maintained university websites using HTML, CSS, JavaScript and Bootstrap, created wireframes and prototypes using Figma for UI/UX design, completed 95% of projects on-time and reduced production issues by 70% while ensuring cross-browser compatibility',
        'Implemented student analytics platforms and enrollment reporting systems using SQL Server, PHP and C# for backend APIs, enhanced visualization through responsive dashboards, providing insights to 5000+ students and boosting engagement by 25%',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Automate EM',
      location: 'India',
      period: 'May 2020 - Aug 2021',
      highlights: [
        'Engineered home automation application using C++, Python, Java and MySQL with MQTT, and achieved 90% functional test success rate through comprehensive Postman testing validation',
        'Spearheaded SDLC on Linux servers using Kubernetes orchestration, Terraform deployments and Redis caching, and accelerated development time by 15% through reusable modular components architecture',
        'Facilitated agile development workflows using Azure DevOps, deployed Apache Kafka with Scala for real-time event streaming and message queuing, expedited delivery cycles by 20% while maintaining 95% code quality standards',
      ],
    },
  ],

  // Skills
  skills: {
    'Programming Languages': ['Java', 'Kotlin', 'Python', 'C#', 'C++', 'Ruby on Rails'],
    'Web Development': ['React.js', 'Node.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Vue.js', 'Angular.js'],
    'Backend Technologies': ['Spring Boot', 'REST APIs', 'Microservices', 'Express.js', 'MQTT', 'FastAPI'],
    'Frameworks & Libraries': ['MERN Stack', 'MEAN Stack', 'MVC Architecture', 'TensorFlow', 'AI/ML', 'IoT'],
    'Database & Storage': ['MySQL', 'MongoDB', 'PostgreSQL', 'RDBMS', 'DynamoDB', 'Redis'],
    'Cloud & DevOps': ['AWS (Lambda, S3, EC2, CloudWatch, SQS)', 'Docker', 'Kubernetes', 'Azure', 'Jenkins', 'Apache Kafka'],
    'Testing & Tools': ['JUnit', 'Jest', 'Selenium', 'Git', 'SonarQube', 'Postman', 'JIRA', 'Twilio'],
  },

  // Projects
  projects: [
    {
      title: 'Global Logistics Emission Council',
      description: 'Designed data validation framework using AWS integrations with localization in user preferred languages, improved accuracy by 15% and ensured schema compliance for carrier emissions data supporting Amazon\'s carbon footprint tracking and GLEC compliance.',
      tech: ['Kotlin', 'Panther', 'AWS Lambda', 'S3', 'CloudWatch'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
      github: '', // Add your GitHub repo URL
      live: '', // Add your live demo URL (optional)
    },
    {
      title: 'Business Management Platform',
      description: 'Orchestrated intelligent microservices framework using Node.js Express, React and MongoDB with integrated Tesseract OCR and spaCy NLP models for automated document intelligence and smart categorization, achieving 90% accuracy through Docker containerization.',
      tech: ['MERN Stack', 'Tesseract', 'spaCy', 'Docker', 'LangChain'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      github: '', // Add your GitHub repo URL
      live: '', // Add your live demo URL (optional)
    },
    {
      title: 'Smart Appliance Automation',
      description: 'Constructed machine learning model using TensorFlow with Deep Q Learning and LSTM algorithms, trained on user behavior data to achieve 80% accuracy in predicting appliance usage patterns for performance optimization.',
      tech: ['Python', 'TensorFlow', 'IoT', 'MQTT', 'Raspberry Pi', 'Redis'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      github: '', // Add your GitHub repo URL
      live: '', // Add your live demo URL (optional)
    },
  ],

  // Certifications
  certifications: [
    'AWS Solutions Architect Certified',
  ],
};
