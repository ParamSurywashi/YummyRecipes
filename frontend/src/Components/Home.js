import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { recipeContext} from '../App';
import "../styles/Home.css"

function Home() {
  const getRecipeList = useContext(recipeContext);
  const location = useLocation();
  const userdata  = location.state?.user;
 
//  const [recipeList , setRecipeList] = useState([]);
  //console.log(getRecipeList);
  // useEffect(()=>{
  //    setRecipeList(getRecipeList);
  // },[]);

  return (
    <div className='boxHome'> 
       <h1>Recipes</h1>
       <div>
      {getRecipeList && getRecipeList.map((recipe)=>{
        return  (
          <div className='outerCardBox' key={recipe.reckey}>
             <div className='cardBox' key={recipe.reckey}>
                <RecipeCard recipe={recipe} />
             </div>
         </div>)
       }) 
      }
      </div>
    </div>
  
  )
}

export default Home