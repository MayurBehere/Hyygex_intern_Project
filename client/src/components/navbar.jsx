import React from 'react'
import logo from '../assets/logo.svg'
import '../App.css'

const navbar = () => {
  return (
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto'>
      <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
        <div className='flex space-x-14 items-center'>
          <a href="/"><img src={logo} alt="logo" className="pl-7 pt-5" /></a>
        </div>
        
        <div className='flex space-x-14 items-center'>
          <a href="/" className='text-#3A3740'>Home</a>
          <a href="/" className='text-#3A3740'>Flashcard</a>
          <a href="/" className='text-#3A3740'>Contact</a>
          <a href="/" className='text-#3A3740'>FAQ</a>
          <button className='text-white' style={{ width: '120px', height: '42px', borderRadius: '32px', background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)' }}>Login</button>
        </div> 
      </div>
    </nav>  
  )
}

export default navbar


