'use client'

import                                   '../styles/Openended1.css'
import React, { useRef, useEffect } from "react";
import Python                       from '../components/Python';

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html

export default function OpenEnded1( {codes} ) {

    /*----------------------------------------------------------------------------------------------------------------*/

    const instructions = `Activity 1 : Draw a shuriken shape with the curio robot.`;
    const python_hints = 
`#-------------------------------------------
# Control the robot via Python below
# create your own custom robot movements
#-------------------------------------------
import asyncio
async def shuriken_movement():
	# moveforward()
	# rotateRight()
	# turnLeft()
	# turnRight()
	# reverseLeft()
	# reverseRight()
	# stopRobot()

	movebackward()
	await sleep(1800)

	rotateLeft()
	await sleep(1800)

	movebackward()
	await sleep(1800)

	rotateLeft()
	await sleep(1800)

	movebackward()
	await sleep(1800)

	rotateLeft()
	await sleep(1800)

	movebackward()
	await sleep(1800)

	rotateLeft()
	await sleep(1800)
#-------------------------------------------
asyncio.ensure_future( shuriken_movement() ) 
#-------------------------------------------

import numpy as np
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
display(fig2 , target="output")`;

    const runOnce = useRef(true);
    /*----------------------------------------------------------------------------------------------------------------*/
    useEffect(() => {
      if (runOnce.current) {
        runOnce.current = false;
      }
    }, [runOnce]);
    /*----------------------------------------------------------------------------------------------------------------*/
    return(
            <div className="OpenEnded1">
              {
                runOnce.current && <Python instructions={instructions} hints={python_hints} />
              }
            </div>
          );
};