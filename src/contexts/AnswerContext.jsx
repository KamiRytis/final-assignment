import {createContext } from "react";

const AnswerContext = createContext();


const AnswerProvider = ({children}) => {
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