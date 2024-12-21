'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-10 text-center bg-gray-100"
    >
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <p className="mt-4 text-lg">If you want work contact with me, please sent mail to</p>
      <motion.a
        href="mailto:siriral.s@outlook.com"
        whileHover={{ scale: 1.1 }}
        className="inline-block mt-4 px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg"
      >
        sirirak.s@outlook.com
      </motion.a>
      <p className="mt-4 text-lg">.</p>
    </motion.section>
  );
}
