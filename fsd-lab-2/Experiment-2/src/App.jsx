import React, { useState } from "react";
import Counter from "./components/counter";
function App(){
  // let brand = "ford";
  const [brand, setBrand] = useState("ford");
  const changeBrand = () => {
    setBrand("BMW");
  };
  const [color, setColor] = useState("blue");
  const changeColor = () => {
    setColor("red");
  };
  return (
    <div>
      <h1>My Car</h1>
      <p>Brand: {brand}</p>
      <p>Color: {color} </p>
      <button onClick={changeBrand}>Change Brand</button>
      <br />
      <button onClick={changeColor}>changeColor</button>
      <Counter /> 
    </div>
  );
}

export  default App;