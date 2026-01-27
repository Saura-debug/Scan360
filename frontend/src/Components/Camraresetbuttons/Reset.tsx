import React from 'react'
import { GrPowerReset } from "react-icons/gr";

export default function Reset() {
  return (
    <button className="bg-sky-400 h-[2.5rem] w-[8rem] flex items-center justify-center gap-2 text-white rounded mr-[4rem] ">
          <GrPowerReset />
          <span>Click photo</span>
        </button>
  )
}
