'use client'

import                                   '../styles/Openended2.css'
import React, { useRef, useEffect } from "react";
import Python                       from '../components/Python';

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html

export default function OpenEnded2( {codes} ) {

    /*----------------------------------------------------------------------------------------------------------------*/

    const instructions = `Activity 2 : Draw a squircle shape with the curio robot.`;
    const python_hints = 
`#-------------------------------------------
# Control the robot via Python below
# create your own custom robot movements
#-------------------------------------------
import asyncio
async def shuriken_movement2():
	await curio.connect()
	print("Connected")
	for i in range(4):
		# curio.forward()
		# curio.turnLeft()
		# curio.turnRight()
		# curio.reverseLeft()
		# curio.reverseRight()
		# curio.rotateRight()
		# curio.stop()

		curio.backward()
		print("Moving backward")

		await curio.sleep(1800)
		print("Sleeping")

		curio.rotateLeft()
		print("Rotate Left")

		await curio.sleep(1800)
		print("Sleeping")

	await curio.disconnect()
	print("Disconnected")
asyncio.ensure_future( shuriken_movement2() )`;

    const runOnce = useRef(true);
    /*----------------------------------------------------------------------------------------------------------------*/
    useEffect(() => {
      if (runOnce.current) {
        runOnce.current = false;
      }
    }, [runOnce]);
    /*----------------------------------------------------------------------------------------------------------------*/
    return(
            <div className="OpenEnded2">
              {
                runOnce.current && <Python instructions={instructions} hints={python_hints} />
              }
            </div>
          );
};