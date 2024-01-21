import React,{useState} from 'react'
import Log from './LoginApi';
import swal from 'sweetalert';
import buybook from './BuyNowApi';
 

const BuyNow = ({selectbuyitem,selectlogindata,HM}) => {
  
  
  const [bid,setid]=useState(selectbuyitem.id);
  const [img,setimg]=useState(selectbuyitem.img);
  const [bname,setbname]=useState(selectbuyitem.name);
  const [authore,setauthore]=useState(selectbuyitem.authore)
  
  const [uname,setusername]=useState(selectlogindata.name)
  const [price,setprice]=useState(selectbuyitem.price)
  const [email,setemail]=useState(selectlogindata.email)
    
  
 
 
 
  const [phone,setphone]=useState(selectlogindata.phone)
  const [country,setcountry]=useState()
  const [city,setcity]=useState("")
  const [state,setstate]=useState("")
  const [pincode,setpincode]=useState("")
  const [payment,setpayment]=useState("")
  const [landmark,setlandmark]=useState("")
   const [village,setvillage]=useState("")

   const orderitem = () =>{

    if(!country || !city || !state || !pincode || !payment ||!landmark ||!village)
   {
    return swal("","Require Fill All the Field","error");
   }
   const neworderdata = {
    bid,img,bname,authore,uname,price,email,phone,landmark,country,pincode,city,state,village,payment
   }
   buybook.push(neworderdata)
   console.log(buybook)
   swal("","your Order Succesfully Done","success")
   HM();
   

   }
  return (
    <center>
    <div className='box2'>
        <form id="f2">
            {/* <img src={img} className='lr'></img> */}
            <center><h2 style={{color:"black",fontFamily:"monospace",fontWeight:"bolder"}} className='mt-1 mb-5'>ADD Address</h2></center>
           
            <input type='hidden' placeholder='  Enter the  Name' id="i1" style={{float:"left",marginLeft:"3rem"}}  value={bid}></input>
        <input type='hidden' placeholder=' Enter the Email' id="i1" style={{float:"right",marginRight:"3rem"}} value={bname}></input>
        <input type='hidden' placeholder='Enter the Phone' id="i1"  style={{float:"left",marginLeft:"3rem"}} value={img}></input>
        <input type='hidden' placeholder='Enter the city' id="i1"   value={authore}></input>

        <input type='hidden' placeholder='  Enter the  Name' id="i1" style={{float:"left",marginLeft:"3rem"}}  value={price}></input>
 
        <input type='hidden' placeholder='Enter the city' id="i1"   value={authore}></input>
       
            
         
             <input type='text' placeholder='  Enter the  Name' id="i1" style={{float:"left",marginLeft:"3rem"}}  value={uname}></input>
        <input type='email' placeholder=' Enter the Email' id="i1" style={{float:"right",marginRight:"3rem"}} value={email}></input><br></br><br></br><br></br>
        <input type='number' placeholder='Enter the Phone' id="i1"  style={{float:"left",marginLeft:"3rem"}} value={phone}></input>

           
                  
           

        <input type='text' placeholder='Enter the city' id="i1"   value={city} onChange={e=>setcity(e.target.value)}></input>
        <br></br><br></br><br></br>
        
        <input type='text' placeholder='  Enter the  village' id="i1" style={{float:"left",marginLeft:"3rem"}}  value={village} onChange={e=>setvillage(e.target.value)}></input>
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
 
        <button type='submit' className='btn btn-success mb-3' id="b" style={{fontFamily:"monospace",width:"10rem",marginRight:"5rem"}} onClick={orderitem}>Order Now</button>
        <button type='submit' className='btn btn-danger' style={{fontFamily:"monospace",width:"10rem"}} onClick={HM}>Cencle</button>

        <br></br><br></br>
        
         
        </form>
</div>
</center>
  )
}

export default BuyNow