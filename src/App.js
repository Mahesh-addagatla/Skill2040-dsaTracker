// import logo from './logo.svg';
import './App.css';
import ProblemComponent from './components/ProblemComponent.jsx';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ProblemComponent problemName="Valid Suduko" difficultyLevel="Medium"/>
      <ProblemComponent problemName="Kadanes alogo" difficultyLevel="Hard"/>     
      <ProblemComponent problemName="Grid Search" difficultyLevel="Hard"/>
      <ProblemComponent problemName="Reverse LinkedList" difficultyLevel="Hard"/>
      <ProblemComponent problemName="Peak Element" difficultyLevel="Hard"/>
      <ProblemComponent problemName="Valid" difficultyLevel="Hard"/>

      

    </>
  );
}

export default App;
