import React from 'react'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
import { motion } from 'framer-motion'

const Projects = () => {

    const projectsData = [
        {
            image: image1,
            title: 'Habit Tracker',
            description: 'A habit tracker app that helps you track and improve your habits.',
            technologies: ["React", "Node.js", "Express.js", "MongoDB"],
        },
        {
            image: image2,
            title: 'Todo App',
            description: 'A todo app that helps you manage your tasks.',
            technologies: ["React", "Node.js", "Express.js", "MongoDB"],
        },
        {
            image: image3,
            title: 'Social Media App',
            description: 'A social media app that helps you connect with others.',
            technologies: ["TypeScript", "Node.js", "Express.js", "MongoDB"],
        },
        {
            image: image4,
            title: 'Restaurant Website',
            description: 'A restaurant website that helps you order food.',
            technologies: ["React", "Node.js", "Express.js", "MongoDB"],
        },
        {
            image: image5,
            title: 'Admin Dashboard',
            description: 'An admin dashboard that helps you manage your website.',
            technologies: ["TypeScript", "Node.js", "Express.js", "MongoDB"],
        },
    ]

    const ScrollReveal = ({ children }) => {
        return (
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='opacity-0 translate-y-20' data-scroll data-scroll-speed="3">
                {children}
            </motion.div>
        )
    }

    const ProjectCard = ({ project }) => {
        return (
            <ScrollReveal>
                <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
                    <img src={project.image} alt='' className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'/>

                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-3'>
                            <div className='text-xl font-semibold'>{project.title}</div>
                            <p className='text-gray-400'>{project.description}</p>
                        </div>
                        <div className='flex flex-wrap gap-5'>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='rounded-lg bg-black p-3'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        )
    }

  return (
    <div id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
        <ScrollReveal>
            <h1 className='text-4xl font-light text-white md:text-6xl'>Projects</h1>
        </ScrollReveal>

        <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
            {
                projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))
            }
        </div>
    </div>
  )
}

export default Projects