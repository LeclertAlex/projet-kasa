import React, { useState } from 'react';
import './Collapse.scss';


const Collapse = ({ title, content, isList = false, buttonClass }) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="collapse">
      <button onClick={toggleCollapse} className={`collapse-button ${buttonClass}`}>
        {title}
        <span className={`arrow ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <div className="collapse-content">
          {isList ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};


export default Collapse;
