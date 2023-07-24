import { Curio }                              from './Curio';
import React, { useRef, useEffect, useState } from "react";

export default function CurioController() {

  /*----------------------------------------------------------------------------------------------------------------*/
  const [curio       , setCurio]    = useState(null);
  const [isConnected , setConnect]  = useState(false);
  const runOnce                     = useRef(true);
  /*----------------------------------------------------------------------------------------------------------------*/
   
  const detectKeyPressed = (e) => {
    if( e.key === 'w' || e.key === 'W' )
    {
      moveForward();
      console.log('forward');
    }
    if( e.key === 's' || e.key === 'S' )
    {
      moveBackward();
      console.log('backward');
    }
    if( e.key === 'a' || e.key === 'A' )
    {
      turnLeft();
      console.log('turning left');
    }
    if( e.key === 'd' || e.key === 'D' )
    {
      turnRight();
      console.log('turning right');
    }
}
/*----------------------------------------------------------------------------------------------------------------*/
const detectKeyRelease = (e) => {
    stop();
    console.log('Stop');
}
/*----------------------------------------------------------------------------------------------------------------*/
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      setCurio( new Curio() );
    }
  }, [runOnce]);
  /*----------------------------------------------------------------------------------------------------------------*/

  const connectToRobot = () => {
    if( curio != null )
    {
        if( !curio.getConnection() )
        {
            curio.connect(() => {
                                  console.log("Connected");
                                  window.addEventListener('keydown' , (e)=> detectKeyPressed(e) )
                                  window.addEventListener('keyup'   , (e)=> detectKeyRelease(e) )
                                  setConnect(true);
                                  curio.setConnection(true);
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
    if( curio && curio.getConnection() )
    {
      curio.disconnect(() => {
                                console.log("Disconnected");
                                setConnect(false);
                                curio.setConnection(false);
                             }
                      );
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const moveForward = () =>{
    if( curio && curio.getConnection() )
    {
      curio.forward();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const moveBackward = () =>{
    if( curio && curio.getConnection() )
    {
      curio.backward();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const turnLeft = () =>{
    if( curio && curio.getConnection() )
    {
      curio.turnLeft();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const turnRight = () =>{
    if( curio && curio.getConnection() )
    {
      curio.turnRight();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const stop = () =>{
    if( curio && curio.getConnection() )
    {
      curio.stop();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/

    return(
            <>

                <>
                    {
                        isConnected ? 
                        (<span>Step 1 : <input type="button" onClick={disconnectFromRobot} value="Disconnect from Robot"/></span>) :
                        (<span>Step 1 : <input type="button" onClick={connectToRobot}      value="Connect to Robot"/></span>     )
                    }
                    <br/><br/>
                </>
                <>
                        <span>Step 2 : </span><input type="button" onClick={moveForward}   value="Forward"/><br/><br/>
                        <span>Step 3 : </span><input type="button" onClick={moveBackward}  value="Backward"/><br/><br/>
                        <span>Step 4 : </span><input type="button" onClick={turnLeft}      value="Turn Left"/><br/><br/>
                        <span>Step 5 : </span><input type="button" onClick={turnRight}     value="Turn Right"/><br/><br/>
                        <span>Step 6 : </span><input type="button" onClick={stop}          value="Stop"/><br/><br/>
                </>
            </>
          );
};