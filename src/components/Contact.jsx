import React from 'react'
import { CONTACT } from '../constants'
import { animate, motion } from 'framer-motion'


const Contact = () => {
  return (
    <motion.section
    id='contact'     
    whileInView={{orpacity:1, y:0}}
    initial={{orpacity:0, y:-100}}
    transition={{ duration :0.5}}
    className='border-b border-neutral-900 pb-20'>
         <h1 className='my-20 text-center bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'> Get in Touch</h1>
        <div className="text-center tracking-tighter">
            <motion.p 
             whileInView={{orpacity:1, x:0}}
             initial={{orpacity:0, x:-100}}
             transition={{ duration :1}}
             className='my-4'>{CONTACT.address}</motion.p>
            <motion.p 
             whileInView={{orpacity:1, x:0}}
             initial={{orpacity:0, x:100}}
             transition={{ duration :1}}
             className='my-4'>{CONTACT.phoneNo}</motion.p>
            <a href="#" className='border-b'>
                {CONTACT.email}
            </a>
        </div>
      
    </motion.section>
  )
}

export default Contact
