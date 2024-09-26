import React from 'react'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Stopwatch from './components/Stopwatch'

const App = () => {
  return (
    <div>
      <Navbar />
      <Counter />
      <Stopwatch/>
    </div>
  )
}

export default App
