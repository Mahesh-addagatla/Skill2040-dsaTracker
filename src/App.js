// import logo from './logo.svg';
import "./App.css";
// import ProblemComponent from "./components/ProblemComponent.jsx";
import SolutionPage from "./pages/SolutionPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProblemsList from "./pages/ProblemsList.jsx";
import CodeBlock from "./components/CodeBlock.jsx";

const codeString = `
class Solution{
  // arr: input array
  // n: size of array
  //Function to find the sum of contiguous subarray with maximum sum.
  long maxSubarraySum(int arr[], int n){
    long msf=Integer.MIN_VALUE;
    long meh=0;
    for(int i=0;i<n;i++){
      meh+=arr[i];
      if (meh<arr[i]){
        meh=arr[i];
      }
      if (msf<meh){
        msf=meh;
      }
    }
    return msf;
  }
}
`;

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
        </Routes>
      </Router>
      <ProblemsList />
      {/* <CodeBlock language="java" value={codeString} /> */}
    </>
  );
}

export default App;
