import React from "react";

const Tag = ({ name }) => {
  return (
    <div className="text-sm text-violet-400 bg-violet-200 px-3 py-2 rounded-3xl">
      {name}
    </div>
  );
};

export default Tag;
