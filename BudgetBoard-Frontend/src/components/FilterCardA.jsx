import React from "react";

const FilterCardA = ({ title, tags, filter, setFilter }) => {
  return (
    <div className="bg-white min-h-40 border border-gray-200 text-sm px-2 pt-4 pb-6 rounded-lg">
      <h3 className="mx-2 text-gray-700 font-semibold"> {title}</h3>
      <div className="pt-4">
        {tags.length ? (
          tags.map((tag, index) => {
            return (
              <button
                key={index}
                className={`px-2 py-[2px] m-1 border border-violet-400 rounded-full text-xs font-semibold hover:bg-violet-400 text-violet-500 hover:text-white duration-150 ease-in ${
                  filter.tags.includes(tag) &&
                  "bg-violet-400 hover:bg-violet-400 text-white"
                }`}
                onClick={() => {
                  setFilter((prev) => {
                    return {
                      ...prev,
                      tags: prev.tags.includes(tag)
                        ? prev.tags.filter((ele) => ele != tag)
                        : [...prev.tags, tag],
                    };
                  });
                }}
              >
                {tag}
              </button>
            );
          })
        ) : (
          <p className="px-2 text-gray-500">No tags found</p>
        )}
      </div>
    </div>
  );
};

export default FilterCardA;
