import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";
import {MdSearch, MdFoodBank} from "react-icons/md";
import { IoFastFoodOutline, IoRestaurantSharp } from "react-icons/io5";
import firstVideo from "../navvideo/firstvideo.mp4";

function Header() {
  const [isHoveronHome, setHoveronHome] = useState(true);

  function getVideo(vidlink){
    

      // return (
        
      // )
  }
  // document.getElementById("fvid").addEventListener("mouseover", () => {
  //       setHoveronHome(true);
  // });
  
  return (
    <>
    <div className="headers">
       <Link to="/" id='imgLogos'><div><img src="https://cdn.pixabay.com/photo/2012/04/05/00/36/hamburger-25357_960_720.png" /></div> </Link>
      <ul>
        <Link to="/home" className='linkComp' id='fvid' onMouseEnter={()=>setHoveronHome(false)} onMouseLeave={()=>setHoveronHome(true)}>
          <> <IoRestaurantSharp /> Home </> 
          {(isHoveronHome) ? ("") : ( <video autoPlay loop muted playsInline className='vidbox'>
             <source src={firstVideo} type="video/mp4"/>
         </video>)}
        </Link>
      </ul>
      <ul>
        <Link to="/" className='linkComp'> <MdFoodBank /> Shows Recipe </Link>
      </ul>
      <ul>
        <Link to="/addrecipe" className='linkComp'> <IoFastFoodOutline /> Add Recipe </Link>
      </ul>
      <ul>
      <Link to="/search" className='linkComp'> <MdSearch /> Search</Link>
      </ul>
    </div>

    </>

  )
}

export default Header