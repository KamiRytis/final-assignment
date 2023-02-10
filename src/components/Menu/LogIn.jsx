import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const LogIn = () => {
    const [formInputs, setFormInputs] = useState({
        userName: "",
        password: ""
    })
    const [failedLogIn, setFailedLogIn] = useState(false);

    const { users, setLoggedInUser } = useContext(UserContext);
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const loggedInUser = users.find(user => user.userName === formInputs.userName && user.password === formInputs.password);
        if (loggedInUser) {
            setLoggedInUser(loggedInUser);
            navigation("/");
        } else {
            setFailedLogIn(true)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='userForm'>
                <h1>Please, Log in</h1>
                <input
                    type="text"
                    name="userName"
                    value={formInputs.userName}
                    placeholder="username..."
                    onChange={(e) => setFormInputs({ ...formInputs, userName: e.target.value })}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={formInputs.password}
                    placeholder="password..."
                    onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
                    required
                />
                <button type="submit">Log in</button>
                {
                    failedLogIn &&
                    <>
                        <span>Wrong log in details</span>
                        <br />
                        <img src="https://img.picturequotes.com/2/294/293718/you-shall-not-pass-quote-1.jpg" alt="imgpass" />
                    </>
                }
            </form>
        </>
    );
}

export default LogIn;