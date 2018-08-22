/* @author: Neha Chaturvedi 7/27/2018
@discription:Action creator to dispatch various question related actions
*/
import { saveQuestionAnswer , saveQuestion } from "../utils/api";
import { hideLoading, showLoading } from 'react-redux-loading'
export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER='ADD_QUESTION_ANSWER'
export const ADD_QUESTION='ADD_QUESTION'

export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
export function addQuestionAnswer({authedUser,qid,answer}){
    return{
        type:ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
    }
}
export function handleAddQuestionAnswer({qid,answer}){
    
    return (dispatch,getState)=>{
        const {authedUser}=getState()
        
        dispatch(showLoading())
       
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer,
        }).then(dispatch(addQuestionAnswer({
            authedUser,
            qid,
            answer,
        })))
        .then(() => dispatch(hideLoading()))
        .catch((e)=>{
            console.warn("Error in adding answer: ",e)
            alert('There was an error while adding the answer Try again')
        })
    }
}

//Action creator to dispatch new question

export function addQuestion(question){
    return {
        type:ADD_QUESTION,
        question,
    }
}

//Middleware for achynchronous call

export function handleAddQuestion(optionOneText,optionTwoText){
    return(dispatch,getState)=>{
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author:authedUser,
        })
        .then((question)=>dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
        .catch((e)=>{
            console.warn("Error in saving Question: ",e)
            alert('There was an error while adding the question Try again')
        })
    }
}