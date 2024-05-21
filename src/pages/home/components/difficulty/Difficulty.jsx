import React, { useState } from 'react';
import topicsData from './data';
import './style.css';
import useSound from 'use-sound';
import loud_btn from '../sounds/loud_btn_clk.wav';
function Difficulty() {
    const [play] = useSound(loud_btn);
    const [availableTopics, setAvailableTopics] = useState(topicsData);
    const [selectedTopics, setSelectedTopics] = useState([]);

    const handleTopicClick = (topic) => {
        play();
        setAvailableTopics(availableTopics.filter(t => t !== topic));
        setSelectedTopics([...selectedTopics, topic]);
    };

    const handleSelectedTopicClick = (topic) => {

        play();
        setSelectedTopics(selectedTopics.filter(t => t !== topic));
        setAvailableTopics([...availableTopics, topic]);
    };

    return (
        <div className="difficulty">
            <div className="header">
                <p>Topics</p>
            </div>
            <div className='topics'>            <div className="selected">
                {selectedTopics.map((topic, index) => (

                    <span key={index} onClick={() => handleSelectedTopicClick(topic)} className='eachTopic'>{topic} <i className="fa-solid fa-xmark"></i></span>

                ))}
            </div>
                <div class="available-topics">
                    {availableTopics.map((topic, index) => (

                        <span key={index} onClick={() => handleTopicClick(topic)} className='eachTopic'>{topic}</span>

                    ))}
                </div></div>
        </div>
    );
}

export default Difficulty;
