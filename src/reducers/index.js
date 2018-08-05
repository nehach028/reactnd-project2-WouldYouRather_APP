/* @author: Neha Chaturvedi 7/27/2018
@discription:Combined reducer to pass single reducer to store
*/

import { combineReducers  } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions"
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser,
    users,
    questions,
    loadingBar:loadingBarReducer
})