/* @author: Neha Chaturvedi 7/27/2018
@discription:Action creator to dispatch authed users action
*/
export const SET_AUTHED_USER='SET_AUTHED_USER'
export const LOGOUT_USER='LOGOUT_USER'

export function setAuthedUser(id){
    return{
        type: SET_AUTHED_USER,
        id,
    }
}
export function logoutUser(){
    return{
        type:LOGOUT_USER,
    }
}


