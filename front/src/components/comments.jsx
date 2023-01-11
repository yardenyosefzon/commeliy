import { useContext } from "react";
import { HodiContext } from "./Context";
import axios from "axios";

const Comments = () => {

    const {comments,val,setVal,get}=useContext(HodiContext);

    const handleSubmit=async(e)=>{

        e.preventDefault(); 
        e.target.reset();

         let result=await axios.post('http://localhost:4000/api/comments',val,{

            headers:{'x-auth-token':localStorage.getItem('token')}

         });
    
         setVal({});
         get();

    }
    return ( 
    
        <div className="flex">
       <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Body</th>
                </tr>    
                {comments.map(comment=><tr><th>{comment.name}</th><th>{comment.body}</th></tr>)}

            </table>  
        </div>  
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>

            <div class="mb-3">

            <label for="name" className="form-label">Content</label>
            <input name='name' type="text" className="form-control" placeholder='name' onChange={(e)=>setVal({...val,body:e.target.value})}></input>

            </div>
            <button type="submit">Enter</button>
            </form>
        </div>
        </div>
     );
}
 
export default Comments;