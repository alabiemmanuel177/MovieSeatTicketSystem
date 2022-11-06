import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Description from './views/Description';
import Checkout from './views/Checkout';
import Navbar from './views/Components/Navbar'


 export const App = () => {
  return (
    <BrowserRouter>
    <Navbar>
      <Routes>
        <Route index element={<Home />} path="/" />
        <Route index element={<Description />} path="/" />
        <Route index element={<Checkout />} path="/" />
      </Routes>
      </Navbar>
    </BrowserRouter>
  )
}

