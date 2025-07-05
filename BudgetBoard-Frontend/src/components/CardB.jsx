import React from "react";

const CardB = () => {
  return (
    <div className="hover:shadow-lg ease-in duration-250 rounded-lg bg-white border border-gray-200 p-2">
      <div className="text-start font-semibold py-2 px-3">Categories</div>
      <div className="text-gray-600">
        <div className="flex justify-between py-3 px-5">
          <p>Learning</p>
          <div className="bg-gray-100 text-sm rounded-full px-[6px]">12</div>
        </div>
        <div className="flex justify-between py-3 px-5">
          <p>Work</p>
          <div className="bg-gray-100 text-sm rounded-full px-[6px]">8</div>
        </div>
        <div className="flex justify-between py-3 px-5">
          <p>Personal</p>
          <div className="bg-gray-100 text-sm rounded-full px-[6px]">5</div>
        </div>
        <div className="flex justify-between py-3 px-5">
          <p>Entertainment</p>
          <div className="bg-gray-100 text-sm rounded-full px-[6px]">7</div>
        </div>
      </div>
    </div>
  );
};

export default CardB;
