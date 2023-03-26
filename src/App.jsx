import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>
        hello app ssh
      </h1>
      <div>
        <button onClick={() => {setCount(count+1);}}>{count}</button>
      </div>
    </div>
  )
}

export default App
