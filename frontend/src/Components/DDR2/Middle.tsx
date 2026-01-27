import React, { useState } from 'react'

export default function Middle() {
 
  return (
    <div className='flex justify-evenly font-serif font-cinzel text-3xl text-black  mt-[4%] pl-[6%] pr-[6%]'>
      
      <div className='mr-[40%]'>
        <b>Model Number:</b> <br />
        <input className={`border-black/10 border mt-[3%]
         w-[130%]`}type="text" />
        
      </div>
      <div className='mr-[15%]'>
        <b>Serial Number:</b> <br />
        <input  className='border-black/10 border mt-[3%] w-[130%] ' type="text" />
      </div>
    </div>
  )
}

