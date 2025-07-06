import React from "react";
import TransactionCard from "./TransactionCard";

const TransactionContainer = ({
  showTransactionForm,
  transactions,
  setToBeDeleted,
}) => {
  return (
    <div className="lg:px-4 h-auto">
      {!transactions.length ? (
        <div className="flex flex-col h-full justify-center items-center space-y-2">
          <h3 className="font-semibold text-lg">No transactions found</h3>
          <p className="text-gray-700">
            Add your first transaction to get started!
          </p>
          <button
            className="mt-4 px-5 py-3 font-semibold text-sm bg-gray-900 hover:bg-gray-800 duration-200 ease-in text-white rounded-md"
            onClick={showTransactionForm}
          >
            Add Your First Transaction
          </button>
        </div>
      ) : (
        <div className="min-h-72 grid grid-cols-1 gap-4">
          {transactions.map((transaction, index) => (
            <TransactionCard
              key={index}
              transaction={transaction}
              setToBeDeleted={setToBeDeleted}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionContainer;
