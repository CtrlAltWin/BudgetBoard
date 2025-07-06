import React from "react";

const TransactionCard = ({ transaction, setToBeDeleted }) => {
  const date = new Date(transaction.createdAt);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white p-5 text-gray-700 h-72 rounded-lg shadow hover:shadow duration-200 ease-in-out">
      <div className="grid grid-cols-[9fr_3fr] gap-2 items-start">
        <div className="space-y-2">
          <h2 className="font-semibold text-lg truncate">
            {transaction.title}
          </h2>

          {transaction.description && (
            <p className="text-sm text-gray-600">{transaction.description}</p>
          )}

          {transaction.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {transaction.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-[3px] text-xs font-semibold rounded-full border text-violet-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="text-right space-y-1">
          <p className="text-xl font-semibold text-violet-500">
            ₹ {transaction.amount.toLocaleString()}
          </p>
          <span className="text-xs text-gray-500">{formattedDate}</span>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 pt-3 mt-3">
        <span className="px-3 py-[2px] text-xs bg-gray-100 border border-gray-200 rounded-full text-gray-600 font-semibold capitalize">
          {transaction.category}
        </span>
        <button
          className="px-3 py-[5px] text-xs font-semibold border rounded-md text-gray-600 border-gray-300 hover:bg-gray-50 hover:scale-110 transition-transform duration-200 ease-out"
          onClick={() => setToBeDeleted(transaction._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
