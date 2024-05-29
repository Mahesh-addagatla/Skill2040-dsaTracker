import React, { useState } from 'react';
import ProblemsList from '../components/problems/ProblemList';
import Topics from '../components/topics/Topics';
import './style.css'
import Difficulty from '../components/difficulty/Difficulty';
import ProgressBar from '../components/progressBar/ProgressBar';


const Problems = () => {
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [selectedDifficulties, setSelectedDifficulties] = useState([]);

    return (
        <div className='problems'>
            <div className="problemsandStatus">
                <ProgressBar />
                <ProblemsList selectedTopics={selectedTopics} selectedDifficulties={selectedDifficulties} />
            </div>
            <div className="topics">
                <Topics setSelectedTopics={setSelectedTopics} />
                <Difficulty setSelectedDifficulties={setSelectedDifficulties} />
            </div>
        </div>
    )
}

export default Problems