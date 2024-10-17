import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null)

  // useCallback :- takes two parameters 1 is function and 2nd is dependancies , on which function depends and runs when they are getting changed
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@#.&^!()[]{}`-*+=_$,";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * (str.length + 1));

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

// copiyng through useRef Hook
  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();

    // this is used to select according to range that you can give
    passwordRef.current?.setSelectionRange(0,50)

    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect Hook to run the function passwordGenerator
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);
  // useEffect will run the function on every time if these values are changing (dependancies)


  // copying password to the clipboard ( with function )
  // const copyToClipboard = () => {
  //   navigator.clipboard
  //     .writeText(password)
  //     .then(() => {
  //       alert("Password copied to clipboard!");
  //     })
  //     .catch((err) => {
  //       alert("Failed to copy password: ", err);
  //     });
  // };

  return (
    // main div
    <div className="width-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600 p-4">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        
        <input
          type="text"
          value={password}
          placeholder="pasword"
          readOnly
          ref={passwordRef}
          className="outline-none w-full py-1 px-3 "
        />

        
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" 
        //onClick={copyToClipboard}
        onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={4}
            max={24}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
              // setLength(parseInt(e.target.value, 10)); // Convert to number
            }}
          />
          <label>Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
              // callback firing :- accessing previous value to change its current state (true or false) according to the prev
            }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
