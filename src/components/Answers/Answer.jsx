import { useContext } from "react";
import PostContext from "../../contexts/PostContext";
import UserContext from "../../contexts/UserContext";
import { Link } from 'react-router-dom';



const Answer = ({data}) => {

    const {users, loggedInUser}=useContext(UserContext)
    const {deletePost}=useContext(PostContext)

    const answerOwner = users.find(user=>user.id === data.userId)

    return (
        <>
            <div className="answerCard" id={data.id}>
                <div className="answerUserOptions">
                    <div className="answerCardUser">
                        <img src={answerOwner.avatar} alt="avatar" />
                        <div>
                            <p>{answerOwner.userName}</p>
                            <p>asked: 2022.02.10 11:55</p>
                        </div>
                    </div>
                    <div>
                        {
                            loggedInUser && loggedInUser.id === answerOwner.id &&
                            <>
                                <button className="button-type2" onClick={() => deletePost(data.id)}>delete</button>
                                <Link to={`/editPost/${data.id}`}><button className="button-type2">edit</button></Link>
                            </>
                        }
                    </div>
                </div>
                <div className="answerContent">
                    <p>{data.content}</p>
                    <button className="button-type2">Like</button>
                    <button className="button-type2">Dislike</button>
                </div>
            </div>
        </>
    );
}

export default Answer;