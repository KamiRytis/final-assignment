import {createContext, useEffect, useState } from "react";

const PostContext = createContext();

const PostProvider = ({children}) => {
    const [posts, setPosts]=useState([])

    const getPosts = async ()=>{
        const postsFetched =await fetch("http://localhost:3000/posts").then(res=>res.json());
        setPosts(postsFetched)
    }

    useEffect(()=>{
        getPosts()
    },[])

    const addPost = (newPost)=>{
        fetch('http://localhost:3000/posts',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json; charset =UTF-8'
            },
            body:JSON.stringify(newPost)
        })
        setPosts([...posts, newPost])
    }

    return ( 
        <PostContext.Provider 
            value={{
                posts,
                addPost
            }}
        >
            {children}
        </PostContext.Provider>

    );
}
export {PostProvider}
export default PostContext;