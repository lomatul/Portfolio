import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'> About 
        <span className='text-neutral-500'> Me </span></h1>

        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{orpacity:1, x:0}}
            initial={{orpacity:0, x:-100}}
            transition={{ duration :0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    {/* <img src="loma_img.jpg" alt="" /> */}
                </div>
                
            </motion.div>

            <motion.div 
            whileInView={{orpacity:1, x:0}}
            initial={{orpacity:0, x:100}}
            transition={{ duration :0.5}}
             className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
            </motion.div>
        </div>
      
    </div>
  )
}

export default About
