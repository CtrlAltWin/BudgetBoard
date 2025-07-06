import React from "react";

const Shimmer = () => {
  return (
    <div className="bg-gray-50 mt-1 min-h-[calc(100vh-64px)] px-4">
      {/* Header Section */}
      <section className="py-9 space-y-2 max-w-[1340px] mx-auto animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-56"></div>
        <div className="h-4 bg-gray-200 rounded w-72"></div>
      </section>

      {/* Line Chart Shimmer */}
      <section className="bg-white space-y-2 max-w-[1300px] pt-9 pr-4 h-64 mx-auto border border-gray-200 animate-pulse">
        <div className="h-full w-full bg-gray-100 rounded"></div>
      </section>

      {/* Pie Chart + Category Cards */}
      <section className="bg-white grid md:grid-cols-[4fr_5fr] gap-4 mt-9 pt-5 px-4 max-w-[1300px] border border-gray-200 mx-auto animate-pulse">
        {/* Left Side Cards */}
        <div className="flex flex-col gap-3">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="h-10 bg-gray-100 rounded w-full"></div>
          ))}
        </div>

        <div className="flex justify-center items-center h-80"></div>
      </section>
    </div>
  );
};

export default Shimmer;
