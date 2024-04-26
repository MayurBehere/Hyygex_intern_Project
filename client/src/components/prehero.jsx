import React from 'react'
import HomeLogo from '../assets/homelogo.svg'
import arrow from '../assets/arrow.svg'

const prehero = () => {
  return (
    <div className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto pt-10 pb-10">
    <div className="flex items-center">
        <img src={HomeLogo} alt="logo" className='pt-10 pl-10'/>
        <img src={arrow} alt="logo" className='pt-10 pl-2'/>
        <p className='pt-10 pl-2 text-md'>Flashcard</p>
        <img src={arrow} alt="logo" className='pt-10 pl-2'/>
        <p className='pt-10 pl-2 text-md'>Mathematics</p>
        <img src={arrow} alt="logo" className='pt-10 pl-2'/>
        <p className='pt-10 pl-2 text-md gradient-secondary font-semibold'>Relation and Function</p>
    </div>
      <div className="flex items-center pt-10">
        <h1 className='pt-10 pl-10 text-3xl font-bold gradient-secondary' style={{ fontFamily: 'Montserrat' }}>Relation and Function ( Mathematics )</h1>
       </div>   
    </div>
  )
}

export default prehero
