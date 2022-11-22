import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Description } from "./views/Description";
import { Checkout } from "./views/Checkout";
import Login from "./views/Login";
import { Admin } from "./views/Admin";
import { useContext } from "react";
import { Context } from "./Context/Context";

export const App = () => {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} path="/" />
        <Route element={<Description />} path="/description" />
        <Route element={<Checkout />} path="/checkout" />
        <Route element={<Login />} path="/login" />
        <Route element={user ? <Admin user={user} /> : <Login />} path="/admin" />
      </Routes>
    </BrowserRouter>
  );
};
