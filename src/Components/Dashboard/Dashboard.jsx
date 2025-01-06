import React from "react";
import { Card } from "../Card/Card";
import { Charts } from "../Charts/Charts";
import { Transactions } from "../Transactions/Transactions";
export const Dashboard = () => {
  return (
    <div>
      <div className="gap-4 columns-2">
        <Card>
          <Charts />
        </Card>
        <Card>
          <Transactions />
        </Card>
      </div>
    </div>
  );
};
