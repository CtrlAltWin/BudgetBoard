import React, { useContext, useEffect, useState } from "react";
import FilterCardA from "../components/FilterCardA";
import FilterCardB from "../components/FilterCardB";
import TransactionContainer from "../components/TransactionContainer";
import Modal from "../components/Modal";
import TransactionForm from "../components/TransactionForm";
import toast from "react-hot-toast";
import axios from "axios";
import AuthContext from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

import Shimmer from "../components/Shimmer";
const baseURL = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [transactions, setTransactions] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(null);
  const [filter, setFilter] = useState({
    search: "",
    tags: [],
    category: "",
  });

  const navigate = useNavigate();
  const { loggedInUser } = useContext(AuthContext);

  const getUniqueTags = () => {
    let tags = [];
    transactions.forEach((transaction) => {
      tags = [...tags, ...transaction.tags];
    });
    return [...new Set(tags)];
  };

  const handleDeleteTransaction = async () => {
    try {
      if (!toBeDeleted) return;
      await axios.delete(`${baseURL}/transaction/delete/${toBeDeleted}`, {
        withCredentials: true,
      });
      await fetchTransactions();
      setToBeDeleted(null);
      toast.success("Transaction deleted successfully!");
    } catch (err) {
      toast.error("Error deleting the transaction");
    }
  };

  const handleAddTransaction = async (transaction) => {
    try {
      await axios.post(`${baseURL}/transaction/add`, transaction, {
        withCredentials: true,
      });
      setTransactions((transactions) => [...transactions, transaction]);
      toast.success("Transaction saved successfully!");
    } catch (err) {
      toast.error("Error saving the transaction");
    }
  };

  const fetchTransactions = async () => {
    try {
      const params = new URLSearchParams();
      if (filter.search.trim() !== "") {
        params.append("search", filter.search.trim());
      }
      if (filter.category) {
        params.append("category", filter.category.trim());
      }
      if (filter.tags.length > 0) {
        filter.tags.forEach((tag) => params.append("tags", tag.trim()));
      }
      const res = await axios.get(
        `${baseURL}/transaction/view?${params.toString()}`,
        {
          withCredentials: true,
        }
      );
      setTransactions(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser]);

  useEffect(() => {
    handleDeleteTransaction();
  }, [toBeDeleted]);

  useEffect(() => {
    fetchTransactions();
  }, [filter]);

  if (!transactions) return <Shimmer />;

  return (
    <div className="bg-gray-50 mt-1 min-h-[calc(100vh-64px)] px-4">
      <div className="pt-9 space-y-2 max-w-[1340px] mx-auto">
        <h1 className="font-bold text-3xl">My Transactions</h1>
        <p className="text-gray-700">Manage and organize your transactions</p>
      </div>

      <div className="mt-6 max-w-[1300px] grid grid-cols-1 md:grid-cols-[3fr_1fr] space-y-4 w-full mx-auto">
        <div className="max-w-md">
          <input
            type="text"
            name="search-bar"
            value={filter.search}
            placeholder="Search by title or description..."
            className="border-2 border-gray-200 bg-white h-10 w-full px-3 text-sm outline-violet-400 outline-offset-4 rounded"
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          ></input>
        </div>
        <div className="flex justify-end pb-4">
          <button
            className="h-10 w-full md:w-40 rounded bg-violet-400 text-white"
            onClick={() => setShowModal(true)}
          >
            + Add Transaction
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] max-w-[1300px] mx-auto py-3 lg:space-x-6 space-y-6">
        <div className="sticky top-4 space-y-4 h-fit">
          <FilterCardA
            title={"Filter by Tag"}
            tags={getUniqueTags()}
            filter={filter}
            setFilter={setFilter}
          />
          <FilterCardB
            title={"Filter by Category"}
            categories={[
              "Food",
              "Groceries",
              "Shopping",
              "Bills",
              "Transportation",
              "Health",
              "Entertainment",
              "Travel",
              "Savings",
              "Other",
            ]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>

        <TransactionContainer
          showTransactionForm={() => setShowModal(true)}
          transactions={transactions}
          setToBeDeleted={setToBeDeleted}
        />
      </div>

      {showModal && (
        <Modal
          Children={TransactionForm}
          hideTransactionForm={() => setShowModal(false)}
          onSave={handleAddTransaction}
        />
      )}
    </div>
  );
};

export default Dashboard;
