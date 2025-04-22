import React from "react";
import Form from "./Components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate(); //register bhaisake paxi page retrive garna
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(
        "https://react30.onrender.com/api/user/register",
        data
      );
      if (response.status === 201) {
        navigate("/login");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("register failed " + error.message);
    }
  };
  return <Form title="Register" onSubmit={handleRegister} />;
};

export default Register;
