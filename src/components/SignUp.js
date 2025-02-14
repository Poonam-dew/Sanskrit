import React from 'react';
import { useState  } from 'react';
import '../Styles/SignUp.css';
import { handleError, handleSuccess } from '../Helpers/utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SignUp=()=>{
  const [signupInfo, setSignupInfo] =useState({
    name:'',
    email:'',
    password:''
  })
  const navigate=useNavigate();
  const handleChange = (e)=>{
    const { name, value}=e.target;
    console.log(name,value);
    const copySignupInfo={ ...signupInfo};
    copySignupInfo[name]=value;
    setSignupInfo(copySignupInfo);
  }
 

  const handleSignup =async (e)=>{
    e.preventDefault();
    const { name,email,password }=signupInfo;
    if(!name || !email || !password){
      
      return handleError('All fields are required');
    }
    try{
       const url='http://localhost:8000/auth/signup';
       const response = await fetch(url,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(signupInfo)
       });
       const result =await response.json();
       const { success, message ,error}=result;
       if(success){
        handleSuccess(' Signed up successfully .... Redirecting to Login page');
        setTimeout(()=>{
           navigate('/login'); 
        },2000)
       }else if(error){
        const details=error?.details[0].message;
        handleError(details);
       }else if(!success){
        handleError(message);
       }
       console.log(result);
    }catch(err){
         handleError(err);
    }
  }
  return(
    <div className="sign-up" >
      <div className="sign-up_container">
      <div className="heading">SIGN UP AS NEW USER</div>
      <div className="content">
        <form onSubmit={handleSignup} >
          <div className="field">
            <label   for ="name">Name</label>
            <input onChange={handleChange} type="text" name="name" id="name" value={signupInfo.name}  className="utextfield" />
          </div>
          <div className="field">
             <label for ="email">Email</label>    
            <input onChange={handleChange} type="email" name="email" id="email" value={signupInfo.email} className="utextfield" />          </div>
          <div className="field">
            <label for ="password"> Set Password</label>
            <input onChange={handleChange} type="password" name="password" id="password"value={signupInfo.password} className="utextfield" />
          </div>    
        
          <input type="submit" name="commit" value="SUBMIT" className="submit_button" data-disable-with="SUBMIT" />
        </form>
      </div>        
      </div>

      
      
    </div>
    )
}
export default SignUp;