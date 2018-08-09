/* @author: Neha Chaturvedi 7/27/2018
@discription:Action creator to dispatch recive users action
*/
export const RECEIVE_USERS='RECEIVE_USERS'

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users,
    }
}

