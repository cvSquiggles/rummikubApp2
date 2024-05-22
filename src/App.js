import './App.css';
 
import CountdownTimer from "./components/CountdownTimer.jsx";
import ScoreTracker from "./components/ScoreTracker.jsx";
//import Parent from "./components/Parent.jsx";
//import Fetch from './components/Fetch.jsx';


function App(p) {
  //CountdownTimer variables and state setting function declarations
  const roundClock = new Clock(30, 0, 0, 30, 0, 0);
  const turnClock = new Clock (0, 1, 0, 0, 1, 0);

  //ScoreTracker variables and state setting function declarations
  const localMatch = new Match();


  return <div className="App">
    <h1 className="title text-light"> Rummikub World Championship Companion</h1>
    <CountdownTimer roundClock={roundClock} turnClock={turnClock}/>
    
    
  </div>;
  //<ScoreTracker localMatch={localMatch}/> 
  
}

export default App;
