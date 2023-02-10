import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import UserPage from "../User/UserPage";

const Header = () => {
    const {loggedInUser}= useContext(UserContext);

    return ( 
    <> 
        <header className="header">
            <div className="companyInitials">
                <img src="https://botw-pd.s3.amazonaws.com/qa1.png" alt="logo" />
                <h3>SEEK THE ANSWER</h3>
            </div>
            {
                loggedInUser?
                <UserPage /> :
                <div className="headerMenu">
                    <button className="button-type1"><Link to='/login'>Log in</Link></button>
                    <button className="button-type1"><Link to='/register'>Register</Link></button>
                </div>
            }
        </header>
        <Outlet />
    </> 
    );
}
 
export default Header;