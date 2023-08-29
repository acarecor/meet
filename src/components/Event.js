import React from "react";

const Event = ({ event }) => {
    return (
        <li >
            <div role="listbox" className="event">
                <h1>{event.summary}</h1>
                <p>{event.created}</p>
                <p>{event.location}</p>
            </div>
        </li>
    );
}

export default Event; 