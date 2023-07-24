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
                                (<input type="button" onClick={disconnectFromRobot} value="Disconnect from Robot"/>) :
                                (<input type="button" onClick={connectToRobot}      value="Connect to Robot"/>     )
                            }
                      </td>
                      <td>Escape</td>
                    </tr>

                    <tr>
                      <td>Step 2 :</td>
                      <td>
                        <input type="button" onClick={moveForward}   value="Forward"/>
                      </td>
                      <td>W</td>
                    </tr>

                    <tr>
                      <td>Step 3 :</td>
                      <td>
                        <input type="button" onClick={moveBackward}  value="Backward"/>
                      </td>
                      <td>S</td>
                    </tr>

                    <tr>
                      <td>Step 4 :</td>
                      <td>
                        <input type="button" onClick={turnLeft}      value="Turn Left"/>
                      </td>
                      <td>A</td>
                    </tr>

                    <tr>
                      <td>Step 5 :</td>
                      <td>
                        <input type="button" onClick={turnRight}     value="Turn Right"/>
                      </td>
                      <td>D</td>
                    </tr>

                    <tr>
                      <td>Step 6 :</td>
                      <td>
                        <input type="button" onClick={stop}          value="Stop"/>
                      </td>
                      <td>Space</td>
                    </tr>

                  </tbody>
                </table>
            </>
          );
};