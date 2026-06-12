"use client";

import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-2xl font-semibold mb-4">Let’s Connect</h2>

      <p className="text-gray-400 mb-6">
        Open to freelance opportunities, collaborations, and building scalable systems together.
        If you’re hiring or want to work on something impactful, feel free to reach out.
      </p>

      <div className="flex flex-col gap-2">
        <a className="hover:text-white" href="mailto:soorajlalkg@gmail.com">
          soorajlalkg@gmail.com
        </a>

        <a className="hover:text-white" href="tel:+919745260826">
          +91 97452 60826
        </a>

        <a
          className="hover:text-white"
          href="https://github.com/soorajlalkg"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          className="hover:text-white"
          href="https://www.linkedin.com/in/soorajlalkg/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </SectionWrapper>
  );
}
