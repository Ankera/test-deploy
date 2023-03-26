import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>
        hello app ssh 11
      </h1>
      <h1>
        hello app ssh 22
      </h1>
      <div>
        <button onClick={() => {setCount(count+1);}}>{count}</button>
      </div>
    </div>
  )
}

export default App
