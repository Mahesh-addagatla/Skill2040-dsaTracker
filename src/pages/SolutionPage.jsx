import React from "react";

export default function SolutionPage({ problemName }) {
  return (
    <div style={{ margin: "2rem" }}>
      <h1 style={{ fontSize: "3rem" }}>{problemName}</h1>

      <h1>Overview</h1>
      <p>
        We are given a grid representing a city layout where some cells contain
        thieves and others are empty, and we need to find the maximum safeness
        factor of all paths from the top-left corner to the bottom-right corner.
        The safeness factor of a path is defined as the minimum Manhattan
        distance from any cell in the path to any thief in the grid.
      </p>
      <h1>Key Observations:</h1>
      <p>
        Manhattan distance between two cells is the sum of the absolute
        differences of their row and column indices. All the cells in the grid
        contain either 0 or 1, representing empty cells and cells containing
        thieves respectively.
      </p>
      <h1>Approach</h1>
      <h1>Intuition:</h1>
    </div>
  );
}
