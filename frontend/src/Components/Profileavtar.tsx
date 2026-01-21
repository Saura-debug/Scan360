import React from 'react'
import { IoPerson } from "react-icons/io5";
type profileavtar = {
        imgurl?:string;
        height:string;
        width:string;
        borderradius:string;
        Size:number;
        color:string;

    }
    
    

export default function Profileavtar({imgurl
  ,height,width,borderradius,Size,color
}:profileavtar) {
    
  return (
  <div>
    {imgurl?( <img src={imgurl} alt="d"  style={{height:height, width:width, borderRadius : borderradius}}/>):(<IoPerson size={Size} color={color}/>)}
 
  


  
  </div>
  )
}
