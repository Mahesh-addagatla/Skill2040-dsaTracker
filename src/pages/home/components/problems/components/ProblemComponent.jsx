import React, { useState, useEffect } from "react";
import "./style.css";
import GFG from "./styles/GFG.svg";
import { IoNewspaperOutline, IoNewspaper } from "react-icons/io5";
import { MdAddCircleOutline, MdAddCircle } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function ProblemComponent({
    problemName,
    difficultyLevel,
    URL,
}) {
    // const [expanded, setExpanded] = useState(false);
    const [showText, setShowText] = useState(false);
    const [hoveredSolution, setHoveredSolution] = useState(false);
    const [hoveredAdd, setHoveredAdd] = useState(false);
    const [hoveredStar, setHoveredStar] = useState(false);
    const [hoveredBookMark, setHoveredBookMark] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("Unsolved");
    const [selectedDifficulties, setSelectedDifficulties] = useState([]);
    // const dropdownRef = useRef(null);
    // const toggleExpansion = () => {
    //   setExpanded(!expanded);
    // };
    // const hideLogos = () => {
    //   setExpanded(false);
    // };
    const handleMouseEnterSolution = () => {
        setHoveredSolution(true);
        setShowText(true);
    };

    const handleMouseLeaveSolution = () => {
        setHoveredSolution(false);
        setShowText(false);
    };

    const handleMouseEnterAdd = () => {
        setHoveredAdd(true);
        setShowText(true);
    };

    const handleMouseLeaveAdd = () => {
        setHoveredAdd(false);
        setShowText(false);
    };
    const handleMouseEnterStar = () => {
        setHoveredStar(true);
        setShowText(true);
    };

    const handleMouseLeaveStar = () => {
        setHoveredStar(false);
        setShowText(false);
    };
    const handleMouseEnterBookMark = () => {
        setHoveredBookMark(true);
        setShowText(true);
    };

    const handleMouseLeaveBookMark = () => {
        setHoveredBookMark(false);
        setShowText(false);
    };
    const toggleDropdown = () => {
        setIsDropdownVisible((prevState) => !prevState);
    };
    const handleStatusChange = (status) => {
        setSelectedStatus(status);
        setIsDropdownVisible(false);
    };
    const statusColors = {
        Solved: "#50c878",
        Revision: "rgb(221, 221, 57)",
        Unsolved: "rgb(243, 55, 55)",
    };

    let backgroundColor;


    if (difficultyLevel === 'Easy') {
        backgroundColor = '#a1e5cd';
    } else if (difficultyLevel === 'Medium') {
        backgroundColor = '#FBEDA6';
    } else if (difficultyLevel === 'Hard') {
        backgroundColor = '#F3A8A8';
    }


    const mainDivStyle = {
        backgroundColor: backgroundColor,
    };

    if (difficultyLevel === 'Easy') {
        backgroundColor = '#a1e5cd';
    } else if (difficultyLevel === 'Medium') {
        backgroundColor = '#FBEDA6';
    } else if (difficultyLevel === 'Hard') {
        backgroundColor = '#F3A8A8';
    }

    const DifficultyColor = {
        color: backgroundColor,
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdownMenu = document.querySelector(
                ".problem-component-status-dropdown-menu"
            );
            if (dropdownMenu && !dropdownMenu.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="problem-rectangle" style={mainDivStyle}>
            <div
            >
                <h1
                    className="problem-rectangle-heading"
                >
                    {problemName}
                </h1>
                <div
                    className="problem-difficulty-indicator"
                >
                    {difficultyLevel}
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center"
                }}
                className="problemBottom"
            >
                <div className="problem-rectangle-solve-problem-container">
                    <a href={URL} target="_blank" rel="noopener noreferrer">
                        <img
                            className="GFG-logo-problem-solve-rectangle"
                            style={{ cursor: "pointer" }}
                            src={GFG}
                            alt="GFG"
                        ></img>
                    </a>
                </div>

                <div className="problem-component-icon-outer-container">
                    <div
                        className="problem-component-icon-container"
                        onMouseEnter={handleMouseEnterSolution}
                        onMouseLeave={handleMouseLeaveSolution}
                        style={{
                            transition: "transform 0.3s ease-in-out",
                            transform: hoveredSolution ? "scale(1.1)" : "scale(1)",
                            display: "inline-block",
                            marginLeft: "1rem",
                            marginTop: "0.3rem",
                        }}
                    >
                        {hoveredSolution ? (
                            <IoNewspaper
                                className="problem-component-IoNewspaper"
                                title={showText ? "Solution" : ""}
                            />
                        ) : (
                            <IoNewspaperOutline
                                className="problem-component-IoNewspaperOutline"
                            />
                        )}
                    </div>
                    <div
                        className="problem-component-icon-container"
                        onMouseEnter={handleMouseEnterAdd}
                        onMouseLeave={handleMouseLeaveAdd}
                        style={{
                            transition: "transform 0.3s ease-in-out",
                            transform: hoveredAdd ? "scale(1.1)" : "scale(1)",
                            display: "inline-block",
                            marginLeft: "1rem",
                            marginTop: "0.3rem",
                        }}
                    >
                        {hoveredAdd ? (
                            <MdAddCircle
                                className="problem-component-MdAddCircle"
                                title={showText ? "Add Notes" : ""}
                            />
                        ) : (
                            <MdAddCircleOutline
                                className="problem-component-MdAddCircle"
                            />
                        )}
                    </div>
                    <div
                        className="problem-component-icon-container"
                        onMouseEnter={handleMouseEnterStar}
                        onMouseLeave={handleMouseLeaveStar}
                        style={{
                            transition: "transform 0.3s ease-in-out",
                            transform: hoveredStar ? "scale(1.1)" : "scale(1)",
                            display: "inline-block",
                            marginLeft: "1rem",
                            marginTop: "0.3rem",
                        }}
                    >
                        {hoveredStar ? (
                            <FaStar
                                className="problem-component-FaStar"
                                title={showText ? "Add to Favourites" : ""}
                            />
                        ) : (
                            <FaRegStar
                                className="problem-component-FaStar"
                            />
                        )}
                    </div>
                    <div
                        className="problem-component-icon-container"
                        onMouseEnter={handleMouseEnterBookMark}
                        onMouseLeave={handleMouseLeaveBookMark}
                        style={{
                            transition: "transform 0.3s ease-in-out",
                            transform: hoveredBookMark ? "scale(1.1)" : "scale(1)",
                            display: "inline-block",
                            marginLeft: "1rem",
                            marginTop: "0.3rem",
                        }}
                    >
                        {hoveredBookMark ? (
                            <IoBookmark
                                className="problem-component-IoBookmark"
                                title={showText ? "Bookmark" : ""}
                            />
                        ) : (
                            <IoBookmarkOutline
                                className="problem-component-IoBookmark"
                            />
                        )}
                    </div>
                </div>
                <div
                    className="problem-completion-indicator"
                    style={{ color: "black" }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <span style={{ color: statusColors[selectedStatus] }}>
                            {selectedStatus}
                        </span>
                        <IoIosArrowDown
                            className="problem-component-IoIosArrowDown"
                            onClick={toggleDropdown}

                        />
                    </div>
                    {isDropdownVisible && (
                        <div className="problem-component-status-dropdown-menu">
                            <div
                                className="problem-component-status-dropdown-menu-option-1"
                                onClick={() => handleStatusChange("Solved")}
                            >
                                Solved
                            </div>
                            <div
                                className="problem-component-status-dropdown-menu-option-2"
                                onClick={() => handleStatusChange("Revision")}
                            >
                                Revision
                            </div>
                            <div
                                className="problem-component-status-dropdown-menu-option-3"
                                onClick={() => handleStatusChange("Unsolved")}
                            >
                                Unsolved
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}