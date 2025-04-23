import React from "react";

const Dashboard = ({ id }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <p>{id}</p>
    </div>
  );
}

export default Dashboard;