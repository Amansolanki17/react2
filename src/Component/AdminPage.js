import React,{useState} from 'react'
import './Adminhome.css'
import AdminAddbooks from './AdminAddbooks'
const AdminPage = ({adminaddb,adminallb,adminallord,logoutfun}) => {

 
 
  return (
    <p>
     <button id="bor" onClick={adminaddb}><b id="t">➕</b><br></br><i id="l">Add_Books</i></button>
     <button id="bor" onClick={adminallb}><b id="t">📚</b><br></br><i id="l">All_Books</i> </button>
     <button id="bor" onClick={adminallord}><b id="t">🛃</b><br></br><i id="l">ALL_Order's</i> </button>
     <button id="bor" onClick={logoutfun}><b id="t">↪</b><br></br><i id="l">Logout</i></button>
    </p>
  )
  
}

export default AdminPage