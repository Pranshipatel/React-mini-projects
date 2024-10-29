import React from 'react'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Stopwatch from './components/Stopwatch'
import Form from './components/Form'
import AnotherForm from './components/AnotherForm'
import Jokes from './components/Jokes'
import PasswordGenerator from './components/PasswordGenerator'

const App = () => {
  return (
    <div>
      <Navbar />
      <Counter />
      <Stopwatch/>
      <Form/>
      <AnotherForm />

      <Jokes />
      <PasswordGenerator/>
    </div>
  )
}

export default App
