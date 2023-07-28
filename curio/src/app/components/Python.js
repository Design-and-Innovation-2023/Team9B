'use client'

import                                    '../styles/Python.css'
import Script                        from 'next/script'
import { global_curio }              from './Curio';
import { PyScriptProvider }          from 'pyscript-react' 
import React, { useRef , useEffect } from "react";
import { ErrorBoundary }             from './ErrorBoundary';

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html

//export default function Python() {
export default function Python( { instructions , hints } ) {

    /*----------------------------------------------------------------------------------------------------------------*/

    async function toggleConnect() 
    {
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

    function forward() 
    {
        if(  global_curio && global_curio.getConnection() )
        {
            global_curio.forward();
        }
        return;
    }

    function backward() 
    {
        if(  global_curio && global_curio.getConnection() )
        {
            global_curio.backward();
        }
        return;
    }

    function turnLeft() 
    {
        if(  global_curio && global_curio.getConnection() )
        {
            global_curio.turnLeft();
        }
        return;
    }

    function turnRight() 
    {
        if(  global_curio && global_curio.getConnection() )
        {
            global_curio.turnRight();
        }
        return;
    }

    function stop() 
    {
        if(  global_curio && global_curio.getConnection() )
        {
            global_curio.stop();
        }
        return;
    }

    function sleep( milliseconds )
    {
        return new Promise(resolve => setTimeout( resolve, milliseconds ));
    }

    async function movement1() 
    {
        const _delay = 1800;

        forward();
        await sleep(1800);

        backward();
        await sleep(1800);

        turnLeft();
        await sleep(1800);

        turnRight();
        await sleep(1800);

        // forward();
        // setTimeout( backward  , _delay   );
        // setTimeout( turnLeft  , _delay*2 );
        // setTimeout( turnRight , _delay*3 );
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
                        <span><b>Reload the page if unable to control robot from Python or any error encountered</b></span><br/>
                        <input type="button" id="toggleConnect" onClick={ toggleConnect     }             value="Connect"    />
                        <input type="button" id="forward"       onClick={ () => forward()   }             value="Forward"    />
                        <input type="button" id="backward"      onClick={ () => backward()  }             value="Backward"   />
                        <input type="button" id="turnLeft"      onClick={ () => turnLeft()  }             value="Turn Left"  />
                        <input type="button" id="turnRight"     onClick={ () => turnRight() }             value="Turn Right" />
                        <input type="button" id="stop"          onClick={ () => stop()      }             value="Stop"       />
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

                                                <ErrorBoundary fallback="Error">

                                                        <ErrorBoundary fallback="Error">
                                                            <Script    src="./js_script.js" strategy="afterInteractive"></Script>
                                                            <py-script src="./py_script.py"></py-script>
                                                        </ErrorBoundary>

                                                        <ErrorBoundary fallback="Error">
                                                            <py-repl />
                                                        </ErrorBoundary>
                                                        
                                                </ErrorBoundary>

                                                <hr />
                                                <span>Output:</span><br/>
                                                <div id="output-container">
                                                    <div id="py-terminal-div">
                                                        <ErrorBoundary fallback="Error">
                                                            <py-terminal terminal="true" docked="true" />
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