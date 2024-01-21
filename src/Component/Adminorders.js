import React from 'react'
import buybook from './BuyNowApi'

export const Adminorders = () => {
  return (
    <center>
      <h1 style={{fontFamily:"monospace",color:"gray"}}>All Order's Inforamtion</h1>
      <table class="table mt-5">
  <thead class="thead-dark">
    <tr style={{backgroundColor:"black",color:"white",fontFamily:"cursive"}}>
      <th scope="col">SN.</th>
      <th scope="col">Images</th>
      <th scope="col">Order-ID</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">BookName</th>
      <th scope="col">Authore</th>
      <th scope="col">Price</th>
      <th scope="col">Address</th>
      <th scope="col">Payment Type</th>
    </tr>
  </thead>
  <tbody>
    {buybook.map((e,i)=>{
{i=i-1}
        if(e.bid!==0)
        {

      return(
      <>

        <tr style={{backgroundColor:"gray",fontFamily:"monospace"}}>
      <th scope="row">{i+1}</th>
       <td><img src={e.img} style={{width:"6rem",height:'3rem'}}/></td>
       <td>BOOK ORD-000{i+4}</td>
       <td>{e.uname}</td>
       <td>{e.email}</td>
       <td>{e.phone}</td>
       <td>{e.bname}</td>
       <td>{e.authore}</td>
       <td>{e.price}RS</td>
       <td>{e.country},{e.state},{e.city},{e.village}<br></br>{e.state}-{e.pincode}</td>
       <td>{e.payment}</td>
    </tr>
      
      </>
      )
        }

})}
  
     
  </tbody>
</table>
 

    </center>
  )
}
export default Adminorders
