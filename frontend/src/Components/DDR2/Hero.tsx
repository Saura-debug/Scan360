import React from 'react'

import { NavLink } from 'react-router-dom';
type Axilename = {
    name:String
  }

export default function Hero({name}:Axilename) {
  return (
    <div className='flex justify-between px-[5%] text-2xl mt-[2%] font-serif font-cinzel '>
        <div>
            <h1 className='text-4xl font-serif font-cinzel '>{name}</h1>
        </div>
        <div>
            <NavLink to={"/dashboard"} className={"text-blue-400"} >Home </NavLink>
             <button>/ Scan Axle</button>
        </div>
    </div>
  )
}
