import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //Hooks
  // counter and setCounter are just names , we can change them to our own also.
  let [counter, setCounter] = useState(0);

  // let counter = 5

  // to add value
  const addValue = () => {
    /* if (counter >= 20) {
       // when counter is either 20 or more than 20 , then will not add more.
       setCounter(counter);
     } else {
       // 2nd Way
       setCounter(counter + 1);
     }
 */

    // ternary operator
    (counter >= 20)?setCounter(counter):setCounter(counter+1)

    /* //1 way
     counter = counter + 1
     setCounter(counter)
    */
  };

  // to remove value
  const removeValue = () => {
    /*
    if (counter <= 0) {
      // when counter is either 0 or less than 0 , then will not remove values
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
      */

    // ternary operator
    (counter <= 0) ? setCounter(counter) : setCounter(counter - 1)
  };

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;

// 1 - Assignement :-
//  a. value should not go in negative
//  b. addValue should not be more than 20
