import React from "react";

const FilterCardB = ({ title, categories, filter, setFilter }) => {
  return (
    <div className="bg-white border border-gray-200 font-semibold text-sm px-2 pt-4 pb-6 rounded-lg">
      <h3 className="mx-2 text-gray-700"> {title}</h3>
      <div className="pt-4">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className={`p-2 m-1 border border-gray-200 rounded-lg hover:bg-violet-200 hover:border-violet-400 duration-150 ease-in ${
                category === filter.category &&
                "bg-violet-400 hover:bg-violet-400 text-white"
              }`}
              onClick={() =>
                setFilter((prev) => {
                  return {
                    ...filter,
                    category: prev.category === category ? "" : category,
                  };
                })
              }
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCardB;
