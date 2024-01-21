import React, { useState } from 'react'
 
import swal from 'sweetalert';
import Books from './All_Book_Data';

const AdminEditbook = ({selectitem,AP,bookdata,setbookdata, adminallb}) => {
    const [id,setid]=useState(selectitem.id)
    const [name,setname]=useState(selectitem.name);
    const [price,setprice]=useState(selectitem.price);
    const [authore,setauthore]=useState(selectitem.authore);
    const [page,setpage]=useState(selectitem.page);
    const [img,setimg]=useState(selectitem.img);
    const [cetegory,setcetegory]=useState(selectitem.cetegory);
 
   const Updatebookinfo = () =>{
     const replacedata = {
        name,price,authore,page,
        img,cetegory
     }
     for(let i=0;i<Books.length;i++)
     {
        if(Books[i].id===selectitem.id)
        {
            Books[i].name=name;
            Books[i].price=price;
            Books[i].authore=authore;
            Books[i].page=page;
            Books[i].cetegory=cetegory;
            Books[i].img=img;
            break;

        }
     }
     console.log(Books)
     adminallb();
     swal("","Book Edit Succesfully","success")
     
   }
      
      
      
  return (
    <div>
       <center>
        <div className='box1'>
        <form id="f1">
        <center><h2 style={{color:"black",fontFamily:"monospace",fontWeight:"bolder"}} className='mt-1 mb-5'> ✍🏻 Update Book Information</h2></center>
        <input type='hidden' placeholder='  Enter the Book Name' id="i1" style={{float:"left",marginLeft:"3rem"}} value={id} onChange={e=>setname(e.target.value)}></input>

        <input type='text' placeholder='  Enter the Book Name' id="i1" style={{float:"left",marginLeft:"3rem"}} value={name} onChange={e=>setname(e.target.value)}></input>
        <input type='text' placeholder=' Enter the Book Price' id="i1" style={{float:"right",marginRight:"3rem"}} value={price} onChange={e=>setprice(e.target.value)}></input><br></br><br></br><br></br>
            <input type='text' placeholder='Enter the Authore' id="i1"  style={{float:"left",marginLeft:"3rem"}} value={authore} onChange={e=>setauthore(e.target.value)}></input>
            <input type='text' placeholder='Enter the page' id="i1" value={page} onChange={e=>setpage(e.target.value)}></input><br></br><br></br>
            <select  style={{float:"left",marginLeft:"3rem",marginTop:"1.5rem"}} value={cetegory} onChange={e=>setcetegory(e.target.value)}>
                <option>Select cetegory</option>
                <option value="newbook"> newbook</option>
                <option value="oldbook"> oldbook</option>

            </select>
            <br></br>
            <input type='type' placeholder='select image ' id="i1" value={img} onChange={e=>setimg(e.target.value)}></input><br></br><br></br>

            <button type='submit' className='btn btn-success mb-3' id="b" style={{fontFamily:"monospace",width:"10rem",marginRight:"5rem"}} onClick={()=>Updatebookinfo()}>Update</button>
            <button type='submit' className='btn btn-danger' style={{fontFamily:"monospace",width:"10rem"}} onClick={AP}>Cencle</button>

            <br></br><br></br>
</form>
    </div>
    </center>
    </div>
  )
}

export default AdminEditbook