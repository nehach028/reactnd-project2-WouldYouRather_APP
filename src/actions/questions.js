/* @author: Neha Chaturvedi 7/27/2018
@discription:Action creator to dispatch recive questions action
*/
export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}