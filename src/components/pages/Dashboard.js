// src/pages/Dashboard.js
import React from 'react';
import LineChart from '../Charts/LineChart';
import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart';
import Table from '../Table';
import Calendar from '../Calendar';
import KanbanBoard from '../KanbanBoard';

const Dashboard = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <LineChart />
        <BarChart />
        <PieChart />
      </div>
      <Table />
      <Calendar />
      <KanbanBoard />
    </div>
  );
};

export default Dashboard;
