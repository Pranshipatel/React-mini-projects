import React, { useState } from 'react'

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedName, setSubmittedName] = useState("")
  const [submittedEmail, setSubmittedEmail] = useState("")

  
  const [isSubmitted, setisSubmitted] = useState(false)

  const setHandler = (e)=>{
    e.preventDefault();
    setSubmittedName(name)
    setSubmittedEmail(email)
    setisSubmitted(true);
    setName("")
    setEmail("")
  }

  return (
    <div className='p-20 w-full h-[80vh] '>
      <h1 className='text-2xl'>Form Submission</h1>
      <div className="form w-full h-[70%] gap-5 flex items-center justify-center">
        <form className='flex flex-col gap-2 bg-slate-300 px-5 py-7 rounded-md' 
        onSubmit={setHandler}
        action="">

            <input className='p-2 rounded-md  outline-none border-zinc-600 bg-zinc-700 text-white' 
             value={name}
             onChange={(e)=>setName(e.target.value)}
             type="text"
            placeholder='username'
             />

             <input  className='p-2 rounded-md outline-none border-zinc-600 bg-zinc-700 text-white'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             type="email"
             placeholder='Email'
             name="email" id="" />

             <button className='p-2 bg-teal-700 text-white rounded-md'>Submit</button>

        </form>

        {isSubmitted && (
                  <div className="showcase  flex text-xl flex-col rounded-md  p-4">
                  <h1>Hello my name is {submittedName} 😁</h1>
                  <h1>And the email is {submittedEmail} 📩</h1>
                 </div>
        )}
      </div>
    </div>
  )
}

export default Form
