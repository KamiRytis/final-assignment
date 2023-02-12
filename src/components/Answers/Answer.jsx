import { useContext} from "react";
import UserContext from "../../contexts/UserContext";
import AnswerContext from "../../contexts/AnswerContext";
import "./Answer.css";




const Answer = ({data}) => {

    const {users, loggedInUser}=useContext(UserContext);
    const {deleteAnswer}=useContext(AnswerContext);

    const answerOwner = users.find(user=>user.id === data.userId)


    return (
        <>
            <div className="answerCard" id={data.id}>
                <div className="answerUserOptions">
                    <div className="answerCardUser">
                        <img src={answerOwner.avatar} alt="avatar" />
                        <div>
                            <p>{answerOwner.userName}</p>
                            <p>{data.dateCreated}</p>
                        </div>
                    </div>
                    <div>
                        {
                            loggedInUser && loggedInUser.id === answerOwner.id &&
                            <>
                                <button className="button-type2" onClick={() => deleteAnswer(data.id)}>delete</button>
                                <button className="button-type2">edit</button>
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