import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import "../styles/Home.css"

function Home() {

  const [recipeList , setRecipeList] = useState([]);

  function fetchRecipes(){
    return fetch('/recipe').then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setRecipeList(data);
    })
  }

  useEffect(()=>{
     fetchRecipes();
  },[]);

  return (
    <div className='boxHome'> 
       <h1>Recipes</h1>
       <div>
      {recipeList.map((recipe)=>{
        return  (
          <div className='cardBox' key={recipe.recid}>
             <RecipeCard recipe={recipe} />
         </div>)
       }) 
      }
      </div>
    </div>
  
  )
}

export default Home