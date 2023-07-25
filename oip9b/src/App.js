import CurioController                        from './components/CurioController';
import Python                                 from './components/Python';
import Example                                from './components/Example';
import React, { useRef, useEffect, useState } from "react";
const App = () => {

  /*----------------------------------------------------------------------------------------------------------------*/
  const [greeting    , setGreeting] = useState("");
  const runOnce                     = useRef(true);
  /*----------------------------------------------------------------------------------------------------------------*/
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      setGreeting("Welcome to Team 9B Curio project for Summer Widening 2023!");
    }
  }, [runOnce]);
  /*----------------------------------------------------------------------------------------------------------------*/
  const python_codes  = 
  `
    import numpy             as np
    import matplotlib.pyplot as plt
    x = np.array([2,3,4,5,6,7,8])
    y = np.array([3,2,1,0,1,2,3])
    fig, ax = plt.subplots()
    plt.scatter( x , y )
    display(fig)
    print("Hello World")
  `;
  /*----------------------------------------------------------------------------------------------------------------*/
    return (
      <>
        <center><div><h1>{greeting}</h1></div></center>
        <Example />
        <CurioController />
        <Python codes={python_codes} />
      </>
  );
  /*----------------------------------------------------------------------------------------------------------------*/
}
App.getLayout = (page) => (
  <>
      <React.StrictMode>
          {page}
      </React.StrictMode> 
  </>
);
export default App;


