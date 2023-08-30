import React from "react";
import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false); 

    const toggleButton = () => {
        setShowDetails(!showDetails);
    };

    return (
        <li >
            <div role="listbox" className="event">
                <h3>{event.summary}</h3>
                <p>{event.created}</p>
                <p>{event.location}</p>
                
                <button
                 onClick={toggleButton}>
                {showDetails ? 'hide details' : 'show details' }
                </button>
                {showDetails ? (
                    <p className="details">{event.description}</p>
                ): null }
            </div>
        </li>
    );
}

export default Event; 