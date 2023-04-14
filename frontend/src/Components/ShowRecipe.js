import React,{useState, useEffect} from 'react';
import "../styles/ShowRecipe.css";

function ShowRecipe() {
    const [recipeList , setRecipeList] = useState([]);

    function fetchRecipes(){
      return fetch('https://yummy-recipe-param.onrender.com/recipe').then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        setRecipeList(data);
      })
    }
  
    useEffect(()=>{
       fetchRecipes();
    },[]);

  return (
          <>
             <div className='recipeshowBox'>
              {
                (recipeList && recipeList.map((recipe)=>{
                     return(
                        <div className='recviewcard' key={recipe.reckey}>
                          <img src={recipe.img} alt={recipe.title} />
                          <div>
                          <h2>{recipe.title}</h2>
                          <h4>{recipe.ingredent}</h4>
                          </div>
                        </div>
                     )
                }))
              }
             </div>
          </>
  )
}

export default ShowRecipe