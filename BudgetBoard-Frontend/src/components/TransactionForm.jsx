import React, { useState } from "react";
import Spinner from "./Spinner";

const TransactionForm = ({ hideTransactionForm, onSave }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    description: "",
    tags: [],
    category: "",
    newTag: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (
      formData.newTag.trim() &&
      !formData.tags.includes(formData.newTag.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, prev.newTag.trim()],
        newTag: "",
      }));
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { newTag, ...dataToSave } = formData;
    setIsLoading(true);
    await onSave(dataToSave);
    setIsLoading(false);
    hideTransactionForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Add New Transaction</h2>

      <div className="mb-2">
        <label htmlFor="title" className="font-semibold text-sm">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Transaction title"
          required
          className="w-full border border-gray-300 my-2 px-4 py-2 rounded-lg outline-offset-4 text-sm"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="amount" className="font-semibold text-sm">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          required
          className="w-full border border-gray-300 my-2 px-4 py-2 rounded-lg outline-offset-4 text-sm"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="description" className="font-semibold text-sm">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Add a short description (optional)"
          className="w-full border border-gray-300 my-2 px-4 py-2 rounded-lg outline-offset-4 text-sm"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="newTag" className="font-semibold text-sm">
          Tags
        </label>
        <div className="grid grid-cols-[10fr_2fr] gap-2 my-2">
          <input
            id="newTag"
            value={formData.newTag}
            onChange={handleChange}
            placeholder="Add a tag"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg outline-offset-4 text-sm"
          />
          <button
            onClick={handleAddTag}
            className="rounded-lg text-white text-sm bg-gray-900 hover:bg-gray-800 duration-200 ease-in"
          >
            Add
          </button>
        </div>

        {formData.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  x
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="category" className="font-semibold text-sm">
          Category
        </label>
        <select
          id="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 my-2 px-4 py-2 rounded-lg outline-offset-4 text-sm"
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Groceries">Groceries</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Transportation">Transportation</option>
          <option value="Health">Health</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Travel">Travel</option>
          <option value="Savings">Savings</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 text-sm py-2 my-2">
        <button
          type="button"
          onClick={hideTransactionForm}
          className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-lg text-white bg-gray-900 hover:bg-gray-800 duration-200 ease-in"
        >
          Save
        </button>
      </div>

      <div className="my-4">{isLoading && <Spinner />}</div>
    </form>
  );
};

export default TransactionForm;

