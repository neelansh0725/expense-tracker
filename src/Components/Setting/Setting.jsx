import React, { useState } from "react";
import { Card } from "../Card/Card";

export const Setting = () => {
  const [formData, setFormData] = useState();
  const handleSettingsChange = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = () => {
    document.cookie = "expense_currency=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
    const date = new Date();
    date.setFullYear(date.getFullYear() + 4); // Add years to current date
    const expires = "expires=" + date.toUTCString();
    document.cookie =
      "expense_currency=" + JSON.stringify(formData) + ";" + expires;
  };
  return (
    <div>
      <h2 className="text-3xl font-mono text-center">Settings</h2>
      <Card>
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
        >
          Save
        </button>
        <div className="relative w-64">
          <label
            htmlFor="currency"
            className="block text-sm font-medium text-gray-700"
          >
            Select Currency
          </label>
          <select
            id="currency"
            onChange={handleSettingsChange}
            name="currency"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="usd">USD - US Dollar</option>
            <option value="eur">EUR - Euro</option>
            <option value="inr">INR - Indian Rupee</option>
            <option value="gbp">GBP - British Pound</option>
          </select>
        </div>
      </Card>
    </div>
  );
};
