import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushiP, onEaten, wallet}) {
const [sushiIndex, setSushiIndex] = useState(0)

const renderSushi = sushiP.slice(sushiIndex, sushiIndex + 4).map((sushi)=> (
  <Sushi key={sushi.id} sushi={sushi} onEaten={onEaten} wallet={wallet}/>
))

function onMoreSushi(){
  setSushiIndex(mUV => mUV +4)
}

  return (
    <div className="belt">
      {renderSushi}
      {/* Render Sushi components here! */}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
