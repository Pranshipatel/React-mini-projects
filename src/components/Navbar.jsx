import React, { useState } from 'react'

const Navbar = () => {
    const [time, updateTime] = useState(new Date().toLocaleTimeString());
    setInterval(()=>{
        updateTime(new Date().toLocaleTimeString());
    })

    
  return (
    <div className='bg-black fixed z-[9999] w-full  text-white flex items-center justify-between p-2  '>
      <h1>React Mini Projects</h1>
      <h1>{time}</h1>
    </div>
  )
}

export default Navbar
