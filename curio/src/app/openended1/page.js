'use client'

import React, { useRef, useEffect } from "react";
import Python                       from '../components/Python';

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html

export default function OpenEnded1( {codes} ) {

    /*----------------------------------------------------------------------------------------------------------------*/

    const instructions = `Copy the following Python codes and paste it into the Python console and click on the play button to execute.`;
    const python_hints = 
`import numpy as np
import matplotlib.pyplot as plt

x = np.array([2,3,4,5,6,7,8])
y = np.array([3,2,1,0,1,2,3])
fig1, ax1 = plt.subplots()
plt.scatter( x , y )
plt.title("v shape")
display(fig1 , target="output")
print("Hello World")

x = np.array([2,3,4,5,6,7,8])
y = np.array([0,1,2,3,2,1,0])
fig2, ax2 = plt.subplots()
plt.scatter( x , y )
plt.title("^ shape")
display(fig2 , target="output")

import asyncio

async def moveforward():
    forward.click()
    return

async def movebackward():
    backward.click()
    return

async def rotateLeft():
    turnLeft.click()
    return

async def rotateRight():
    turnRight.click()
    return

task1 = asyncio.create_task( moveforward()    )
task2 = asyncio.create_task( movebackward()   )
task3 = asyncio.create_task( rotateLeft()     )
task4 = asyncio.create_task( rotateRight()    )
task5 = asyncio.create_task( asyncio.sleep(3) )

asyncio.ensure_future( task1 )
asyncio.ensure_future( task5 )

asyncio.ensure_future( task2 )
asyncio.ensure_future( task5 )

asyncio.ensure_future( task3 )
asyncio.ensure_future( task5 )

asyncio.ensure_future( task4 )
asyncio.ensure_future( task5 )`;

    const runOnce = useRef(true);
    /*----------------------------------------------------------------------------------------------------------------*/
    useEffect(() => {
      if (runOnce.current) {
        runOnce.current = false;
      }
    }, [runOnce]);
    /*----------------------------------------------------------------------------------------------------------------*/
    return(
            <div>
              {
                runOnce.current && <Python instructions={instructions} hints={python_hints} />
              }
            </div>
          );
};