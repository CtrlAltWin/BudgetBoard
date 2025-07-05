import React from "react";

const TransactionCard = ({ transaction, setToBeDeleted }) => {
  const date = new Date(transaction.createdAt);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white p-6 border border-gray-200 text-gray-700 rounded-lg space-y-1 hover:shadow duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg overflow-hidden text-ellipsis whitespace-nowrap text-gray-700">
          {transaction.title}
        </h2>
        <span className="text-sm">{formattedDate}</span>
      </div>

      <p className="font-medium text-md">
        ₹ {transaction.amount.toLocaleString()} /-
      </p>

      {transaction.description && (
        <p>{transaction.description}</p>
      )}

      <div className="flex flex-wrap gap-2 pt-2">
        {transaction.tags.map((tag, index) => (
          <div
            key={index}
            className="px-2 py-[2px] text-xs font-semibold border rounded-full text-violet-600 bg-violet-100"
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center border-t border-gray-300 pt-3 mt-3">
        <p className="px-2 py-[3px] text-xs text-gray-600 font-semibold rounded-full bg-gray-100 border border-gray-200">
          {transaction.category}
        </p>
        <button
          className="text-red-500 text-sm px-3 py-1 font-medium border border-red-300 rounded-md hover:bg-red-50"
          onClick={() => setToBeDeleted(transaction._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
