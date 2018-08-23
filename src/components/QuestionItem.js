import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { Segment,Item, Header ,Button,Grid} from "semantic-ui-react";

class QuestionItem extends React.Component{
    handleViewPoll=(e)=>{
        e.preventDefault()
        const {unansweredPoll,question_id}=this.props
        
        if(unansweredPoll){
            this.props.history.push(`/questions/${question_id}`);
        }else {
            this.props.history.push(`/viewpoll/${question_id}`);
        }
    }
    render(){
        const { question,user } =this.props
        const { name,avatarURL}=user
        return (
            <div>
                
                <Grid  container stackable columns='equal'>
                    <Grid.Row >
                        <Grid.Column>
                        <Header as='h4' attached='top' block>
                        { name } ask:
                        </Header>
                        <Segment attached>
                            <Item.Group relaxed>
                            <Item>
                            <Item.Image size='small' src={avatarURL} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header>Would You rather </Item.Header>
                                <Item.Description>...{question.optionOne.text}...or...</Item.Description>
                                <Item.Extra>
                                <Button inverted fluid color='teal'onClick={(e)=>this.handleViewPoll(e)}>View Poll</Button>
                                </Item.Extra>
                            </Item.Content>
                            </Item>
                            </Item.Group>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    
    }
    
}

//Required PropTypes:
QuestionItem.propTypes = {
    question_id : PropTypes.string.isRequired,
	unansweredPoll : PropTypes.bool.isRequired,
    question : PropTypes.object,
    user : PropTypes.object,
}
QuestionItem.defaultProps  = {
    user: null,
    question : null,
}

function mapStateToProps({questions,users},{question_id,unansweredPoll}){
    const question=questions[question_id]
    const user=users[question.author]
    return {
        question,
        user,
        question_id,
        unansweredPoll,
    }
}
export default withRouter(connect(mapStateToProps)(QuestionItem))

    


    
    
