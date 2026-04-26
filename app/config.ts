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
  },
};

export default experience;
