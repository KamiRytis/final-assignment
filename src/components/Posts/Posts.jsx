import { useContext } from "react";
import PostContext from "../../contexts/PostContext";
import Post from './Post';
import './Post.css';
import {Link} from 'react-router-dom';
import UserContext from "../../contexts/UserContext";

const Posts = () => {
    const { posts} = useContext(PostContext);
    const {loggedInUser}=useContext(UserContext);


    return (
        <>
            <div className="posts">
                <div>
                    <h2>Questions</h2>
                    <button>Sort</button>
                    <button>Filter answered questions</button>
                    {
                        loggedInUser && <Link to='addPost'><button className="button-type1">Ask a question</button></Link>
                    }
                </div>
                {
                    posts ?
                        posts.map(post =>
                            <Post
                                key={post.id}
                                data={post}
                            />
                        ) :
                        <span>loading...</span>
                }
            </div>
        </>
    );
}

export default Posts;