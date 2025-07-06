import React from "react";

const CategoryWiseSpendingCard = (props) => {
  const { category, spending } = props;
  return (
    <div className="inline-flex bg-gray-50 w-fit gap-2 border border-gray-200 px-4 py-2 rounded-lg hover:scale-105 duration-300 transition-transform">
      <p className="">{category}</p>
      <p className="">{spending} </p>
    </div>
  );
};

export default CategoryWiseSpendingCard;
