import React from 'react'
import Log from './LoginApi'
import buybook from './BuyNowApi'
const Myorder = () => {
  const [l] = Log.filter(e=>e.email!=="p")
  return (
    <>
     <h1 style={{fontFamily:"monospace",color:"gray"}}>{`${l.name}`} Order's Inforamtion</h1>
      <table class="table mt-5">
  <thead class="thead-dark">
    <tr style={{backgroundColor:"black",color:"white",fontFamily:"cursive"}}>
      <th scope="col">SN.</th>
      <th scope="col">Images</th>
      <th scope="col">Order-ID</th>
      <th scope="col">UserName</th>
     
      <th scope="col">BookName</th>
      <th scope="col">Authore</th>
      <th scope="col">Price</th>
     
      <th scope="col">Payment Type</th>
    </tr>
  </thead>
  <tbody>
    {buybook.map((e,i)=>{
        {i=i-1}
      if(l.email===e.email)
      return(
        <>
         <tr style={{backgroundColor:"gray",fontFamily:"monospace"}}>
      <th scope="row">{i+1}</th>
       <td><img src={e.img} style={{width:"6rem",height:'3rem'}}/></td>
       <td>BOOK ORD-000{i+4}</td>
       <td>{e.uname}</td>
        
       <td>{e.bname}</td>
       <td>{e.authore}</td>
       <td>{e.price}RS</td>
        <td>{e.payment}</td>
    </tr>

        </>
      )
    })}
        
  </tbody>
</table>
 
    </>
  )
}

export default Myorder