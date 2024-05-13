import './App.css';
import CountdownTimer from "./components/CountdownTimer";
import ScoreTracker from "./components/ScoreTracker";

function App() {
  return <div className="App">

    <h1 className="title text-light"> Rummikub Championship Companion</h1>

    <CountdownTimer />
    <ScoreTracker />
  </div>;

  
}

export default App;
