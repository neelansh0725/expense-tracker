import React from "react";

export const Transaction = (props) => {
  const type = props.type;
  let income;
  if (type == "income") {
    income = props.income;
  } else if (type == "expense") {
    income = props.expense;
  }
  return (
    <div className="flex">
      <div className="w-1/5 ">
        {type == "expense" ? (
          <img src="/expenses.png" alt="Expense Icon" />
        ) : (
          <img src="/income.png" alt="Income Icon" />
        )}
      </div>
      <div className="w-3/5 flex flex-col ">
        <div className="text-2xl">{income.title}</div>
        <div className="flex gap-4">
          <div className="text-lime-500 font-medium">Rs.{income.amount}</div>
          <div>{income.date}</div>
          <div>{income.description}</div>
        </div>
      </div>
      <div className="w-1/5 flex justify-end ">
        <button
          onClick={() =>
            type == "income"
              ? props.deleteIncome(income.id)
              : props.deleteExpense(income.id)
          }
        >
          <img src="/delete.png" alt="Delete Icon" />
        </button>
      </div>
    </div>
  );
};
