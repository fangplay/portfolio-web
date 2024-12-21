'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="p-10 text-center bg-gray-100"
    >
      <h2 className="text-3xl font-semibold">About Me</h2>
      <p className="mt-4 text-lg">
        I'm a passionate web developer with experience in building modern, responsive, and scalable web applications.
      </p>
    </motion.section>
  );
}
