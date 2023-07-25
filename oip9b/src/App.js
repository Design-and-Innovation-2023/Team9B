import CurioController                        from './components/CurioController';
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

  /*----------------------------------------------------------------------------------------------------------------*/
    return (
      <>
        <center><div><h1>{greeting}</h1></div></center>
        <CurioController />
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


