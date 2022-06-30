import React from "react";
import { Link } from "react-router-dom";

const Home = ({ title }) => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold">Home</h1>
      <p>{title}</p>
      <Link to={"/about"}>About</Link>
    </div>
  );
};

export default Home;
