import React, { useEffect, useState } from "react";

const Form = ({ title, onSubmit, blog }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    category: "",
    description: "",
    image: "",
  });
  //when blog is passed ,update the state
  useEffect(() => {
    if (blog) {
      setData({
        title: blog.title || "",
        subtitle: blog.subtitle || "",
        category: blog.category || "",
        description: blog.description || "",
        image: "",
      });
    }
  }, [blog]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: name === "image" ? e.target.files[0] : value }); //image file xa vane e.target.files ma aauxa ,yo ternery operator
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="flex justify-center  w-screen h-screen bg-white">
      <div className="container  my-1 lg:px-40 px-4 ">
        <form onSubmit={handleSubmit}>
          <div className="w-full p-8 my-4  md:px-12 lg:w-9/12 lg:pl-40 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-amber-300">
            <div className="flex">
              <h1 className="font-bold capitalize text-5xl">{title}</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                name="title"
                value={data.title}
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title"
                onChange={handelChange}
              />
              <input
                name="subtitle"
                value={data.subtitle}
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Sub Title"
                onChange={handelChange}
              />
              <input
                name="image"
                className="w-full bg-green-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
                onChange={handelChange}
              />

              <input
                name="category"
                value={data.category}
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Category"
                onChange={handelChange}
              />
            </div>
            <div className="my-4">
              <textarea
                name="description"
                value={data.description}
                placeholder="description"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                onChange={handelChange}
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
