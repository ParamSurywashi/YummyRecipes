import React, { useEffect, useState, useContext } from 'react';
import RecipeCard from './RecipeCard';
import { recipeContext} from '../App';
import "../styles/Home.css"

function Home() {
  const getRecipeList = useContext(recipeContext);
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
          <div className='cardBox' key={recipe.reckey}>
             <RecipeCard recipe={recipe} />
         </div>)
       }) 
      }
      </div>
    </div>
  
  )
}

export default Home