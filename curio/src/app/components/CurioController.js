'use client'

import { global_curio , Curio }               from './Curio';
import React, { useRef, useEffect, useState } from "react";
import { ErrorBoundary }                      from './ErrorBoundary';

export default function CurioController() {

  /*----------------------------------------------------------------------------------------------------------------*/
  // const [curio       , setCurio]    = useState(null);
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
    }
  }, [runOnce]);
  /*----------------------------------------------------------------------------------------------------------------*/

  const connectToRobot = () => {
    if( global_curio != null )
    {
        if( !global_curio.getConnection() )
        {
          global_curio.connect(() => {
                                  console.log("Connected");
                                  window.addEventListener('keydown' , detectKeyPressed )
                                  window.addEventListener('keyup'   , detectKeyRelease )
                                  setConnect(true);
                                  global_curio.setConnection(true);
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
    if( global_curio && global_curio.getConnection() )
    {
      global_curio.disconnect(() => {
                                console.log("Disconnected");
                                window.removeEventListener('keydown', detectKeyPressed )
                                window.removeEventListener('keyup'  , detectKeyRelease )
                                setConnect(false);
                                global_curio.setConnection(false);
                             }
                      );
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const moveForward = () =>{
    if( global_curio && global_curio.getConnection() )
    {
      global_curio.forward();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const moveBackward = () =>{
    if( global_curio && global_curio.getConnection() )
    {
      global_curio.backward();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const turnLeft = () =>{
    if( global_curio && global_curio.getConnection() )
    {
      global_curio.turnLeft();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const turnRight = () =>{
    if( global_curio && global_curio.getConnection() )
    {
      global_curio.turnRight();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  const stop = () =>{
    if( global_curio && global_curio.getConnection() )
    {
      global_curio.stop();
    }
    return;
  }
  /*----------------------------------------------------------------------------------------------------------------*/

    return(
            <ErrorBoundary fallback="Error">
                <table border="black">
                  <thead>
                    <tr>
                      <th>Steps</th>
                      <th>Mouse Click</th>
                      <th>Keyboard</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Step 1 :</td>
                      <td>
                            {
                                isConnected ? 
                                (<input type="button" id="btn_Disconnect" onClick={disconnectFromRobot} value="Disconnect from Robot"/>) :
                                (<input type="button" id="btn_Connect"    onClick={connectToRobot}      value="Connect to Robot"/>     )
                            }
                      </td>
                      <td>Escape</td>
                    </tr>

                    <tr>
                      <td>Step 2 :</td>
                      <td>
                        <input type="button" id="btn_forward" onClick={moveForward}   value="Forward"/>
                      </td>
                      <td>W</td>
                    </tr>

                    <tr>
                      <td>Step 3 :</td>
                      <td>
                        <input type="button" id="btn_backward" onClick={moveBackward}  value="Backward"/>
                      </td>
                      <td>S</td>
                    </tr>

                    <tr>
                      <td>Step 4 :</td>
                      <td>
                        <input type="button" id="btn_turnLeft" onClick={turnLeft}      value="Turn Left"/>
                      </td>
                      <td>A</td>
                    </tr>

                    <tr>
                      <td>Step 5 :</td>
                      <td>
                        <input type="button" id="btn_turnRight" onClick={turnRight}     value="Turn Right"/>
                      </td>
                      <td>D</td>
                    </tr>

                    <tr>
                      <td>Step 6 :</td>
                      <td>
                        <input type="button" id="btn_Stop"      onClick={stop}          value="Stop"/>
                      </td>
                      <td>Space</td>
                    </tr>
                    
                  </tbody>
                </table>
            </ErrorBoundary>
          );
};