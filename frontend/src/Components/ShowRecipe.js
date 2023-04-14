import React,{useState, useEffect, useContext} from 'react';
import { recipeContext} from '../App';
import "../styles/ShowRecipe.css";

function ShowRecipe() {
  const getRecipeList = useContext(recipeContext);
   // const [recipeList , setRecipeList] = useState([]);
    
    // useEffect(()=>{
    //   setRecipeList(getRecipeList);
    // },[]);

  return (
          <>
             <div className='recipeshowBox'>
              {
                (getRecipeList && getRecipeList.map((recipe)=>{
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