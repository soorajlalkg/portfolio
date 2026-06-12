"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

export default function About() {
  return (
    <SectionWrapper id="about">
      <motion.h2 className="text-2xl font-semibold mb-4">
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 leading-relaxed mb-4"
      >
        I am a Full Stack Developer with 5 years of specialized experience in backend development using Node.js and TypeScript, and 2 years of hands-on experience building modern, responsive frontend applications using React.js.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 leading-relaxed mb-4"
      >
        I started my career as a PHP developer, where I built and maintained web applications across different domains, gaining strong fundamentals in web development, backend logic, and database design. Over time, I transitioned into JavaScript and TypeScript, with a primary focus on designing scalable backend systems, REST APIs, and microservices using Node.js, while also contributing to frontend development using React.js.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-300 leading-relaxed mb-4"
      >
        My core expertise lies in backend engineering, system design, and building scalable cloud-ready applications. I have experience across the full application lifecycle, including API development, database design, cloud deployment, CI/CD pipelines, and performance optimization. I also work with frontend technologies to deliver complete end-to-end solutions.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-300 leading-relaxed"
      >
        I enjoy solving complex engineering problems, improving system architecture, and building reliable full-stack applications that deliver real business value.
      </motion.p>
    </SectionWrapper>
  );
}
