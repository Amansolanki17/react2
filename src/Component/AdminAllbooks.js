import React from 'react'
import Books from './All_Book_Data'

const AdminAllbooks = ({deletebook,Editbookinfo,bookdata}) => {
  return (
    <div>
        <h1 style={{color:"gray",fontFamily:"monospace"}} className='mt-3'>All Book Information's</h1>
  
<table class="table mt-5">
  <thead class="thead-light" style={{height:"1rem"}}>
    <tr style={{backgroundColor:"black",color:"white",fontFamily:"cursive"}}>
      <th scope="col">SNo</th>
      <th scope="col">Images</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Page</th>
      <th scope="col">Authore</th>
      <th scope="col">Cetegory</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
     {bookdata.map((e,i)=>(<>
    <tr style={{backgroundColor:"gray",color:"black",fontFamily:"monospace"}}>
      <th scope="row">{i+1}</th>
      <td><img src={e.img} style={{width:"6rem",height:"3rem"}}/></td>
      <td>BooK-ID-00{e.id}</td>
      <td>{e.name}</td>
      <td>{e.price}RS</td>
      <td>{e.page}</td>
     
  
      <td>{e.authore}</td>
      <td>{e.cetegory}</td>
      <td><button className='btn btn-success' onClick={()=>deletebook(e.id)}>✖</button> &nbsp; <button className='btn btn-danger' onClick={()=>Editbookinfo(e.id)}>✍🏻</button></td>
      
    </tr>
    </>))}
  </tbody>
</table>
    </div>
  )
}

export default AdminAllbooks