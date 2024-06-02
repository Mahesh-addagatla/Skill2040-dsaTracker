import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const SolutionCode = () => {
  const javaCode = `class Solution {
    // arr: input array
    // n: size of array
    // Function to find the sum of contiguous subarray with maximum sum.
    static int maxSubArraySum(int a[]) {
        int size = a.length;
        int max_so_far = Integer.MIN_VALUE, max_ending_here = 0;

        for (int i = 0; i < size; i++) {
            max_ending_here = max_ending_here + a[i];
            if (max_so_far < max_ending_here)
                max_so_far = max_ending_here;
            if (max_ending_here < 0)
                max_ending_here = 0;
        }
        return max_so_far;
    }
}`;

  const pythonCode = `def maxSubArraySum(a, size):
    max_so_far = float('-inf')
    max_ending_here = 0
    
    for i in range(0, size):
        max_ending_here = max_ending_here + a[i]
        if max_so_far < max_ending_here:
            max_so_far = max_ending_here
        if max_ending_here < 0:
            max_ending_here = 0
    
    return max_so_far`;

  const cppCode = `#include <iostream>
#include <climits>
using namespace std;

int maxSubArraySum(int a[], int size) {
    int max_so_far = INT_MIN, max_ending_here = 0;

    for (int i = 0; i < size; i++) {
        max_ending_here = max_ending_here + a[i];
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;
        if (max_ending_here < 0)
            max_ending_here = 0;
    }
    return max_so_far;
}`;

  const [code, setCode] = useState(javaCode);
  const [language, setLanguage] = useState("java");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    if (lang === "java") {
      setCode(javaCode);
    } else if (lang === "python") {
      setCode(pythonCode);
    } else if (lang === "cpp") {
      setCode(cppCode);
    }
  };

  const customStyle = {
    ...darcula, // Start with Darcula theme and override specific styles
    'code[class*="language-"]': {
      color: "#44B6A8", // Text color
      fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      fontSize: "1em",
    },
    'pre[class*="language-"]': {
      backgroundColor: "#1e1e1e", // Background color
      padding: "20px",
      borderRadius: "5px",
      overflow: "auto",
    },
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "20px",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <button
          style={{
            backgroundColor: language === "cpp" ? "#6272a4" : "#44475a",
            color: language === "cpp" ? "#a1f15b" : "#f8f8f2",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            marginRight: "5px",
            borderRadius: "5px",
          }}
          onClick={() => handleLanguageChange("cpp")}
        >
          C++
        </button>
        <button
          style={{
            backgroundColor: language === "java" ? "#6272a4" : "#44475a",
            color: language === "java" ? "#a1f15b" : "#f8f8f2",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            marginRight: "5px",
            borderRadius: "5px",
          }}
          onClick={() => handleLanguageChange("java")}
        >
          Java
        </button>
        <button
          style={{
            backgroundColor: language === "python" ? "#6272a4" : "#44475a",
            color: language === "python" ? "#a1f15b" : "#f8f8f2",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={() => handleLanguageChange("python")}
        >
          Python
        </button>
      </div>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <button
          style={{
            backgroundColor: "#44475a",
            color: "#f8f8f2",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
      <SyntaxHighlighter language={language} style={customStyle}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default SolutionCode;
