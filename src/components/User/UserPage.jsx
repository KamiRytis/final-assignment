import {useNavigate} from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';


const UserPage = () => {
    const {loggedInUser, setLoggedInUser}=useContext(UserContext);
    const navigation = useNavigate();

    const logOutUser =()=>{
        setLoggedInUser(null);
        navigation("/");
    }

    return ( 
    <>
        <div>
            <div className='userCard'>
                <div className='userImg'>
                    <img src={loggedInUser.avatar} alt="avatarImg" />
                </div>
                <div className='userOption'>
                    <span>{loggedInUser.userName}</span>
                    <button onClick={()=>logOutUser()}>Log Out</button>
                </div>
                
            </div>
        </div>
    </> );
}
 
export default UserPage;