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
           <p className="mt-2 text-lg">Microsoft Office Suite
Adobe Photoshop
Adobe Illustrator
Adobe Premire Pro
Adobe Audition
Adobe After Effects
Composer(PHP)
NodeJS(JavaScript & TypeScript)
GIT
VSCode
PostMan
MySQL
MongoDB
Tableau
Microsoft Power BI App
Adobe Photoshop Lightroom
Microsoft SQL Server
Oracle Database
Unity
Cloud server(AWS,Azure,GCloud)</p>
         </li>
     </ul>
   </section>
   <section className="p-10 text-center">
     <h2 className="text-3xl font-semibold">General Skills</h2>
     <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
         <li className="flex flex-col items-center">
           <p className="mt-2 text-lg">Team Working
Communications
Fast Learner
Combine skills
Continue using skills
Willingness to Learn
Learning and Evolve
Learning Skills</p>
         </li>
     </ul>
   </section>
   </motion.section>
  );
}
