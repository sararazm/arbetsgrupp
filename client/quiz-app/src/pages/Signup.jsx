import React,{useState} from 'react'


function Register()
{
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  

  

  async function signUp()
  {
    let item={name,password,email}
    console.warn(item)

    let result= await fetch("http://localhost:3030/api/user/signup ", {
      method:"POST",
      body:JSON.stringify(item),
      mode: "no-cors",
      headers:{
        "Content-type": 'application/json',
        "Accept": 'application/json'
      }
    })
    result =await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    
   
  }
  return(
    <div>
      <h1>Register Page</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <br />
      <input type="password" value={password} onChange={(e)=>setEmail(e.target.value)} />
      <br />
      <input type="email" value={email} onChange={(e)=>setPassword(e.target.value)} />
      <br />
      <button onClick={signUp}>Signup</button>
    </div>
  )
}

export default Register