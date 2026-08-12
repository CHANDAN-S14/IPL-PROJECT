import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function InpageNavigation({teams,children}) {
    let[index,setindex]=useState(0)
    let width=useRef()
    let btnref=useRef()
    function widthofhr(btn,i){
      let {offsetWidth,offsetLeft}=btn
      
      
      width.current.style.width = offsetWidth +"px"
      width.current.style.left = offsetLeft +"px"
      
      
      setindex(i)
      
    }
    useEffect(()=>{
      widthofhr(btnref.current,0)
    },[])
  
   
  return (
    <div >
      <div className=' bg-[#223577] flex w-screen h-[90px] border-b-4 justify-center gap-[192px] items-end '>
      {teams.length>2 ? teams.map(({path,title},i)=>{
        return(
         <div  >
          <Link to={path}>
            <button ref={i==0? btnref:null} className={'   duration-300 relative w-[120px] p-1 mr-2 '+( index==i? "text-white text-[17px] ": "text-gray-400 text-[15px]" )} key={i}  onClick={(e)=>widthofhr(e.target,i)}>{title}</button>
            </Link>
           </div>
        )
      
        
      }):teams.map((teams,i)=>{
        return(
          
            <button ref={i==0? btnref:null} className={'bg-[#223577] duration-300  relative w-[150px] p-1 mr-0 '+( index==i? "text-black ": "text-gray-400" )} key={i}  onClick={(e)=>widthofhr(e.target,i)}>{teams}</button>
           
        )
      
        
      })}
      <hr  ref={width} className='border-white border-2 absolute duration-300' />
      </div>
      
     
      {teams.length>2?null: children[index]}
     
    </div>
  )
}

export default InpageNavigation
