import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import axios from "axios";
import { baseUrl } from "../../config";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigation = useNavigate();
  const handelCreateBlog = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/blog`, data, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 201) {
        navigation("/");
        alert("Blog created successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Blog creation failed " + error?.response?.data?.message);
    }
  };

  return (
    <Layout>
      <Form title="Add Blog" onSubmit={handelCreateBlog} />
    </Layout>
  );
};

export default AddBlog;
