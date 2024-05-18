import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import EndMatchPopup from "./EndMatchPopup.jsx";
import { fetch_addPlayer, fetch_match, fetch_player, fetch_player_id,
    fetch_matchScore, fetch_addMatch, fetch_matchTime, fetch_matchWinner, fetch_match_latest
} from "../Fetch/Fetch-API.js";

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
const ScoreTracker = (p) => {

    var data = {};
    var resdata = {};
    var resdata2 = {};
    function isNumeric(str) {
        if(typeof str != "string") return false
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }

    //Used to add brief delays on local variable updates before pushing information to db
    const delay = async (ms) => {
        return new Promise((resolve) => 
            setTimeout(resolve, ms));
    };


    //Functions
    async function handleGameCreate(e) {
        e.preventDefault();

        //If we're missing player tags, alert user to enter them
        if (p.p1Name === "" && p.p2Name === "" && p.gameCode === ""){
            alert("Please enter both player tags!");
            return;
        }

        //If we have a gameCode, check if it corresponds to a match, if not, prompt user to submit empty or correct
        if (p.gameCode !== ""){
            data = {
                gameCode: p.gameCode
            }

            resdata2 = (await fetch_match(data));

            if(resdata2.gameCode === 'FAILED'){
                alert("This game code doesn't correspond to any saved matches. Please enter a valid code, or leave field blank to create a new match.");
                return;
            } else if (resdata2.winner !== null) {
                data = {
                    id: resdata2.winner
                }
                resdata = (await fetch_player_id(data));
                alert(`This match was already finished and ${resdata.tag} was the winner!`);
                return;
            } else {
                //Build out match from resdata2, then query the player name/id's to populate the player variables
                data = {
                    id: resdata2.p1
                }
                resdata = (await fetch_player_id(data));
                //If we can't find player 1, abort and warn player
                if(resdata.tag === 'FAILED') {
                    alert("One of the players tied to this match have been deleted, the game cannot be continued!")
                    return;
                } else {
                    p.setP1id(resdata.id);
                    p.setP1Name(resdata.tag);
                }

                data = {
                    id: resdata2.p2
                }
                resdata = (await fetch_player_id(data));
                //If we can't find player 2, abort and warn player
                if(resdata.tag === 'FAILED') {
                    alert("One of the players tied to this match have been deleted, the game cannot be continued!")
                    return;
                } else {
                    p.setP2id(resdata.id);
                    p.setP2Name(resdata.tag);
                }

                p.setMinutes(resdata2.p1Minutes);
                p.setSeconds(resdata2.p1Seconds);
                p.setMilliseconds(resdata2.p1Milli);
                p.setP1MatchScore(resdata2.p1MatchScore);
                p.setMinutes2(resdata2.p2Minutes);
                p.setSeconds2(resdata2.p2Seconds);
                p.setMilliseconds2(resdata2.p2Milli);
                p.setP2MatchScore(resdata2.p2MatchScore);
                p.setRoundCount(resdata2.roundCount);
                p.setGameCode(resdata2.gameCode);
                p.setGameCreated(true);
                return;
            }
        }
        
        console.log("Building new game from scratch");
        ////Check if p1 exists in the database, and if not, then create them
        //Declare data to pass in JSON body of fetch request to API
        data = {
                tag: p.p1Name
            }
        //Get result of fetch
        resdata = (await fetch_player(data)); 
        
        //Check if query found record, if it did, update the variables...
        if(resdata.tag !== 'FAILED'){
            //localStorage.setItem("player1",JSON.stringify(resdata));
            var localP1id = resdata.id;
            p.setP1id(localP1id);
            p.setP1Name(resdata.tag);
        } else {  //...otherwise add this new player to the database, and do a new pull to get the id
            await fetch_addPlayer(data);

            resdata = (await fetch_player(data));
            var localP1id = resdata.id;
            p.setP1id(localP1id);
            p.setP1Name(resdata.tag);
        }

        ////Check if p2 exists in the database, and if not, then create them
        //Declare data to pass in JSON body of fetch request to API
        data = {
            tag: p.p2Name
        }
        //Get result of fetch
        resdata = (await fetch_player(data)); 

        //Check if query found record, if it did, update the variables...
        if(resdata.tag !== 'FAILED'){
            //localStorage.setItem("player1",JSON.stringify(resdata));
            var localP2id = resdata.id;
            p.setP2id(localP2id);
            p.setP2Name(resdata.tag);
        } else {  //...otherwise add this new player to the database, and do a new pull to get the id
            await fetch_addPlayer(data);

            resdata = (await fetch_player(data));
            var localP2id = resdata.id;
            p.setP2id(localP2id);
            p.setP2Name(resdata.tag);
        }

        ////Check if gameCode is blank, if not, populate match data from match search done earlier in function
        ////...if gameCode is empty, just create
        data = {   
            p1Minutes: 30,
            p1Seconds: 0,
            p1Milli: 0,
            p1MatchScore: 0,
            p2Minutes: 30,
            p2Seconds: 0,
            p2Milli: 0,
            p2MatchScore: 0,
            roundCount: 1,
            p1: localP1id,
            p2: localP2id
        }
        await fetch_addMatch(data); //Run query and store resulting data
        resdata = (await fetch_match_latest());
        console.log(resdata.gameCode);
        p.setGameCode(resdata.gameCode);
        p.setGameCreated(true);
        return;
    }

    ////Submit round scores to match record in database and increment roundCount
    async function handleSubmitRoundScore(e) {
        e.preventDefault();
        
        if (isNaN(p.p1RoundScore) || isNaN(p.p2RoundScore)) {
            alert("The round score value entered is not a valid whole integer! Please use only numeric characters.");
            return;
         }

        if(p.p1RoundScore < p.p2RoundScore) {
            var localP1MatchScore = p.p1MatchScore + p.p2RoundScore;
            p.setP1MatchScore(localP1MatchScore);
            var localP2MatchScore = p.p2MatchScore - p.p2RoundScore;
            p.setP2MatchScore(localP2MatchScore);
            p.setP1RoundScore(0)
            p.setP2RoundScore(0)
        } else if(p.p2RoundScore < p.p1RoundScore){
            var localP1MatchScore = p.p1MatchScore - p.p1RoundScore;
            p.setP1MatchScore(localP1MatchScore);
            var localP2MatchScore = p.p2MatchScore + p.p1RoundScore;
            p.setP2MatchScore(p.localP2MatchScore);
            p.setP1RoundScore(0)
            p.setP2RoundScore(0)
        } else{
            p.setP1RoundScore(0)
            p.setP2RoundScore(0)
        }
        var localRoundCount = p.roundCount + 1;
        p.setRoundCount(localRoundCount);

        data = {
            p1MatchScore: localP1MatchScore,
            p2MatchScore: localP2MatchScore,
            roundCount: localRoundCount,
            gameCode: p.gameCode,
        }
        await fetch_matchScore(data);

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

        return;
    }

    async function handleSubmitReportGame(e) {

        if(p.p1MatchScore > p.p2MatchScore) {
            p.setWinningPlayer(`${p.p1Name} wins! <(^_^<)`);
            data = {
                winner: p.p1id,
                gameCode: p.gameCode
            }
            await fetch_matchWinner(data);
        } else if (p.p2MatchScore > p.p1MatchScore){
            p.setWinningPlayer(`(>^_^)> ${p.p2Name} wins!`);
            data = {
                winner: p.p2id,
                gameCode: p.gameCode
            }
            await fetch_matchWinner(data);
        } else {
            p.setWinningPlayer("(v_v) No contest! (v_v)");
            data = {
                winner: -1,
                gameCode: p.gameCode
            }
            await fetch_matchWinner(data);
        }

        p.setEndGamePopUpTrigger(true);
    }

    //{name.firstName} - {name.lastName}

        return(
            <div>
            <EndMatchPopup trigger={p.endGamePopUpTrigger} winner={p.winningPlayer}/>
            <ScoreTrackerWrapper>
                {p.isGameCreated &&(
                    <div className="d-flex flex-row">
                        <div className="d-flex flex-column">
                            <label className="roundCount">Round count: {p.roundCount}</label>
                            <label className="roundCount">Game code: {p.gameCode}</label>
                        </div>
                        <form>
                            
                            <div className="d-flex flex-row">
                                <label className="labelP1">Player One</label>
                                <label className="labelP2">Player Two</label>
                            </div>
                            <div className="d-flex flex-row">
                                <text className="text text-light">{p.p1Name}</text>
                                <text className="text text-light">{p.p2Name}</text>
                            </div>
                            <div className="d-flex flex-row">
                                <label className="labelP1">Round Scores</label>
                            </div>
                            <div className="d-flex flex-row">
                                <input type="text" maxLength={3} value={p.p1RoundScore}
                                onChange={(e) => p.setP1RoundScore(parseInt(e.target.value))}/>
                                <input type="text" maxLength={3} value={p.p2RoundScore}
                                onChange={(e) => p.setP2RoundScore(parseInt(e.target.value))}/>
                            </div>
                            <button className="tabulateButton" onClick={(e) => handleSubmitRoundScore(e)}>Submit Round Scores!</button>
                            <div className="d-flex flex-row">
                                <input type="text" maxLength={3} value={p.p1MatchScore}
                                onChange={(e) => p.setP1MatchScore(parseInt(e.target.value))}/>
                                <input type="text" maxLength={3} value={p.p2MatchScore}
                                onChange={(e) => p.setP2MatchScore(parseInt(e.target.value))}/>
                            </div>
                        </form>
                        <button className="reportGameButton" onClick={(e) => handleSubmitReportGame(e)}>Report match!</button>
                    </div>)}

                {!p.isGameCreated && (
                    <div>
                        <label>Player one: </label> 
                        <input type="text" maxLength={5} value={p.p1Name}
                        onChange={(e) => p.setP1Name(e.target.value)}/>
                        <label>Player two: </label> 
                        <input type="text" maxLength={5} value={p.p2Name}
                        onChange={(e) => p.setP2Name(e.target.value)}/>
                        <input type="text" maxLength={6} value={p.gameCode}
                        onChange={(e) => p.setGameCode(e.target.value)}/>
                        <button onClick={(e) => handleGameCreate(e)}>Load your match!</button>
                    </div>
                )}
            </ScoreTrackerWrapper>
            </div>
        );
}

export default ScoreTracker;