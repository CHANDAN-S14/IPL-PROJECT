import React from 'react'
import { Link, Links, Outlet } from 'react-router-dom'
import InpageNavigation from './InpageNavigation'

function Navbar() {
  return (
    <div className='bg-[#363840] min-h-screen flex flex-col items-center'>
    <div >
        <InpageNavigation teams={[{title:"Matches",path:"/"},{title:"PointsTable",path:"/poitnstabel"},{title:"News",path:"/news"}]}>
      
        </InpageNavigation>
        {/* <Link to={"/"}> <h1>Matches</h1></Link>
        <Link to={"/poitnstabel"}><h1>Pointstabel</h1></Link> */}
     
      
    </div>
    <Outlet></Outlet>
    </div>
  )
}

export default Navbar
