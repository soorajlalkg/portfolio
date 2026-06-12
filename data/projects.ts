export const projects = [
   {
      "title":"LINE Marketing Campaign Tool",
      "description":"Designed and developed a marketing automation platform for the LINE messaging ecosystem to enhance customer engagement and campaign efficiency. Integrated with Salesforce Marketing Cloud to enable creation and management of LINE messages, rich menus, and targeted audience segments. Built campaign orchestration workflows supporting personalized messaging, user segmentation, and performance tracking. Implemented seamless synchronization between LINE platform events and marketing data systems to enable data-driven campaign optimization and improved engagement outcomes.",
      "tech":[
         "Node.js",
         "TypeScript",
         "Salesforce Marketing Cloud",
         "LINE Messaging API",
         "REST APIs",
         "Event-Driven Architecture",
         "Serverless Architecture",
         "Marketing Automation"
      ]
   },
   {
      "title":"Webhook-based Follow/Block Tracker",
      "description":"Designed and developed an event-driven integration platform to capture follow and block events from LINE Official Accounts and synchronize them with Salesforce Marketing Cloud in real time. Built webhook processing services and automated workflows that updated audience data instantly within Data Extensions, enabling accurate customer segmentation and personalized marketing campaigns. Leveraged Azure-based cloud services to ensure reliable event processing, scalability, and seamless integration between communication and marketing platforms.",
      "tech":[
         "Node.js",
         "TypeScript",
         "Azure Functions",
         "Azure Storage Account",
         "Event Hub",
         "Salesforce Marketing Cloud",
         "Event-Driven Architecture",
         "Serverless Architecture"
      ]
   },
   {
      "title":"MessageHub - Serverless Message & Click Tracking Platform",
      "description":"Designed and developed a serverless messaging and analytics platform for large-scale campaign delivery and real-time click tracking. Built event-driven workflows using AWS Lambda, API Gateway, SNS, and SQS for scalable message processing and asynchronous event handling. Implemented trackable URL generation, clickstream ingestion, and DynamoDB-based analytics pipelines, with AWS SAM enabling automated and reproducible deployments.",
      "tech":[
         "Node.js",
         "TypeScript",
         "AWS Lambda",
         "API Gateway",
         "Amazon SES",
         "Amazon SNS",
         "Amazon SQS",
         "DynamoDB",
         "AWS SAM",
         "Serverless Architecture",
         "Event-Driven Architecture",
         "System Design"
      ]
   },
   {
      "title":"Private Credit Syndication Platform",
      "description":"Designed and developed a fintech platform for private credit syndication, enabling funders to originate financing deals and distribute participation to multiple investors. Built a complete deal lifecycle management system covering deal creation, investor onboarding, capital allocation, repayment tracking, and fund distribution. Integrated third-party financing providers to import and manage external deals, ensuring seamless data flow across systems. Implemented financial workflows to support investment participation, transaction tracking, and structured repayment processes in a multi-party environment.",
      "tech":[
         "Node.js",
         "TypeScript",
         "React.js",
         "PostgreSQL",
         "REST APIs",
         "Microservices",
         "Fintech Domain",
         "System Design"
      ]
   },
   {
      "title":"Ecommerce CMS Platform",
      "description":"Built a scalable CMS platform for a large-scale e-commerce application, enabling centralized content management across web and mobile channels. Developed CMS-driven dynamic pages including home, gender, and category experiences. Implemented multi-country, multi-region, multi-brand, and multilingual capabilities to support global expansion and localization. Worked closely with product, design, and engineering teams to deliver reusable content components and efficient publishing workflows.",
      "tech":[
         "React.js",
         "Node.js",
         "TypeScript",
         "MySQL",
         "GraphQL",
         "Docker",
         "AWS S3",
         "AWS EC2",
         "AWS RDS"
      ]
   },
   {
      "title":"Account Platform Modernization & Architecture Revamp",
      "description":"Led the modernization of a legacy PHP-based account management platform by migrating core services to Node.js and TypeScript. Designed a modular, scalable architecture that improved maintainability, accelerated feature delivery, and reduced technical debt. Refactored region-specific functionality into reusable service components, enabling easier localization and streamlined deployment across multiple markets. Collaborated with cross-functional teams to ensure a seamless migration with minimal disruption to existing users and business operations.",
      "tech":[
         "Node.js",
         "Express.js",
         "TypeScript",
         "MySQL",
         "AWS EC2",
         "AWS RDS"
      ]
   },
   {
      "title":"E-commerce Backend for Frontend (BFF)",
      "description":"Developed a Backend for Frontend (BFF) layer for a large-scale e-commerce platform using Express.js and TypeScript. Designed API orchestration workflows that aggregated data from multiple backend services into optimized responses tailored for frontend applications. Implemented OAuth 2.0-based authentication and authorization to securely access downstream services. Leveraged functional programming principles to improve code maintainability, composability, and testability while ensuring high-performance request processing.",
      "tech":[
         "Node.js",
         "Express.js",
         "TypeScript",
         "OAuth 2.0",
         "REST APIs",
         "Functional Programming",
         "Microservices"
      ]
   },
   {
      "title":"SEO Analytics & Marketing Dashboard",
      "description":"Developed a subscription-based SaaS platform that centralized SEO, Google Analytics, and Google Ads insights into a unified dashboard. Integrated multiple Google APIs to aggregate performance metrics across websites and marketing campaigns, enabling users to monitor key business KPIs from a single interface. Designed a multi-project architecture where customers could connect individual projects with Google Analytics, Google Search Console, and Google Ads accounts. Implemented subscription management, project-based billing, and secure data synchronization to support scalable customer onboarding and growth.",
      "tech":[
         "Node.js",
         "React.js",
         "PostgreSQL",
         "Google Analytics API",
         "Google Ads API",
         "Google Search Console API",
         "REST APIs",
         "SaaS"
      ]
   },
   {
      "title":"Order History Microservice (E-commerce Platform)",
      "description":"Designed and developed a dedicated Order History microservice for an e-commerce platform to efficiently manage and retrieve customer order data at scale. Built using a microservices architecture with Express.js and TypeScript, the service stores and serves high-volume order records using DynamoDB for low-latency access. Implemented optimized data modeling and query patterns to support fast retrieval of user-specific order histories, ensuring scalability and performance in a distributed system environment.",
      "tech":[
         "Node.js",
         "Express.js",
         "TypeScript",
         "DynamoDB",
         "Microservices",
         "REST APIs",
         "System Design"
      ]
   },
   {
      "title":"Task Management App",
      "description":"Built a scalable task management platform for a client that enhanced project execution and team collaboration. Developed features for task creation, self-assignment, time tracking, and task submissions. Implemented a comprehensive review and approval workflow, enabling clients to evaluate completed work, maintain quality standards, and optimize workforce productivity.",
      "tech":[
         "Node.js",
         "Fastify",
         "React.js",
         "TypeScript",
         "MySQL",
         "AWS EC2",
         "AWS RDS"
      ]
   },
   {
      "title":"Internal Task Management System (Jira-like Platform)",
      "description":"Designed and developed a Jira-inspired internal task management system to streamline project planning, task tracking, and team collaboration. Built a centralized platform for creating and managing projects, assigning tasks, tracking progress, and monitoring team productivity through real-time dashboards. Implemented workflow-driven task states to improve visibility and accountability across teams, enabling efficient project execution and coordination in an internal engineering environment.",
      "tech":[
         "Node.js",
         "TypeScript",
         "React.js",
         "REST APIs",
         "MySQL",
         "Role-Based Access Control",
         "System Design"
      ]
   },
   {
      "title":"Kafka Order Processing System",
      "description":"Developed a hands-on learning project to gain practical experience with Apache Kafka and event-driven microservice architectures. Built Producer and Consumer services in Node.js and TypeScript, implementing consumer groups, retry topics, and Dead Letter Queues (DLQ) to handle message failures and ensure reliable processing. Explored distributed messaging patterns, asynchronous workflows, and fault-tolerant system design used in large-scale backend applications.",
      "tech":[
         "Node.js",
         "TypeScript",
         "Apache Kafka",
         "Microservices",
         "Docker",
         "Event-Driven Architecture"
      ]
   },
   {
      "title":"Serverless URL Shortener",
      "description":"Designed and developed a cloud-native URL shortening service using AWS serverless technologies. Implemented scalable API endpoints with TypeScript and AWS Lambda, leveraging DynamoDB for high-performance URL mapping and S3 for static asset management. Built the solution with AWS SAM and LocalStack to enable infrastructure-as-code, local development, and seamless deployment workflows, demonstrating modern serverless architecture patterns.",
      "tech":[
         "TypeScript",
         "AWS Lambda",
         "AWS SAM",
         "DynamoDB",
         "S3",
         "LocalStack",
         "Serverless Architecture"
      ]
   }
];
