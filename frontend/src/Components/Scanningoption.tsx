import React from 'react'

import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { LuMaximize2 } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

export default function Scanningoption() {
  return (
    <div className='flex justify-between px-[2%] bg-gray-100  pt-1.5 h-[6%]'>
        <div className='flex text-3xl w-[40%] justify-evenly'>
          <span>
            <FaAngleDoubleLeft className='mt-1' />

          </span>
            

           <NavLink to={'/scanAxil1'} className={({isActive})=>isActive? "opacity-100":"opacity-65"} >Scan Axle DDR1</NavLink>
           <NavLink to={'/scanAxil2'}  className={({isActive})=>isActive? "opacity-100":"opacity-65"}>Scan Axle DDR2</NavLink>
                 
        </div>
        <div className='flex text-2xl pt-1 justify-evenly w-[8%]'>
          <span><FaAnglesRight/></span>
          <span><LuMaximize2/></span>
            
            

        </div>
    </div>
  )
}
