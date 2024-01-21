
import React from 'react'
 import RecentBook from './RecentBook'
 import Oldbook from './Oldbook'
 import Newbook from './Newbook'
 import "./HomePage.css"
 
 const HomePage = ({bookdata, setAllNewBooks,setAllRecentBooks,setAllOldbok,logdata,setlogdata,Addnot,selectitem,bookAddincart,Removeitem,BNO,setselectbuyitem,selectlogindata,setselectlogindata,selectbookid,search}) => {
   return (
     <>
     <div style={{backgroundImage:"url('PP.webp')",width:"78rem",height:"16rem",backgroundSize:"cover",color:"yellowgreen",fontFamily:"monospace",fontSize:"3rem",marginTop:"rem"}}>
      <br></br>📖 E-Book Store
     </div>
     <RecentBook bookdata={bookdata} setAllRecentBooks={setAllRecentBooks} logdata={logdata} setlogdata={setlogdata} Addnot={Addnot} selectitem={selectitem} bookAddincart={bookAddincart} BNO={BNO} setselectbuyitem={setselectbuyitem} selectlogindata={selectlogindata} setselectlogindata={setselectlogindata} selectbookid={selectbookid} search={search}/>
     <Oldbook bookdata={bookdata} setAllOldbok={setAllOldbok} Addnot={Addnot} selectitem={selectitem} bookAddincart={bookAddincart} BNO={BNO} setselectbuyitem={setselectbuyitem} selectlogindata={selectlogindata} setselectlogindata={setselectlogindata} selectbookid={selectbookid} search={search}/>
     <Newbook bookdata={bookdata} setAllNewBooks={setAllNewBooks} Addnot={Addnot} selectitem={selectitem} bookAddincart={bookAddincart}  Removeitem={Removeitem} BNO={BNO} setselectbuyitem={setselectbuyitem} selectlogindata={selectlogindata} setselectlogindata={setselectlogindata} selectbookid={selectbookid} search={search}/>
     </>
   )
 }
 
 export default HomePage