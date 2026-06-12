"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, index) => (
          <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 p-5 rounded-xl border border-gray-800"
            >
            <h3 className="text-xl font-medium">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.description}</p>

            <div className="flex gap-2 mt-3 flex-wrap">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-800 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
