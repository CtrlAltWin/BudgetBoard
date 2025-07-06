import React from "react";

const CardB = () => {
  return (
    <div className="hover:shadow-lg ease-in duration-250 rounded-lg bg-white border border-gray-200 p-2">
      <div className="text-start font-semibold py-2 px-3">Categories</div>
      <div className="text-gray-600">
        <div className="flex justify-between py-3 px-5">
          <p>Food</p>
          <div className="bg-gray-100 text-sm rounded-full px-[6px]">10</div>
        </div>
        <div className="flex justify-between py-3 px-5">
          <p>Groceries</p>
          <div className="bg-gray-100 text-sm rounded-full px-[6px]">15</div>
        </div>
        <div className="flex justify-between py-3 px-5">
          <p>Shopping</p>
          <div className="bg-gray-100 text-sm rounded-full px-[6px]">5</div>
        </div>
        <div className="flex justify-between py-3 px-5">
          <p>Bills</p>
          <div className="bg-gray-100 text-sm rounded-full px-[6px]">8</div>
        </div>
        <div className="flex justify-between py-3 px-5">
          <p>Other</p>
          <div className="bg-gray-100 text-sm rounded-full px-[6px]">1</div>
        </div>
      </div>
    </div>
  );
};

export default CardB;
