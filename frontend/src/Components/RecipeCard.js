import React from 'react'
import "../styles/RecipeCard.css";

function RecipeCard({recipe}) {
  return (
    <>
       <h1>{recipe.title}</h1>
       <ul>
          {
             recipe && recipe.ingredent &&  recipe.ingredent.map((ingrident, idx)=>{
              return <li key={idx}>{ingrident}</li>
            })
          }
       </ul>
       <img src={recipe.img} alt={recipe.title} />
       <p className='decrecipe'>{recipe.recipe}</p>
    </>
  )
}

export default RecipeCard