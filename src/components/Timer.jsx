import React from 'react';
import { BsCircleFill, Bs1Circle, Bs2Circle } from "react-icons/bs";
import styled from "styled-components";

const TimeWrapper = styled.div`
    margin-top:0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: #222;
    color: #eee;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 4px 6px rgba(0,0,0, 0.4);
    padding: 1rem 0;

.stop-watch {
    font-size: 4rem;
    margin-right: 1rem;
}

.circle-half {
    font-size: clamp(1.5rem, 4vw, 6rem);
    margin-right: clamp(0.25rem, 1vw, 1rem);
    transform: scaleX(-1);
    color: #222;
}

.circle-player-number {
    font-size: clamp(1.5rem, 3vw, 4rem);
    margin-right: clamp(0.25rem, 1vw, 1rem);
}

label{
    margin-bottom: 0.5rem;
}

input{
    width: 14vw;
    max-width: 100px;
    margin-right: 1rem;
    color: #282c34;
    outline: none;
    border: none;
    font-size: clamp(1.2rem, 3.5vw, 4.5rem);
    font-weight: 600;
    text-align: center;
    padding: 0rem 0.5rem;
    border-radius: 5px;
}

input:hover{
    background-color: #928f8f;
}
`;


export default function Timer({milliseconds, seconds, minutes,changeSeconds, 
    changeMinutes, milliseconds2, seconds2, minutes2, changeSeconds2, changeMinutes2}) {
    
    return (
        <TimeWrapper>
            <Bs1Circle className="circle-player-number" />
            <div className="d-flex flex-column">
                <label>MM</label>
                <input value={minutes} onChange={changeMinutes} />
                </div>
            <div className="d-flex flex-column">
                <label>SS</label>
                <input value={seconds} onChange={changeSeconds} />
                </div>
            <div className="d-flex flex-column">
                <label>ms</label>
                <input value={milliseconds} />
                </div>  
            <BsCircleFill className="circle-half" />
            <div className="d-flex flex-column">
                <label>MM</label>
                <input value={minutes2} onChange={changeMinutes2} />
                </div>
            <div className="d-flex flex-column">
                <label>SS</label>
                <input value={seconds2} onChange={changeSeconds2} />
                </div>
            <div className="d-flex flex-column">
                <label>ms</label>
                <input value={milliseconds2} />
                </div>
            <Bs2Circle className="circle-player-number" />          
        </TimeWrapper>
    )
}