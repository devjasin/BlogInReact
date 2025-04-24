import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tailwindcss";
import Home from "./pages/blog/Home";
import Register from "./pages/auth/Register";
import AddBlog from "./pages/blog/AddBlog";
import Login from "./pages/auth/Login";
import EditBlog from "./pages/blog/EditBlog";
import SingleBlog from "./pages/blog/SingleBlog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs/addblog" element={<AddBlog />} />
        <Route path="/blogs/Edit/:id" element={<EditBlog />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
