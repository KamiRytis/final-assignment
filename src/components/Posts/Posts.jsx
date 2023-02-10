import { useContext } from "react";
import PostContext from "../../contexts/PostContext";
import Post from './Post';
import './Post.css';
import {Link} from 'react-router-dom';

const Posts = () => {
    const { posts } = useContext(PostContext);

    return (
        <>
            <div className="posts">
                <div>
                    <h2>Questions</h2>
                    <Link to='addPost'><button className="button-type1">Ask a question</button></Link>
                </div>
                {
                    posts ?
                        posts.map(post =>
                            <Post
                                key={post.postId}
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