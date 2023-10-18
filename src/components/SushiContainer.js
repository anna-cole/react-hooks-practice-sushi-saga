import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis }) {
  return (
    <div className="belt">
      {sushis.map(sushi => 
      <Sushi key={sushi.id} sushi={sushi}/>)}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
