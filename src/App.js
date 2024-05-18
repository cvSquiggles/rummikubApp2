import './App.css';
import React,{ useState, useEffect } from "react";
import CountdownTimer from "./components/CountdownTimer.jsx";
import ScoreTracker from "./components/ScoreTracker.jsx";
//import Parent from "./components/Parent.jsx";
//import Fetch from './components/Fetch.jsx';


function App(p) {
  //CountdownTimer variables and state setting function declarations
  const [isRunning, setIsRunning] = useState(null);
  const [playStarted, setPlayStarted] = useState(false);
  const [isP1Turn, setIsP1Turn] = useState(false);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [seconds2, setSeconds2] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [minutes2, setMinutes2] = useState(30);
  const [milliseconds2, setMilliseconds2] = useState(0);
  const [turnMinutes, setTurnMinutes] = useState(1);
  const [turnSeconds, setTurnSeconds] = useState(0);
  const [turnMilliseconds, setTurnMilliseconds] = useState(0);
  const [turnMinutes2, setTurnMinutes2] = useState(1);
  const [turnSeconds2, setTurnSeconds2] = useState(0);
  const [turnMilliseconds2, setTurnMilliseconds2] = useState(0);

  //ScoreTracker variables and state setting function declarations
  const [isGameCreated, setGameCreated] = useState(false);
  const [endGamePopUpTrigger, setEndGamePopUpTrigger] = useState(false);
  const [p1Name, setP1Name] = useState("");
  const [p1id, setP1id] = useState(0);
  const [p2id, setP2id] = useState(0);
  const [p2Name, setP2Name] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [roundCount, setRoundCount] = useState(1);
  const [p1RoundScore, setP1RoundScore] = useState(0);
  const [p2RoundScore, setP2RoundScore] = useState(0);
  const [p1MatchScore, setP1MatchScore] = useState(0);
  const [p2MatchScore, setP2MatchScore] = useState(0);
  const [winningPlayer, setWinningPlayer] = useState("No contest!");


  return <div className="App">
    <h1 className="title text-light"> Rummikub World Championship Companion</h1>
    <CountdownTimer 
      minutes={minutes} setMinutes={setMinutes} 
      isRunning={isRunning} setIsRunning={setIsRunning} 
      playStarted={playStarted} setPlayStarted={setPlayStarted}
      isP1Turn={isP1Turn} setIsP1Turn={setIsP1Turn} 
      seconds={seconds} setSeconds={setSeconds} 
      seconds2={seconds2} setSeconds2={setSeconds2} 
      milliseconds={milliseconds} setMilliseconds={setMilliseconds}
      minutes2={minutes2} setMinutes2={setMinutes2} 
      milliseconds2={milliseconds2} setMilliseconds2={setMilliseconds2} 
      turnMinutes={turnMinutes} setTurnMinutes={setTurnMinutes} 
      turnSeconds={turnSeconds}setTurnSeconds={setTurnSeconds} 
      turnMilliseconds={turnMilliseconds} setTurnMilliseconds={setTurnMilliseconds} 
      turnMinutes2={turnMinutes2} setTurnMinutes2={setTurnMinutes2}
      turnSeconds2={turnSeconds2} setTurnSeconds2={setTurnSeconds2} 
      turnMilliseconds2={turnMilliseconds2} setTurnMilliseconds2={setTurnMilliseconds2}
    />
    
    <ScoreTracker 
      isGameCreated={isGameCreated} setGameCreated={setGameCreated}
      endGamePopUpTrigger={endGamePopUpTrigger} setEndGamePopUpTrigger={setEndGamePopUpTrigger}
      p1Name={p1Name} setP1Name={setP1Name}
      p1id={p1id} setP1id={setP1id}
      p2id={p2id} setP2id={setP2id}
      p2Name={p2Name} setP2Name={setP2Name}
      gameCode={gameCode} setGameCode={setGameCode}
      roundCount={roundCount} setRoundCount={setRoundCount}
      p1RoundScore={p1RoundScore} setP1RoundScore={setP1RoundScore}
      p2RoundScore={p2RoundScore} setP2RoundScore={setP2RoundScore}
      p1MatchScore={p1MatchScore} setP1MatchScore={setP1MatchScore}
      p2MatchScore={p2MatchScore} setP2MatchScore={setP2MatchScore}
      winningPlayer={winningPlayer} setWinningPlayer={setWinningPlayer}
      minutes={minutes} setMinutes={setMinutes} 
      isRunning={isRunning} setIsRunning={setIsRunning} 
      playStarted={playStarted} setPlayStarted={setPlayStarted}
      isP1Turn={isP1Turn} setIsP1Turn={setIsP1Turn} 
      seconds={seconds} setSeconds={setSeconds} 
      seconds2={seconds2} setSeconds2={setSeconds2} 
      milliseconds={milliseconds} setMilliseconds={setMilliseconds}
      minutes2={minutes2} setMinutes2={setMinutes2} 
      milliseconds2={milliseconds2} setMilliseconds2={setMilliseconds2} 
      turnMinutes={turnMinutes} setTurnMinutes={setTurnMinutes} 
      turnSeconds={turnSeconds}setTurnSeconds={setTurnSeconds} 
      turnMilliseconds={turnMilliseconds} setTurnMilliseconds={setTurnMilliseconds} 
      turnMinutes2={turnMinutes2} setTurnMinutes2={setTurnMinutes2}
      turnSeconds2={turnSeconds2} setTurnSeconds2={setTurnSeconds2} 
      turnMilliseconds2={turnMilliseconds2} setTurnMilliseconds2={setTurnMilliseconds2}
    /> 
  </div>;

  
}

export default App;
