import { useState, useEffect } from 'react';
const Fetch = () => {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    fetch('https://rummikub-app-xpress-9db7df5621fa.herokuapp.com/api/player/BRE')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPlayer(data);
      });
  }, []);
  return (
    <div>
      
      {player.map((player) => (
        <text>{player.tag}</text>
      ))}
    </div>
  );
};
export default Fetch;