import React from 'react'
import scan from "../../assets/Logo/scan360img.png"
import Profileavtar from '../Profileavtar';
import Pageslinks from './Pageslinks';
import { TbDashboardFilled } from "react-icons/tb";
import { FaHandPointRight } from "react-icons/fa";
import { MdAdfScanner } from "react-icons/md";
import { FaSquarePollVertical } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className=' w-[23%] h-[47.5rem] bg-black opacity-75 rounded-4xl flex-col'>
      <div className='flex justify-between pb-[6%] border-b border-white/5'>
         <img src={scan} alt="t" className='w-[12%] h-[7%]  rounded-full object-cover ml-[19%] mt-[3%]' />
         <h1 className='text-white font-serif font-cinzel text-5xl opacity-86 mr-[22%] mt-[4%]'>Scan_360</h1>

      </div>
      <div className='flex justify-between pb-[6%] border-b border-white/5'>
      <div className='ml-[10%] mt-2'>
           <Profileavtar  height='3.5rem' width = '3.5rem'  borderradius='50%' Size={55} color='#0000FF'/>

      </div>
     
         <h1 className='text-white font-serif font-cinzel text-4xl opacity-86 mr-[22%] mt-[4%]'>Sudhanshu pal</h1>

      </div>
      <div>
        <input type="text" placeholder='search' className= 'border-white/5 ml-[10%] mt-[4%] opacity-60 h-[2.5rem] w-[20rem] rounded-3xl border-2 focus:outline text-white text-center text-3xl  '/>
      </div>
      <div>
        <Pageslinks title='Dashboard' icon1={<TbDashboardFilled color='#FFFFFF' size={45} />} icon2={<FaHandPointRight color='#FFFFFF' size={45}/>} navigation='/dashboard'/>
      </div>
      <div>
        <Pageslinks title='Scan Axle DDR1' icon1={<MdAdfScanner color='#FFFFFF' size={45} />} icon2={<FaHandPointRight color='#FFFFFF' size={45}/>} navigation='/scanAxil1'/>
        </div> 
      <div>
        <Pageslinks title='Scan Axle DDR2' icon1={<MdAdfScanner color='#FFFFFF' size={45} />} icon2={<FaHandPointRight color='#FFFFFF' size={45}/>} navigation='/scanAxil2'/>
      </div>
      <div>
        <Pageslinks title='Reports' icon1={< FaSquarePollVertical color='#FFFFFF' size={45} />} icon2={<FaHandPointRight color='#FFFFFF' size={45}/>} navigation='/reports'/>
      </div>
      <div>
        <Pageslinks title='Admin ' icon1={<MdAdminPanelSettings color='#FFFFFF' size={45} />} icon2={<FaHandPointRight color='#FFFFFF' size={45}/>} navigation='/admin'/>
      </div>
      <div>
        <Pageslinks title='Super Admin' icon1={<RiAdminFill color='#FFFFFF' size={45} />} icon2={< FaHandPointRight color='#FFFFFF' size={45}/>} navigation='/superadmin'/>
      </div>
   
    </div>
  )
}
  
 