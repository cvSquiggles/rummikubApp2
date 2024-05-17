import './App.css';
import CountdownTimer from "./components/CountdownTimer.jsx";
import ScoreTracker from "./components/ScoreTracker.jsx";
//import Fetch from './components/Fetch.jsx';
import { Fetch_player, Fetch_addPlayer} from './Fetch/Fetch-API.js';
function App() {
  return <div className="App">

    <h1 className="title text-light"> Rummikub World Championship Companion</h1>
    <CountdownTimer/>
    <ScoreTracker/>
  </div>;

  
}

export default App;
