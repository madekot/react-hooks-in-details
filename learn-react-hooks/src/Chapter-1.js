import { useState } from "react";

const Clicker = () => { 
  const [clicks, setClicks] = useState(0);
  const [showClicks, setShowClicks] = useState(false)

  const onClick = () => {
    return (
      setTimeout(() => {
        console.log(`set clicks ${clicks + 1}`)
        setClicks((prevValue) => prevValue + 1);
      } ,2000)
    )
  }
  const toggleShowClicks = () => setShowClicks((prev) => !prev);
  
  const clicksCounter = showClicks ? clicks : null;

  return ( 
    <>
      <button onClick={onClick}>Click me! {clicksCounter}</button>
      <button onClick={toggleShowClicks}>show clicks</button>
    </>
  );
};

export { Clicker }