import React from "react";
import {HashRouter, Route, Routes } from "react-router-dom";
import AddRecipe from "./Components/AddRecipe";
import AddUser from "./Components/AddUser";
import Header from "./Components/Header";
import Home from "./Components/Home";
import LoginUser from "./Components/LoginUser";
import Search from "./Components/Search";
function App() {
   // const[start, setStart] = useState("");


  return (
    <HashRouter>
    <Routes>
    <Route path="/" element={
        <LoginUser />
      } />
      <Route path="/adduser" element={
         <AddUser />
      } />
       <Route path="/login" element={
        <LoginUser />
      } />
     <Route path="/home" element={
        <>
         <Header />
          <Home />
        </>
      } />
       <Route path="/addrecipe" element={
        <>
         <Header />
          <AddRecipe />
        </>
      } />
      <Route path="/search" element={
        <>
         <Header />
          <Search />
        </>
      } />
    </Routes>
    </HashRouter>
  );
}

export default App;
