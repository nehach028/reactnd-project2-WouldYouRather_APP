import { getInitialData } from "../utils/api";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";
//Thunk action creator:Asynchronous request to get initial data
export function handleInitialData(){
   
    return(dispatch)=>{
        return getInitialData()
        .then(({users,questions})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            //dispatch(setAuthedUser(id))
        })
    }
}