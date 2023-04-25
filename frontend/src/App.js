import React,{useState, useEffect, createContext} from "react";

import {HashRouter, Route, Routes } from "react-router-dom";
import AddRecipe from "./Components/AddRecipe";
import AddUser from "./Components/AddUser";
import Header from "./Components/Header";
import Home from "./Components/Home";
import LoginUser from "./Components/LoginUser";
import Search from "./Components/Search";
import ShowRecipe from "./Components/ShowRecipe";
const recipeContext = createContext();


function App() {
   // const[start, setStart] = useState("");

   const [recGloablList , setRecGllobalList] = useState([]);
   const [userdata , setUserdata] = useState("");
  //  const location = useLocation();
   
   function fetchRecipesGlobally(){
    return fetch('https://yummy-recipe-param.onrender.com/recipe').then((res)=>res.json())
    .then((data)=>{
     // console.log(data);
      setRecGllobalList(data);
    })
  }
  function handleUser(usr){
    //console.log("   ===> "+usr);
    setUserdata(usr);
  }

  useEffect(()=>{
    fetchRecipesGlobally();
  },[]);

  //recList={recGloablList}
  return (
    <recipeContext.Provider value={recGloablList}>
    <HashRouter>
    <Routes>
      <Route path="/" element={
        <LoginUser handleUser={handleUser}/>
      } />
      <Route path="/adduser" element={
         <AddUser />
      } />
       <Route path="/login" element={
        <LoginUser handleUser={handleUser}/>
      } />
     <Route path="/home" element={
        <>
         <Header user={userdata} />
          <Home />
        </>
      } />
       <Route path="/addrecipe" element={
        <>
        <Header user={userdata} />
          <AddRecipe />
        </>
      } />
        <Route path="/showrecipe" element={
        <>
        <Header user={userdata} />
          <ShowRecipe/>
        </>
      } />
      <Route path="/search" element={
        <>
        <Header user={userdata} />
          <Search />
        </>
      } />
    </Routes>
    </HashRouter>
    
    </recipeContext.Provider>
  );
}

export default App;
export {recipeContext};