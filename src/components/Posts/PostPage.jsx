import { useContext } from "react";
import { useParams } from "react-router-dom";
import PostContext from "../../contexts/PostContext";
import Post from './Post';


const PostPage = () => {
    const { id } = useParams();

    const { posts } = useContext(PostContext)

    const selectedPost = posts.find(post => post.id.toString() === id)    

    return (
        <>
            <Post
                key={selectedPost.id}
                data={selectedPost}
            />
        </>
    );
}

export default PostPage;