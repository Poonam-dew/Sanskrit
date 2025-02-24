import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import { handleError, handleSuccess } from '../Helpers/utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
const Login=()=>{
  const [addStyle,setStyle]=useState('member');
    
   const [loginInfo, setLoginInfo] =useState({
      
      email:'',
      password:''
    })
    const navigate=useNavigate();
    const handleChange = (e)=>{
      const { name, value}=e.target;
      console.log(name,value);
      const copyLoginInfo={ ...loginInfo};
      copyLoginInfo[name]=value;
      setLoginInfo(copyLoginInfo);
    }
   
  
    const handleLogin =async (e)=>{
      e.preventDefault();
      const { email,password }=loginInfo;
      if( !email || !password){
        
        return handleError('All fields are required');
      }
      try{
         const url='http://localhost:8000/auth/login';
         const response = await fetch(url,{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(loginInfo)
         });
         const result =await response.json();
         const { success, message ,jwtToken,name,error}=result;
         if(success){
          handleSuccess(message);
          localStorage.setItem('token',jwtToken);
          localStorage.setItem('loggedInUser',name);

          setTimeout(()=>{
             navigate('/'); 
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
    <div className="Login">
      <div className='login_container'>
              {/**section1**/}
      <div className="section_1">
        <div className="top_btn" id={addStyle ? 'member' : 'login'}
        onClick={()=>{setStyle('member')}}>
          MEMBER
        </div>
        <div className="seperator">
         </div>
         <div className='top_btn'id={addStyle ? 'login' : 'member'}
        onClick={()=>{setStyle(!addStyle)}}>
           USER
         </div>
      </div>
      {/**section2**/}
      <div className='section_2'>
        <form onSubmit={handleLogin}>
          <div className="field">
          <label className="labelfor"for="username">Email</label>
          <input onChange={handleChange} name="email" id="username"value={loginInfo.email} className="utextfield" />            
          </div>
          <div className='field'>
          <label className="labelfor" for="password">Password</label>
          <input onChange={handleChange}type="password" name="password" id="password" value={loginInfo.password}  className="utextfield" />            
          </div>
          <div className="setAccount">
            <p >Don't have an account? <Link to ="/signup">SignUp</Link></p>
          </div>
      <input type="submit" name="commit" value="LOGIN" className="submit_button" data-disable-with="LOGIN" />

        </form>
      </div>
      </div>

    </div>
    )
}
export default Login;