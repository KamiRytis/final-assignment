import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import "./Post.css";
import { Link } from 'react-router-dom';
import PostContext from "../../contexts/PostContext";

const Post = ({ data }) => {

    const { users, loggedInUser } = useContext(UserContext);
    const {deletePost} = useContext(PostContext);

    const postOwner = users.find(user => user.id === data.userId);

    return (
        <>
            <div className="postCard" id={data.id}>
                <div className="postUserOptions">
                    <div className="postCardUser">
                        <img src={postOwner.avatar} alt="avatar" />
                        <div>
                            <p>{postOwner.userName}</p>
                            <p>asked: 2022.02.10 11:55</p>
                        </div>
                    </div>
                    <div>
                        {
                            loggedInUser && loggedInUser.id === postOwner.id &&
                            <>
                                <button className="button-type2" onClick={()=> deletePost(data.id)}>delete</button>
                                <Link to={`/editPost/${data.id}`}><button className="button-type2">edit</button></Link>
                            </>
                        }
                    </div>
                </div>
                <div className="postCardContent">
                    <Link to={`/postPage/${data.id}`}><h3>{data.title}</h3></Link>
                    <p>{data.content}</p>
                    <button className="button-type2">Like</button>
                    <button className="button-type2">Dislike</button>
                </div>
            </div>
        </>
    );
}

export default Post;