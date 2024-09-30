import React from 'react'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Stopwatch from './components/Stopwatch'
import Form from './components/Form'
import AnotherForm from './components/AnotherForm'

const App = () => {
  return (
    <div>
      <Navbar />
      <Counter />
      <Stopwatch/>
      <Form/>
      <AnotherForm />
    </div>
  )
}

export default App
