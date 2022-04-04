import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  dataKey,
  BarChart,
  Bar,
} from "recharts";
import "./DashBoard.css";

const DashBoard = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2 className="py-4 review-heading">Charts</h2>
      <div className="charts container">
        <div className="chart1 card">
          <h3 className="py-3 text-center ">Sells per month</h3>
          <LineChart className="mx-auto" width={400} height={300} data={data}>
            <Line dataKey={"sell"}></Line>
            <YAxis></YAxis>
            <XAxis dataKey={"month"}></XAxis>
            <Tooltip></Tooltip>
            <CartesianGrid></CartesianGrid>
          </LineChart>
        </div>
        <div className="chart2 card mx-2">
        <h3 className="py-3 text-center">Investment vs revenue</h3>
          <BarChart
            className="mx-auto"
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
              <XAxis dataKey={"month"}></XAxis>
              <Bar dataKey="investment" fill="#8884d8" />
              <Bar dataKey="revenue" fill="#82ca9d" />
              <Tooltip></Tooltip>
              <CartesianGrid></CartesianGrid>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
