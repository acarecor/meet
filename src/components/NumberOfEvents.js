import React from "react";

    


const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    
    
    const handleInputChanged =(event) =>{
     const value = event.target.value;

    let errorText;
      if(isNaN(value)) {
        errorText = "The value is not a number";
      }
      else if(value <= 0){
        errorText = "Please only type positive numbers";
      }
      else {
      errorText= "";
      }
      setErrorAlert(errorText);
      setCurrentNOE(value);
    
    };


  return (
    <div id="number-of-events">
      <div>
      Number of Events:
      </div>
      <input 
        className="number-input"
        type="text"
        defaultValue="32"
        onChange={handleInputChanged}
        /> 
    </div>
  );
};

export default NumberOfEvents;

