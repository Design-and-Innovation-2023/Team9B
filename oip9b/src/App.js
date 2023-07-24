import CurioController                        from './components/CurioController';
import Python                                 from './components/Python';
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
    display(fig, target="matplotlibplot")
    print("Hello World")
  `;
  /*----------------------------------------------------------------------------------------------------------------*/
    return (
    <>
        <React.StrictMode><center><div><h1>{greeting}</h1></div></center>
            <CurioController />
            <Python codes={python_codes} />
        </React.StrictMode>       
    </>
  );
  /*----------------------------------------------------------------------------------------------------------------*/
}
App.getLayout = (page) => (
  <>
      {page}
  </>
);
export default App;
