import { useState, useEffect, createContext} from "react";

const AnswerContext = createContext();

const AnswerProvider = ({children}) => {
    const [answers, setAnswers]= useState([])

    const getAnswers = async ()=>{
        const answersFetched =await fetch("http://localhost:3000/answers").then(res=>res.json());
        setAnswers(answersFetched)
    }

    useEffect(()=>{
        getAnswers()
    },[])

    const addAnswer = (newAnswer)=>{
        fetch('http://localhost:3000/answers/',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json; charset =UTF-8'
            },
            body: JSON.stringify(newAnswer)
        })
        .then(res=>res.json())
        setAnswers([...answers, newAnswer])
    }

    const deleteAnswer = (id)=>{
        fetch(`http://localhost:3000/answers/${id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        setAnswers(answers.filter(answer=>answer.id !== id));
    }

    const editAnswer = (id,updatedAnswer)=>{
        fetch(`http://localhost:3000/answers/${id}`,{
            method: "PATCH",
            body: JSON.stringify(updatedAnswer),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
        })
        setAnswers(answers.map(answer=>answer.id.toString() === id ? {...answer, ...updatedAnswer}:answer))
    }

    return ( 
        <AnswerContext.Provider 
            value={{
                answers,
                addAnswer,
                deleteAnswer,
                editAnswer
            }}
        >
            {children}
        </AnswerContext.Provider>

    );
}
export {AnswerProvider}
export default AnswerContext;