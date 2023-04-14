import React,{useState, useEffect} from 'react';
import "../styles/ShowRecipe.css";

function ShowRecipe({recList}) {
    const [recipeList , setRecipeList] = useState([]);
    
    useEffect(()=>{
      setRecipeList(recList);
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