import React, { useState } from 'react';
import FAQ from '../assets/faq.svg';

const Faq = () => {
    const [expanded, setExpanded] = useState([false, false, false]);

    const toggleExpansion = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    return (
        <div className='bg-white md:px-14 p-4 pt-10 pb-10 max-w-screen-2xl mx-auto text-left'>
            <div className='text-lg container mx-auto flex justify-between items-center font-medium pt-10 pb-10 '>
                <div className='flex space-x-14 items-center pt-5'>
                    <a href='/'>
                        <img src={FAQ} alt='Finallogo' className='pl-7 pt-5' />
                    </a>
                </div>
            </div>
            <div className='bg-white p-2 pt-10 pl-10  max-w-screen-md'>
                <div
                    className={`bg-white p-4 pt-4 pl-7 rounded-lg border border-blue-500 ${
                        expanded[0] ? 'h-auto' : 'h-16'
                    } overflow-hidden`}
                >
                    <div className='relative'>
                        <h1 className='font-semibold'>Can education flashcards be used for all age groups?</h1>
                        <div
                            className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 cursor-pointer'
                            onClick={() => toggleExpansion(0)}
                        >
                            <svg
                                className={`fill-current h-4 w-4 transform ${expanded[0] ? 'rotate-180' : 'rotate-0'}`}
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                            >
                                <path d='M5 8l5 5 5-5z' />
                            </svg>
                        </div>
                    </div>
                    {expanded[0] && (
                        <div>
                            <p className='pt-10'>Yes, education flashcards can be used for all age groups.</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='bg-white p-4 pt-5 pl-10  max-w-screen-md'>
                <div
                    className={`bg-white p-4 pt-4 pl-7 rounded-lg border border-blue-500 ${
                        expanded[1] ? 'h-auto' : 'h-16'
                    } overflow-hidden`}
                >
                    <div className='relative'>
                        <h1 className='font-semibold'>How do education flashcards work?</h1>
                        <div
                            className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 cursor-pointer'
                            onClick={() => toggleExpansion(1)}
                        >
                            <svg
                                className={`fill-current h-4 w-4 transform ${expanded[1] ? 'rotate-180' : 'rotate-0'}`}
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                            >
                                <path d='M5 8l5 5 5-5z' />
                            </svg>
                        </div>
                    </div>
                    {expanded[1] && (
                        <div>
                            <p className='pt-10'>Yes, education flashcards can be used for all age groups.</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='bg-white p-4 pt-5 pl-10  max-w-screen-md'>
                <div
                    className={`bg-white p-4 pt-4 pl-7 rounded-lg border border-blue-500 ${
                        expanded[2] ? 'h-auto' : 'h-16'
                    } overflow-hidden`}
                >
                    <div className='relative'>
                        <h1 className='font-semibold'>Can education flashcards be used for test preparation?</h1>
                        <div
                            className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 cursor-pointer'
                            onClick={() => toggleExpansion(2)}
                        >
                            <svg
                                className={`fill-current h-4 w-4 transform ${expanded[2] ? 'rotate-180' : 'rotate-0'}`}
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                            >
                                <path d='M5 8l5 5 5-5z' />
                            </svg>
                        </div>
                    </div>
                    {expanded[2] && (
                        <div>
                            <p className='pt-10'>Yes, education flashcards can be used for all age groups.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Faq;