import React , { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Button, Container, Grid, Segment } from 'semantic-ui-react'
import QuestionItem from './QuestionItem'

class Home extends Component{
    
    state={showUnanswered:true}
    
    handleUnanswered=(e)=>{
        e.preventDefault()
        this.setState({showUnanswered:true})
    }
    handleAnswered=(e)=>{
        e.preventDefault()
        this.setState({showUnanswered:false})
    }
    render(){
        const { questionIds, answers } = this.props
        const { showUnanswered } = this.state
        
        //Filter unanswered question of authed user
        const unanweredQ=questionIds.filter((ele)=>
                            {
                                return Object.keys(answers).indexOf(ele)<0 
                            },Object.keys(answers))
        const answeredQ=questionIds.filter((id)=>{
                            return answers.hasOwnProperty(id)
                        })    
            
        return(
            <Container style={{ marginTop: '3em' ,width:600}}>
                <Grid columns='equal' >
                    <Grid.Column>
                        <Button.Group attached='top' widths={2} inverted >
                            <Button color='teal'onClick={this.handleUnanswered}>Unanswered Questions</Button>
                            <Button color='teal'onClick={this.handleAnswered}>Answered Questions</Button>
                        </Button.Group>
                        <Segment attached>
                            {showUnanswered===true
                                ? unanweredQ.map((qid)=>(<QuestionItem key={qid} question_id={qid} unansweredPoll={true}/>))
                                :  answeredQ.map((qid)=>(<QuestionItem key={qid} question_id={qid} unansweredPoll={false}/>))
                            }
                        </Segment>
                </Grid.Column>
            </Grid>
            </Container>
        )
    }
}
Home.propTypes = {
    questionIds : PropTypes.array.isRequired,
    answers : PropTypes.object.isRequired,
}
function mapStateToProps({users,questions,authedUser}){
    const answers=(!authedUser)
                    ? []
                    :users[authedUser].answers
    return{
        questionIds : Object.keys(questions)
                    .sort((a,b)=>questions[b].timestamp-questions[a].timestamp),
        answers,
    }
}
export default connect(mapStateToProps)(Home)