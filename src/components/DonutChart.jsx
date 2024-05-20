import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./styles/DonutChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const LegendItem = ({ color, label, value }) => {
  return (
    <div className="user-stats-donutchart-legend-container-legend-item">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginTop: "2rem",
        }}
      >
        <span
          className="user-stats-donutchart-legend-container-legend-dot"
          style={{ backgroundColor: color }}
        ></span>
        <span className="user-stats-donutchart-legend-container-legend-label">
          {label} -
        </span>

        <span className="user-stats-donutchart-legend-container-legend-value">
          {value}
        </span>
      </div>
    </div>
  );
};

const DonutChart = ({ Easy, Medium, Hard }) => {
  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [Easy, Medium, Hard],
        backgroundColor: ["#4285F4", "#A3A0FB", "#212529"],
        hoverBackgroundColor: ["#357ae8", "#8f8dff", "#1b1d23"],
      },
    ],
  };

  const options = {
    cutout: "60%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="user-stats-donutchart-container">
      <div className="user-stats-donutchart-inner-container1">
        <h3 className="user-stats-donutchart-container-heading">
          Total Problems Solved
        </h3>
        <div className="view-report-btn-container">
          <button className="user-stats-donutchart-container-viewreport-btn">
            <span className="user-stats-donutchart-container-viewreport-btn-spn2">
              View Report
            </span>
          </button>
        </div>
      </div>
      <div>
        <Doughnut
          data={data}
          options={options}
          style={{ width: "230px", height: "230px" }}
        />
      </div>
      <div className="user-stats-donutchart-legend-container">
        <LegendItem color="#4285F4" label="Easy" value={Easy} />
        <LegendItem color="#A3A0FB" label="Medium" value={Medium} />
        <LegendItem color="#212529" label="Hard" value={Hard} />
      </div>
    </div>
  );
};

export default DonutChart;
