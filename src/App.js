import './App.css';
import React, { useEffect, useState } from 'react';
import './css/spiner.css'
import Main from './main'
import Register  from './Auth/Register'
import Home from './Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';
function App() {

  const [user , setUser]= useState(false)
  const userdata = useSelector(state=> state.user) 

  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/v1/pluto/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/NewUser/register" element={<Register />} />
        </Routes>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

       
      </BrowserRouter>
    </>
  );
}

export default App;
