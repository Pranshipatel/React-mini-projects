import React from 'react'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Stopwatch from './components/Stopwatch'
import Form from './components/Form'

const App = () => {
  return (
    <div>
      <Navbar />
      <Counter />
      <Stopwatch/>
      <Form/>
    </div>
  )
}

export default App
