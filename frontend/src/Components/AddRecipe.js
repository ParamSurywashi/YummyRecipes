import React,{useState, useEffect} from 'react';
import "../styles/AddRecipe.css";


function AddRecipe() {
    const [recipeValue, setRecipeValue] = useState({ recid : 0, title : "", ingredent:"", img:"", recipe : ""}); 
    const [dbnextid, setDbNewId] = useState(0);
    const handleAddRecipeBtn = (e)=>{
    
      e.preventDefault();
      
      console.log(recipeValue);
        fetch('https://yummy-recipe-param.onrender.com/recipe/addrecipes',{
          method: 'post',
          body: JSON.stringify(recipeValue),
          headers:{
              'Content-Type':'application/json'
          }
      }).then(res=>res.json())
      .then(data=>{
            console.log(data);
            if(data.success){
              alert("Successfully Recipe Added");
            }
            setRecipeValue({ recid : 0, title : "", ingredent:"", img:"", recipe : ""});
      })
    
    }
  
  function getSizeFetch(){
    return fetch('/recipe/getsize').then((res)=>res.json())
    .then((data)=>{
     // console.log(data);
     // setDbNewId(data+1);
      setRecipeValue({...recipeValue, reckey : data+1});
    })
  }

  useEffect(()=>{
    getSizeFetch();
  },[]);

  return (
    <>
       <div className='boxAddRecipe'> 
     
     <form className="form" id='forminput' onSubmit={handleAddRecipeBtn}>
         <div className="form__field">
          <input type="text" placeholder="Title" value={recipeValue.title} onChange={(e)=>setRecipeValue({...recipeValue, title : e.target.value })} />
        </div>

        <div className="form__field">
          <input type="text" placeholder="ingredent" value={recipeValue.ingredent} onChange={(e)=>setRecipeValue({...recipeValue, ingredent : e.target.value })}/>
        </div>

        <div className="form__field">
          <input type="text" placeholder="Img URL" value={recipeValue.img} onChange={(e)=>setRecipeValue({...recipeValue, img : e.target.value })}  />
        </div>

        <div className="form__field">
          <input type="text" placeholder="Recipe" value={recipeValue.recipe} onChange={(e)=>setRecipeValue({...recipeValue, recipe : e.target.value })}  />
        </div>
        <div className="form__field">
          <button type="submit" id='addrecipe'>Add Recipe </button>
        </div>

      </form>
      </div>
    </>
  )
}

export default AddRecipe