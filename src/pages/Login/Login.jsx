import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'

//loader
import spinner from '../../assets/netflix_spinner.gif'



const Login = () => {
  const [signState,setSignState]=useState("Sign In")
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [loading,setLoading]=useState(false)

  const user_auth=async(event)=>{
    setLoading(true)
    event.preventDefault();
    if(signState==="Sign In")
    {
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
    setLoading(false)
  }


  // const setSignState=()=>{
  //   signState=!signState;
  // }
  const toggleSignState = () => {
    // setSignState(prev => !prev);
    // You're using setSignState properly with a function updater, but you're not toggling between "Sign In" and "Sign Up" strings. You're trying to toggle a string with !prev, which only works for booleans.


    setSignState(prev => prev === "Sign In" ? "Sign Up" : "Sign In");
  };
  
   

  return (
    loading?<div className="loading-spinner">
      <img src={spinner} alt=""/>
    </div>:
    <div className='login h-[100vh] '>
      <img src={logo} className='login-logo' alt=""/>
      <div className="login-form">
        <h1>{signState}</h1>

        <form>
          {
            signState==="Sign Up"?<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name">
          </input>:<></>
          }
          
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"></input>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
          <button onClick={user_auth} type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
        {
  signState === "Sign In" ? (
    <>
      <p>New to Netflix?</p>
      <span onClick={toggleSignState}>Sign Up Now</span>
    </>
  ) : (
    <>
      <p>Already Have An Account?</p>
      <span onClick={toggleSignState}>Sign In Now</span>
      {/* //pehle ye likha tha mne onClick={(prev)=>toggleSignState(prev)}  */}
    </>
  )
}
          
          
        </div>
      </div>
      
    </div>
  )
}

export default Login
