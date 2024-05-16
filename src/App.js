// import logo from './logo.svg';
import './App.css';
import ProblemComponent from './components/ProblemComponent.jsx';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ProblemComponent problemName="Valid Suduko" difficultyLevel="Medium"/>
      <ProblemComponent problemName="Kadanes alogo" difficultyLevel="HARD"/>     
      <ProblemComponent problemName="Grid Search" difficultyLevel="HARD"/>
      <ProblemComponent problemName="Reverse LinkedList" difficultyLevel="HARD"/>
      <ProblemComponent problemName="Peak Element" difficultyLevel="HARD"/>
      <ProblemComponent problemName="Valid" difficultyLevel="HARD"/>

      

    </>
  );
}

export default App;
