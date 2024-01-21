import React, { useState } from 'react'
import swal from 'sweetalert'
import Log from './LoginApi'

export const Logout = ({logdata,setlogdata,setlogout}) => {

  
 const newd ={
   name:"p",
   phone:"p",
   email:"p",
   password:"p"
    
 }
    for(let i=0;i<Log.length;i++)
    {
        if(Log[0])
        {
            Log.splice(i,1,newd)
            break;
        }

    }
    setlogdata(Log)
    swal("Logout","user Logout successfully","success")
   
    setlogout(false)
    console.log(Log+"jsndbsd")

  return (
    <div>
     

    </div>
  )
}
