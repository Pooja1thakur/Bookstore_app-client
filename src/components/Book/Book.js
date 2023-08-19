import { Button } from '@mui/material';
import React from 'react'
import './Book.css'
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Book = (props) => {
const history=useNavigate();
const { _id,name,author,description,price,image}=props.book;

const deleteHandler=async()=>{

await axios
 .delete(`https://backend-go4k.onrender.com/books/${_id}`)
 .then(res=>res.data)
 .then(()=>history("/"))
.then(()=>history("/books"))
};



return (
  
    <div className='container'>
      <div className='card'>
      <img src={image} alt={name}/>
    <article>By {author}</article>
    <h3>{name}</h3>
    
    <p>{description}</p>
     <h3>Rs:- {price}</h3>
     <div className='btn'>
     <Button sx={{fontWeight:'bold'}} LinkComponent={Link} to={`/books/${_id}`} >Update</Button>
     <Button sx={{ fontWeight:'bold'}} onClick={deleteHandler} >Delete</Button>
     </div>
     </div>
    </div>
  )
}

export default Book;
