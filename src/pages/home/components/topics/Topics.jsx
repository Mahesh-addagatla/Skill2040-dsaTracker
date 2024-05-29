import React, { useState } from 'react';
import topicsData from './data';
import './style.css';
import useSound from 'use-sound';
import loud_btn from '../sounds/loud_btn_clk.wav';

function Topics({ setSelectedTopics }) {
    const [play] = useSound(loud_btn);
    const [availableTopics, setAvailableTopics] = useState(topicsData);
    const [selectedTopics, setSelectedTopicsLocal] = useState([]);

    const handleTopicClick = (topic) => {
        play();
        setAvailableTopics(availableTopics.filter(t => t !== topic));
        const newSelectedTopics = [...selectedTopics, topic];
        setSelectedTopicsLocal(newSelectedTopics);
        setSelectedTopics(newSelectedTopics); // Update parent state
    };

    const handleSelectedTopicClick = (topic) => {
        play();
        setSelectedTopicsLocal(selectedTopics.filter(t => t !== topic));
        setAvailableTopics([...availableTopics, topic]);
        setSelectedTopics(selectedTopics.filter(t => t !== topic)); // Update parent state
    };

    return (
        <div className="topicsComponent">
            <div className="header">
                <p>Topics</p>
            </div>
            <div className='topics'>
                <div className="selected">
                    {selectedTopics.map((topic, index) => (
                        <span key={index} onClick={() => handleSelectedTopicClick(topic)} className='eachTopic'>
                            {topic} <i className="fa-solid fa-xmark"></i>
                        </span>
                    ))}
                </div>
                <div className="available-topics">
                    {availableTopics.map((topic, index) => (
                        <span key={index} onClick={() => handleTopicClick(topic)} className='eachTopic'>
                            {topic}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Topics;