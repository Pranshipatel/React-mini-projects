import React, { useState } from 'react'

const Counter = () => {
    const[counter, newCounter] = useState(0);
    const AddCounter = ()=>{
        newCounter(counter+1)
    }

    const RemoveCounter = ()=>{
        newCounter(counter-1)
    }
  return (
    <div className=' w-full h-[70%] p-20 '>
     <h1 className='text-black text-2xl'>Counter Project</h1>
    <div className='flex items-center justify-center  flex-col h-[90%] '>
    <div className='bg-slate-700 py-1 px-10 text-white mb-2 rounded-md'> <h1 className='text-2xl '>{counter}</h1></div>
      <button onClick={AddCounter} className='bg-teal-800 p-2 text-white rounded-md'>Increase counter</button>
      <button onClick={RemoveCounter} className='bg-teal-800 p-2 text-white rounded-md mt-2'>Decrease counter</button>

    </div>
    </div>
  )
}

export default Counter
