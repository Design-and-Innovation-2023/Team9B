import { Curio } from './components/Curio';
import React, { useRef, useEffect, useState } from "react";


const App = () => {
  
  /*----------------------------------------------------------------------------------------------------------------*/
  const [greeting    , setGreeting] = useState("");
  const [curio       , setCurio]    = useState(null);
  const [isConnected , setConnect]  = useState(false);
  const runOnce                     = useRef(true);
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
    if( curio != null )
    {
        if( !isConnected )
        {
            curio.connect(() => {
                                  console.log("Connected");
                                  setConnect(true);
                                }
                         );
        }
    }
    else
    {
      alert("Curio not initialized");
    }
    return;
  }
   /*----------------------------------------------------------------------------------------------------------------*/
  const disconnectFromRobot = () => {
    if( curio && isConnected )
    {
      curio.disconnect(() => {
                              console.log("Disconnected");
                            }
                      );
    }
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
              <span>Step 2 : </span><input type="button" onClick={disconnectFromRobot} value="Disconnect from Robot"/>
              <span>Step 3 : </span><input type="button" onClick={connectToRobot} value="Forward"/>
              <span>Step 4 : </span><input type="button" onClick={connectToRobot} value="Backward"/>
              <span>Step 5 : </span><input type="button" onClick={connectToRobot} value="Turn Left"/>
              <span>Step 6 : </span><input type="button" onClick={connectToRobot} value="Turn Right"/>
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
