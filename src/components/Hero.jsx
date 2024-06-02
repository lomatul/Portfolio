import React from 'react'
import { HERO_CONTENT } from '../constants'
import { delay, motion, transform } from "framer-motion"
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'


const container= (delay) => ({
  hidden : {x:-100, opacity:0},
  visible :{
    x:0,
    opacity: 1, 
    transition:{duration:0.5 , delay:delay},
  },
})
const Hero = () => {
  return (
    <section
    id='Hero' className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 ">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    initial="hidden"
                    animate="visible"
                    variants={container(0)}
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:left-8xl'> 
                    Lomatul Mahzabin</motion.h1>
                    <motion.span
                     initial="hidden"
                     animate="visible"
                     variants={container(0.5)}
                      className='bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'> 
                    Frontend Developer</motion.span>
                    <motion.p 
                    initial="hidden"
                    animate="visible"
                    variants={container(1)}className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>

                    <div className=' flex items-center justify-center gap-4 text-4xl'>
                              <FaFacebook/>
                             <FaLinkedin/>
                            <FaGithub/>
                                </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center">
              <motion.img 
                    initial={{x:100 , opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:1 , delay:1.2}}
                    src="loma_img.jpg"
                    width={300}
                    height={380}
                    className="mb-6 rounded" />
              </div>
            </div>

            <div className="flex flex-shrink-0 items-center ">
            
          </div>

        </div>
    </section>
  )
}

export default Hero
