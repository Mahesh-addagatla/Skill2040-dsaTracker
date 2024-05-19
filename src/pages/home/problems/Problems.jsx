import React from 'react';
import ProblemComponent from '../components/problems/ProblemComponent';
import Topics from '../components/topics/Topics';
import './style.css'
import Difficulty from '../components/difficulty/Difficulty';
import ProgressBar from '../components/progressBar/ProgressBar';

const Problems = () => {
    return (
        <div className='problems'>
            <div className="problemsandStatus">
                <ProgressBar />
                <ProblemComponent />
            </div>
            <div className="topics">
                <Topics />
                <Difficulty /></div>
        </div>
    )
}

export default Problems