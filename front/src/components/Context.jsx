import { createContext } from "react";
import { useState,useEffect } from "react";
import axios from "axios";

export const HodiContext=createContext();

const Context = props => {

    const {children}=props;

    const [comments,setComments]=useState([]);
    const [val,setVal]=useState({});

    const get=async(req,res)=>{

        let result=await axios.get('http://localhost:4000/api/comments')
       console.log( result.data);
                setComments([...result.data])

    }

    useEffect(() => {
        
        return async() => {

              get()  
            
        };

    }, []);

    return ( 
        <HodiContext.Provider value={{comments,val,setVal,get}} >

            {children}

        </HodiContext.Provider>
     );
}
 
export default Context;