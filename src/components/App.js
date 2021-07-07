import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
const [sushiP, setSushiP] = useState([])
const [price, setPrice] = useState(100)

useEffect(() => {
  fetch("http://localhost:3001/sushis")
  .then(resp => resp.json())
  .then(data => setSushiP(data))
}, [])

function onEaten(sushi){
  if (sushi.price < price){
    setPrice(mUV => mUV - sushi.price)
  }  
}
console.log(price)

  return (
    <div className="app">
      <SushiContainer sushiP={sushiP} onEaten={onEaten} wallet={price}/>
      <Table price={price}/>
    </div>
  );
}

export default App;
