import React,{useState, useEffect} from 'react';
import { MutatingDots } from  'react-loader-spinner';
import "../styles/AddRecipe.css";


function AddRecipe() {
    const [recipeValue, setRecipeValue] = useState({ recid : 0, title : "", ingredent:"", img:"", recipe : ""}); 
    const [dbnextid, setDbNewId] = useState(0);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAddRecipeBtn = (e)=>{
    
      e.preventDefault();
      setLoading(false);
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
              setMessage("Successfully Recipe Added");
            }
            setLoading(true);
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
          <input type="text" placeholder="Title" value={recipeValue.title} onChange={(e)=>setRecipeValue({...recipeValue, title : e.target.value })} required/>
        </div>

        <div className="form__field">
          <input type="text" placeholder="ingredent" value={recipeValue.ingredent} onChange={(e)=>setRecipeValue({...recipeValue, ingredent : e.target.value })} required/>
        </div>

        <div className="form__field">
          <input type="text" placeholder="Img URL" value={recipeValue.img} onChange={(e)=>setRecipeValue({...recipeValue, img : e.target.value })}  required/>
        </div>

        <div className="form__field">
          <input type="text" placeholder="Recipe" value={recipeValue.recipe} onChange={(e)=>setRecipeValue({...recipeValue, recipe : e.target.value })}  required/>
        </div>
        <div className="form__field">
          <button type="submit" id='addrecipe'>Add Recipe </button>
        </div>
        {(loading) ? ("") : (
      <MutatingDots 
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor= '#4fa94d'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass="newloader"
  visible={true}
 />)}

    <h4>{message}</h4>
      </form>
     
     
      </div>
    </>
  )
}

export default AddRecipe