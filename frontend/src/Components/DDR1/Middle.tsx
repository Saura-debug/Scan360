import React, { useState } from 'react'

export default function Middle() {
  const [axleside,SetAxleside] = useState("");
  return (
    <div className='flex justify-between font-serif font-cinzel text-3xl text-black  mt-[4%] pl-[6%] pr-[6%]'>
      <div>
        <b>Axle Side</b> <br />
        <select className="border-black/10 border h-[51%] w-[24rem] mt-[3%]" onChange={(e)=>{SetAxleside(e.target.value)}}>
  <option value="">Select Side</option>
  <option value="Right">Right</option>
  <option value="Left">Left</option>
  <option value="Top">Top</option>
  <option value="Bottom">Bottom</option>
</select>
        
      </div>
      <div>
        <b>Model Number:</b> <br />
        <input className={`border-black/10 border mt-[3%]
          ${!axleside ? "bg-gray-200 cursor-not-allowed":"bg-white"}`}type="text" disabled = {!axleside} />
        
      </div>
      <div>
        <b>Serial Number:</b> <br />
        <input  className='border-black/10 border mt-[3%]' type="text" />
      </div>
    </div>
  )
}
