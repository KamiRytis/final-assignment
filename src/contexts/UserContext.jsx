import {createContext, useState, useEffect } from "react";

const UserContext = createContext();


const UserProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser]= useState();
    const [users, setUsers]=useState([]);

    const getUsers = async () => {
        const usersFetched = await fetch("http://localhost:3000/users").then(res=>res.json());
        setUsers(usersFetched);
    }
    useEffect(()=>{
        getUsers()
    }, [])

    const addNewUser =(newUser)=>{
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers:{
                'Content-type': 'application/json; charset =UTF-8'
            },
            body:JSON.stringify(newUser)
        })
        setUsers([...users,newUser])
    }

    return ( 
        <UserContext.Provider 
            value={{
                users,
                loggedInUser,
                setLoggedInUser,
                addNewUser
            }}
        >
            {children}
        </UserContext.Provider>

    );
}
export {UserProvider}
export default UserContext;