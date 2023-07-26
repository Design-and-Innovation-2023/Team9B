'use client'

import React, { useRef, useEffect } from "react";
import Python                       from '../components/Python';
import { global_curio }             from "../components/Curio";

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html

export default function OpenEnded1( {codes} ) {

    /*----------------------------------------------------------------------------------------------------------------*/
    const runOnce = useRef(true);
    const python_codes = 
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

from js import toggle_Connect
toggle_Connect.click()`;
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
                runOnce.current && <Python object={global_curio.connect} codes={python_codes} />
                // runOnce.current && <Python />
              }
            </div>
          );
};