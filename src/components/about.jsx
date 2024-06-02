import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
     id='About'
     className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'> About Me </h1>

        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{orpacity:1, y:0}}
            initial={{orpacity:0, y:100}}
            transition={{ duration :0.5}}
             className="w-full">
                    <div className="text-center mr -20">
                        <p className='text-center'>{ABOUT_TEXT}</p>
                    </div>
            </motion.div>
        </div>
      
    </section>
  )
}

export default About
