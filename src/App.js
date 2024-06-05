// import logo from './logo.svg';
import "./App.css";
// import ProblemComponent from "./components/ProblemComponent.jsx";
import SolutionPage from "./pages/SolutionPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProblemsList from "./pages/ProblemsList.jsx";
import DonutChart from "./components/DonutChart.jsx";
import UserProfile from "./components/UserProfile.jsx";
import SampleProfilePicture from "./SampleProfilePicture.jpg";

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/solution"
            element={<SolutionPage problemName="Valid Sudoku" />}
          ></Route>
          {/* <Route path="/" element={<ProblemsList />}></Route> */}
          <Route
            path="/"
            element={<UserProfile profilePicture={SampleProfilePicture} />}
          ></Route>
          <Route
            path="/donut"
            element={<DonutChart Easy="30" Medium="25" Hard="15" />}
          ></Route>
        </Routes>
      </Router>

      {/* <CodeBlock language="java" value={codeString} /> */}
    </>
  );
}

export default App;
