// import logo from './logo.svg';
import "./App.css";
// import ProblemComponent from "./components/ProblemComponent.jsx";
import SolutionPage from "./pages/SolutionPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProblemsList from "./pages/ProblemsList.jsx";


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
          <Route path="/" element={<ProblemsList/>}></Route>
        </Routes>
      </Router>
      
      {/* <CodeBlock language="java" value={codeString} /> */}
    </>
  );
}

export default App;
