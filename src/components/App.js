import React, { useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [eatenSushiAr, setEatenSushiAr] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushis => setSushis(sushis))
  }, [])

  const spent = eatenSushiAr.reduce((acc, plate) => acc + plate.price, 0)
  const remaining = 100 - spent

  function handleEaten(sushi) {
    setEatenSushiAr([...eatenSushiAr, sushi])
  }
 
  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEaten={handleEaten} remaining={remaining} />
      <Table plates={eatenSushiAr} remaining={remaining}/>
    </div>
  );
}

export default App;
