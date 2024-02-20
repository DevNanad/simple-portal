import React from 'react'

export default function Input({labelName, value, onChange, type}) {
  return (
    <>
        <label 
            className="text-sm opacity-70 mt-3"
        >{labelName}</label>
        <br />
        <input 
            value={value} 
            onChange={onChange} 
            type={type} className="w-full py-2 bg-gray-100 border focus:outline-none focus:border-purple-300 px-4 rounded-lg text-lg font-regular"
        />
    </>
  )
}
