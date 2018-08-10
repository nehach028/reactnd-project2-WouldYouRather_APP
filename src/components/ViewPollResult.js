import React, { Component } from 'react'
import { Segment,Item, Header ,Grid,Container,Progress} from "semantic-ui-react";
import { connect } from 'react-redux';
class ViewPollResult extends Component{
    render(){
        const { question, user} =this.props
        const { name,avatarURL}=user
        let TotalVote = 0
        let percentOne=0
        let percentTwo=0
        let voteCountOne=question.optionOne.votes.length
        let  voteCountTwo=question.optionTwo.votes.length
        TotalVote=voteCountOne + voteCountTwo
        percentOne=(voteCountOne*100) / (TotalVote)
        percentTwo=(voteCountTwo*100) / (TotalVote)
        console.log("percentOne" ,percentOne )
        console.log("percentTwo",percentTwo)
        return(
            <div>
            <Container style={{ marginTop: '3em' }}>
            <Grid  verticalAlign='middle' stackable columns='equal' divided>
                <Grid.Row >
                    <Grid.Column >
                    <Header as='h4' attached='top' block>
                    Asked by { name } 
                    </Header>
                    <Segment attached>
                    <Item.Group relaxed>
                        <Item>
                        <Item.Image size='small' src={avatarURL} />
                        
                        <Item.Content verticalAlign='middle'>
                            <Item.Header> Results </Item.Header>
                            <Item.Description>
                            <Segment  style={{color:'teal'}}>
                                Would you rather {question.optionOne.text}?
                                <Progress percent={`${percentOne}`} progress color='teal' style={{ marginTop: '3em' }} />
                                <span>{voteCountOne} out of {TotalVote} votes</span>
                            </Segment>
                            <Segment>
                                Would you rathet {question.optionTwo.text}?
                                <Progress percent={`${percentTwo}`} progress color='teal' style={{ marginTop: '3em' }} />
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
}
function mapStateToProps({questions,users},props){
    const {question_id}=props.match.params
    const question=questions[question_id]
    const user=users[question.author]
    return {
        question,
        user,
    }
}
export default connect(mapStateToProps)(ViewPollResult)