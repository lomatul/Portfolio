import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'


const Navbar = () => {
  return (

    <nav className='bg-black mb-20 flex items-center justify-between py-2' >
        <div className="flex flex-shrink-0 items-center "></div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaFacebook/>
            <FaLinkedin/>
            <FaGithub/>
        </div>
    </nav>
  )
}

export default Navbar
