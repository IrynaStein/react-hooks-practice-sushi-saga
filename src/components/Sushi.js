import React, {useState} from "react";

function Sushi({sushi, onEaten, wallet}) {
  const {id, name, img_url, price} = sushi
  const [eatenSushi, setEatenSushi] = useState(false) 

console.log(wallet)
function handleClick(){
  if(wallet > price){
    setEatenSushi(true)
    onEaten(sushi)
    console.log(sushi)
  }  
}

  return (
    <div className="sushi">
      <div className="plate" onClick={()=>handleClick()}>
        {/* Tell me if this sushi has been eaten! */}
        {eatenSushi ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
