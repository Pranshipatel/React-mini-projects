import React, { useState } from 'react'

const Jokes = () => {
    const [jokes, setjokes] = useState("");
    
    const fetchJoke = async()=>{
      try{
       const response = await fetch('https://official-joke-api.appspot.com/random_joke');
       const data  = await response.json()
       setjokes(`${data.setup}- ${data.punchline}`);
      }
      catch(err){
        console.log(err.message)
      }
    }
  return (
    <div className='w-full h-[50vh] flex items-center justify-center flex-col'>
       <div className="bg-slate-800 flex items-center justify-center flex-col text-white rounded-md w-[25vw] p-3 ">
       <h1 className='text-2xl'>Jokes Generator</h1>
      <button className='bg-yellow-700 p-2 rounded-md mt-2' onClick={fetchJoke}>Get a joke</button>
      {jokes && <p className='bg-slate-600 mt-2 rounded-md p-3'>{jokes}</p>}
       </div>
    </div>
  )
}

export default Jokes
