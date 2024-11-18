import React from "react";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative">
      <Banner></Banner>
      <h3 className="text-4xl font-bold text-center mt-[270px] mb-12">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="grid grid-cols-7 gap-8 w-11/12 mx-auto">
        <div>
          <Catagory></Catagory>
        </div>
        <div className="col-span-6">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
