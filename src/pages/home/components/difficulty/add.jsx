import React, { useState } from 'react';
import './style.css';
import useSound from 'use-sound';
import loud_btn from '../sounds/loud_btn_clk.wav';

const difficulties = ['Easy', 'Medium', 'Hard'];

function Difficulty({ setSelectedDifficulties }) {
    const [play] = useSound(loud_btn);
    const [availableDifficulties, setAvailableDifficulties] = useState(difficulties);
    const [selectedDifficulties, setSelectedDifficultiesLocal] = useState([]);

    const handleDifficultyClick = (difficulty) => {
        play();
        const newAvailableDifficulties = availableDifficulties.filter(d => d !== difficulty);
        const newSelectedDifficulties = [...selectedDifficulties, difficulty];
        setAvailableDifficulties(newAvailableDifficulties);
        setSelectedDifficultiesLocal(newSelectedDifficulties);
        setSelectedDifficulties(newSelectedDifficulties); // Update parent state
    };

    const handleSelectedDifficultyClick = (difficulty) => {
        play();
        const newSelectedDifficulties = selectedDifficulties.filter(d => d !== difficulty);
        const newAvailableDifficulties = [...availableDifficulties, difficulty];
        setSelectedDifficultiesLocal(newSelectedDifficulties);
        setAvailableDifficulties(newAvailableDifficulties);
        setSelectedDifficulties(newSelectedDifficulties); // Update parent state
    };

    return (
        <div className="difficulty">
            <div className="header">
                <p>Difficulty</p>
            </div>
            <div className='difficulties'>
                <div className="selected">
                    {selectedDifficulties.map((difficulty, index) => (
                        <span key={index} onClick={() => handleSelectedDifficultyClick(difficulty)} className='eachDifficulty'>
                            {difficulty} <i className="fa-solid fa-xmark"></i>
                        </span>
                    ))}
                </div>
                <div className="available-difficulties">
                    {availableDifficulties.map((difficulty, index) => (
                        <span key={index} onClick={() => handleDifficultyClick(difficulty)} className='eachDifficulty'>
                            {difficulty}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Difficulty;