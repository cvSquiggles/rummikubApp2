import React from 'react'
import styled from "styled-components";

const EndMatchWrapper = styled.div`
.popup {
    position fixed;
    top:0;
    left:0;
    width: 100%;
    height: 20vh;
    background-color: #81e39b;
    display: flex;
    justify-content: center;
    align-items:center;
}

text{
    width: auto;
    border-style: dashed;
    border-width: 0.1rem;
    margin: 0 1rem 0.1rem 1rem;
    font-size: 3rem;
    font-weight: 300;
    text-align: center;
    padding: 0rem 0.5rem;
    border-radius: 5px;
    color: #000
}

.popup-inner {
    position: relative;
    padding: 1rem;
    width: 100%;
    max-width: 640px;
    background-color: #FFF;
}

.popup-inner .close-btn {
    position: absolute;
    top: 0.325rem;
    bottom: 0.325rem;
}

`;

function startNewGame(e) {
    window.location.reload();
}

function EndMatchPopup(props) {
  return (props.trigger) ? (
    <EndMatchWrapper>
        <div className = "popup">
            <text>{props.winner}</text>
            <br/>
            <br/> 
            <button className="close-btn" onClick={(e) => startNewGame(e)}>New Game</button>
            { props.children }
        </div>
    </EndMatchWrapper>
  ) : "";
}

export default EndMatchPopup