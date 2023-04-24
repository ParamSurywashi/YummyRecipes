import React from 'react'
import "../styles/RecipeCard.css";

function RecipeCard({recipe}) {
  const handlereadmore = (e)=>{
   if(document.getElementsByClassName("readmore")[e.target.id -1].innerText=="--- Read more ---"){
    document.getElementsByClassName("decrecipe")[e.target.id -1].style.overflowY="auto";
    document.getElementsByClassName("readmore")[e.target.id -1].innerText="--- Read Less ---";
   }else{
    document.getElementsByClassName("decrecipe")[e.target.id -1].style.overflowY="hidden";
    document.getElementsByClassName("readmore")[e.target.id -1].innerText="--- Read more ---";
   }
  }
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
       <p className='readmore' id={recipe.reckey} onClick={handlereadmore}>--- Read more ---</p>
    
    </>
  )
}

export default RecipeCard