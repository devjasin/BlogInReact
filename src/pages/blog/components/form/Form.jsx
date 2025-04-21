import React from "react";

const Form = ({ title }) => {
  return (
    <div class="flex justify-center  w-screen h-screen bg-white">
      <div class="container  my-1 lg:px-40 px-4 ">
        <div class="w-full p-8 my-4  md:px-12 lg:w-9/12 lg:pl-40 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div class="flex">
            <h1 class="font-bold capitalize text-5xl">{title}</h1>
          </div>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Title"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Sub Title"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="file"
            />

            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="category"
            />
          </div>
          <div class="my-4">
            <textarea
              placeholder="description"
              class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div class="my-2 w-1/2 lg:w-1/4">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
