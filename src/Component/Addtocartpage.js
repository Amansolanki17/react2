import React, { useEffect, useState } from 'react'
 import cartpageapi from './addtocartpageapi'
import Log from './LoginApi';
import buybook from './BuyNowApi';
import swal from 'sweetalert';
 
const Addtocartpage = ({Removeitem,cartapi,selectbuyitem,selectlogindata,HM}) => {
    let pr =0;
 let p = new Boolean();
 const [ld] = Log.filter((e)=>e.email)
 let [uname,setuname]=useState(ld.name)
 let [email,setemail]=useState(ld.email)
 let [phone,setphone]=useState(ld.phone)
 const [country,setcountry]=useState()
 const [city,setcity]=useState("")
 const [state,setstate]=useState("")
 const [pincode,setpincode]=useState("")
 const [payment,setpayment]=useState("")
 const [landmark,setlandmark]=useState("")
  const [village,setvillage]=useState("")
 let [bid,setbid]=useState("")
 let [bname,setbname]=useState("")
 let [authore,setauthore]=useState("")
 let [img,setimg]=useState("")
 let [price,setprice]=useState("")
 
 

 if(ld.email==="p")
 {
  uname=""
  email=""
  phone=""
 }


  
const Addorder = () =>{
  
  if(!uname ||!email ||!phone ||!country ||!city ||!country ||!state ||!pincode ||!payment ||!landmark ||!village )
  {
    return swal("","All Field Fill Require","error")
  }
   for(let i=0;i<cartapi.length;i++)
   {
    if(cartapi[i].email===ld.email)
    {
      bid=cartapi[i].id;
      bname=cartapi[i].name;
      authore=cartapi[i].authore;
      img=cartapi[i].img;
      price=cartapi[i].price;
      let data = {
        bid,bname,authore,img,price,uname,email,phone,landmark,village,country,city,state,pincode,payment
       }
      
      buybook.push(data)
    }
    swal("","Order Successfully Done","success")
    HM();
    
   }
  
   for( let i=0;i<buybook.length;i++)
   {
    console.log(buybook[i])
   }
     {/* bid:0,
        img:"",
        bname:"",
        authore:"",
        uname:"",
        price:0,
        email:"",
        phone:"",
        landmark:"",
        country:"",city:"",
        state:"",pincode:"",
        payment:"",village:"" */}

    
}
  
 
   
    
  
  
   
  return (
    <div><table class="table" style={{marginTop:'6rem',backgroundColor:"black",width:"38.8rem",marginRight:"50rem"}}>
  <thead>
    <tr style={{fontFamily:"cursive",color:"white"}}>
              <th scope='col'>SN.</th>
             <th scope='col'>imgage</th>
             
                <th scope='col'>Name</th>
              
                <th scope='col'>Authore</th>
                
                 
                <th scope='col'>Price</th>
                <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>

 
  {cartapi.map((e,i)=>
  {
    {i=i-1}
   
   if(e.id!==0)
   {
    if(p)
    {
       if(ld.email===e.email)
      {
        
        pr+=parseInt(e.price);
          
         
    return(
  
    <tr style={{fontFamily:"monospace",backgroundColor:"gray",color:"black",fontSize:"1.3rem"}}>
      <th scope="row">{i+1}</th>
      
      <td><img src={e.img} style={{height:"3rem",width:"7rem"}}/></td>
     
      <td>{e.name}</td>
    
      <td>{e.authore}</td>

      
      <td  style={{}}>{e.price}</td>
      
      
      <td><button className='btn btn-sm' title='Remove' onClick={()=>Removeitem(e.sn)}>✖️</button></td>
      <hr></hr>
    </tr>
    )
      }
    }
   } 
  }
    
   
   
 
 

  )}
   
     
  </tbody>
  
</table>
<center><p style={{fontFamily:"monospace",color:"gray",fontSize:"1.5rem",marginRight:"27rem"}}>Total Price  : {pr}</p></center>

 <div>
 <div className='box2' style={{width:"1rem",marginBottom:"4rem"}}>
        <form id="f3" style={{width:"37rem",marginBottom:"4rem"}}>
        <center><h2 style={{color:"black",fontFamily:"monospace",fontWeight:"bolder"}} className='mt-1 mb-5'>ADD Address</h2></center>

            {/* <img src={img} className='lr'></img> */}
             
         
             <input type='text' placeholder='  Enter the  Name' id="i1" style={{float:"left",marginLeft:"3rem"}} value={uname} ></input>
        <input type='email' placeholder=' Enter the Email' id="i1" style={{float:"right",marginRight:"3rem"}} value={email}></input><br></br><br></br><br></br>
        <input type='number' placeholder='Enter the Phone' id="i1"  style={{float:"left",marginLeft:"3rem"}} value={phone}></input>

           
                  
           

        <input type='text' placeholder='Enter the city' id="i1" value={city} onChange={e=>setcity(e.target.value)}></input>
        <br></br><br></br><br></br>
        
        <input type='text' placeholder='  Enter the  village' id="i1" style={{float:"left",marginLeft:"3rem"}} value={village} onChange={e=>setvillage(e.target.value)}></input>
        <select value={state} onChange={e=>setstate(e.target.value)}>
            <option>Select State</option>
            <option value="MP"> MP</option>
            <option value="UP"> UP</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>

        </select>
 <br></br><br></br>
 <input type='text' placeholder=' Enter the Landmark' id="i1" style={{float:"left",marginLeft:"3rem",marginTop:"1.4rem"}} value={landmark} onChange={e=>setlandmark(e.target.value)}></input><br></br>
 <input type='number' placeholder=' Enter the pincode' id="i1" style={{float:"right",marginRight:"3rem",marginTop:"rem"}} value={pincode} onChange={e=>setpincode(e.target.value)}></input><br></br><br></br>
 <input type='text' placeholder=' Enter the Cuntry' id="i1" style={{float:"left",marginLeft:"3rem",marginTop:"1.5rem"}} value={country} onChange={e=>setcountry(e.target.value)}></input><br></br>
 <select value={payment} onChange={e=>setpayment(e.target.value)}>
            <option>select payment type</option>
            <option value="COD"> COD</option>
            <option value="Online"> Online</option>

        </select>

 
 



        {/* <input type='text' placeholder='Enter the Cetegory' id="i"></input> */}
       
        
       <br></br><br></br><br></br>
 
        <button type='submit' className='btn btn-success mb-3' id="b" style={{fontFamily:"monospace",width:"10rem",marginRight:"5rem"}} onClick={Addorder}>Order Now</button>
        <button type='submit' className='btn btn-danger' style={{fontFamily:"monospace",width:"10rem"}} onClick={HM}>Cencle</button>

        <br></br><br></br>
        
         
        </form>
</div>
 </div>
    </div>
  )
}

export default Addtocartpage