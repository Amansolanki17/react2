import React,{useState} from 'react'
import './Hadder.css'
import All_Recent_Books from './All_Recent_Book'
import All_New_Books from './All_New_Book'
import HomePage from './HomePage'
import All_Odl_Book from './All_Odl_Book'
import Register from './Register'
import Loginpage from './Loginpage'
import Reg from './RegisterApi'
import Log from './LoginApi'
import { Logout } from './Logout'
import swal from 'sweetalert'
import AdminAddbooks from './AdminAddbooks'
import Usersetting from './Usersetting'

 
import Books from './All_Book_Data'
import Addtocartpage from './Addtocartpage'
import cartpageapi  from './addtocartpageapi'
import AdminPage from './AdminPage'
import AdminAllbooks from './AdminAllbooks'
import  {Adminorders}  from './Adminorders'
import AdminEditbook from './AdminEditbook'
import Edituserinfo from './Edituserinfo'
import Myorder from './Myorder'
import BuyNow from './BuyNow'
import Helpline from './Helpline'
 
 
 


const Hadder = () => {
  const[Regdata,setRegdata]=useState(Reg)
  const[logdata,setlogdata]=useState(Log)
  const [AllRecentBooks,setAllRecentBooks]=useState(false)
  const [AllNewBooks,setAllNewBooks]=useState(false)
  const [AllOldbok,setAllOldbok]=useState(false)
  const [homepage,sethomepage]=useState(false);
  const [Registeration,setRegistration]=useState(false)
  const [Logins,setLogins]=useState(false);
  const [logout,setlogout]=useState(false)
  const [selectitem,setselectitem]=useState('');
  const [cartdata,setcartdata]=useState(false)
  const [cartapi,setcartapi]=useState(cartpageapi)
  const [cartpage,setcartpage]=useState(false)
  const [adminpage,setadminpage]=useState(false) 
  const [adminaddbooks,setadminaddbooks]=useState(false)
  const [adminallbooks,setadminallbooks]=useState(false)
  const [adminorders,setadminorders]=useState(false)
  const [bookdata,setbookdata]=useState(Books)
  const [admineditbook,setadmineditbook]=useState(false)
  const [usersetting,setusesetting]=useState(false)
  const [editus,setedituser]=useState(false)
 const [selectbuyitem,setselectbuyitem]=useState("")
 const [selectlogindata,setselectlogindata]=useState("")
const [myorder,setmyorder]=useState(false)
const [buynow,setbuynow]=useState(false)
const [help,sethelp]=useState(false)
const [additem,setadditem]=useState(false)
const [selectaddtocartdata,setselectaddtocartdata]=useState();
let [serch,setserch]=useState("");


  




  
 
const bookAddincart = (i) =>{
const [b] = Books.filter((e)=>e.id===i)
setselectaddtocartdata(b)
const [em] = Log.filter((e)=>e.email!=="p")
const sn = cartapi.length;
const id = b.id;
const name = b.name;
const price=b.price;
const authore = b.authore;
const img = b.img;
const cetegory = b.cetegory;
const email = em.email;

const newd = {
  sn,id,name,price,authore,img,cetegory,email
}
cartapi.push(newd)
console.log(cartapi)
swal(`${name}`,"Book Add succesfully in cart","success")
 
 
 
   
  
}
  
  const BR = () =>{
    setAllNewBooks(false)
    setAllRecentBooks(true);
    setAllOldbok(false)
    sethomepage(false)
    setRegistration(false)
    setLogins(false)
    setcartpage(false)
    setadminpage(false)
    setadminaddbooks(false)
    setadminallbooks(false)
    setadminorders(false)
    setadmineditbook(false)
    setusesetting(false)
    setedituser(false)
    setmyorder(false)
    setbuynow(false)
    sethelp(false)
    
  }
  const BN = () =>{
     setAllOldbok(false)
    setAllRecentBooks(false)
    sethomepage(false)
    setAllNewBooks(true)
    setRegistration(false)
    setLogins(false)
    setcartpage(false)
    setadminpage(false)
    setadminaddbooks(false)
    setadminallbooks(false)
    setadminorders(false)
    setadmineditbook(false)
    setusesetting(false) 
    setedituser(false)
    setmyorder(false)
    setbuynow(false)
    sethelp(false)
   
  }
  const HM = ()=>{
    setAllNewBooks(false)
    setAllRecentBooks(false)
    setAllOldbok(false)
    sethomepage(true)
    setRegistration(false)
    setLogins(false)
    setcartpage(false)
    setadminpage(false)
    setadminaddbooks(false)
    setadminallbooks(false)
    setadminorders(false)
    setadmineditbook(false)
    setusesetting(false)
    setedituser(false)
    setmyorder(false)
    setbuynow(false)
    sethelp(false)
    
   
    
  }
  const OB = () =>{
    sethomepage(false);
    setAllNewBooks(false)
    setAllRecentBooks(false)
    setAllOldbok(true)
    setRegistration(false)
    setLogins(false)
    setcartpage(false)
    setadminpage(false)
    setadminaddbooks(false)
    setadminallbooks(false)
    setadminorders(false)
    setusesetting(false)
    setadmineditbook(false)
    setedituser(false)
    setmyorder(false)
    sethelp(false)
    setbuynow(false)
     
    
  }
  const RG = () =>{
    sethomepage(false);
    setAllNewBooks(false)
    setAllRecentBooks(false)
    setAllOldbok(false)
    setRegistration(true)
    setLogins(false)
    setcartpage(false)
    setadminpage(false)
    setadminaddbooks(false)
    setadminallbooks(false)
    setadminorders(false)
    setadmineditbook(false)
    setusesetting(false)
    setedituser(false)
    setbuynow(false)
   
    setmyorder(false
      )
      sethelp(false)
  }
  const loginfunc = () =>{
    sethomepage(false);
    setAllNewBooks(false)
    setAllRecentBooks(false)
    setAllOldbok(false)
    setadditem(false)
    setRegistration(false)
    setLogins(true)
    setlogout(false)
    setcartpage(false)
    setadminpage(false)
    setadminaddbooks(false)
    setadminallbooks(false)
    setadminorders(false)
    setusesetting(false)
    setedituser(false)
    setmyorder(false)
    setbuynow(false)
    sethelp(false)
 
   
    
  }
 
 const logoutfun = () =>{
  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setRegistration(false)
  setLogins(false)
  setlogout(true)
  setcartpage(false)
  setadminpage(false)
  setadminaddbooks(false)
  setadminallbooks(false)
  setadminorders(false)
  setadmineditbook(false)
  setusesetting(false)
  setedituser(false)
  setmyorder(false)
  setbuynow(false)
  sethelp(false)
  
  
 }
 const AC = () =>{
  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setRegistration(false)
  setLogins(false)
  setlogout(false)
  setcartpage(true)
  setadminpage(false)
  setadminaddbooks(false)
  setadminallbooks(false)
  setadminorders(false)
  setadmineditbook(false)
  setusesetting(false)
  setedituser(false)
  setmyorder(false)
  sethelp(false)
   
  setbuynow(false)
 }
 const AP = () =>{
  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setRegistration(false)
  setLogins(false)
  setlogout(false)
  setcartpage(false)
  setadminpage(true)
  setadminaddbooks(false)
  setadminallbooks(false)
  setadminorders(false)
  setadmineditbook(false)
  setusesetting(false)
  setedituser(false)
  setmyorder(false)
  setbuynow(false)
  sethelp(false)
  
 }
 const adminaddb = () =>{
  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setRegistration(false)
  setLogins(false)
  setlogout(false)
  setcartpage(false)
  setadminpage(false)
  setadminaddbooks(true)
  setadminallbooks(false)
  setadminorders(false)
  setadmineditbook(false)
  setusesetting(false)
  setedituser(false)
  setmyorder(false)
  setbuynow(false)
  sethelp(false)
 
 }
 const adminallord = () =>{
  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setRegistration(false)
  setLogins(false)
  setlogout(false)
  setcartpage(false)
  setadminpage(false)
  setadminaddbooks(false)
  setadminallbooks(false)
  setadminorders(true)
  setadmineditbook(false)
  setusesetting(false)
  setedituser(false)
  setmyorder(false)
  setbuynow(false)
  sethelp(false)
 
 }
 const adminallb = () =>{
  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setRegistration(false)
  setLogins(false)
  setlogout(false)
  setcartpage(false)
  setadminpage(false)
  setadminaddbooks(false)
  setadminallbooks(true)
  setadminorders(false)
  setadmineditbook(false)
  setusesetting(false)
  setedituser(false)
  setmyorder(false)
  setbuynow(false)
  sethelp(false)
 
   
 }

 const Removeitem = (id) =>{
  const filteritem = cartapi.filter((e)=>e.sn!==id)
  setcartapi(filteritem)

 }
 const Addnot = () =>{
  swal("","You'r not Login Plese Login First","error")
 }


 const deletebook = (id) =>{
 const filterdata = bookdata.filter((e)=>e.id!==id)

setbookdata(filterdata)
 
 }
 const Editbookinfo = (id) =>{

  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setRegistration(false)
  setLogins(false)
  setlogout(false)
  setcartpage(false)
  setadminpage(false)
  setadminaddbooks(false)
  setadminallbooks(false)
  setadminorders(false)
  setusesetting(false)
  setedituser(false)
  setmyorder(false)
  setbuynow(false)
  sethelp(false)
  setadmineditbook(true)
  const [ld] = Books.filter((e)=>e.id===id)
  setselectitem(ld)

  

  
   
 }
 const US = () =>{
  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setRegistration(false)
  setLogins(false)
  setlogout(false)
  setadditem(false)
  setcartpage(false)
  setadminpage(false)
  setadminaddbooks(false)
  setadminallbooks(false)
  setadminorders(false)
  setusesetting(true)
  setedituser(false)
  setbuynow(false)
  setmyorder(false)
  sethelp(false)

 }
 
 const MO = () =>{
  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setRegistration(false)
  setLogins(false)
  setlogout(false)
  setadditem(false)
  setcartpage(false)
  setadminpage(false)
  setadminaddbooks(false)
  setadminallbooks(false)
  setadminorders(false)
  setusesetting(false)
  setedituser(false)
  setmyorder(true)
  setbuynow(false)
  sethelp(false)

 }
 const EUU = () =>{
  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setRegistration(false)
  setLogins(false)
  setlogout(false)
  setcartpage(false)
  setadminpage(false)
  setadditem(false)
  setadminaddbooks(false)
  setadminallbooks(false)
  setadminorders(false)
  setusesetting(false)
  setedituser(true)
  setmyorder(false)
  setbuynow(false)
  sethelp(false)

 }
 const BNO = (id) =>{
  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setRegistration(false)
  setLogins(false)
  setlogout(false)
  setadditem(false)
  setcartpage(false)
  setadminpage(false)
  setadminaddbooks(false)
  setadminallbooks(false)
  setadminorders(false)
  setusesetting(false)
  setedituser(false)
  setmyorder(false)
  setbuynow(true)
  sethelp(false)
  
  const [bdata] = Books.filter((e)=>e.id===e.id)
  console.log(bdata)
  setselectbuyitem(bdata)
 
  const [ld] = Log.filter((e)=>e.email!=="p")
  
  setselectlogindata(ld)
   

 }
 const selectbookid = () =>{

 }
 const HP = () =>{
  sethomepage(false);
  setAllNewBooks(false)
  setAllRecentBooks(false)
  setAllOldbok(false)
  setadditem(false)
  setRegistration(false)
  setLogins(false)
  setlogout(false)
  setcartpage(false)
  setadminpage(false)
  setadminaddbooks(false)
  setadminallbooks(false)
  setadminorders(false)
  setusesetting(false)
  setedituser(false)
  setmyorder(false)
  setbuynow(false)
  sethelp(true)
 }
  
  const p = "p";
  
  return (
    
    <center>
      

       <center> 
        <form class="">
          
          <button className='p' style={{marginRight:"10rem",border:"none",fontSize:"1.7rem",backgroundColor:"white"}}onClick={AC}>🛒</button>
          <input type='text' placeholder='Search' id="inps" onChange={e=>setserch(e.target.value)}></input> &nbsp; <button type='submit' className='btn btn-info btn-sm p'>🔍</button><>
         </>
    
    
   

{Log.map((e)=>{

if(e.email==="p"){

  return(
 <>
        
 {<> <button className='btn btn-success mt-1 p' style={{fontFamily:"monospace"}} onClick={RG}>Register</button> <button className='btn btn-danger mt-1 p' style={{fontFamily:"monospace"}} onClick={loginfunc}>Login</button></>}
 
 </>
  )
}

})}

 
<>

 
</>
  
 
{logdata.map((e)=>{
 
  if(e.email!=="p"){

    return(
      <>
      {<> <button className='btn btn-success mt-1p' style={{fontFamily:"monospace",marginLeft:"2rem"}} >👤 {e.name}</button> <button className='btn btn-danger mt-1 p' style={{fontFamily:"monospace",marginLeft:"2rem"}} onClick={logoutfun}>Logout</button></>}
             
      </>
    )
  }

})}
<>

 
</>
 

 
 
    

 
        </form>
     
        </center>
         <div><nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={HM}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn" href="#" onClick={BR}>Recent_Books</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={BN}>New_Books</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={OB}>Old_Books</a>
          </li>
          <li class="nav-item">
            {Log.map((e)=>{
              if(e.email==="admin@gmail.com" && e.password==="Admin")
              {
              return(
            <a class="nav-link p" href="#" style={{fontSize:"",marginLeft:"50rem"}} onClick={AP}>⚙</a>
              )
              }else if(e.email!=="p" && e.password!=="p")
              {
                return(
                  <a class="nav-link p" href="#" style={{fontSize:"",marginLeft:"50rem"}} onClick={US}>⚙</a>

                )
              }
            })}

          </li>
          <li class="nav-item dropdown">
           
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

              </ul>

          </li>
          <li class="nav-item">
            
           </li>
        </ul>
        
      </div>
    </div>
  </nav></div>
  {!AllNewBooks && !AllRecentBooks && !AllOldbok && !Registeration && !Logins && !logout && !cartpage &&   !adminpage && !adminaddbooks && !adminallbooks && !adminorders && !admineditbook && !usersetting  && !myorder && !editus && !buynow && !help &&(
    <>
    <HomePage bookdata={bookdata}  setAllNewBooks={setAllNewBooks}
    setAllRecentBooks={setAllRecentBooks}
    setAllOldbok={setAllOldbok} logdata={logdata} setlogdata={setlogdata}  Addnot={Addnot} selectitem={selectitem} bookAddincart={bookAddincart} Removeitem={Removeitem} BNO={BNO} selectbuyitem={selectbuyitem} setselectbuyitem={setselectbuyitem} selectlogindata={selectlogindata} setselectlogindata={setselectlogindata} selectbookid={selectbookid} serch={serch}/>
    </>
  ) 

  }
  {AllRecentBooks && (
    
    <>
    <All_Recent_Books bookdata={bookdata} Addnot={Addnot} bookAddincart={bookAddincart} BNO={BNO} serch={serch}/>
   
    </>
  )}
  {
      AllNewBooks && (
      <>
      <All_New_Books bookdata={bookdata} Addnot={Addnot} bookAddincart={bookAddincart} BNO={BNO}/>
      </>
    )
  }
  {AllOldbok && (
    <>
    <All_Odl_Book bookdata={bookdata} Addnot={Addnot} bookAddincart={bookAddincart} BNO={BNO}/>
    </>
  )

  }
  {
    Registeration &&(
      <>
      <Register Regdata={Regdata} setRegdata={setRegdata} setRegistration={setRegistration} loginfunc={loginfunc}  setLogins={setLogins}/>
      </>
    )
  }
  
   { Logins && (
    <>
    <Loginpage   setRegistration={setRegistration} setLogins={setLogins} Regdata={Regdata} logdata={logdata} setlogdata={setlogdata} AP={AP} RG={RG}/>
    
    </>
   )

   }
   {logout &&(
    <>
    <Logout  logdata={logdata} setlogdata={setlogdata} setlogout={setlogout}/>
    </>
   )}
    {cartpage &&(
    <>
    <Addtocartpage cartapi={cartapi} Removeitem={Removeitem} selectbuyitem={selectbuyitem} selectlogindata={selectlogindata} sethomepage={sethomepage} HM={HM}/>
    </>
   )}
   {adminpage && (
    <>
    <AdminPage adminaddb={adminaddb} adminallb={adminallb} adminallord={adminallord} logoutfun={logoutfun} />
    </>
   )}
   {adminaddbooks &&  (
    <>
    <AdminAddbooks  AP={AP} />
    </>
   )}
   {adminallbooks && (
    <>
    <AdminAllbooks deletebook={deletebook} Editbookinfo={Editbookinfo} bookdata={bookdata} />
    </>
   )}
    {adminorders && (
    <>
    <Adminorders/>
    </>
   )}
   {admineditbook &&(
    <>
    <AdminEditbook selectitem={selectitem} AP={AP} bookdata={bookdata} setbookdata={setbookdata}  adminallb={ adminallb}/>
    </>
   )

   }
   {usersetting && (
    <>
    <Usersetting EUU={EUU} MO={MO} HP={HP}/>
    </>
   )}
    
   {myorder && (
    <>
    <Myorder/>
    </>
   )
    
   }
   {editus && (
    <><Edituserinfo/></>
   )}
   {
    buynow &&
    (
      <><BuyNow selectbuyitem={selectbuyitem} selectlogindata={selectlogindata} HM={HM}/></>
    )
   }
     {
      help && (
        <>
        <Helpline/>
        </>
      )
     }
    
      
  </center>
 
  
  )
  
}

export default Hadder