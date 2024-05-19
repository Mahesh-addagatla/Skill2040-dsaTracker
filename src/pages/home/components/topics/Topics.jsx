import React, { useState } from 'react';
import topicsData from './data';
import './style.css';

function Topics() {
    const [availableTopics, setAvailableTopics] = useState(topicsData);
    const [selectedTopics, setSelectedTopics] = useState([]);

    const handleTopicClick = (topic) => {
        setAvailableTopics(availableTopics.filter(t => t !== topic));
        setSelectedTopics([...selectedTopics, topic]);
    };

    const handleSelectedTopicClick = (topic) => {
        setSelectedTopics(selectedTopics.filter(t => t !== topic));
        setAvailableTopics([...availableTopics, topic]);
    };

    return (
        <div className="topicsComponent">
            <div className="header">
                <p>Topics</p>
            </div>
            <div className="selected">
                {selectedTopics.map((topic, index) => (

                    <span key={index} onClick={() => handleSelectedTopicClick(topic)} className='eachTopic'>{topic} <i className="fa-solid fa-xmark"></i></span>

                ))}
            </div>
            <div class="available-topics">
                {availableTopics.map((topic, index) => (

                    <span key={index} onClick={() => handleTopicClick(topic)} className='eachTopic'>{topic}</span>

                ))}
            </div>
        </div>
    );
}

export default Topics;
