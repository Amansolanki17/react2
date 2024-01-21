import React, { useState } from 'react'
import "./Login.css"
import swal from 'sweetalert';
import Log from './LoginApi';
import Reg from './RegisterApi';

const Loginpage = ({setRegistration,setLogins,setlogdata,logdata,Regdata,AP,RG}) => {
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const name="";
    const phone="";

    
    
    
    const logindata = () =>{
        if(!email || !password)
        {
            return swal("","Fill All Field is Require","error")
        }
        if(password==="Admin" && email ==="admin@gmail.com")
        {
          
             const admindata = {
                name:"Admin",phone:"335",email:"admin@gmail.com",password:"Admin"
             }
             Log.splice(0,1,admindata)
             swal("Admin","Login Siccesfully","success")
             AP();
             setLogins(false);
             return


        }
       let p = new Boolean();
        const [ndata] = Regdata.filter((e)=>e.email===email && e.password===password?p=true:p=false)
         if(!p)
         {
            swal("","Wrong Username || password","error")
            return
         }
      
            Log.splice(0,1,ndata)
            swal(`${name}`,"login successfully","success")
            console.log(logdata)
            
           
         

        

        
      
   
    
    }
 
     
    
  return (
    <center>
        <div className='box'>
            <form id="f" style={{height:"20rem"}}>
                <h2 style={{color:"black",fontFamily:"cursive",fontWeight:"bolder"}} className='mt-3'>Sing In</h2>
                <br></br>
                
            <input type='text' placeholder='📨  Enter the Email' id="i" value={email} onChange={e=>setemail(e.target.value)}></input><br></br><br></br>
            <input type='password' placeholder=' 🔓Enter the password' id="i" value={password} onChange={e=>setpassword(e.target.value)}></input><br></br><br></br>

            <button type='submit' className='btn btn-success mt-3 w-50' id="b l" style={{fontFamily:"monospace"}} onClick={logindata}>Login</button>
            <br></br><br></br>
            {/* <a href='' id="ac" onClick={RG} >Create-Acount</a> */}
            </form>
        </div>
    </center>
  )
}

export default Loginpage 