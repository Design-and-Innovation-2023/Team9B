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
      document.addEventListener('keydown' , detectKeyPressed , true )
      document.addEventListener('keyup'   , detectKeyRelease , true )
    }
  }, [runOnce]);
  /*----------------------------------------------------------------------------------------------------------------*/
  
  const detectKeyPressed = (e) => {
    if( curio && isConnected )
    {
      if( e.key === 'w' || e.key === 'W' )
      {
        curio.moveForward();
        console.log('Forward');
      }
      if( e.key === 's' || e.key === 'S' )
      {
        curio.moveBackward();
        console.log('Backward');
      }
      if( e.key === 'a' || e.key === 'A' )
      {
        curio.turnLeft();
        console.log('Turn Left');
      }
      if( e.key === 'd' || e.key === 'D' )
      {
        curio.turnRight();
        console.log('Turn Right');
      }
    }
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const detectKeyRelease = (e) => {
    if( curio && isConnected )
    {
      curio.stop();
      console.log('Stop');
    }
  }
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
                                setConnect(false);
                             }
                      );
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const moveForward = () =>{
    if( curio && isConnected )
    {
      curio.moveForward();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const moveBackward = () =>{
    if( curio && isConnected )
    {
      curio.moveBackward();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const turnLeft = () =>{
    if( curio && isConnected )
    {
      curio.turnLeft();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const turnRight = () =>{
    if( curio && isConnected )
    {
      curio.turnRight();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const stop = () =>{
    if( curio && isConnected )
    {
      curio.stop();
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
            <>
              {
                isConnected ? 
                (<span>Step 1 : <input type="button" onClick={disconnectFromRobot}  value="Disconnect from Robot"/></span>) :
                (<span>Step 1 : <input type="button" onClick={connectToRobot}       value="Connect to Robot"/></span>     )
              }
              <br/><br/>
            </>
            <div>
              <span>Step 2 : </span><input type="button" onClick={moveForward}          value="Forward"/><br/><br/>
              <span>Step 3 : </span><input type="button" onClick={moveBackward}         value="Backward"/><br/><br/>
              <span>Step 4 : </span><input type="button" onClick={turnLeft}             value="Turn Left"/><br/><br/>
              <span>Step 5 : </span><input type="button" onClick={turnRight}            value="Turn Right"/><br/><br/>
              <span>Step 6 : </span><input type="button" onClick={stop}                 value="Stop"/><br/><br/>
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
