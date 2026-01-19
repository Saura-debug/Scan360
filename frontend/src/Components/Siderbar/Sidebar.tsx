import React from 'react'
import scan from "../../assets/Logo/scan360img.png"

export default function Sidebar() {
  return (
    <div className=' border-blue-600 border-2 w-[23%] h-[45rem] bg-black opacity-80 flex-col'>
      <div className='flex justify-between pb-[6%] border-b border-white/5'>
         <img src={scan} alt="t" className='w-[12%] h-[7%]  rounded-full object-cover ml-[19%] mt-[3%]' />
         <h1 className='text-white font-serif font-cinzel text-5xl opacity-86 mr-[22%] mt-[4%]'>Scan_360</h1>

      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
   
    </div>
  )
}
  
