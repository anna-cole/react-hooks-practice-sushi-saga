import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, onEaten, remaining }) {
  const [sushiIndex, setSushiIndex] = useState(0)
  
  const sushiToDisplay = sushis
  .slice(sushiIndex, sushiIndex + 4)
  .map(sushi => <Sushi key={sushi.id} sushi={sushi} onEaten={onEaten} remaining={remaining} />);

  function handleClickMore() {
    // (sushiIndex + 4) % sushis.length
    // is a way to wrap back around to the beginning of the array once we get to the end
    // using the remainder (%) operator
    //console.log((sushiIndex + 4) % sushis.length) /result = 4
    setSushiIndex(sushiIndex => (sushiIndex + 4) % sushis.length);
  }

  return (
    <div className="belt">
      {sushiToDisplay}
      <MoreButton onClickMore={handleClickMore}/>
    </div>
  );
}

export default SushiContainer;
