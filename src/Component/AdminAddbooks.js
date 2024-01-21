import React, { useState } from 'react'
import Books from './All_Book_Data'
import swal from 'sweetalert'
const AdminAddbooks = ({AP}) => {

    const [name,setname]=useState('');
    const [price,setprice]=useState('');
    const [authore,setauthore]=useState('');
    const [page,setpage]=useState('');
    const [im,setimg]=useState('');
    const [cetegory,setcetegory]=useState('');

    const addbook = () =>{
        if(!name ||!price || !authore ||!page ||!im ||!cetegory)
        {
            return swal("","All field Fill is require","error")
        }
        const id = Books.length+1
        let img = im.replace("C:\\fakepath\\","")
         const newadddata = {
            id,
        name,
        price,
        authore,
        page,
        img,
        cetegory,
        }
        Books.push(newadddata)
        console.log(Books)
        swal(`${name}`,"Book Added Successfully","success")
        AP();
    }
  return (
    <center>
        <div className='box1'>
            <form id="f1">
                {/* <img src={img} className='lr'></img> */}
                <center><h2 style={{color:"black",fontFamily:"monospace",fontWeight:"bolder"}} className='mt-1 mb-5'>ADD Books</h2></center>
               
                <input type='text' placeholder='  Enter the Book Name' id="i1" style={{float:"left",marginLeft:"3rem"}} value={name} onChange={e=>setname(e.target.value)}></input>
            <input type='number' placeholder=' Enter the Book Price' id="i1" style={{float:"right",marginRight:"3rem"}} value={price} onChange={e=>setprice(e.target.value)}></input><br></br><br></br><br></br>
            <input type='text' placeholder='Enter the Authore' id="i1"  style={{float:"left",marginLeft:"3rem"}} value={authore} onChange={e=>setauthore(e.target.value)}></input>
            <input type='number' placeholder='Enter the page' id="i1" value={page} onChange={e=>setpage(e.target.value)}></input><br></br><br></br>
            {/* <input type='text' placeholder='Enter the Cetegory' id="i"></input> */}
            <select  style={{float:"left",marginLeft:"3rem",marginTop:"1.5rem"}} value={cetegory} onChange={e=>setcetegory(e.target.value)}>
                <option>Select cetegory</option>
                <option value="newbook"> newbook</option>
                <option value="oldbook"> oldbook</option>

            </select>
            
           <br></br>
            <input type='file' placeholder='select image ' id="i1" value={im} onChange={e=>setimg(e.target.value)}></input><br></br><br></br>

            <button type='submit' className='btn btn-success mb-3' id="b" style={{fontFamily:"monospace",width:"10rem",marginRight:"5rem"}} onClick={addbook} >ADD</button>
            <button type='submit' className='btn btn-danger' style={{fontFamily:"monospace",width:"10rem"}} onClick={AP}>Cencle</button>

            <br></br><br></br>
            
             
            </form>
    </div>
    </center>
  )
}

export default AdminAddbooks