import React from 'react';
import IncomeChart from './IncomeChart';
import ExpenseChart from './ExpenseChart';
import BudgetChart from './BudgetChart';

function Dashboard() {
  return (
    <div>
      <h2>Financial Overview</h2>
      <div className="charts-container">
        <IncomeChart />
        <ExpenseChart />
        <BudgetChart />
      </div>
    </div>
  );
}

export default Dashboard;
