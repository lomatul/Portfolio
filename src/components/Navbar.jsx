import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <nav className='bg-transparent mt-10 mb-20  rounded-md shadow-md py-4 px-8 sticky top-0 z-50'>
      <div className='flex items-center  sticky top-0 justify-center'>

        <ul  className='bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text tracking-tight text-transparent flex items-center space-x-20 text-2xl'>
          <li className='hover:text-white'>
            <Link to='#About'>About </Link>
          </li>
          <li className='hover:text-white'>
            <Link to='#Technologies'>Technologies </Link>
          </li>
          <li className='hover:text-white'>
            <Link to='#Experience'>Experience </Link>
          </li>
          <li className='hover:text-white'>
            <Link to='#Projects'>Projects </Link>
          </li>
          <li className='hover:text-white'>
            <Link to='#contact'>Contact </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
