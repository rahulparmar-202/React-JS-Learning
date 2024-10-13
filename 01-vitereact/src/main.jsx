import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return  (
    <div>
      <h1>Custom APP!</h1>
    </div>
  )
}

// Basic approach
/* const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
*/

// an Object with an 'a' tag of html that is what react supposed to get...and convert it to their syntax term to execute....
const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

//(evaluated Expression) created a variable - anotherUser 
const anotherUser = "Rahul"

// Better Approach with React.createElement()
// React side Syntax of how react converts our functions or components before rendering on Page.
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'Click me to Visit Google ',
  anotherUser
)


createRoot(document.getElementById('root')).render(
  reactElement
)
