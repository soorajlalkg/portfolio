"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-10"
      >
        Work Experience
      </motion.h2>

      <div className="relative border-l border-gray-700 pl-6 space-y-10">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="absolute -left-[30px] top-2 w-3 h-3 bg-white rounded-full" />

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold">{exp.role}</h3>

              <p className="text-gray-400 text-sm">
                {exp.company} • {exp.period}
              </p>

              <p className="text-gray-300 mt-3">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-800 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
