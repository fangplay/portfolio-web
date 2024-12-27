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
      I'm developer&system admin&DevOps who can continue work and evolve&study include practice for my carreer to be advanced.
      I'm ready for working with your team.
      </p>
    
     <section className="p-10 text-center">
     <h2 className="text-3xl font-semibold">Programming Skills</h2>
     <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
         <li className="flex flex-col items-center">
           <p className="mt-2 text-lg">JavaScript</p>
           <p className="mt-2 text-lg">TypeScript</p>
           <p className="mt-2 text-lg">JavaScript</p>
           <p className="mt-2 text-lg">HTML</p>
           <p className="mt-2 text-lg">CSS</p>
           <p className="mt-2 text-lg">Python</p>
           <p className="mt-2 text-lg">Java</p>
           <p className="mt-2 text-lg">Kotlin</p>
           <p className="mt-2 text-lg">Flutter</p>
           <p className="mt-2 text-lg">Dart</p>
           <p className="mt-2 text-lg">C#</p>
           <p className="mt-2 text-lg">C++</p>
           <p className="mt-2 text-lg">SQL</p>
           <p className="mt-2 text-lg">Go</p>
           <p className="mt-2 text-lg">NoSQL</p>
           <p className="mt-2 text-lg">LowCode</p>
           <p className="mt-2 text-lg">Git/Github</p>
           <p className="mt-2 text-lg">Framewoork:Laravel,CodeIgniter,Symfony,ExpressJS,VueJS,ReactJS,NuxtJS,NextJS,Fastify,SpringBoot,FastAPI,.Net MVC & .Net Core</p>
         </li>
     </ul>
   </section>
   <section className="p-10 text-center">
     <h2 className="text-3xl font-semibold">System Administrator Skills</h2>
     <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
         <li className="flex flex-col items-center">
           <p className="mt-2 text-lg">Windows</p>
           <p className="mt-2 text-lg">Linux</p>
           <p className="mt-2 text-lg">MacOS</p>
           <p className="mt-2 text-lg">VMWare</p>
           <p className="mt-2 text-lg">Network</p>
           <p className="mt-2 text-lg">Security</p>
           <p className="mt-2 text-lg">Database Server Management</p>
           <p className="mt-2 text-lg">Docker&Kubernetes</p>
         </li>
     </ul>
   </section>
   <section className="p-10 text-center">
     <h2 className="text-3xl font-semibold">Computer General Skills</h2>
     <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
         <li className="flex flex-col items-center">
           <p className="mt-2 text-lg">Microsoft Office Suite</p>
            <p className="mt-2 text-lg">Adobe Photoshop</p>
            <p className="mt-2 text-lg">Adobe Illustrator</p>
            <p className="mt-2 text-lg">Adobe Premire Pro</p>
            <p className="mt-2 text-lg">Adobe Audition</p>
            <p className="mt-2 text-lg">Adobe After Effects</p>
            <p className="mt-2 text-lg">Adobe Photoshop Lightroom</p>
            <p className="mt-2 text-lg">Composer(PHP)</p>
            <p className="mt-2 text-lg">NodeJS(JavaScript & TypeScript)</p>
            <p className="mt-2 text-lg">GIT</p>
            <p className="mt-2 text-lg">VSCode</p>
            <p className="mt-2 text-lg">PostMan</p>
            <p className="mt-2 text-lg">MySQL</p>
            <p className="mt-2 text-lg">MongoDB</p>
            <p className="mt-2 text-lg">Oracle Database</p>
            <p className="mt-2 text-lg">Microsoft SQL Server</p>
            <p className="mt-2 text-lg">Tableau</p>
            <p className="mt-2 text-lg">Microsoft Power BI App</p>
            <p className="mt-2 text-lg">Unity</p>
            <p className="mt-2 text-lg">Cloud server(AWS,Azure,GCloud)</p>
            <p className="mt-2 text-lg">VMWare</p>
            <p className="mt-2 text-lg">Oracle Virtual Box</p>
         </li>
     </ul>
   </section>
   <section className="p-10 text-center">
     <h2 className="text-3xl font-semibold">General Skills</h2>
     <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
         <li className="flex flex-col items-center">
            <p className="mt-2 text-lg">Team Working</p>
            <p className="mt-2 text-lg">Communications</p>
            <p className="mt-2 text-lg">Fast Learner</p>
            <p className="mt-2 text-lg">Combine skills</p>
            <p className="mt-2 text-lg">Continue using skills</p>
            <p className="mt-2 text-lg">Willingness to Learn</p>
            <p className="mt-2 text-lg">Learning and Evolve</p>
            <p className="mt-2 text-lg">Learning Skills</p>
            <p className="mt-2 text-lg">Critical Thinking</p>
         </li>
     </ul>
   </section>
   </motion.section>
  );
}
