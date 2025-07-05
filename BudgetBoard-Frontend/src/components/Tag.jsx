import React from "react";

const Tag = ({ name }) => {
  return (
    <div className="text-sm text-violet-500 bg-violet-200 px-2 py-1 rounded-3xl">
      {name}
    </div>
  );
};

export default Tag;
