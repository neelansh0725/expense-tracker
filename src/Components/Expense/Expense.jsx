import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Transaction } from "../Transaction/Transaction";

export const Expense = (props) => {
  const [totalExpense, setTotalExpense] = useState(0);
  const [expense, setExpense] = useState([]);
  const [formData, setFormData] = useState();
  useEffect(() => {
    let fullExpense = 0;
    expense.map((newExpense) => {
      fullExpense += parseInt(newExpense.amount);
    });
    setTotalExpense(fullExpense);
  }, [expense]);

  const deleteExpense = (expenseID) => {
    const newExpense = expense.filter(
      (eachExpense) => eachExpense.id != expenseID
    );
    setExpense(newExpense);
  };
  const handleExpenseChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleAddExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      ...formData,
      id: Date.now() + Math.floor(Math.random() * 1000), // Generates a simple unique ID
      createdTime: new Date().toISOString(),
    };

    setExpense((prevExpense) => {
      return [...prevExpense, newExpense];
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-mono text-left">Expense</h2>
      <Card className="text-center">
        <h2 className="text-3xl text-sky-800">
          Total Expenses:
          <span className="text-4xl font-bold">
            {totalExpense === 0 ? (
              <span className="">{totalExpense}</span>
            ) : (
              <span className=" text-red-500"> - {totalExpense}</span>
            )}
          </span>
        </h2>
      </Card>
      <div className="flex gap-4 columns-2 mt-10 w-full">
        <Card className="w-3/12">
          <div className=" bg-transparent ">
            <form className="addIncome" onSubmit={handleAddExpense}>
              <h3 className="text-3xl text-center mb-5">Add Expenses</h3>
              <input
                className="appearance-none block w-full bg-white rounded-xl text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="title"
                placeholder="Income Title"
                onChange={handleExpenseChange}
                required
              />
              <input
                className="appearance-none block w-full bg-white rounded-xl text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                name="amount"
                placeholder="Income Amount"
                step="0.01"
                onChange={handleExpenseChange}
                required
              />
              <input
                className="appearance-none block w-full bg-white rounded-xl text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="date"
                name="date"
                onChange={handleExpenseChange}
                placeholder="Select a Date"
                required
              />
              <select
                className="appearance-none block w-full bg-white rounded-xl text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-state"
                name="category"
                onChange={handleExpenseChange}
                required
              >
                <option>Select Category</option>
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <textarea
                className="appearance-none block w-full bg-white rounded-xl text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Add a Reference"
                name="description"
                onChange={handleExpenseChange}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-500 text-white font-medium py-2 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
              >
                + Add Expense
              </button>
            </form>
          </div>
        </Card>
        <Card className="w-9/12 text-center">
          {expense.length > 0
            ? expense.map((transaction) => {
                return (
                  <Card className="mb-3 bg-white" key={transaction.id}>
                    <Transaction
                      expense={transaction}
                      type="expense"
                      deleteExpense={deleteExpense}
                    />
                  </Card>
                );
              })
            : "No Transaction Found!"}
        </Card>
      </div>
    </div>
  );
};
