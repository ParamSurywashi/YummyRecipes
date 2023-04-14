import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";
import {MdSearch, MdFoodBank} from "react-icons/md";
import { IoFastFoodOutline, IoRestaurantSharp } from "react-icons/io5";
import firstVideo from "../navvideo/firstvid.mp4";
import secondVideo from "../navvideo/secondvid.mp4";
import addrecvid from "../navvideo/addrecvid.mp4";
import searchVideo from "../navvideo/searchvid.mp4";
import imgLogo from "../navvideo/imgLogos.png";

function Header() {
  const [isHoveronHome, setHoveronHome] = useState(true);
  const [isHoveronShowRecipe, setHoveronShowRecipe] = useState(true);
  const [isHoveronAddRecipe, setHoveronAddRecipe] = useState(true);
  const [isHoveronSearchRecipe, setHoveronSearchRecipe] = useState(true);
  
  return (
    <>
    <div className="headers">
       <Link to="/" id='imgLogos'><div><img src={imgLogo} /></div> </Link>
      <ul>
        <Link to="/home" className='linkComp' id='fvid' onMouseEnter={()=>setHoveronHome(false)} onMouseLeave={()=>setHoveronHome(true)}>
          <span id='hometxtbox'> <IoRestaurantSharp /> Home </span> 
          {(isHoveronHome) ? ("") : ( <video autoPlay loop muted playsInline className='vidbox'>
             <source src={firstVideo} type="video/mp4"/>
         </video>)}
        </Link>
      </ul>
      <ul>
        <Link to="/showrecipe" className='linkComp' id='showRecId' onMouseEnter={()=>setHoveronShowRecipe(false)} onMouseLeave={()=>setHoveronShowRecipe(true)}> 
        <> <MdFoodBank /> Shows Recipe </>
        {(isHoveronShowRecipe) ? ("") : ( <video autoPlay loop muted playsInline className='vidbox'>
             <source src={secondVideo} type="video/mp4"/>
         </video>)}
        </Link>
      </ul>
      <ul>
        <Link to="/addrecipe" className='linkComp' id='addRecId'onMouseEnter={()=>setHoveronAddRecipe(false)} onMouseLeave={()=>setHoveronAddRecipe(true)}> 
        <span id='addfoodbox'> <IoFastFoodOutline />Add Recipe </span>
        {(isHoveronAddRecipe) ? ("") : ( <video autoPlay loop muted playsInline className='vidbox'>
             <source src={addrecvid} type="video/mp4"/>
         </video>)}
         </Link>
      </ul>
      <ul>
      <Link to="/search" className='linkComp' id='searchId' onMouseEnter={()=>setHoveronSearchRecipe(false)} onMouseLeave={()=>setHoveronSearchRecipe(true)}> 
        <span id='searchtxtbox'> <MdSearch /> Search </span>
        {(isHoveronSearchRecipe) ? ("") : ( <video autoPlay loop muted playsInline className='vidbox'>
             <source src={searchVideo} type="video/mp4"/>
         </video>)}
        </Link>
      </ul>
    </div>

    </>

  )
}

export default Header