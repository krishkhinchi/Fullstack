import React, { useState } from 'react'

const Form = () => {

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const handleSubmit=(e)=>{
e.preventDefault();
const data=email;
const data1=password;

try{
    const response=backendAPI('localhost4000/register',post,data,data1);
    if(response ==200){
    }
}

}
  return (
    <div>
<form   onSubmit={handleSubmit} >
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    placeholder="Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Form