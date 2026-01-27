import React from 'react'
import { FaCamera } from "react-icons/fa";
type Props = {
  onclickbutton : ()=> void;

}

export default function Click({onclickbutton}:Props) {
  return (
  <button className="bg-green-400 h-[2.5rem] w-[8rem] flex items-center justify-center gap-2 text-white rounded mr-[1rem]" onClick={onclickbutton}>
      <FaCamera />
      <span>Click photo</span>
    </button>
  )
}
