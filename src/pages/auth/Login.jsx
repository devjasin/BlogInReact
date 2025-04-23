import React from "react";
import Form from "./Components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(baseUrl + `/login`, data);
      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem("token", response.data.token); //store token in local storage
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
