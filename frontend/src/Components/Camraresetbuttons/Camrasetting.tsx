import React from 'react'
import Click from './Click'
import Reset from './Reset'
type Props = {
  onclickbutton:()=> void;
}

export default function Camrasetting({onclickbutton}:Props) {
  return (
    <div className='flex mt-1.5 mr-[4rem]'>

        <Click onclickbutton = {onclickbutton}/>
        <Reset/>
    </div>
  )
}
