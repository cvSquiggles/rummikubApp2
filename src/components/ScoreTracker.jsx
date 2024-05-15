import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import EndMatchPopup from "./EndMatchPopup.jsx";

const ScoreTrackerWrapper = styled.div`
    margin-top:2vh;
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

label{
    margin-bottom: 0.5rem;
    border-style: none none solid none;
}

.labelP1{
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    border-style: none none solid none;
}

.roundCount{
    margin-right:1rem;
}

input{
    width: 100px;
    margin-right: 1rem;
    color: #282c34;
    outline: none;
    border: none;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    padding: 0rem 0.5rem;
    border-radius: 5px;
}

text{
    width: auto;
    border-style: dashed;
    border-width: 0.1rem;
    margin: 0 1rem 0.1rem 1rem;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    padding: 0rem 0.5rem;
    border-radius: 5px;
}

.d-flex flex-row{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

input:hover{
    background-color: #928f8f;
}

.tabulateButton{
    margin: .5rem;
}
`;
document.body.style.background="#282c34";
export default function CountdownTimer(){
//General
const [isGameCreated, setGameCreated] = useState(false);
const [endGamePopUpTrigger, setEndGamePopUpTrigger] = useState(false);
//Game specifics
const [p1Name, setP1Name] = useState("");
const [p2Name, setP2Name] = useState("");
const [gameCode, setGameCode] = useState("");
const [roundCount, setRoundCount] = useState(1);
const [p1RoundScore, setP1RoundScore] = useState(0);
const [p2RoundScore, setP2RoundScore] = useState(0);
const [p1MatchScore, setP1MatchScore] = useState(0);
const [p2MatchScore, setP2MatchScore] = useState(0);
const [winningPlayer, setWinningPlayer] = useState("No contest!");


//Functions
function handleGameCreate(e) {
    e.preventDefault();
    if (gameCode !== "" && p1Name !== "" && p2Name !== ""){
        setGameCreated(true);
    } else{
        alert("Please enter a game code as well as both player tags!")
    }

}

function handleSubmitRoundScore(e) {
    e.preventDefault();
    if(p1RoundScore < p2RoundScore) {
        setP1MatchScore(p1MatchScore + p2RoundScore);
        setP2MatchScore(p2MatchScore - p2RoundScore);
        setP1RoundScore(0)
        setP2RoundScore(0)
    } else if(p2RoundScore < p1RoundScore){
        setP1MatchScore(p1MatchScore - p1RoundScore);
        setP2MatchScore(p2MatchScore + p1RoundScore);
        setP1RoundScore(0)
        setP2RoundScore(0)
    } else{
        setP1RoundScore(0)
        setP2RoundScore(0)
    }

    setRoundCount(roundCount + 1);
}

function handleSubmitReportGame(e) {
    

    if(p1MatchScore > p2MatchScore) {
        setWinningPlayer("Player 1 wins! <(^_^<)");
    } else if (p2MatchScore > p1MatchScore){
        setWinningPlayer("(>^_^)>Player 2 wins!");
    } else {
        setWinningPlayer("(v_v) No contest! (v_v)");
    }

    setEndGamePopUpTrigger(true);
}

//{name.firstName} - {name.lastName}

    return(
        <div>
        <EndMatchPopup trigger={endGamePopUpTrigger} winner={winningPlayer}/>
        <ScoreTrackerWrapper>
            {isGameCreated &&(
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column">
                        <label className="roundCount">Round count: {roundCount}</label>
                        <label className="roundCount">Game code: {gameCode}</label>
                    </div>
                    <form>
                        
                        <div className="d-flex flex-row">
                            <label className="labelP1">Player One</label>
                            <label className="labelP2">Player Two</label>
                        </div>
                        <div className="d-flex flex-row">
                            <text className="text text-light">{p1Name}</text>
                            <text className="text text-light">{p2Name}</text>
                        </div>
                        <div className="d-flex flex-row">
                            <label className="labelP1">Round Scores</label>
                        </div>
                        <div className="d-flex flex-row">
                            <input type="text" maxLength={3} value={p1RoundScore}
                            onChange={(e) => setP1RoundScore(parseInt(e.target.value))}/>
                            <input type="text" maxLength={3} value={p2RoundScore}
                            onChange={(e) => setP2RoundScore(parseInt(e.target.value))}/>
                        </div>
                        <button className="tabulateButton" onClick={(e) => handleSubmitRoundScore(e)}>Submit Round Scores!</button>
                        <div className="d-flex flex-row">
                            <input type="text" maxLength={3} value={p1MatchScore}
                            onChange={(e) => setP1MatchScore(parseInt(e.target.value))}/>
                            <input type="text" maxLength={3} value={p2MatchScore}
                            onChange={(e) => setP2MatchScore(parseInt(e.target.value))}/>
                        </div>
                    </form>
                    <button className="reportGameButton" onClick={(e) => handleSubmitReportGame(e)}>Report match!</button>
                </div>)}

            {!isGameCreated && (
                <div>
                    <label>Player one: </label> 
                    <input type="text" maxLength={3} value={p1Name}
                    onChange={(e) => setP1Name(e.target.value)}/>
                    <label>Player two: </label> 
                    <input type="text" maxLength={3} value={p2Name}
                    onChange={(e) => setP2Name(e.target.value)}/>
                    <input type="text" maxLength={6} value={gameCode}
                    onChange={(e) => setGameCode(e.target.value)}/>
                    <button onClick={(e) => handleGameCreate(e)}>Load your match!</button>
                </div>
            )}
        </ScoreTrackerWrapper>
        </div>
    );
}

