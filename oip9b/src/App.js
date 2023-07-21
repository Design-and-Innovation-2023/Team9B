import { Curio } from './components/Curio';
import React, { useRef, useEffect, useState } from "react";


const App = () => {
  
  /*----------------------------------------------------------------------------------------------------------------*/
  const [greeting, setGreeting] = useState("");
  const [curio   , setCurio]    = useState(null);
  const runOnce = useRef(true);
  /*----------------------------------------------------------------------------------------------------------------*/

  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      setGreeting("Welcome to Team 9B Curio project for Summer Widening 2023!");
      setCurio( new Curio() );
    }
  }, [runOnce]);
  /*----------------------------------------------------------------------------------------------------------------*/
  const connectToRobot = () => {
    if(curio != null)
    {
      alert("Curio Initialized");
    }
    else
    {
      alert("Curio not initialized");
    }
    return;
  }
  const onButtonClick1 = () => {
    alert("Hello World");
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/

  return (
    <>
        <React.StrictMode>
          <center>
              <div>
                  <h1>{greeting}</h1>
              </div>
          </center>
          <div>
              <span>Step 1 : </span><input type="button" onClick={connectToRobot} value="Connect to Robot"/>
          </div>
        </React.StrictMode>
    </>
  );
  /*----------------------------------------------------------------------------------------------------------------*/
}

App.getLayout = (page) => (
  <>
      {page}
  </>
);

export default App;
