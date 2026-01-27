import React from 'react'
import Hero from '../Components/DDR2/Hero'
import Middle from '../Components/DDR2/Middle';
import Bottom from '../Components/DDR2/Bottom';

export default function ScanAxilDDR2() {
  return (
    <>
    <div className='h-[43rem] overflow-y-auto'>
      <Hero name="Scan Axle DDR2"/>
    <Middle/>
    <Bottom/>

    </div>
    
    </>
  )
}
