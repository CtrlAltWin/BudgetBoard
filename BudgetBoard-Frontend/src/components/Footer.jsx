import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-900 grid grid-cols-1 md:grid-cols-2 py-8 px-6 space-y-2 md:space-y-0">
      <div className="flex justify-center md:justify-start">
        <Logo />
        <h2 className="text-white font-semibold text-lg">BudgetBoard</h2>
      </div>
      <p className="text-gray-400 text-sm text-center md:text-end p-1">
        © {new Date().getFullYear()} TransactionHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
