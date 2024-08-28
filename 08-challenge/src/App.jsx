import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          handleAdd
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          handleSubstract
        </button>
        <button onClick={() => setCount((count) => count = 0)}>
          handleReset
        </button>
      </div>
    </>
  )
}

export default App
