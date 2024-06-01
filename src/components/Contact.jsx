import React from 'react'
import { CONTACT } from '../constants'
import { animate, motion } from 'framer-motion'


const Contact = () => {
  return (
    <motion.div     
    whileInView={{orpacity:1, y:0}}
    initial={{orpacity:0, y:-100}}
    transition={{ duration :0.5}}
    className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'> Get in Touch</h1>
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
      
    </motion.div>
  )
}

export default Contact
