 
import React from 'react'
import { NavLink } from 'react-router-dom';

type boxes = {
    icon1:React.ReactNode,
    icon2:React.ReactNode,
    title:string,
    navigation:string,



}

export default function Pageslinks({icon1,icon2,title,navigation}:boxes) {
  return (
    <div className='flex justify-between mx-[8%] mt-[5%] hover:bg-sky-500 rounded-2xl'>
    <div className='flex'>
    {icon1}
    <NavLink to={navigation}> <h1 className='text-white font-serif font-cinzel text-4xl opacity-80 pl-2 pt-1 hover:text-3xl'>{title}</h1></NavLink>
   
    </div>
    <div>
        {icon2}
    </div>
    </div>
  )
}
