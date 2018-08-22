/* @author: Neha Chaturvedi 8/10/2018
@discription:Component for create New Question Page.
*/
import React ,{ Component } from 'react'
import { Input,Header,Segment,Form,Button,Divider,Grid} from "semantic-ui-react";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

class NewQuestion extends Component{
    state={
        optionOneText:'',
        optionTwoText:'',
        toHome:false
    }
    //Required prop types:
    static propTypes={
		dispatch : PropTypes.func.isRequired,
	}
    handleInputOne=(e, { value })=>{
        this.setState({
            optionOneText:value,
        })
    }
    handleInputTwo=(e, { value })=>{
        this.setState({
          optionTwoText: value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const { optionOneText , optionTwoText } = this.state
        const { dispatch  } = this.props
        //dispatch achynchronous action
        dispatch(handleAddQuestion(optionOneText,optionTwoText ))
        this.setState({
            optionOneText:'',
            optionTwoText:'',
            toHome: true
        })
    }
    render(){
        const { optionOneText , optionTwoText, toHome } = this.state
        if(toHome){
            return <Redirect to ='/home'/>
        }
        return(
            <div>
                <Grid container textAlign='center' style={{ height: '100%',marginTop: '3em' }} verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column style={{ maxWidth: 450 }} >
                            <Header   attached='top' textAlign='center'color ='teal' as='h3' >
                            Create New Question
                            </Header>
                            <Form size='large' onSubmit={this.handleSubmit}>
                                <Segment padded attached='bottom'>
                                    <Header as='h5'textAlign='left'>Complete the Question:</Header>
                                    <Header as='h3'textAlign='left'>Would you rather...</Header>
                                    <Input focus placeholder='Enter OptionOneText text here' fluid size='large' onChange={this.handleInputOne} value={this.state.optionOneText} />
                                    <Divider horizontal>Or</Divider>
                                    <Input focus placeholder='Enter OptionTwoText text here' fluid size='large' onChange={this.handleInputTwo}  value={this.state.optionTwoText}/>
                                    <Divider hidden />
                                    <Button color='teal' fluid size='large' disabled={optionOneText==='' || optionTwoText===''} >
                                        Submit
                                    </Button>
                                </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
export default connect()(NewQuestion)