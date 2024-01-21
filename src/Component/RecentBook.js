import React from 'react'
import './Hadder.css'
import Log from './LoginApi';
const RecentBook = ({bookdata,setAllNewBooks,Addnot,selectitem,bookAddincart,BNO,setAllRecentBooks}) => {
     let i=0;
    
     
     
  return (
    <>
    
    {bookdata && bookdata.map((items)=>
 
 {
    
        if(items.cetegory==="newbook" || items.cetegory==="oldbook")
        {
          if(i<=3)
          {
         i=i+1;
   
     
    
return(        
        <>
        <div class="card " style={{width:"15rem"}}>
  <img src={items.img} class="card-img-top" alt="..." className='ml-2' style={{width:"14.91rem"}}></img>
  <div class="card-body"> 
    <p class="card-text">Name : {items.name}</p>
    <p class="card-text">Pages : {items.page}</p>
    <p class="card-text">Authore : {items.authore}</p>
    <p class="card-text">Cetegory : {items.cetegory}</p>
    <p class="card-text">Price : {items.price}Rs.</p>
  
     
    {Log.map((e)=>{
 
       
 return(
  <>
  {e.email===("p") && (e.password)===("p") ?<>    <button id="ab" className='btn btn-danger' style={{position:"relative",right:"2.7rem"}} onClick={Addnot}>Add to cart </button>
  <button id="ab" className='btn btn-info ml-3' style={{float:"right",position:'relative',bottom:"2.3rem",left:".8rem"}} onClick={Addnot}>Buy Now</button>

</> : <><button id="ab" className='btn btn-danger' style={{position:"relative",right:"2.7rem"}} onClick={()=>bookAddincart(items.id)}>Add to cart </button>    <button id="ab" className='btn btn-info ml-3' style={{float:"right",position:'relative',bottom:"2.3rem",left:".8rem"}} onClick={BNO}>Buy Now</button>

</>}
  
  </>
 )
 
     })} 
     
  </div>

</div>

       
     
        </>
      )  
    }
}
 }
 
    )}

<>
<button className='btn btn-danger' style={{fontFamily:"monospace",width:"10rem",marginTop:"1rem"}} onClick={()=>setAllRecentBooks(true)}>Viwe All</button>

</>

    </>
    
   
    
  )

  
    }
  



export default  RecentBook


