import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter,Redirect } from "react-router-dom";
import { Segment,Item, Header ,Button,Grid,Form,Radio,Container} from "semantic-ui-react";
import { handleAddQuestionAnswer} from '../actions/questions'
class Question extends Component{
    state = {
        answer:'',
        toViewpoll:false
    }
    handleChange = (e, { value }) => this.setState({answer:value })
    handleSubmit=(e)=>{
        e.preventDefault()
        const { answer } =this.state
        const { dispatch,question} = this.props
        const qid=question.id
        
        console.log(qid,"questionid")
        console.log(answer,"option")
        //dispatching an action
        dispatch(handleAddQuestionAnswer({qid,answer}))
        this.setState({
            toViewpoll:true
        })
        //this.props.history.push('/viewpoll');
    }
    render(){
        const {question,user} = this.props
        const { name,avatarURL}=user
        const optionOne=question.optionOne.text
        const optionTwo=question.optionTwo.text
         if(this.state.toViewpoll===true){
            return <Redirect to='/viewpoll' />
        } 
        return(
            <div>
                <Container style={{ marginTop: '3em' }}>
                <Grid  verticalAlign='middle' stackable columns='equal'>
                    <Grid.Row >
                        <Grid.Column >
                        <Header as='h4' attached='top' block>
                        { name } ask:
                        </Header>
                        <Segment attached>
                            <Item.Group relaxed>
                            <Item>
                            <Item.Image size='small' src={avatarURL} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header>Would You rather </Item.Header>
                                <Item.Description>
                                   <Form>
                                       <Form.Field>
                                        <Radio
                                            label= {optionOne}
                                            name='optionOne'
                                            value='optionOne'
                                            checked={this.state.answer === 'optionOne'}
                                            onChange={this.handleChange}
                                        />
                                        </Form.Field>
                                        <Form.Field>
                                        <Radio
                                            label= {optionTwo}
                                            name='optionTwo'
                                            value='optionTwo'
                                            checked={this.state.answer === 'optionTwo'}
                                            onChange={this.handleChange}
                                        />
                                        </Form.Field>
                                        <Button fluid color='teal'onClick={(e)=>this.handleSubmit(e)}>Submit</Button>
                                    </Form>
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
    return{
        question,
        user,
    }

}
export default withRouter(connect(mapStateToProps)(Question))