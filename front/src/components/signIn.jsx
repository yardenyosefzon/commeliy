import { useContext } from "react";
import { HodiContext } from "./Context";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {

    const{val,setVal,get}=useContext(HodiContext);

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{

        e.preventDefault(); 
        e.target.reset();
        let result=await axios.post('http://localhost:4000/api/users',val);
        localStorage.setItem('token',result.headers['x-auth-token']);
        setVal({});
        get();
        navigate("/")
        

    }

    return ( 
        <>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
        <div class="mb-3">

<label for="name" className="form-label">Name</label>
<input name='name' type="text" className="form-control" placeholder='name' onChange={(e)=>setVal({...val,name:e.target.value})}></input>

</div>

<div class="mb-3">

<label for="name" className="form-label">Email</label>
<input name='name' type="text" className="form-control" placeholder='name' onChange={(e)=>setVal({...val,email:e.target.value})}></input>

</div>

<div class="mb-3">

<label for="name" className="form-label">Password</label>
<input name='name' type="text" className="form-control" placeholder='name' onChange={(e)=>setVal({...val,password:e.target.value})}></input>

</div>
<button type="submit">Enter</button>
</form>

        
        </>

     );
}
 
export default SignUp;