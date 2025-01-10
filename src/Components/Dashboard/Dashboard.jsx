import React, { useState } from "react";
import { Card } from "../Card/Card";
import { Charts } from "../Charts/Charts";

export const Dashboard = () => {
  const [chartUsed, setChartUsed] = useState("line");
  const handleChartChange = (e) => {
    console.log(e.target.value);
    setChartUsed(e.target.value);
  };
  return (
    <div>
      <div className="gap-4">
        <Card className="w-full">
          <div className="flex w-full justify-between">
            <h2 className="text-3xl font-mono">Finantial Graph</h2>
            <div className="flex justify-between gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  name="chartSelection"
                  value="line"
                  onChange={handleChartChange}
                  checked={chartUsed == "line"}
                />
                Line
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="chartSelection"
                  className="mr-2"
                  value="bar"
                  onChange={handleChartChange}
                  checked={chartUsed == "bar"}
                />
                Bar
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  name="chartSelection"
                  value="polarArea"
                  checked={chartUsed == "polarArea"}
                  onChange={handleChartChange}
                />
                Polar
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  name="chartSelection"
                  value="pie"
                  checked={chartUsed == "pie"}
                  onChange={handleChartChange}
                />
                Pie
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  name="chartSelection"
                  value="radar"
                  checked={chartUsed == "radar"}
                  onChange={handleChartChange}
                />
                Radar
              </label>
            </div>
          </div>

          <Charts chartUsed={chartUsed} />
        </Card>
        <Card className="w-full">{/* <Transactions /> */}</Card>
      </div>
    </div>
  );
};
