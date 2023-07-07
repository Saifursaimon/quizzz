import React from "react";
import { Container, Tooltip } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <h1 className="text-center m-5">Statistics</h1>
      <div className="d-flex justify-content-center mt-5">
        <BarChart width={930} height={450} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />

          <Bar dataKey="total" fill="#8884d8" />
          <Bar dataKey="" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
