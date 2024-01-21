 import React from 'react'
 
 const Usersetting = ({EUU,MO,HP}) => {
   return (
    <p>
     <button id="bor" style={{width:"rem"}} onClick={MO}><b id="t">🛍️</b><br></br><i id="l" style={{fontFamily:"cursive"}}>MY Order</i> </button>
    <button id="bor" style={{width:"25rem"}} onClick={HP}><br></br><b id="t" style={{marginRight:"19rem"}}>☎</b><br></br><i id="l" style={{fontFamily:"inherit",float:"right",position:"relative",bottom:"7rem",right:"4rem",fontWeight:"bolder"}}>Help center <br></br>24 X 7 Service</i> </button>
    
   </p>
   )
 }
 
 export default Usersetting