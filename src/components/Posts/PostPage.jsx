import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AnswerContext from "../../contexts/AnswerContext";
import PostContext from "../../contexts/PostContext";
import UserContext from "../../contexts/UserContext";
import Answer from "../Answers/Answer";
import Post from './Post';


const PostPage = () => {
    const { id } = useParams();
    const [comment, setComment] = useState("")
    const { answers, addAnswer } = useContext(AnswerContext)
    const { loggedInUser } = useContext(UserContext)

    const { posts } = useContext(PostContext)
    const selectedPost = posts.find(post => post.id.toString() === id)
    console.log(selectedPost, id);

    const postAnswers = answers.filter(answer => answer.postId.toString() === id)

    const handleSubmit = () => {
        const newAnswer = {
            id: Date.now(),
            postId: Number(id),
            userId: loggedInUser.id,
            content: comment,
            edited: false,
            numOfLikes: 0,
            dateCreated: new Date().toLocaleString()
        }
        addAnswer(newAnswer);
        setComment("");
    }

    return (
        <>
            <div className="postPage">
                <Post
                    key={selectedPost.id}
                    data={selectedPost}
                />
                <div>
                    {
                        postAnswers.map(answer =>
                            <Answer
                                key={answer.id}
                                data={answer}
                            />
                        )
                    }
                </div>
                <div className="answerForm">
                    <h3>Your Answer</h3>
                    <form onSubmit={()=>handleSubmit()}>
                        <textarea
                            value={comment}
                            required
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button type="submit">Post your answer</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PostPage;