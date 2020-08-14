import React from 'react';
import './Date.css';
import ArrowLeft from './arrow-left.png';
import ArrowRight from './arrow-right.png';


function Date(props) {
    console.log(props);
    return (
        <div className="date-container">
            <div className="nav-prev" onClick={() => props.onPrevClick()}>
                <img src={ArrowLeft} alt="Neste dato"></img>
            </div>
            <h3 className="date-field">{props.date}</h3>
            <div className="nav-next" onClick={() => props.onNextClick()}>
                <img src={ArrowRight} alt="Neste dato"></img>
            </div>
        </div>
        
    );
}

export default Date;
