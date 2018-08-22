import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter,Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { Segment,Item, Header ,Button,Grid,Form,Radio,Container} from "semantic-ui-react";
import { handleAddQuestionAnswer} from '../actions/questions'

class Question extends Component{
    state = {
        answer:'',
        toViewpoll:false
    }
    //Required prop types:
    static propTypes={
        dispatch : PropTypes.func.isRequired,
        user : PropTypes.object,
        question : PropTypes.object,
    }
    static defaultProps  = {
        user: null,
        question : null,
    }
    handleChange = (e, { value }) => this.setState({answer:value })
    handleSubmit=(e)=>{
        e.preventDefault()
        const { answer } =this.state
        const { dispatch,question} = this.props
        const qid=question.id
        //dispatching an action
        dispatch(handleAddQuestionAnswer({qid,answer}))
        this.setState({
            toViewpoll:true
        })
    }
    render(){
        const {question,user} = this.props
        //If poll does not exist
        if(question==='undefined'|| user===null){
            return <Redirect exact to='/error'/>
        }

        const { name,avatarURL}=user
        const {question_id}=this.props.match.params
        const optionOne=question.optionOne.text
        const optionTwo=question.optionTwo.text
        if(this.state.toViewpoll===true){
            return <Redirect exact to={`/viewpoll/${question_id}`} />
        }
        return(
            <div>
                <Container style={{ marginTop: '3em',width:600 }}>
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
                                        <Button fluid color='teal' disabled={this.state.answer === ''}onClick={(e)=>this.handleSubmit(e)}>Submit</Button>
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
    const user=question?users[question.author]:null
    return{
        question,
        user,
    }

}
export default withRouter(connect(mapStateToProps)(Question))