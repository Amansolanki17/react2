import React, { useState } from 'react'
// import img from './Images/form.png'
import Hadder from './Hadder'
import Reg from './RegisterApi';
import Swal from 'sweetalert'
import swal from 'sweetalert';

const Register = ({Regdata,setRegdata,setRegistration,loginfunc,setLogins}) => {
    
    const [name,setname]=useState('');
    const [phone,setphone]=useState('');
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
     let p=0;
    const Register = e =>{
      if(!name || !email || !phone ||!password){
        return swal("","Require all Filed Fill","error")
      }else if(phone.length!==10)
      {
        return swal("","Plese Enter 10 Dijit mobile number","error")
      }else if(password.length<5)
      {
        return swal("","Plese Enter Atlest 5 Dijit Password","error")

      }
      let b = new Boolean();
      const [check] = Reg.filter((e)=>e.email===email || e.phone === phone ?p=true:b=false)
      if(p)
      {
        return swal("","this acount Alrady exists Plese Login","error")
      }
      
      
        
      const newRegdata = {
        name,phone,email,password
      }
      Regdata.push(newRegdata)
      setRegdata(Regdata)
      setLogins(true)
      setRegistration(false)
      swal(`${name}`,"Register Successfully","success")
      console.log(Regdata)
     
      
        
         
}
  return (
    
    <div>
        <center>
        <div className='box1'>
            <form id="f">
                {/* <img src={img} className='lr'></img> */}
                <center><h2 style={{color:"black",fontFamily:"monospace",fontWeight:"bolder"}} className='mt-3 mb-5'>Sing Up</h2></center>
               
                <input type='text' placeholder=' 👤 Enter the Name' id="i" value={name} onChange={e=>setname(e.target.value)}></input><br></br><br></br>
            <input type='number' placeholder='📞 Enter the Phone' id="i" value={phone} onChange={e=>setphone(e.target.value)}></input><br></br><br></br>
            <input type='email' placeholder='📨 Enter the Email' id="i" value={email} onChange={e=>setemail(e.target.value)}></input><br></br><br></br>
            <input type='password' placeholder='🔓 Enter the password' id="i" value={password} onChange={e=>setpassword(e.target.value)}></input><br></br><br></br>
            {p===1?<p>minimum length 5 of password</p>:console.log("jdj")}

            <button type='submit' className='btn btn-success mb-3' id="b" style={{fontFamily:"monospace"}} onClick={Register}>Register</button>
            <br></br><br></br>
            
             
            </form>
        </div>
    </center>
    </div>
  )
}

export default Register