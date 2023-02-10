import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import "./Post.css";
import { Link } from 'react-router-dom';

const Post = ({ data }) => {

    const { users, loggedInUser } = useContext(UserContext);

    const postOwner = users.find(user => user.id === data.userId);

    return (
        <>
            <div className="postCard">
                <div className="postUserOptions">
                    <div className="postCardUser">
                        <img src={postOwner.avatar} alt="avatar" />
                        <div>
                            <p>{postOwner.userName}</p>
                            <p>asked: 2022.02.10 11:55</p>
                        </div>
                    </div>
                    <div>
                        <button className="button-type2">delete</button>
                        <button className="button-type2">edit</button>
                    </div>
                </div>
                <div className="postCardContent">
                    <Link to='/question'><h3>{data.title}</h3></Link>
                    <p>{data.content}</p>
                    <button className="button-type2">Like</button>
                    <button className="button-type2">Dislike</button>
                </div>
            </div>
        </>
    );
}

export default Post;