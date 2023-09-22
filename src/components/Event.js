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
                <div className="event-general">
                 <h3>{event.summary}</h3>
                 <p>{new Date(event.created).toUTCString()}</p>
                 <p>{event.location}</p>
                 
                </div>
                
                {showDetails ? (
                    <p 
                        id="event-details" 
                        className="details"
                        >
                            <h4>About event:</h4>
                            {event.description}
                    </p>
                ): null }
                <button
                className="details-btn"
                 onClick={toggleButton}>
                {showDetails ? 'hide details' : 'show details' }
                </button>
            </div>
        </li>
    );
}

export default Event; 