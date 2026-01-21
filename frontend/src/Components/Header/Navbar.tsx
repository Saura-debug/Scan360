import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillNotification } from "react-icons/ai";
import { RiChatSmileFill } from "react-icons/ri";
import { SlSizeFullscreen } from "react-icons/sl";

import Searchbox from './Searchbox';

export default function Nav() {
  return (
    <>
    <div>
      <nav className='flex justify-between mx-[8%]'>
        <ul className="flex gap-6">
          <li className='font-serif font-cinzel text-4xl'>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li className='font-serif font-cinzel text-4xl'>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          
        </ul>
        <ul className="flex gap-6">
          <li className='font-serif font-cinzel text-3xl w-[50%]'>
            <Searchbox/>
          </li>
          <li className='font-serif font-cinzel text-3xl'>
            <NavLink to="/notification"><AiFillNotification color='#0080FE' size={45}/></NavLink>
          </li>
          <li className='font-serif font-cinzel text-3xl'>
            <NavLink to="/chats"><RiChatSmileFill color='#0080FE' size={45}/></NavLink>
          </li>
          <li className='font-serif font-cinzel text-3xl'>
            <NavLink to="/chats"><SlSizeFullscreen color='#0080FE' size={30} className='mt-2'/></NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
    </>
    
  )
}
