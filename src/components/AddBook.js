import { FormLabel, TextField ,Box, Button,FormControlLabel,Checkbox} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const AddBook = () => {


 const history =useNavigate()

const [inputs,setInputs]=useState({
  name:'',
  description:'',
  price:'',
  author:'',
  image:''

})


const [checked,setchecked]=useState(false);




const handleChange=(e)=>{
setInputs((prevState)=>({
  ...prevState,
  [e.target.name]:e.target.value

}))
//console.log(e.target.name,"value",e.target.value)
};



const sendRequest=async()=>{
  await axios.post("https://backend-go4k.onrender.com/books",{
  name:String(inputs.name),
  author:String(inputs.author),
  description:String(inputs.description),
  price:Number(inputs.price),
  image:String(inputs.image),
  available:Boolean(checked)
}).then(res=>res.data);
}




const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(inputs,checked)
  sendRequest().then(()=>history('/books'))
}




  return (
<form onSubmit={handleSubmit}>
<Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignContent={'center'} alignSelf={'center'} marginLeft={'auto'} marginRight={'auto'} marginTop={5}>

<FormLabel>Name</FormLabel>
<TextField   value={inputs.name} onChange={handleChange}   margin='normal'  fullWidth variant='outlined' name="name" />

<FormLabel>Author</FormLabel>
<TextField value={inputs.author} onChange={handleChange}   margin='normal'  fullWidth variant='outlined' name="author" />

<FormLabel>Description</FormLabel>


<TextField 
value={inputs.description} onChange={handleChange} 
margin='normal' 
 fullWidth variant='outlined' 
 name="description"
  />


<FormLabel>Price</FormLabel>

<TextField value={inputs.price} onChange={handleChange}  type='number' margin='normal'  fullWidth variant='outlined' name="price" />


<FormLabel>Image</FormLabel>

<TextField value={inputs.image} onChange={handleChange}  margin='normal'  fullWidth variant='outlined' name="image" />
<FormControlLabel control={<Checkbox checked={checked} onChange={()=>setchecked(!checked)}  />} label="Available" />





<Button type='submit' variant='contained' >Add Book</Button>
</Box>


</form>
  )
}

export default AddBook
