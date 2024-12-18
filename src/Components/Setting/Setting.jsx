import React from "react";
import { Card } from "../Card/Card";
export const Setting = () => {
  return (
    <div>
      <h2 className="text-3xl font-mono text-center">Settings</h2>
      <Card>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">
          Save
        </button>
        <div class="relative w-64">
          <label for="currency" class="block text-sm font-medium text-gray-700">
            Select Currency
          </label>
          <select
            id="currency"
            name="currency"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
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
