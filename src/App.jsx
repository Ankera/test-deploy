import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      hello app ssh 11 2
      <div>
        <button onClick={() => {setCount(count+1);}}>{count}</button>
      </div>
    </div>
  )
}

export default App
