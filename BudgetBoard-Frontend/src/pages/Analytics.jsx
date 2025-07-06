import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;
import { COLORS } from "../../utils/constants";
import CategoryWiseSpendingCard from "../components/CategoryWiseSpendingCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";
import AuthContext from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import Shimmer from "../components/Shimmer";

const Analytics = () => {
  const [data, setData] = useState({
    categoryWiseSpending: null,
    monthlySpending: null,
    categoryWiseBudget: null,
  });
  const navigate = useNavigate();
  const { loggedInUser } = useContext(AuthContext);
  console.log(loggedInUser);
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser]);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await axios.get(
        `${baseURL}/analytics/category-wise-spending`,
        {
          withCredentials: true,
        }
      );
      const data2 = await axios.get(`${baseURL}/analytics/monthly-spending`, {
        withCredentials: true,
      });
      const data3 = await axios.get(`${baseURL}/budget/view`, {
        withCredentials: true,
      });

      setData({
        categoryWiseSpending: data1.data.categoryWiseSpending,
        monthlySpending: data2.data.monthlySpending,
        categoryWiseBudget: data3.data.categoryWiseBudget,
      });
    };

    fetchData();
  }, []);

  if (!data.categoryWiseSpending || !data.monthlySpending) return <Shimmer />;

  return (
    <div className="bg-gray-50 mt-1 min-h-[calc(100vh-64px)] px-4">
      <section className="py-9 space-y-2 max-w-[1340px] mx-auto">
        <h1 className="font-bold text-3xl">Analytics</h1>
        <p className="text-gray-700">Visualize your finances with ease</p>
      </section>
      <section className="bg-white space-y-6 max-w-[1300px] pt-9 px-4 pb-4 mx-auto border border-gray-200">
        <h2 className="font-semibold text-xl text-gray-600">
          Monthly Spending Of Last 12 Months
        </h2>

        <div className="h-72 w-full">
          <ResponsiveContainer width="96%" height="100%">
            <LineChart data={data.monthlySpending}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="spending"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="bg-white mt-9 pt-4 px-4 space-y-6 max-w-[1300px] border border-gray-200 mx-auto">
        <h2 className="font-semibold text-xl text-gray-600">
          Category Wise Spending Of Last 30 Days
        </h2>

        <div className="grid md:grid-cols-[4fr_5fr] gap-4">
          <div className="inline-flex flex-col flex-wrap gap-2 h-80">
            {data.categoryWiseSpending.map((data) => (
              <CategoryWiseSpendingCard
                category={data.category}
                spending={data.spending}
              />
            ))}
          </div>
          <div className="h-80">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data.categoryWiseSpending}
                  dataKey="spending"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {data.categoryWiseSpending.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
