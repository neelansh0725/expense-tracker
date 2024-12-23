import React, { useContext, useState } from "react";
import { Card } from "../Card/Card";
import cookie from "react-cookies";
import AppContext from "../../context/AppContext";
export const Setting = () => {
  const { sharedValue, setSharedValue } = useContext(AppContext);
  const [formData, setFormData] = useState();
  const handleSettingsChange = (e) => {
    console.log(e.target.value);
    setFormData({
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = () => {
    console.log(formData);
    cookie.save("expense_currency", formData);
    setSharedValue(formData);
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
          <select id="currency" name="currency" onChange={handleSettingsChange}>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="ZAR">ZAR - South African Rand</option>
            <option value="SGD">SGD - Singapore Dollar</option>
          </select>
        </div>
      </Card>
    </div>
  );
};
