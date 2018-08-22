/* @author: Neha Chaturvedi 8/14/2018
@discription:Component for LeaderBoard page.
*/
import React from 'react'
import { Container,Header } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import LeaderBoardFeed from './LeaderBoardFeed';

const LeaderBoard =(props) => {
    const { userList,authedUser }= props
    if(!authedUser){
        return <Redirect to='/signin'/>
    }
    return(
        <Container style={{ marginTop: '3em',  height: '100%',width:600}} verticalalign='middle'>
            <Header as='h2'color='teal' textAlign='center'>Here is the Top scorers of would you rather game !</Header>
            { userList.map(user=><LeaderBoardFeed key={user.id} user={user} />) }
        </Container>
    )
}
//Required PropTypes:
LeaderBoard.propTypes = {
    userList : PropTypes.array.isRequired,
    authedUser : PropTypes.string.isRequired
}

function mapStateToProps({users,authedUser}){
    const userIDs=Object.keys(users)
    const userArray=userIDs.map(userID=>{
        const tempUser={
            id:users[userID].id,
            name:users[userID].name,
            avatarURL:users[userID].avatarURL,
            ansQuestionCount:Object.keys(users[userID].answers).length,
            askedQuestionCount:users[userID].questions.length,
            score:0
        }
        const total=tempUser.ansQuestionCount+tempUser.askedQuestionCount
        tempUser.score=total
        return tempUser
        })
        return{
            userList:userArray.sort((a,b)=>b.score-a.score),
            authedUser
        }
}

export default connect(mapStateToProps)(LeaderBoard)