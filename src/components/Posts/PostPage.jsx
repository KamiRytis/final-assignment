import { useContext } from "react";
import { useParams } from "react-router-dom";
import AnswerContext from "../../contexts/AnswerContext";
import PostContext from "../../contexts/PostContext";
import Answer from "../Answers/Answer";
import Post from './Post';


const PostPage = () => {
    const { id } = useParams();
    const {answers}=useContext(AnswerContext)

    const { posts } = useContext(PostContext)

    const selectedPost = posts.find(post => post.id.toString() === id)
    
    const postAnswers = answers.filter(answer=>answer.postId.toString() === id)
    console.log(postAnswers)

    return (
        <>
            <div className="posts">
                <Post
                    key={selectedPost.id}
                    data={selectedPost}
                />
                <div>
                    {
                        postAnswers.map(answer=>
                            <Answer 
                                key={answer.id}
                                data={answer}
                            />
                            )
                    } 
                </div>
                
            </div>
        </>
    );
}

export default PostPage;