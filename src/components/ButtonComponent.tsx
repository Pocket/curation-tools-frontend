import React from 'react';
import './Button.css'

function ButtonCommponent() {
    return (
      <div className="buttons">
        <button className="negative" type="submit" > Reject </button>
        <button className="neutral" type="submit" > Snooze </button>
        <button className="positive" type="submit" > Edit & Approve </button>
      </div>
    );
  }
  
  export default ButtonCommponent;