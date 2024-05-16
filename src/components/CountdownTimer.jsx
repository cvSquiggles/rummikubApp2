import React,{ useState, useEffect } from "react";
import {BsFillPlayFill, BsPauseFill, BsStopFill} from "react-icons/bs"
import Timer from "./Timer.jsx";
import styled from "styled-components";

const ButtonWrapper = styled.div`
    margin-top:0vh;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: #227;
    color: #eee;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 4px 6px rgba(0,0,0, 0.4);
    padding: 1rem 0;

.P1EndTurn-Btn {
    margin: 0.325rem 16rem 0rem 0rem;
    padding: 0.35rem 1.25rem;
    width: 8rem;
    height: 5rem;
    font-family: inherit;
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.6px;
    border-radius: 0.3rem;
    color: #fff;
    background-color: #5bc41f;
    border: none;
    box-shadow: 0 2px 5px rgba(51, 51, 51, 0.3);
    transition: 0.3s ease;
}

.P2EndTurn-Btn {
    margin: 0.325rem 0rem 0rem 16rem;
    padding: 0.35rem 1.25rem;
    width: 8rem;
    height: 5rem;
    font-family: inherit;
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.6px;
    border-radius: 0.3rem;
    color: #fff;
    background-color: #5bc41f;
    border: none;
    box-shadow: 0 2px 5px rgba(51, 51, 51, 0.3);
    transition: 0.3s ease;
}

`;



document.body.style.background="#282c34";
export default function CountdownTimer(){
//General
const [isRunning, setIsRunning] = useState(null);
const [playStarted, setPlayStarted] = useState(false);
const [isP1Turn, setIsP1Turn] = useState(false);
const [isP2Turn, setIsP2Turn] = useState(false);
//P1 round timer
const [minutes, setMinutes] = useState(30);
const [seconds, setSeconds] = useState(0);
const [milliseconds, setMilliseconds] = useState(0);
//P2 round timer
const [minutes2, setMinutes2] = useState(30);
const [seconds2, setSeconds2] = useState(0);
const [milliseconds2, setMilliseconds2] = useState(0);
//P1 turn timer
const [turnMinutes, turnSetMinutes] = useState(1);
const [turnSeconds, turnSetSeconds] = useState(0);
const [turnMilliseconds, turnSetMilliseconds] = useState(0);
//P2 turn timer
const [turnMinutes2, turnSetMinutes2] = useState(1);
const [turnSeconds2, turnSetSeconds2] = useState(0);
const [turnMilliseconds2, turnSetMilliseconds2] = useState(0);
// End of Time

const [showEndScreen,setShowEndScreen]=useState({
    show: false,
    message: "Player 1 time expired!"
})

useEffect(() => {
    let interval;
    if(isRunning){
        interval = setInterval (() => {
            if(isP1Turn){
                //Round timer
                if(milliseconds > 0) {
                    setMilliseconds((milliseconds) => milliseconds - 1);
                } else if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                    setMilliseconds(99);
                } else if(minutes > 0) {
                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);
                    setMilliseconds(99);
                } 
                //Turn timer
                if(turnMilliseconds > 0) {
                    turnSetMilliseconds((turnMilliseconds) => turnMilliseconds - 1);
                } else if (turnSeconds > 0) {
                    turnSetSeconds((turnSeconds) => turnSeconds - 1);
                    turnSetMilliseconds(99);
                } else if(turnMinutes > 0) {
                    turnSetMinutes((turnMinutes) => turnMinutes - 1);
                    turnSetSeconds(59);
                    turnSetMilliseconds(99);
                } 
            }else {
                //Round timer
                if(milliseconds2 > 0) {
                    setMilliseconds2((milliseconds2) => milliseconds2 - 1);
                } else if (seconds2 > 0) {
                    setSeconds2((seconds2) => seconds2 - 1);
                    setMilliseconds2(99);
                } else if(minutes2 > 0) {
                    setMinutes2((minutes2) => minutes2 - 1);
                    setSeconds2(59);
                    setMilliseconds2(99);
                }
                //Turn timer
                if(turnMilliseconds2 > 0) {
                    turnSetMilliseconds2((turnMilliseconds2) => turnMilliseconds2 - 1);
                } else if (turnSeconds2 > 0) {
                    turnSetSeconds2((turnSeconds2) => turnSeconds2 - 1);
                    turnSetMilliseconds2(99);
                } else if(turnMinutes2 > 0) {
                    turnSetMinutes2((turnMinutes2) => turnMinutes2 - 1);
                    turnSetSeconds2(59);
                    turnSetMilliseconds2(99);
                } 
            }
        }, 10);
    }

    if(minutes === 0 && seconds === 0 && milliseconds === 0 && playStarted){
        setShowEndScreen({ ...showEndScreen, show: true, message: "Player 1 time expired!"});
        setIsRunning(false);
    } else if(minutes2 === 0 && seconds2 === 0 && milliseconds2 === 0 && playStarted) {
        setShowEndScreen({ ...showEndScreen, show: true, message: "Player 2 time expired!"});
        setIsRunning(false);
    }
    return () => clearInterval(interval);
}, [milliseconds, seconds, minutes, isRunning, milliseconds2, seconds2, minutes2]);

