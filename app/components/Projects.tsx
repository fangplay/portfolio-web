'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projectList = [
    { id: 1, name: 'Task Manager App', description: 'A CRUD app for task management.' },
    { id: 2, name: 'E-commerce Site', description: 'An online shopping platform.' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-10 text-center"
    >
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {projectList.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="p-6 border rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-medium">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
