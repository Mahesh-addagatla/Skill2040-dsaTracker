import React from 'react';
import "./Strip.css";
import ProblemComponent from '../components/problems/ProblemComponent';
import './style.css'
import Topics from '../components/topics/Topics';

const Strip = () => {
    return (
        <div className='problems'>
            <ProblemComponent />
            <Topics />
        </div>
    )
}

export default Strip