import './App.css';
import CountdownTimer from "./components/CountdownTimer.jsx";
import ScoreTracker from "./components/ScoreTracker.jsx";

function App() {
  return <div className="App">

    <h1 className="title text-light"> Rummikub World Championship Companion</h1>

    <CountdownTimer />
    <ScoreTracker />
  </div>;

  
}

export default App;
