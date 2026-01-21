import React from 'react'
import { useState } from 'react'
import { BsSearch } from "react-icons/bs";

export default function Searchbox() {
    const[open,Setopen] = useState(false);
  return (
    <div>
        <button onClick={()=>{Setopen(!open)}} className={open ? "opacity-0 pointer-events-none ": "opacity-100"}>
            <BsSearch color='#0080FE' size={40}/>
        </button>
        { open && (
            <input type="text" placeholder='search' className='w-[60%] h-[90%] rounded-3xl border-4 text-center text-4xl border-blue-400 focus:outline-none focus:ring-0' />
        )

        }

    </div>
  )
}
