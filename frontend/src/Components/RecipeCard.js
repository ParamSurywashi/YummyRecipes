import React from 'react'
import "../styles/RecipeCard.css";

function RecipeCard({recipe}) {
  return (
    <>
       <h1>{recipe.title}</h1>
       <h5>{recipe.ingredent}</h5>
       {/* <ul>
          {
             recipe && recipe.ingredent &&  recipe.ingredent.map((ingrident)=>{
              console.log(index)
              return <li key={index}>{ingrident}</li>
            })
          }
       </ul> */}
       <img src={recipe.img} alt={recipe.title} />
       <p className='decrecipe'>{recipe.recipe}</p>
    </>
  )
}

export default RecipeCard