import React from "react";
import FeatureCard from "../components/FeatureCard";
import Tag from "../components/Tag";
import CardB from "../components/CardB";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-gradient-to-b from-white to-violet-200 px-2">
        <div className="max-w-[700px] m-auto text-center mt-16">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Organize your transactions, simply and beautifully
          </h1>
          <p className="text-lg sm:text-xl mt-5 mx-1">
            TransactionHub helps you save and organize your expenses, income,
            and financial records all in one place.
          </p>
          <button
            className="text-lg font-semibold text-white bg-violet-400 hover:scale-[1.02] duration-250 ease-in active:scale-[1] px-10 py-[9px] rounded-sm mt-8 mb-16"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="px-2">
        <div className="max-w-[700px] m-auto text-center mt-16">
          <h1 className="text-3xl font-bold">
            Everything you need to organize your transactions
          </h1>
        </div>

        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-14">
          <FeatureCard
            title={"Save Transactions"}
            text={
              "Log any transaction with a title, description, amount, tags, and category for easy tracking."
            }
          />
          <FeatureCard
            title={"Search & Filter"}
            text={
              "Quickly find what you're looking for with powerful search and filtering options."
            }
          />
          <FeatureCard
            title={"Organize with Tags"}
            text={
              "Add tags to your transactions to create custom groups and find them easily later."
            }
          />
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-2">
        <div className="max-w-[920px] mx-auto text-center">
          <h1 className="text-3xl font-bold">How it works</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <div className="order-2 md:order-1 text-start space-y-5 px-2 pt-10">
              <h3 className="text-2xl font-semibold">
                Organized by Categories
              </h3>
              <p className="text-gray-600">
                Categorize your transactions for different areas of your life.
                Easily switch between categories to analyze your spending or
                earnings.
              </p>
              <div className="flex space-x-2">
                <Tag name={"Work"} />
                <Tag name={"Learning"} />
                <Tag name={"Personal"} />
              </div>
            </div>
            <div className="order-1 md:order-2 px-2">
              <CardB />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-violet-400 text-white py-16 px-2">
        <div className="max-w-[700px] m-auto text-center">
          <h1 className="text-3xl font-bold">
            Start managing your transactions today
          </h1>
          <p className="text-lg mt-6">
            Join users who have simplified their money management with
            TransactionHub.
          </p>
          <button
            className="font-semibold bg-white text-violet-400 hover:scale-[1.02] duration-250 ease-in active:scale-[1] px-10 py-[9px] rounded-md mt-8"
            onClick={() => navigate("/login")}
          >
            Get Started Now
          </button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
