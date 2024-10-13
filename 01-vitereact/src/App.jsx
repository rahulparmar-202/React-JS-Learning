import Cup from "./chai"

function App() {

  const userName = "rahulparmar"

  return (
    <>
    <Cup/>
    <h1>Hello {userName}</h1>
    <p>Test paragraph</p>
    </>
  )
}

export default App

// sins you cant return more than one element in react
//  to return more elements , just wrap them in a div or blank tag <> </>
//

/* to return/output variables in react :- u can use them in {} ...
   only Evaluated Expression should be writen in {} 
   means - Final outcome only like the variable...you can not write any condition or loop in it. */