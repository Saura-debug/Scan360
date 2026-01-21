import React from 'react'

import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { LuMaximize2 } from "react-icons/lu";
import { Link } from 'react-router-dom';

export default function Scanningoption() {
  return (
    <div className='flex justify-between px-[2%]'>
        <div className='flex text-3xl w-[35%] justify-evenly'>
            <FaAngleDoubleLeft />

            <h1>Scan Axle DRR1</h1>
                 <h1>Scan Axle DRR2</h1>
        </div>
        <div className='flex'>
            <FaAnglesRight/>
            <LuMaximize2/>

        </div>
    </div>
  )
}
