import React from 'react'
import HomeLogo from '../assets/homelogo.svg'
import arrow from '../assets/arrow.svg'

const prehero = () => {
  return (
    <div className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto">
    <div className="flex items-center">
        <img src={HomeLogo} alt="logo" className='pt-10 pl-10'/>
        <img src={arrow} alt="logo" className='pt-10 pl-2'/>
        <p className='pt-10 pl-2 text-md'>Flashcard</p>
        <img src={arrow} alt="logo" className='pt-10 pl-2'/>
        <p className='pt-10 pl-2 text-md'>Mathematics</p>
        <img src={arrow} alt="logo" className='pt-10 pl-2'/>
        <p className='pt-10 pl-2 text-md gradient-secondary font-semibold'>Relation and Function</p>
    </div>
</div>
  )
}

export default prehero
