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
  },
};

export default experience;
