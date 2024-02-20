import React from 'react'

export default function Button({type, buttonName, onClick}) {
  return (
    <button 
        type={type} 
        onClick={onClick}
        className='w-full py-2 font-semibold uppercase bg-violet-500 text-white rounded-lg text-lg font-regular mt-5 focus:outline-none hover:bg-violet-600 transition duration-300 ease-in-out'
    >{buttonName}</button>
  )
}
