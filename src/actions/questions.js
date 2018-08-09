/* @author: Neha Chaturvedi 7/27/2018
@discription:Action creator to dispatch recive questions action
*/
import { saveQuestionAnswer } from "../utils/api";
export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER='ADD_QUESTION_ANSWER'

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
        
        console.log({qid,answer})
       
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer,
        }).then(dispatch(addQuestionAnswer({
            authedUser,
            qid,
            answer,
        })))
        .catch((e)=>{
            console.warn("Error in adding answer: ",e)
            alert('There was an error adding the answer Try again')
        })
    }
}