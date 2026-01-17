import React from 'react'
import { IoPerson } from "react-icons/io5";
type profileavtar = {
        imgurl?:string;

    }
    

export default function Profileavtar({imgurl}:profileavtar) {
    
  return (
  <div >
    {imgurl?( <img src={imgurl} alt="d" style={{height:"10rem", width:"10rem", borderRadius : "50%"}}/>):(<IoPerson size={32} color='#0000FF'/>)}
 
  
  </div>
  )
}
