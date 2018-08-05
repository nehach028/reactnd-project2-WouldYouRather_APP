import React, { Component } from 'react'
import { connect } from "react-redux";
import { Segment,Item, Header ,Button,Grid,Form,Radio,Container} from "semantic-ui-react";
class Question extends Component{
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
    handleSubmit=(e)=>{
        //todo
    }
    render(){
        console.log(this.props)
        const {question,user} = this.props
        const { name,avatarURL}=user
        const optionOne=question.optionOne.text
        const optionTwo=question.optionTwo.text
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
                                            name='radioGroup'
                                            value={optionOne}
                                            checked={this.state.value === `${optionOne}`}
                                            onChange={this.handleChange}
                                        />
                                        </Form.Field>
                                        <Form.Field>
                                        <Radio
                                            label= {optionTwo}
                                            name='radioGroup'
                                            value={optionTwo}
                                            checked={this.state.value === `${optionTwo}`}
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
export default connect(mapStateToProps)(Question)