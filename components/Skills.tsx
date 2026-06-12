"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "RabbitMQ",
      "Kafka"
    ],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "jQuery"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "CI/CD", "Git"],
  },
  {
    title: "CI/CD Tools",
    skills: ["GitHub Actions", "Jenkins"],
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>

      <div className="space-y-8">
        {skillGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-medium mb-3 text-gray-300">
              {group.title}
            </h3>

            <motion.div
              className="flex flex-wrap gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.05 },
                },
              }}
            >
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
