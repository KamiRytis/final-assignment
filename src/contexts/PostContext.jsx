import {createContext, useEffect, useState } from "react";

const PostContext = createContext();

const PostProvider = ({children}) => {
    const [posts, setPosts]=useState([]);

    const getPosts = async ()=>{
        const postsFetched =await fetch("http://localhost:3000/posts").then(res=>res.json());
        setPosts(postsFetched)
    }

    useEffect(()=>{
        getPosts()
    },[])

    const addPost = (newPost)=>{
        fetch('http://localhost:3000/posts/',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json; charset =UTF-8'
            },
            body: JSON.stringify(newPost)
        })
        .then(res=>res.json())
        setPosts([...posts, newPost])
    }

    const deletePost = (id)=>{
        fetch(`http://localhost:3000/posts/${id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        setPosts(posts.filter(post=>post.id !== id));
    }

    const editPost = (id,updatedPost)=>{
        fetch(`http://localhost:3000/posts/${id}`,{
            method: "PATCH",
            body: JSON.stringify(updatedPost),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
        })
        setPosts(posts.map(post=>post.id.toString() === id ? {...post, ...updatedPost}:post))
    }

    const likesManaging = (id,changedPost)=>{
        fetch(`http://localhost:3000/posts/${id}`,{
            method: "PATCH",
            body: JSON.stringify(changedPost),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
        })
        setPosts(posts.map(post=>post.id.toString() === id ? {...post, ...changedPost}:post))
    }

    return ( 
        <PostContext.Provider 
            value={{
                posts,
                addPost,
                deletePost,
                editPost,
                likesManaging
            }}
        >
            {children}
        </PostContext.Provider>

    );
}
export {PostProvider}
export default PostContext;