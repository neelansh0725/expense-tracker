import React from "react";
import cookie from "react-cookies";

export const History = () => {
  const fetchIncome = cookie.load("incomes");
  const fetchExpense = cookie.load("expenses");
  const recentTransactions = [...fetchIncome, ...fetchExpense];
  console.log(recentTransactions);
  return (
    <div>
      <h2 className="text-3xl font-mono text-center">Transactions</h2>
    </div>
  );
};
