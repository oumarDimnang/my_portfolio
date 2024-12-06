import React from 'react'
import image from '../assets/image.jpg'
import dp from '../assets/oumarDimnang.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
        <div className='flex flex-col items-center justify-center gap-10 text-white'>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <img src={dp} alt='' className='w-[300px] cursor-pointer rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-5 md:w-[350px]'/>
            </motion.div>
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}   
                className='flex max-w-[1000px] flex-col items-center justify-center gap-3 text-center'
            >
                <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl'>OUMAR DIMNANG</h1>
                <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl'>Software Engineer</h3>
                <p className='md:text-3xl text-pretty text-lg text-white'>
                    Based in Bahrain - I build stuff.
                </p>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero