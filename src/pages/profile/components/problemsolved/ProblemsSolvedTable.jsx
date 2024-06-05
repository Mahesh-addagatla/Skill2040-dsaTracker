import { useState } from "react";
import React from "react";
import "./style.css";

export default function ProblemsSolvedTable() {
  const easyTasks = [
    "Reverse a linked list",
    "Occurrence of an integer in a Linked List",
    "Given a linked list of 0s, 1s and 2s, sort it.",
    "Detect Loop in linked list",
    "Remove duplicates from an unsorted linked list",
    "Reverse a Doubly Linked List",
    "Check for BST",
    "Given a linked list of 0s, 1s and 2s, sort it.",
    "Detect Loop in linked list",
    "Remove duplicates from an unsorted linked list",
    "Reverse a Doubly Linked List",
    "Check for BST",
  ];

  const mediumTasks = [
    "Count Pairs whose sum is equal to X",
    "Find length of Loop",
    "Queue Reversal",
    "Reverse First K elements of Queue",
    "Magical Number",
  ];

  const hardTasks = [
    "Move all zeros to the front of the linked list",
    "The New Line",
  ];
  const [activeTab, setActiveTab] = useState("easy");
  return (
    <div className="outer-container-probelms-solved-table">
      <div className="inner-container-probelms-solved-table">
        <div
          className="probelms-solved-table-heading-1"
          style={{
            backgroundColor:
              activeTab === "easy" ? "rgba(97, 216, 173, 0.41)" : "",
          }}
          onClick={() => setActiveTab("easy")}
        >
          <h1 className="probelms-solved-table-heading-h1">
            Easy
            <span className="probelms-solved-table-heading-h1-span">(90)</span>
          </h1>
        </div>
        <div
          className="probelms-solved-table-heading-2"
          style={{
            backgroundColor:
              activeTab === "medium" ? "rgba(97, 216, 173, 0.41)" : "",
          }}
          onClick={() => setActiveTab("medium")}
        >
          <h1 className="probelms-solved-table-heading-h1">
            Medium
            <span className="probelms-solved-table-heading-h1-span">(40)</span>
          </h1>
        </div>
        <div
          className="probelms-solved-table-heading-3"
          style={{
            backgroundColor:
              activeTab === "hard" ? "rgba(97, 216, 173, 0.41)" : "",
          }}
          onClick={() => setActiveTab("hard")}
        >
          <h1 className="probelms-solved-table-heading-h1">
            Hard
            <span className="probelms-solved-table-heading-h1-span">(10)</span>
          </h1>
        </div>
      </div>
      {activeTab === "easy" && (
        <div className="problems-solved-table-problems-list">
          <ul className="problems-solved-table-problems-list-ul">
            {easyTasks.map((task, index) => (
              <li
                className="problems-solved-table-problems-list-ul-li"
                key={index}
              >
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === "medium" && (
        <div className="problems-solved-table-problems-list">
          <ul className="problems-solved-table-problems-list-ul">
            {mediumTasks.map((task, index) => (
              <li
                className="problems-solved-table-problems-list-ul-li"
                key={index}
              >
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === "hard" && (
        <div className="problems-solved-table-problems-list">
          <ul className="problems-solved-table-problems-list-ul">
            {hardTasks.map((task, index) => (
              <li
                className="problems-solved-table-problems-list-ul-li"
                key={index}
              >
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
