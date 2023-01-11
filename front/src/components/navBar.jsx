import { HodiContext } from './Context';
import { useContext } from 'react';

const NavBar = () => {

    const logOut=()=>{

        localStorage.removeItem('token');

    }
   

    return ( 

        <div className='row r1'>

                <div className='col'> 

                    
                    <button><a href="/">BOOKLIY</a></button>
                    <button><a href="/logIn">Log In</a></button>
                    <button><a href="/signUp">Sign up</a></button>
                    <button onClick={()=>logOut()}><a href="/logIn">Log out</a></button>
                </div>     
            </div>   

     );
}
 
export default NavBar;