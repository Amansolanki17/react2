import React from 'react'
import './Hadder.css'
import Log from './LoginApi';
const All_Odl_Book = ({bookdata,Addnot,bookAddincart,BNO}) => {
     const i=0;
    
     
     
  return (
    <>
       <h1 style={{backgroundColor:"goldenrod",color:"green",fontFamily:"cursive"}}>All Old Books</h1>

    {bookdata.map((items,i)=>
 
 {

      if(items.cetegory==="oldbook")
        {
        
return(        
        <>
        <div class="card " style={{width:"15rem"}}>
  <img src={items.img} class="card-img-top" alt="..." className='ml-2' style={{width:"14.91rem",height:"12rem"}}></img>
  <div class="card-body"> 
    <p class="card-text">Name  : {items.name}</p>
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
    {/* <button id="ab" className='btn btn-info ml-3' style={{float:"right",position:'relative',bottom:"2.3rem",left:".8rem"}}>Buy Now</button> */}
    
  </div>
</div>
       
     
        </>
      )
      
    } 
}
 
    )}

    </>
   
    
  )

  
    }
  



export default All_Odl_Book
