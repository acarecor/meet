import React from "react";
import { useState } from "react";
    


const NumberOfEvents = () => {
    const [query, setQuery] = useState(32);

    const handleInputChanged =(event) =>{
     const value = event.target.value;
     setQuery(value);
     
    };


  return (
    <div id="number-of-events">
      NumberOfEvents: <input 
        type="text" 
        value={query} 
        onChange={handleInputChanged}
        /> 
    </div>
  );
};

export default NumberOfEvents;
