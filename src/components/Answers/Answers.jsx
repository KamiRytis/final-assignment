import { useContext } from "react";
import AnswerContext from "../../contexts/AnswerContext";
import Answer from './Answer';


const Answers = () => {
    const {answers}=useContext(AnswerContext);

    return ( 
        <>
            {
                answers.map(answer=>
                    <Answer 
                        key={answer.id}
                        data={answer}
                    />
                    )
            }
        </>
     );
}
 
export default Answers;