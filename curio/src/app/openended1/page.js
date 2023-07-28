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

#-------------------------------------------
# Control the robot via Python below
import asyncio
#-------------------------------------------
# interact with the buttons programmatically
#-------------------------------------------
def moveforward():
    forward.click()
    return
def movebackward():
    backward.click()
    return
def rotateLeft():
    turnLeft.click()
    return
def rotateRight():
    turnRight.click()
    return
def do_movement1():
    movement1.click()
    return
#-------------------------------------------
# create your own custom robot movements
#-------------------------------------------
async def shuriken_movement():
	movebackward()
	await sleep2(1800)

	rotateLeft()
	await sleep2(1800)

	movebackward()
	await sleep2(1800)
	
	rotateLeft()
	await sleep2(1800)

	movebackward()
	await sleep2(1800)

	rotateLeft()
	await sleep2(1800)

	movebackward()
	await sleep2(1800)

	rotateLeft()
	await sleep2(1800)
#-------------------------------------------
asyncio.ensure_future( shuriken_movement() ) 
#-------------------------------------------`;

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