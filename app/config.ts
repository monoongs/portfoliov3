export type Experience = {
  id: string;
  images: string[];
  title: string;
  company: string;
  period: string;
  years: number;
  months: number;
  tools: string[];
  highlights: string[];
  description: string;
  responsibilities: string[];
  order: number;
};

const experience: Record<string, Experience> = {
  bedrock: {
    id: 'bedrock',
    images: ['/images/bedrockjob.webp', '/images/bedrockjob1.webp'],
    title: 'Senior Full Stack Developer',
    company: 'Bedrock Analytics (AI and Robotics Ventures)',
    period: '2024 Jan - 2026 March',
    years: 2,
    months: 2,
    tools: ['Next.js', 'NestJS', 'Elysia', 'PostgreSQL', 'Redis', 'Kafka'],
    highlights: [
      'Built a multi-tenant government platform with centralized user and role management',
      'Implemented async workflows using Kafka, outbox pattern, and backend APIs with NestJS and Elysia',
      'Implemented async workflows using Kafka, outbox pattern, and backend APIs with NestJS and Elysia',
    ],
    description:
      'LocalGov is a multi-tenant web portal for government organizations, supporting RBAC management and integration with multiple internal services. Built with Next.js, Elysia, PostgreSQL, Redis, and Kafka — responsible for both frontend and backend, including feature development, asynchronous workflows, and cross-system integration.',
    responsibilities: [
      'Built LocalGov Platform, a multi-tenant government system supporting multiple organizations with centralized user and role management.',
      'Implemented asynchronous workflows using Kafka and the outbox pattern (via Debezium), improving scalability and service decoupling.',
      'Implemented backend APIs using Node.js (NestJS) and Bun (Elysia) to support internal services and cross-application integration.',
      'Optimized system performance using Redis for caching and session management, reducing database load and improving response times.',
      'Translated Figma designs into reusable UI components (e.g., tables, pagination, forms) and implemented performance optimizations such as lazy loading.',
      'Developed the frontend and integration layer for an asynchronous file ingestion pipeline, including upload handling, status tracking, and consuming Kafka events to update the UI.',
    ],
    order: 5,
  },
  sabuy: {
    id: 'sabuy',
    images: [],
    title: 'Senior Developer ( Backend Focus )',
    company: 'SABUY Solutions Co., Ltd.',
    period: '2023 Sep - 2023 Dec',
    years: 0,
    months: 4,
    tools: ['Node.js', 'TypeScript', 'JavaScript'],
    highlights: [
      'Implemented backend services for major food court platforms (Lotus’s, Big C)',
      'Migrated legacy JavaScript codebase to TypeScript for improved maintainability',
    ],
    description:
      'Backend-focused role developing robust services for large-scale food court platforms, ensuring seamless integration with payment terminals and modernization of legacy systems.',
    responsibilities: [
      'Implemented backend services for a food court platform used by major retailers ( Lotus’s, Big C ), with APIs compatible with payment terminals.',
      'Refactored legacy code and migrated JavaScript to TypeScript, improving maintainability and code quality.',
    ],
    order: 4,
  },
  ptt: {
    id: 'ptt',
    images: [],
    title: 'Full Stack Developer', // Adjust title based on your role specifics
    company: 'PTT Digital Solution',
    period: '2020 Dec - 2023 Aug',
    years: 2,
    months: 9,
    tools: [
      'Node.js',
      'Express',
      'MongoDB',
      'RabbitMQ',
      'React.js',
      'ELK stack',
    ],
    highlights: [
      'Developed microservices-based POS platform for PTT Oil and Retail Business PCL',
      'Engineered high-volume data sync process for 1M+ user records from The Revenue Department',
      'Implemented event-driven architecture using RabbitMQ for reliable service communication',
    ],
    description:
      'Contributed to the NEW POS system for PTT Oil and Retail Business PCL, focusing on microservices architecture, high-volume data processing, and distributed system monitoring.',
    responsibilities: [
      'Built backend services for NEW POS, a microservices-based platform for PTT Oil and Retail Business PCL, using Node.js (Express) and MongoDB.',
      'Integrated RabbitMQ for event-driven communication between services, enabling reliable asynchronous processing and improving fault tolerance.',
      'Designed and implemented a high-volume data synchronization process to import and maintain over 1 million user records from The Revenue Department, ensuring data consistency and reliability across services.',
      'Leveraged ELK stack (Elasticsearch, Kibana) for log aggregation and debugging across distributed services.',
      'Developed frontend features using React.js, including login and landing pages to support POS operations.',
    ],
    order: 3,
  },
  nhso: {
    id: 'nhso',
    images: [],
    title: 'Developer',
    company: 'National Health Security Office ( NHSO )',
    period: '2019 Sep - 2020 Oct',
    years: 1,
    months: 2,
    tools: ['Java', 'Spring Framework', 'JSF', 'Oracle Database'],
    highlights: [
      'Maintained Seamless NHSO backend using Spring Framework',
      'Developed high-efficiency database logic using Oracle stored procedures and packages',
    ],
    description:
      'Focused on the maintenance and enhancement of the Seamless NHSO backend system, ensuring robust data processing and reliable frontend interfaces for national health security services.',
    responsibilities: [
      'Maintained and enhanced Seamless NHSO, a backend system using Spring Framework.',
      'Developed frontend interfaces using JSF (JavaServer Faces).',
      'Designed and implemented Oracle database structures, including packages and stored procedures for efficient data processing.',
    ],
    order: 2,
  },
  jury: {
    id: 'jury',
    images: [],
    title: 'Developer',
    company: 'Juryberry Co., Ltd.',
    period: '2018 Aug - 2019 Aug',
    years: 1,
    months: 1,
    tools: ['Django', 'Laravel', 'Tailwind CSS', 'Informatica'],
    highlights: [
      'Developed responsive full-stack web applications using Django and Laravel',
      'Engineered ETL workflows and data pipelines for large-scale data processing using Informatica',
    ],
    description:
      'Responsible for full-stack web development and data engineering, delivering responsive user interfaces and managing complex data integration pipelines.',
    responsibilities: [
      'Developed responsive web applications using Django, Laravel, and modern frontend tools (Tailwind CSS), delivering user-friendly interfaces across multiple projects.',
      'Built and maintained full-stack features, handling both backend logic and frontend implementation in production environments.',
      'Designed and implemented ETL workflows and data pipelines using Informatica, supporting large-scale data processing and integration.',
    ],
    order: 1,
  },
};

export default experience;
