import React from 'react'
import Final from '../assets/Finallogo.svg'
import Plus from '../assets/plus.svg'
const posthero = () => {
return (
    <div className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-14 items-center'>
                <a href="/"><img src={Final} alt="Finallogo" className="pl-7 pt-5" /></a>
            </div>
            
            <div className='flex space-x-5 items-center'>
                <a href="/"><img src={Plus} alt="Finallogo" /></a>
                <h1 className='gradient-secondary  font-bold'>Create Flashcard</h1>
            </div> 
        </div>
    </div>  
)
}

export default posthero

