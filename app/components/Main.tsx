'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen text-center"
    >
      <h1 className="text-6xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg text-gray-500">Full Stack Developer | React | Next.js(JavaScript & TypeScript) | Lavevel | VueJS | Nuxt.js(JavaScript & TypeScript) | C# .Net | Python | FastAPI&DJango | GoLangauge</p>
      <p className="mt-4 text-lg text-gray-500">system Administrator | VMWare | Linux | Windows | MacOS | Network&Security | IT Support</p>
    </motion.div>
  );
}
