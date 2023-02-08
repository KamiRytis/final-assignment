import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";


const LogIn = () => {
    const[formInputs, setFormInputs]= useState({
        userName:"",
        password:""
    })

    const {users, setLoggedInUser}=useContext(UserContext);
    const navigation= useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const loggedInUser=users.find(user=>user.userName===formInputs.userName && user.password===formInputs.password);
        if(loggedInUser){
            setLoggedInUser(loggedInUser);
            navigation("/");
        } else {
            return "Neteisingi prisijungimo duomenys"
        }
    }


    return ( 
    <>
        <form onSubmit={handleSubmit} className='logInForm'>
                <input 
                type="text" 
                name="userName" 
                value={formInputs.userName}
                placeholder="username..."
                onChange={(e)=> setFormInputs({...formInputs, userName:e.target.value})} 
                />
                <input 
                type="password" 
                name="password"
                value={formInputs.password}
                placeholder="password..." 
                onChange={(e)=> setFormInputs({...formInputs, password:e.target.value})} 
                />
                <button type="submit">Log in</button>
            </form>
    </> 
    );
}
 
export default LogIn;