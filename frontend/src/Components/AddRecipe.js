import React,{useState, useEffect} from 'react';
import { MutatingDots } from  'react-loader-spinner';
import "../styles/AddRecipe.css";
import { Upload } from "upload-js";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function AddRecipe() {
    const [recipeValue, setRecipeValue] = useState({ reckey : 0, title : "", ingredent:"", img:"", recipe : ""}); 
    const [dbnextid, setDbNewId] = useState(0);
    const [message, setMessage] = useState("");
    //const [imgurl, setImgurl] = useState("");
    const [loading, setLoading] = useState(true);
    const [seeProgressBar, setSeeProgressBar] = useState(true);
    const [upload, setUpload] = useState("URL");
    const [percentage, setPercentage] = useState(0);
   
    

    const handleAddRecipeBtn = (e)=>{
     setMessage("");
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
            setRecipeValue({ reckey : 0, title : "", ingredent:"", img:"", recipe : ""});
      })
    
    }
  
  async function getSizeFetch(){
   return await fetch('https://yummy-recipe-param.onrender.com/recipe/getsize').then(res=>res.json())
    .then((data)=>{
      //console.log(data);
      setRecipeValue({...recipeValue, reckey : data+1});
    })
  }

  const handleImage = (e)=>{
    setSeeProgressBar(false);
   // const url = URL.createObjectURL(e.target.files[0]);
   const url = e.target.files[0];
    console.log(url);
   //setImgurl(url);
  const newURL =  uploadImageGetURL(url);
  console.log(newURL);
  if(newURL){
   setRecipeValue({...recipeValue, img : newURL });
  }
  }

 async function uploadImageGetURL(url){
    const upload = Upload({
      apiKey: "public_kW15bFF9tZ9VSdQdNUBvaEBzyGwT" // Your real API key.
    });
    

    try {
      const { fileUrl } = await upload.uploadFile(
        url,
        { onProgress: ({ progress }) => {
          //console.log(`${progress}% complete`)
          setPercentage(progress);
         } }
      );
     // alert(`File uploaded!\n${fileUrl}`);
     if(fileUrl){
      setRecipeValue({...recipeValue, img : fileUrl });
     }
      setSeeProgressBar(true);
    } catch (e) {
      setMessage("Unable to upload image")
      setSeeProgressBar(true);
    //  alert(`Error!\n${e.message}`);
    }
  }

  useEffect(()=>{
    getSizeFetch();
  },[]);

  const handleRedioButtons = (e)=>{
    setUpload(e.target.value);
    setSeeProgressBar(true);
    const idx = e.target.value;
    if(idx === "URL"){
      document.getElementById("FILE").style.display="none";
      document.getElementById("URL").style.display="block";
      
    }else if(idx === "FILE"){
     
      document.getElementById("URL").style.display="none";
      document.getElementById("FILE").style.display="block";
    }
    
  }

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
        <div className='urlfilebox'>
             <input type="radio"  value={"URL"} checked={upload === "URL"} onChange={handleRedioButtons}/>
              <label htmlFor="URL">Url</label> 

             <input type="radio" value={"FILE"}  checked={upload === "FILE"} onChange={handleRedioButtons}/>
              <label htmlFor="FILE">File</label> 
        </div>

          <input id='URL' type="text" placeholder="Img URL" value={recipeValue.img} onChange={(e)=>setRecipeValue({...recipeValue, img : e.target.value })}  />
         <span id='mixDiv'> <input id='FILE' type="file" placeholder="Img File" multiple accept='image/*'  onChange={handleImage}  />
          <span id='progressBar' >{(!seeProgressBar) ? (<>
            <CircularProgressbar  value={percentage} text={`${percentage}%`}  
             styles={{
              // Customize the root svg element
              root: { width: '24%'},
             }}/>
          </>) : ("")}
          </span>
          </span>
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

    <h4 className='Errormsg'>{message}</h4>
      </form>
     
     
      </div>
    </>
  )
}

export default AddRecipe