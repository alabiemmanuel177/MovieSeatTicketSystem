import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './views/Home';
import {Description} from './views/Description';
import {Checkout} from './views/Checkout';
import Login from './views/Login';
import  {Admin}  from './views/Admin';


 export const App = () => {
  return (
    <BrowserRouter>    
      <Routes>        
        <Route index element={<Home />} path="/" />
        <Route element={<Description />} path="/description" />
        <Route element={<Checkout />} path="/checkout" />
        <Route element={<Login/>} path="/login" />
        <Route element={<Admin />} path="/admin" />
      </Routes>
    </BrowserRouter>
  )
}

