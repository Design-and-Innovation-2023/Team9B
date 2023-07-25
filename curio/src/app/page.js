'use client'

import React, { useRef, useEffect, useState } from "react";
import CurioController                        from './components/CurioController'

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

  return (
    <div>
    <center><div><h1>{greeting}</h1></div></center>
        <CurioController />
    </div>
  );
};

export default App;