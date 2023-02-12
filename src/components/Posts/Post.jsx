import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import "./Post.css";
import { Link } from 'react-router-dom';
import PostContext from "../../contexts/PostContext";
import AnswerContext from "../../contexts/AnswerContext";

const Post = ({ data }) => {

    const { users, loggedInUser } = useContext(UserContext);
    const { deletePost, likesManaging } = useContext(PostContext);
    const {answers}=useContext(AnswerContext);

    const [likeCount, setLikeCount] = useState(data.numOfLikes);
    const [activeBtn, setActiveBtn] = useState("none");

    const postOwner = users.find(user => user.id === data.userId);

    const handleLike = (id) => {
        if (loggedInUser) {
            if (activeBtn === "none" || activeBtn === "dislike") {
                setLikeCount(likeCount + 1);
                setActiveBtn("like");
                const changedPost = {
                    numOfLikes: likeCount + 1
                }
                likesManaging(id, changedPost)
            } else {
                return;
            }
        }
    }
    const handleDislike = (id) => {
        if (loggedInUser) {
            if (activeBtn === "none" || activeBtn === "like") {
                setLikeCount(likeCount - 1);
                setActiveBtn("dislike");
                const changedPost = {
                    numOfLikes: likeCount - 1
                }
                likesManaging(id, changedPost)
            } else {
                return;
            }
        }
    }

    return (
        <>
            <div className="postCard" id={data.id}>
                <div className="postUserOptions">
                    <div className="postCardUser">
                        <img src={postOwner.avatar} alt="avatar" />
                        <div>
                            <p>{postOwner.userName}</p>
                            <p>{data.dateAsked}</p>
                        </div>
                    </div>
                    <div>
                        {
                            loggedInUser && loggedInUser.id === postOwner.id &&
                            <>
                                <button className="button-type2" onClick={() => deletePost(data.id)}>delete</button>
                                <Link to={`/editPost/${data.id}`}><button className="button-type2">edit</button></Link>
                            </>
                        }
                    </div>
                </div>
                <div className="postCardContent">
                    <Link to={`/postPage/${data.id}`}><h3>{data.title}</h3></Link>
                    <p>{data.content}</p>
                    {
                        loggedInUser ?
                        <>
                            <button className="button-type2" onClick={() => handleLike(data.id)}>Like</button>
                            <span>{likeCount}</span>
                            <button className="button-type2" onClick={() => handleDislike(data.id)}>Dislike</button>
                        </>
                        : 
                        <>
                            <span>votes:{likeCount}</span> <br />
                            <span>answers:{answers.filter(answer=>answer.postId===data.id).length}</span>
                        </>
                        
                    }
                </div>
            </div>
        </>
    );
}

export default Post;