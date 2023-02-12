import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import UserPage from "../User/UserPage";

const Header = () => {
    const {loggedInUser}= useContext(UserContext);

    return ( 
    <> 
        <header className="header">
            <Link to='/'>
                <div className="companyInitials">
                    <img src="https://botw-pd.s3.amazonaws.com/qa1.png" alt="logo" />
                    <h3>SEEK THE ANSWER</h3>
                </div>
            </Link>
            
            {
                loggedInUser?
                <UserPage /> :
                <div className="headerMenu">
                    <Link to='/login'><button className="button-type1">Log in</button></Link>
                    <Link to='/register'><button className="button-type1">Register</button></Link>
                </div>
            }
        </header>
        <Outlet />
    </> 
    );
}
 
export default Header;