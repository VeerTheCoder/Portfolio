import React, { useEffect, useState } from 'react'
import "./Cursor.css"

const Cursor = () => {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const [bx,setbX]=useState(0)
    const [by,setbY]=useState(0)
    const cusr=()=>{
        document.addEventListener("mousemove",(e)=>{
           setX(e.x);
           setY(e.y);
           setbX(e.x-70);
           setbY(e.y-70);
        })
    }
    useEffect(()=>{
        cusr();
    },[])
  return (
   <>
    <div className="cursor" style={{top:y, left:x}}></div>
    <div className="blur-cursor" style={{top:by, left:bx}}></div>
   </>
  )
}

export default Cursor