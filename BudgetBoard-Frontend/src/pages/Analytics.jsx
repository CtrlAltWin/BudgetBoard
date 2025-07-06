import React from "react";
import Footer from "../components/Footer";

const Analytics = () => {
  return (
    <div className="bg-gray-50 mt-1 min-h-[calc(100vh-64px)] px-4">
      <div className="pt-9 space-y-2 max-w-[1370px] mx-auto border">
        <h1 className="font-bold text-3xl">Analytics</h1>
        <p className="text-gray-700">Visualize your finances with ease</p>
      </div>
      <div className="space-y-2 max-w-[1370px] h-64 mx-auto border"></div>
      <div className="grid md:grid-cols-[4fr_6fr] pt-9 space-y-2 max-w-[1370px] mx-auto">
        <div className="h-80 border"></div>
        <div className="h-80 border"></div>
      </div>
      <div className="space-y-2 max-w-[1370px] h-64 mx-auto border"></div>
    </div>
  );
};

export default Analytics;
