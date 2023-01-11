import NavBar from '../components/navBar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Comments from '../components/comments';
import { useContext } from "react";
import { HodiContext } from "./Context";
import SignUp from './signIn';
import LogIn from './logIn';

const HodiApp = () => {

    const {comments}=useContext(HodiContext);

    return ( 
        <>
        <div className='c'>
            <NavBar/>

            
            <BrowserRouter>
            
                <Routes>

                    <Route path='/' element={<Comments/>}/>
                    <Route path='/signUp' element={<SignUp/>}/>
                    <Route path='/logIn' element={<LogIn/>}/>

                </Routes>

            </BrowserRouter>
        </div>
        </>
     );
}
 
export default HodiApp;