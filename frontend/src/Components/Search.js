import React, { useState } from 'react';
import "../styles/Search.css";
import RecipeCard from "../Components/RecipeCard";

function Search() {
    const [searchInput, setSearchInput] = useState("");
    const [searchRecipeList , setSearchRecipeList] = useState([]);
    function fetchData(){
      fetch(`https://yummy-recipe-param.onrender.com/search/${searchInput}`).then((res)=>res.json())
        .then((data)=>{
          setSearchRecipeList(data);
        });
    }
    const handleSearchBtn = ()=>{
         fetchData();
     } 

  return (
    <div className='searchBox'>
       <div className='searchInputBox'>
        <input type={"text"} value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
        <br />
        <button type='submit' onClick={handleSearchBtn}>Search</button>
       </div>
       <div id='listRecipes'>
       {searchRecipeList && searchRecipeList.map((recipe)=>{
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

export default Search