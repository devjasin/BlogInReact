import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const deleteBlog = async () => {
    try {
      const response = await axios.delete(`${baseUrl}/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Error deleting blog");
      }
    } catch (error) {
      alert("Error deleting blog", error?.response?.data?.message);
    }
  };

  const fetchData = async () => {
    const response = await axios.get(`${baseUrl}/blog/${id}`);
    if (response.status === 200) {
      setData(response.data.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout>
      <div className="bg-gray-100 dark:bg-gray-800 py-8 h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={data.imageUrl}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <Link to={`/blogs/Edit/${id}`}>
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Edit
                    </button>
                  </Link>
                </div>
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={deleteBlog}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {data.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {data.subtitle}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    {data.category}
                  </span>{" "}
                  <br />
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Published Date:
                    {data?.userId?.createdAt
                      ? new Date(data.userId.createdAt).toLocaleDateString()
                      : "Loading..."}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
