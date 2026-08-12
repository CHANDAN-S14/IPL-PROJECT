import { useEffect, useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Matchdeatils from "./Components/Matchdeatils";
import Navbar from "./Components/Navbar";
import Pointstabel from "./Components/Pointstabel";
import News from "./Components/News";


function App() {

   return(
    <div className=" w-screen min-h-screen flex  flex-col items-center">
    <Routes >
        <Route path="/" element={<Navbar/>}>
         <Route path="/" element={<Home/>}   />
         <Route path="/poitnstabel" element={<Pointstabel/>}/>
         <Route  path="/news" element={<News/>}/>
        </Route>
       
        <Route path="/matchdetails/:id" element={<Matchdeatils/>}/>
    </Routes>
    </div>
    
   )
}


export default App
