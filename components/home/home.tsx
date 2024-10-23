import React from "react";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(4, 35,160, 0.66), rgba(4,35,160, 0.66)), url('/assets/Rectangle 2.png')",
          height: "80vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex items-center px-[300px]"
      >
        <div className="w-8/12">
          <h1 className="font-bold text-6xl text-white pb-6">
            Empowering Your Business with Cutting-Edge IT Solutions
          </h1>
          <p className="text-white text-base font-medium pb-8 w-10/12">
            We deliver innovative and reliable technology solutions tailored to
            meet your unique needs. Transform your operations with our expert
            software development and robust hardware systems.
          </p>
          <Button className="hover:bg-[#0423A0]/80">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
