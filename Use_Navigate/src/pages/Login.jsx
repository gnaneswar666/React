import React, { useRef, useState } from 'react'
import credentials from "../Data/credentials"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [submitted,setSubmitted]=useState(false);
 const [success,setSuccess]=useState(false);
 const [message,setMessage]=useState(""); 
 const emailRef=useRef();
  const passRef=useRef();
  const verify=(e)=>{
    e.preventDefault();
    const email=emailRef.current.value;
    const pass=passRef.current.value;
    const creds=credentials.find((sub)=>sub.email===email)
    if(creds){
        if(creds.pass===pass){
          setSuccess(true);
          navigate("/");

        }
        else{
            setMessage("Invalid PassWord");
        }
    }
    else{
      setMessage("Sign Up");
    }
  }
  return (
    <div>
      
      <form action="" onSubmit={(e)=>{ 
        setSubmitted(true);
        verify(e);}}>

        <input type="email" required  placeholder='Enter your Email' ref={emailRef}/>
        <input type="password" required placeholder='Enter your passWord' ref={passRef}/>
        <input type="submit" value={"Login"} />
      </form>
      {submitted&&!success&&<p>{message}</p>}
    </div>
  )
}

export default Login