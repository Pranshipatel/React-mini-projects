import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running , setRunning] = useState(false);

    useEffect(()=>{
        let interval;
        if(running){
            interval = setInterval(()=>{
                setTime((prevTime)=> prevTime + 10);
            },10);
        }
        else if(!running){
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    },[running])
  return (
    <div className='w-full h-[70vh]  p-20'>
      <h1 className='text-2xl'>StopWatch</h1>
      <div className='w-full h-[80%] flex items-center gap-4 justify-center flex-col '>
        <div className='text-2xl bg-slate-700 text-white p-2 rounded-md'>
            <span>{("0"+Math.floor((time/60000) %60)).slice(-2)}:</span>
            <span>{("0"+Math.floor((time/1000) %60)).slice(-2)}:</span>
            <span>{("0"+((time/10)%100)).slice(-2)}</span>
        </div>
        <div className='flex gap-2 text-white'>
        {running? (
            <button className='bg-teal-700 px-4 py-2 rounded-md ' onClick={()=>{setRunning(false)}}>Stop</button>
        ):(
            <button className='bg-teal-700 px-4 py-2 rounded-md ' onClick={()=>{setRunning(true)}}>Start</button>
        )
}
        <button className='bg-red-700 px-4 py-2 rounded-md' onClick={()=>{setTime(0)}}>Reset</button>

        </div>
      </div>
    </div>
  )
}

export default Stopwatch
