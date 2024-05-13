import React,{ useState, useEffect } from "react";
import styled from "styled-components";

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
    margin-right: 6rem;
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
//Game specifics
const [p1Name, setP1Name] = useState("STIF");
const [p2Name, setP2Name] = useState("BRE");
const [roundCount, setRoundCount] = useState(1);
const [p1RoundScore, setP1RoundScore] = useState(0);
const [p2RoundScore, setP2RoundScore] = useState(0);
const [p1MatchScore, setP1MatchScore] = useState(0);
const [p2MatchScore, setP2MatchScore] = useState(0);


//Functions
function handleGameCreate(e) {
    e.preventDefault();
    setGameCreated(true);
}

function handleSubmitRoundScore(e) {
    e.preventDefault();
    setP1MatchScore(parseInt(p1RoundScore) + parseInt(p1MatchScore))
    setP2MatchScore(parseInt(p2RoundScore) + parseInt(p2MatchScore))
    setP1RoundScore(0)
    setP2RoundScore(0)
}

//{name.firstName} - {name.lastName}

    return( 
        <ScoreTrackerWrapper>
            {isGameCreated &&(
                <div className="d-flex flex-row">
                    <label className="roundCount">Round count: {roundCount}</label>
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
                            <input type="text" maxLength={4} value={p1RoundScore}
                            onChange={(e) => setP1RoundScore(e.target.value)}/>
                            <input type="text" maxLength={4} value={p2RoundScore}
                            onChange={(e) => setP2RoundScore(e.target.value)}/>
                        </div>
                        <button className="tabulateButton" onClick={(e) => handleSubmitRoundScore(e)}>Submit Round Scores!</button>
                        <div className="d-flex flex-row">
                            <input type="text" maxLength={4} value={p1MatchScore}
                            onChange={(e) => setP1RoundScore(e.target.value)}/>
                            <input type="text" maxLength={4} value={p2MatchScore}
                            onChange={(e) => setP2RoundScore(e.target.value)}/>
                        </div>
                    </form>
                </div>)}

            {!isGameCreated && (
                <div>
                    <label>Player one: </label> 
                    <input type="text" maxLength={4} value={p1Name}
                    onChange={(e) => setP1Name(e.target.value)}/>
                    <label>Player two: </label> 
                    <input type="text" maxLength={4} value={p2Name}
                    onChange={(e) => setP2Name(e.target.value)}/>
                    <button onClick={(e) => handleGameCreate(e)}>Load your game!</button>
                </div>
            )}
        </ScoreTrackerWrapper>
    );
}

