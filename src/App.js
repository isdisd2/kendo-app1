import React, { useState } from "react"

function App() {
  return (
    <>
      <TextInput>
        {(value) => (
          <>
            <Comp1 val={value}/>
            <Comp2 val={value}/>
          </>
        )}
      </TextInput>
    </>
  )
}

function TextInput(props) {
  const [value, setValue] = useState("")

  return (<>
      Zadaj hodnotu:
      <input type="text" value={value} onChange={(e) => {
        setValue(e.target.value)
      }}/>
      {props.children(value)}
    </>

  )
}

const Comp1 = (props) =>
  <p>P1: {props.val}</p>

const Comp2 = ({ val }) =>
  <p>P2: {val}</p>

export default App