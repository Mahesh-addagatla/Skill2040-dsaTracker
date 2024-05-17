// ProblemsList.jsx
import React, { useEffect, useState } from "react";
import ProblemComponent from "../components/ProblemComponent.jsx";

export default function ProblemsList() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      const response = await fetch(
        "https://dsa-tracker-backend-gvt0.onrender.com/home"
      );
      const data = await response.json();
      setProblems(data.questions); // Assuming 'questions' is the key in your JSON object
    };

    fetchData();
  }, []);

  return (
    <div>
      {problems.map((problem) => (
        <ProblemComponent
          key={problem._id}
          problemName={problem.Problem}
          difficultyLevel={problem.Difficulty || "Medium"}
          URL={problem.URL}
        />
      ))}
    </div>
  );
}
