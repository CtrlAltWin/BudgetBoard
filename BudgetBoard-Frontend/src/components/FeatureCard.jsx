import React from "react";

const FeatureCard = ({ title, text }) => {
  return (
    <div className="flex flex-col justify-center bg-violet-50 text-center min-h-44 rounded space-y-2 px-4">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default FeatureCard;
