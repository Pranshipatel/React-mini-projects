import React, { useCallback, useEffect, useState } from 'react'

const PasswordGenerator = () => {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGen = useCallback(()=>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*_[]{}~`"

    for(let i =1 ;i<length;i++){
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  } ,[length,numberAllowed,charAllowed,setpassword])

  useEffect(() => {
    passwordGen()

  },[length,numberAllowed,charAllowed,passwordGen])
  

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-white bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>
      <div className="flex mb-4">
        <input 
          type="text"
          value={password}
          placeholder="Generated Password"
          readOnly
          className="w-full px-3 py-2 text-gray-700 border rounded-l-md focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">
          Copy
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Password Length: {length}</label>
        <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          onChange={(e) => {setlength(e.target.value)}}
        />
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <input 
            type="checkbox"
            id="numberInput"
            checked={numberAllowed}
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
            className="mr-2"
          />
          <label htmlFor="numberInput" className="text-sm">Include Numbers</label>
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox"
            id="charInput"
            checked={charAllowed}
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
            className="mr-2"
          />
          <label htmlFor="charInput" className="text-sm">Include Special Characters</label>
        </div>
      </div>
      <button 
        onClick={passwordGen}
        className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
      >
        Generate Password
      </button>
    </div>
  )
}

export default PasswordGenerator
