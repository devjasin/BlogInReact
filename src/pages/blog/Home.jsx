import React from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default Home;
