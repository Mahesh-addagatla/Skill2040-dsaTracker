import React, { useEffect, useState } from "react";
import ProblemComponent from "./components/ProblemComponent.jsx";
import "./style.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ProblemsList = ({ selectedTopics, selectedDifficulties }) => {

  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const topicsPerPage = 1; // Display 1 topic per page

  const fetchData = async () => {
    try {
      const response = await fetch("https://dsa-tracker-backend-kappa.vercel.app/home", {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const responseData = await response.json();
      setData(responseData.data);
      setLoading(false);
    } catch (error) {
      console.error('Fetch error:', error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Filter data based on selected topics and difficulties
  const filteredData = selectedTopics.length || selectedDifficulties.length
    ? Object.keys(data).reduce((acc, topic) => {
      if (selectedTopics.length && !selectedTopics.includes(topic)) {
        return acc;
      }
      const filteredProblems = data[topic].filter(problem =>
        selectedDifficulties.length ? selectedDifficulties.includes(problem.Difficulty) : true
      );
      if (filteredProblems.length) {
        acc[topic] = filteredProblems;
      }
      return acc;
    }, {})
    : data;

  // Pagination logic
  const totalTopics = Object.keys(filteredData).length;
  const totalPages = Math.ceil(totalTopics / topicsPerPage);

  const startTopicIndex = (currentPage - 1) * topicsPerPage;
  const endTopicIndex = Math.min(startTopicIndex + topicsPerPage, totalTopics);
  const currentTopics = Object.keys(filteredData).slice(startTopicIndex, endTopicIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentTopics.map((topic) => (
        <div key={topic}>
          <div className="Topics">
            <span>{topic}</span>
            <i className="fa-solid fa-caret-down"></i>
          </div>
          {filteredData[topic].map((problem, index) => (
            <ProblemComponent
              key={index}
              problemName={problem.Problem}
              difficultyLevel={problem.Difficulty}
              URL={problem.URL}
            />
          ))}
        </div>
      ))}
      <div className="DSA-problems-pagination">
        <button
          className="DSA-problems-pagination-director"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack style={{ fontSize: "1.3rem" }} />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className="DSA-problems-pagination-button"
            onClick={() => paginate(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="DSA-problems-pagination-director"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward style={{ fontSize: "1.3rem" }} />
        </button>
      </div>
    </div>
  );
};

export default ProblemsList;