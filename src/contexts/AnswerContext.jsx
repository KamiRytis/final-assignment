import {createContext } from "react";
import { useState } from "react";

const AnswerContext = createContext();

const AnswerProvider = ({children}) => {
    const {answers,setAnswers}=useState([])


    return ( 
        <AnswerContext.Provider 
            value={{

            }}
        >
            {children}
        </AnswerContext.Provider>

    );
}
export {AnswerProvider}
export default AnswerContext;