import React, { useState } from 'react'

const AnotherForm = () => {
    const [username, setusername] = useState("")
    const [gender, setgender] = useState("others")
    const [city, setcity] = useState("")
    const [avatar, setavatar] = useState(null)
    const [isSubmitted, setisSubmitted] = useState(false)
    const [submittedUsername, setsubmittedUsername] = useState("")
    const [avatarUrl, setavatarUrl] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault();
        setsubmittedUsername(username);
        setisSubmitted(true)
        setusername("")
    }

    const handleFile = (e)=>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setavatarUrl(reader.result)
            }
            reader.readAsDataURL(file);
            setavatar(file)
        }
    }
  return (
   
   <div className='w-full h-[70vh] flex gap-2 items-center justify-center'>
    <div className='p-5 flex flex-col  rounded-md bg-red-300'>
    <form className='flex flex-col gap-2' onSubmit={submitHandler}  action="" encType='multipart/form-data'>

    <input 
    className='p-2 rounded-md' 
    value={username} 
    onChange={(e)=> setusername(e.target.value)} 
    type="text" placeholder='username' 
    />

    <input 
    className='bg-zinc-500 text-white p-1 rounded-md'
    onChange={handleFile}
    type="file" 
    />

    <div className="gender flex items-center  gap-1">
    <input type="radio" 
    name="gender"
    checked={gender == "others" ? true : false}
    defaultValue="others"
    onChange={(e)=>setgender(e.target.value)}
    id="" /> Others
    </div>

    <div className="gender flex items-center  gap-1">
    <input type="radio" 
    name="gender"
    checked={gender == "male" ? true : false}
    defaultValue="male"
    onChange={(e)=>setgender(e.target.value)}
    id="" /> Male
    </div>

    <div className="gender flex items-center  gap-1">
    <input type="radio" 
    name="gender"
    checked={gender == "female" ? true : false}
    defaultValue="female"
    onChange={(e)=>setgender(e.target.value)}
    id="" /> Female
    </div>

    <select 
    className='p-2 rounded-md '
    onChange={(e)=>setcity(e.target.value)} name="" id="">
        <option value="">City</option>
        <option value="bhopal">Bhopal</option>
        <option value="indore">Indore</option>
        <option value="jabalpur">Jabalpur</option>
    </select>


    <button className='bg-teal-700 text-white  px-4 py-2 rounded-md'>Submit</button>
   </form>
    </div>
    {isSubmitted && (
        <div className="bg-slate-700 w-[30vw] flex gap-2 flex-col items-center h-[43vh] justify-center rounded-md text-white">
        <h1>Hello my name is {submittedUsername}</h1>
        <h1>And i'm from {city}</h1>
        {avatarUrl &&( <img src={avatarUrl} alt="Uploaded Avatar" className="w-24 h-24 rounded-full"/>)} 
        </div>
    )}
   </div>
   
  )
}

export default AnotherForm