//Functions
function startP1Timer () {
    if(!playStarted) {
        setPlayStarted(true);
    }
    setIsP1Turn(true);
    if((minutes !== 0 || seconds !== 0 || milliseconds !== 0) &&
         (minutes2 !== 0 || seconds2 !== 0 || milliseconds2 !== 0)){
        turnSetMilliseconds(0)
        turnSetMinutes(1)
        turnSetSeconds(0)
        setIsRunning(true);
    }else{
        window.alert("Reload page to restart game!");
    }
}

function startP2Timer () {
    if(!playStarted) {
        setPlayStarted(true);
    }
    setIsP1Turn(false);
    if((minutes !== 0 || seconds !== 0 || milliseconds !== 0) &&
         (minutes2 !== 0 || seconds2 !== 0 || milliseconds2 !== 0)){
        turnSetMilliseconds2(0)
        turnSetMinutes2(1)
        turnSetSeconds2(0)
        setIsRunning(true);
    }else{
        window.alert("Reload page to restart game!");
    }
}

function pauseTimer () {
    setIsRunning(false);
}

function stopTimer () {
    resetTimer();
    setPlayStarted(false);
    setShowEndScreen({ ...showEndScreen, show: false})
}

    function resetTimer() {
        setIsRunning(false);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(30);
        setMilliseconds2(0);
        setSeconds2(0);
        setMinutes2(30);
        turnSetMilliseconds(0)
        turnSetMilliseconds2(0)
        turnSetMinutes(1)
        turnSetMinutes2(1)
        turnSetSeconds(0)
        turnSetSeconds2(0)
    }

    //Handlers
    const changeSeconds = (e) => {
        setSeconds(e.target.value)
    }
    const changeMinutes= (e) => {
        setMinutes(e.target.value)
    }
    const changeSeconds2 = (e) => {
        setSeconds2(e.target.value)
    }
    const changeMinutes2= (e) => {
        setMinutes2(e.target.value)
    }

    return(
        <div>
        {showEndScreen.show && <h2 className="title text-light">{showEndScreen.message}</h2>}
            <Timer milliseconds={milliseconds} seconds={seconds} 
            minutes={minutes} changeSeconds={changeSeconds}
            changeMinutes={changeMinutes} milliseconds2={milliseconds2} seconds2={seconds2} 
            minutes2={minutes2} changeSeconds2={changeSeconds2}
            changeMinutes2={changeMinutes2} />

        <ButtonWrapper>
            {(!isRunning || isP1Turn) && (
            <button className="P1EndTurn-Btn" onClick={startP2Timer}>
                <BsFillPlayFill/>
            </button>
            )}

            <button className="btn btn-warning btn-lg" onClick={pauseTimer}>
                <BsPauseFill/>
            </button>

            <button className="btn btn-danger btn-lg" onClick={stopTimer}>
                <BsStopFill/>
            </button>
            
            {(!isRunning || !isP1Turn) && (
            <button className="P2EndTurn-Btn" onClick={startP1Timer}>
                <BsFillPlayFill/>
            </button>
            )}
        </ButtonWrapper>
        <Timer milliseconds={turnMilliseconds} seconds={turnSeconds} 
            minutes={turnMinutes} milliseconds2={turnMilliseconds2} seconds2={turnSeconds2} 
            minutes2={turnMinutes2}/>
        </div>
    );
}

