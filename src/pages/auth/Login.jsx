import React from "react";
import Form from "./Components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(
        "https://react30.onrender.com/api/user/login",
        data
      );
      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("login failed " + error?.response?.data?.message);
    }
  };
  return <Form title="Login" onSubmit={handleLogin} />;
};

export default Login;
