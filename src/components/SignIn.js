import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Dropdown,Header,Segment,Form,Button,Divider } from "semantic-ui-react";
import { connect } from 'react-redux';
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";
import Home from './Home'

class SignIn extends Component{
    state={
      id:'',
      loggedIn: false,
    }
    //On SignIn form submission
    handleSubmit=(e)=>{
      e.preventDefault()
      const { dispatch }=this.props
      const { id }=this.state
      this.setState({
        loggedIn:true
      })
      //dispatching action to set autheduser in store
      dispatch(setAuthedUser(id))
    }
    //on Selecting user from list of users
    handleChange=(e,{value})=>{
      this.setState({id:value})
    }
    render(){
      const { users,authedUser }=this.props
      const { loggedIn, id }=this.state
      const userOptions=users.map((user)=>({
        text: user.name,
        value:user.id,
        image:{avatar: true, src: user.avatarURL },
        key:user.id,
      }))
      
      if(loggedIn||authedUser!==null){
        return <Redirect to='/home' exact component={Home} />
      }
      return(
        <Grid container textAlign='center' style={{ height: '100%',marginTop: '3em' }} verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column style={{ maxWidth: 450 }} >
                <Header   attached='top' textAlign='center'color ='teal' as='h3' >
                  Welcome to the would you  rather APP!
                  <Header.Subheader style={{ color: 'teal' }}>Please SignIn to continue</Header.Subheader>
                </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
                  <Segment attached='bottom'>
                    <Dropdown placeholder='Select User' fluid selection options={userOptions} onChange={this.handleChange} />
                    <Divider hidden />
                    <Button color='teal' fluid size='large' disabled={id===''}>
                          Sign In
                    </Button>
                  </Segment>
                </Form>
              </Grid.Column>
            </Grid.Row>
        </Grid>
      )
    }
} 

//Required PropTypes:
SignIn.propTypes = {
  authedUser : PropTypes.string,
  users : PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}
SignIn.defaultProps  = {
  authedUser : null,
}

function mapStateToProps({users,authedUser}){
  return {
    users:Object.keys(users).map((id)=>(users[id])),
    authedUser,
  }
}
export default connect(mapStateToProps)(SignIn)