import React from 'react'
import { IoPerson } from "react-icons/io5";
import tatalogo from "../../assets/Logo/tatalogo.png";
import Profileavtar from '../Profileavtar.tsx';
import Navbar from "./Navbar.tsx"

export default function Header() {
  return (
    <div className="main">
      <div className="child1 flex justify-between ">
        <div className='flex ml-10 mt-4'>
              <img className='h-[7rem] w-[7rem]  ml-7' src={tatalogo}  alt="logo"/>
              <div className='mt-9'><h1 className='font-serif font-cinzel text-4xl font-semibold'>TATA MOTARS <span className='font-serif font-cinzel text-4xl font-light'>/ Scan Axil</span></h1>
            </div>


              </div>
              <div className='flex me-20 mt-12'>
                <div>
                  {/* <IoPerson size={38} className='me-3 mt-0.5' color='#0E4C92'/> */}
                  <Profileavtar height='10rem' width = '10rem'  borderradius='50%' Size={32} color='#0000FF'/>

                </div>
                <div><h1 className='lg:text-4xl font-serif font-cinzel font-medium mt-1 sm:text-2xl '>Sudhanshu Pal</h1></div>

              </div>


      </div>
      <div className="child2">
        <Navbar/>
        
        <div>
          

        </div>
        <div></div>
      </div>
     
        
    </div>
  )
}





