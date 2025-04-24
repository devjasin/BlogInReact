import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { data, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";

const EditBlog = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const handelEditBlog = async (blog) => {
    try {
      const response = await axios.patch(`${baseUrl}/blog/${id}`, blog, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        navigation(`/blogs/${id}`);
      }
    } catch (error) {
      alert("Blog update failed " + error?.response?.data?.message);
    }
  };

  const fetchBlog = async () => {
    const response = await axios.get(`${baseUrl}/blog/${id}`);
    if (response.status === 200) {
      setBlog(response.data.data);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <Layout>
      <Form title="Edit Blog" blog={blog} onSubmit={handelEditBlog} />
    </Layout>
  );
};
export default EditBlog;
