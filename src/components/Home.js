import React , { Component } from 'react'
import { connect } from "react-redux";
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
        const { questionIds,users,answers } = this.props
        const { showUnanswered } = this.state
        
        console.log(users)
        console.log(answers,"answers") 
        //Filter unanswered question of authed user
        const unanweredQ=questionIds.filter((ele)=>
                            {
                                return answers.indexOf(ele)<0 
                            },answers)
            
            
        
        console.log(unanweredQ,"unanweredQ")
        
        console.log("props",this.props)
        return(
            <Container style={{ marginTop: '3em' }}>
                <Grid columns='equal' >
                    <Grid.Column>
                        <Button.Group attached='top' widths={2} inverted >
                            <Button color='teal'onClick={this.handleUnanswered}>Unanswered Questions</Button>
                            <Button color='teal'onClick={this.handleAnswered}>Answered Questions</Button>
                        </Button.Group>
                        <Segment attached>
                            {showUnanswered===true
                                ? unanweredQ.map((qid)=>(<QuestionItem key={qid} question_id={qid} unansweredPoll={true}/>))
                                :  answers.map((qid)=>(<QuestionItem key={qid} question_id={qid} unansweredPoll={false}/>))
                            }
                        </Segment>
                </Grid.Column>
            </Grid>
            </Container>
        )
    }
}
function mapStateToProps({users,questions,authedUser}){
    const author=(!authedUser)
                    ? []
                    :users[authedUser].answers
    const answers=(!author)
                  ? []
                  :Object.keys(author).sort((a,b)=>(author[b].timstamp-author[a].timestamp))
    return{
        questionIds:Object.keys(questions)
                    .sort((a,b)=>(questions[b].timstamp-questions[a].timestamp)),
        users:Object.keys(users).map((id)=>id),
        answers,
    }
}
export default connect(mapStateToProps)(Home)