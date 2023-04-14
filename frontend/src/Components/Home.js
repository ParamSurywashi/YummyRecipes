import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import "../styles/Home.css"

function Home({recList}) {

  const [recipeList , setRecipeList] = useState([]);

  useEffect(()=>{
     setRecipeList(recList);
  },[]);

  return (
    <div className='boxHome'> 
       <h1>Recipes</h1>
       <div>
      {recipeList && recipeList.map((recipe)=>{
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