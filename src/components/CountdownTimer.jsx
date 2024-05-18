import React,{ useState, useEffect } from "react";
import {BsFillPlayFill, BsPauseFill, BsStopFill} from "react-icons/bs"
import Timer from "./Timer.jsx";
import styled from "styled-components";
import { fetch_matchTime } from "../Fetch/Fetch-API.js";

const ButtonWrapper = styled.div`
    margin-top:0vh;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: #227;
    color: #eee;W
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
const CountdownTimer = (p) => {

    var data = {};
    var resdata = {};

const [showEndScreen,setShowEndScreen]=useState({
    show: false,
    message: "Player 1 time expired!"
})

useEffect(() => {
    let interval;
    if(p.isRunning){
        interval = setInterval (() => {
            if(p.isP1Turn){
                //Round timer
                if(p.milliseconds > 0) {
                    p.setMilliseconds(p.milliseconds - 1);
                } else if (p.seconds > 0) {
                    p.setSeconds(p.seconds - 1);
                    p.setMilliseconds(99);
                } else if(p.minutes > 0) {
                    p.setMinutes(p.minutes - 1);
                    p.setSeconds(59);
                    p.setMilliseconds(99);
                } 
                //Turn timer
                if(p.turnMilliseconds > 0) {
                    p.setTurnMilliseconds(p.turnMilliseconds - 1);
                } else if (p.turnSeconds > 0) {
                    p.setTurnSeconds(p.turnSeconds - 1);
                    p.setTurnMilliseconds(99);
                } else if(p.turnMinutes > 0) {
                    p.setTurnMinutes(p.turnMinutes - 1);
                    p.setTurnSeconds(59);
                    p.setTurnMilliseconds(99);
                } 
            }else {
                //Round timer
                if(p.milliseconds2 > 0) {
                    p.setMilliseconds2(p.milliseconds2 - 1);
                } else if (p.seconds2 > 0) {
                    p.setSeconds2(p.seconds2 - 1);
                    p.setMilliseconds2(99);
                } else if(p.minutes2 > 0) {
                    p.setMinutes2(p.minutes2 - 1);
                    p.setSeconds2(59);
                    p.setMilliseconds2(99);
                }
                //Turn timer
                if(p.turnMilliseconds2 > 0) {
                    p.setTurnMilliseconds2(p.turnMilliseconds2 - 1);
                } else if (p.turnSeconds2 > 0) {
                    p.setTurnSeconds2(p.turnSeconds2 - 1);
                    p.setTurnMilliseconds2(99);
                } else if(p.turnMinutes2 > 0) {
                    p.setTurnMinutes2(p.turnMinutes2 - 1);
                    p.setTurnSeconds2(59);
                    p.setTurnMilliseconds2(99);
                } 
            }
        }, 10);
    }

    if(p.minutes === 0 && p.seconds === 0 && p.milliseconds === 0 && p.playStarted){
        setShowEndScreen({ ...showEndScreen, show: true, message: "Player 1 time expired!"});
        p.setIsRunning(false);
    } else if(p.minutes2 === 0 && p.seconds2 === 0 && p.milliseconds2 === 0 && p.playStarted) {
        setShowEndScreen({ ...showEndScreen, show: true, message: "Player 2 time expired!"});
        p.setIsRunning(false);
    }
    return () => clearInterval(interval);
}, [p.milliseconds, p.seconds, p.minutes, p.isRunning, p.milliseconds2, p.seconds2, p.minutes2]);

//Functions
async function startP1Timer () {
    if(!p.playStarted) {
        p.setPlayStarted(true);
    }
    p.setIsP1Turn(true);
    if((p.minutes !== 0 || p.seconds !== 0 || p.milliseconds !== 0) &&
         (p.minutes2 !== 0 || p.seconds2 !== 0 || p.milliseconds2 !== 0)){
        p.setTurnMilliseconds(0)
        p.setTurnMinutes(1)
        p.setTurnSeconds(0)
        p.setIsRunning(true);
    }else{
        window.alert("Reload page to restart game!");
    }

    data = {
        p1Minutes: p.minutes,
        p1Seconds: p.seconds,
        p1Milli: p.milliseconds,
        p2Minutes: p.minutes2,
        p2Seconds: p.seconds2,
        p2Milli: p.milliseconds2,
        gameCode: p.gameCode,
    }
    await fetch_matchTime(data);
}

async function startP2Timer () {
    if(!p.playStarted) {
        p.setPlayStarted(true);
    }
    p.setIsP1Turn(false);
    if((p.minutes !== 0 || p.seconds !== 0 || p.milliseconds !== 0) &&
         (p.minutes2 !== 0 || p.seconds2 !== 0 || p.milliseconds2 !== 0)){
        p.setTurnMilliseconds2(0)
        p.setTurnMinutes2(1)
        p.setTurnSeconds2(0)
        p.setIsRunning(true);
    }else{
        window.alert("Reload page to restart game!");
    }

    data = {
        p1Minutes: p.minutes,
        p1Seconds: p.seconds,
        p1Milli: p.milliseconds,
        p2Minutes: p.minutes2,
        p2Seconds: p.seconds2,
        p2Milli: p.milliseconds2,
        gameCode: p.gameCode,
    }
    await fetch_matchTime(data);
}

function pauseTimer () {
    p.setIsRunning(false);
}

function stopTimer () {
    resetTimer();
    p.setPlayStarted(false);
    setShowEndScreen({ ...showEndScreen, show: false})
}

function resetTimer() {
    p.setIsRunning(false);
    p.setMilliseconds(0);
    p.setSeconds(0);
    p.setMinutes(30);
    p.setMilliseconds2(0);
    p.setSeconds2(0);
    p.setMinutes2(30);
    p.setTurnMilliseconds(0)
    p.setTurnMilliseconds2(0)
    p.setTurnMinutes(1)
    p.setTurnMinutes2(1)
    p.setTurnSeconds(0)
    p.setTurnSeconds2(0)
    }

    //Handlers
    const changeSeconds = (e) => {
        p.setSeconds(e.target.value)
    }
    const changeMinutes= (e) => {
        p.setMinutes(e.target.value)
    }
    const changeSeconds2 = (e) => {
        p.setSeconds2(e.target.value)
    }
    const changeMinutes2= (e) => {
        p.setMinutes2(e.target.value)
    }
    //<h1>{match.p1Minutes}</h1>
    return(
        <div>
        {showEndScreen.show && <h2 className="title text-light">{showEndScreen.message}</h2>}
            <Timer milliseconds={p.milliseconds} seconds={p.seconds} 
            minutes={p.minutes} changeSeconds={changeSeconds}
            changeMinutes={changeMinutes} milliseconds2={p.milliseconds2} seconds2={p.seconds2} 
            minutes2={p.minutes2} changeSeconds2={changeSeconds2}
            changeMinutes2={changeMinutes2} />

        <ButtonWrapper>
            {(!p.isRunning || p.isP1Turn) && (
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
            
            {(!p.isRunning || !p.isP1Turn) && (
            <button className="P2EndTurn-Btn" onClick={startP1Timer}>
                <BsFillPlayFill/>
            </button>
            )}
        </ButtonWrapper>
        <Timer milliseconds={p.turnMilliseconds} seconds={p.turnSeconds} 
            minutes={p.turnMinutes} milliseconds2={p.turnMilliseconds2} seconds2={p.turnSeconds2} 
            minutes2={p.turnMinutes2}/>
        </div>
    );
}

export default CountdownTimer;