import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";
import {MdSearch, MdFoodBank} from "react-icons/md";
import { IoFastFoodOutline, IoRestaurantSharp } from "react-icons/io5";
import firstVideo from "../navvideo/firstvid.mp4";
import secondVideo from "../navvideo/secondvid.mp4";
import thirdVideo from "../navvideo/thirdvid.mp4";
import searchVideo from "../navvideo/searchvid.mp4"

function Header() {
  const [isHoveronHome, setHoveronHome] = useState(true);
  const [isHoveronShowRecipe, setHoveronShowRecipe] = useState(true);
  const [isHoveronAddRecipe, setHoveronAddRecipe] = useState(true);
  const [isHoveronSearchRecipe, setHoveronSearchRecipe] = useState(true);
  
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
        <Link to="/" className='linkComp' id='showRecId' onMouseEnter={()=>setHoveronShowRecipe(false)} onMouseLeave={()=>setHoveronShowRecipe(true)}> 
        <> <MdFoodBank /> Shows Recipe </>
        {(isHoveronShowRecipe) ? ("") : ( <video autoPlay loop muted playsInline className='vidbox'>
             <source src={secondVideo} type="video/mp4"/>
         </video>)}
        </Link>
      </ul>
      <ul>
        <Link to="/addrecipe" className='linkComp' id='addRecId'onMouseEnter={()=>setHoveronAddRecipe(false)} onMouseLeave={()=>setHoveronAddRecipe(true)}> 
        <> <IoFastFoodOutline /> Add Recipe </>
        {(isHoveronAddRecipe) ? ("") : ( <video autoPlay loop muted playsInline className='vidbox'>
             <source src={thirdVideo} type="video/mp4"/>
         </video>)}
         </Link>
      </ul>
      <ul>
      <Link to="/search" className='linkComp' id='searchId' onMouseEnter={()=>setHoveronSearchRecipe(false)} onMouseLeave={()=>setHoveronSearchRecipe(true)}> 
        <> <MdSearch /> Search </>
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