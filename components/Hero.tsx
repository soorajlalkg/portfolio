"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center text-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Backend-Focused Fullstack Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-4 text-lg"
        >
          React.js • Node.js • Microservices • REST APIs • Cloud • System Design • Databases
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <a
            href="/resume.pdf"
            download="Soorajlal_KG_Resume.pdf"
            className="px-5 py-2 bg-white text-black rounded hover:scale-105 transition"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-5 py-2 border border-gray-500 rounded hover:border-white transition"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
