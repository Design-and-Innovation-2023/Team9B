'use client'

import                                    '../styles/Python.css'
import { global_curio }              from './Curio';
import { PyScriptProvider }          from 'pyscript-react' 
import React, { useRef , useEffect } from "react";
import { ErrorBoundary }             from './ErrorBoundary';

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html

//export default function Python() {
export default function Python( { instructions , hints } ) {

    /*----------------------------------------------------------------------------------------------------------------*/
    async function toggleConnect() {
        const btn = document.getElementById('toggleConnect')
        if( global_curio != null )
        {
            if( !global_curio.getConnection() )
            {
                await global_curio.connect( ()=>{
                    global_curio.setConnection(true);
                    btn.value = "Disconnect"
                })
                return;
            }
            else
            {
                await global_curio.disconnect( ()=>{
                    global_curio.setConnection(false);
                    btn.value = "Connect"
                })
                return;
            }
        }
        return;
    }

    async function forward() {
        if(  global_curio && global_curio.getConnection() )
        {
            global_curio.forward();
        }
        return;
    }

    async function backward() {
        if(  global_curio && global_curio.getConnection() )
        {
            global_curio.backward();
        }
        return;
    }

    async function turnLeft() {
        if(  global_curio && global_curio.getConnection() )
        {
            global_curio.turnLeft();
        }
        return;
    }

    async function turnRight() {
        if(  global_curio && global_curio.getConnection() )
        {
            global_curio.turnRight();
        }
        return;
    }

    async function stop() {
        if(  global_curio && global_curio.getConnection() )
        {
            global_curio.stop();
        }
        return;
    }

    async function movement1() {
        forward();
        setTimeout( backward  , 1800 );
        setTimeout( turnLeft  , 3600 );
        setTimeout( turnRight , 5400 );
    }
    /*----------------------------------------------------------------------------------------------------------------*/
    const runOnce = useRef(true);
    useEffect(() => {

            if (runOnce.current) {
                runOnce.current = false;

                const btn = document.getElementById('toggleConnect')
                if( global_curio && global_curio.getConnection() )
                {
                    btn.value = "Disconnect"
                }
                else
                {
                    btn.value = "Connect"
                }
            }

      }, [runOnce] );
    /*----------------------------------------------------------------------------------------------------------------*/
    return(
            <ErrorBoundary fallback="Error">
                {
                    runOnce.current && 
                    <div>
                        <input type="button" id="toggleConnect" onClick={toggleConnect} value="Connect"    />
                        <input type="button" id="forward"       onClick={forward}       value="Forward"    />
                        <input type="button" id="backward"      onClick={backward}      value="Backward"   />
                        <input type="button" id="turnLeft"      onClick={turnLeft}      value="Turn Left"  />
                        <input type="button" id="turnRight"     onClick={turnRight}     value="Turn Right" />
                        <input type="button" id="stop"          onClick={stop}          value="Stop"       />
                        <input type="button" id="movement1"     onClick={movement1}     value="Movement 1" />
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <span>Hints</span>
                                    </th>
                                    <th>
                                            <span>{instructions}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td id="sample_container">
                                            <div id="sample-codes">
                                                <textarea id="python-example" width="auto" height="auto" defaultValue={hints} autoCorrect="off" autoCapitalize="off" spellCheck="false" >
                                                </textarea>
                                            </div>
                                    </td>
                                    <td id="code_container">
                                            <div id="python-container">
                                                <span>Input:</span><br/>
                                                <script type="text/javascript">
                                                    toggleConnect = document.getElementById(`toggleConnect`)
                                                </script>
                                                <script type="text/javascript">
                                                    forward = document.getElementById(`forward`)
                                                </script>
                                                <script type="text/javascript">
                                                    backward = document.getElementById(`backward`)
                                                </script>
                                                <script type="text/javascript">
                                                    turnLeft = document.getElementById(`turnLeft`)
                                                </script>
                                                <script type="text/javascript">
                                                    turnRight = document.getElementById(`turnRight`)
                                                </script>
                                                <script type="text/javascript">
                                                    stop = document.getElementById(`stop`)
                                                </script>
                                                <script type="text/javascript">
                                                    movement1 = document.getElementById(`movement1`)
                                                </script>

                                                <ErrorBoundary fallback="Error">
                                                    {/* <PyScriptProvider> */}

                                                        <ErrorBoundary fallback="Error">
                                                            <py-script>
                                                                from js import toggleConnect,forward,backward,turnLeft,turnRight,movement1
                                                            </py-script>
                                                        </ErrorBoundary>

                                                        {/* <ErrorBoundary fallback="Error">
                                                            <py-config>packages = ["numpy","pandas","matplotlib","scikit-learn","asyncio"]</py-config>
                                                        </ErrorBoundary> */}
                                                    
                                                        {/* <py-script>{codes}</py-script> */}
                                                        <ErrorBoundary fallback="Error">
                                                            <py-repl />
                                                        </ErrorBoundary>
                                                        
                                                    {/* </PyScriptProvider> */}
                                                </ErrorBoundary>
                                                <hr />
                                                <span>Output:</span><br/>
                                                <div id="output-container">
                                                    <div id="py-terminal-div">
                                                        <ErrorBoundary fallback="Error">
                                                            <py-terminal output="output" />
                                                        </ErrorBoundary>
                                                    </div>
                                                    <div id="output" name="output" />
                                                </div>
                                            </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </ErrorBoundary>
           
          );
};