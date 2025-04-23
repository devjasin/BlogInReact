import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import axios from "axios";
import { baseUrl } from "../../config";

const Home = () => {
  const [nblogs, setBlogs] = useState([]);
  const fetchBlog = async () => {
    const response = await axios.get(`${baseUrl}/blog`);
    if (response.status === 200) {
      setBlogs(response.data.data);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2 ">
        {nblogs.length > 0 &&
          nblogs.map((blog) => {
            return <Card blog={blog} />;
          })}
      </div>
    </Layout>
  );
};

export default Home;
