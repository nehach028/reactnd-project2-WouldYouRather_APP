import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Item, Header, Grid, Container, Progress, Icon, Label} from "semantic-ui-react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

const ViewPollResult = (props) => {
        const { question, user, yourvote} = props
        //To display 404 page ,If poll not found
        if(question==='undefined'|| user===null){
            return <Redirect exact to='/error'/>
        }
        const { name,avatarURL} = user
        let TotalVote = 0
        let percentOne=0
        let percentTwo=0
        let voteCountOne=question.optionOne.votes.length
        let  voteCountTwo=question.optionTwo.votes.length
        // calculating the percentage
        TotalVote=voteCountOne + voteCountTwo
        percentOne=Math.round((voteCountOne*100) / (TotalVote) * 100) / 100
        percentTwo=Math.round((voteCountTwo*100) / (TotalVote) * 100) / 100
        return(
            <div>
            <Container style={{ marginTop: '3em',width:600 }}>
            <Grid  verticalAlign='middle' stackable columns='equal' divided>
                <Grid.Row >
                    <Grid.Column >
                    <Header as='h4' attached='top' block>
                        Asked by { name }
                    </Header>
                    <Segment attached>
                        <Item.Group relaxed>
                            <Item>
                            <Item.Image size='small' src={avatarURL}  />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header> Results: </Item.Header>
                                <Item.Description>
                                <Segment >
                                    <Header as='h5'>
                                        { yourvote==='optionOne'? ( <Label as='a' color='orange' ribbon><Icon name='star'/>Your Vote</Label>)
                                                                    : ''
                                        }
                                        <Header.Content>Would you rather {question.optionOne.text}?</Header.Content>
                                    </Header>
                                    <Progress percent={`${percentOne}`} progress color='teal' style={{ marginTop: '1em' }} />
                                    <span>{voteCountOne} out of {TotalVote} votes</span>
                                </Segment>
                                <Segment>
                                    <Header as='h5'>
                                        { yourvote==='optionTwo'? ( <Label as='a' color='orange' ribbon><Icon name='star'/>Your Vote</Label>)
                                                                    : ''
                                        }
                                        <Header.Content >Would you rather {question.optionTwo.text}?</Header.Content>
                                    </Header>
                                    <Progress percent={`${percentTwo}`} progress color='teal' style={{ marginTop: '1em' }} />
                                    <span>{voteCountTwo} out of {TotalVote} votes</span>
                                </Segment>
                                </Item.Description>
                            </Item.Content>
                            </Item>
                        </Item.Group>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        </div>
        )
}
//Required PropTypes:
ViewPollResult.propTypes = {
    question_id : PropTypes.string,
    user : PropTypes.object,
    question: PropTypes.object,
    yourvote : PropTypes.string,
}
ViewPollResult.defaultProps  = {
    user : null,
    yourvote : '',
}

function mapStateToProps({questions,users,authedUser},props){
    const {question_id}=props.match.params
    const question=questions[question_id]
    const user=question?users[question.author]:null
    //To get the option,selected by loggedin user
    const yourvote=users[authedUser].answers.hasOwnProperty(question_id) ?
                                    users[authedUser].answers[question_id] : ''
    return {
        question,
        user,
        yourvote,
    }
}
export default connect(mapStateToProps)(ViewPollResult)