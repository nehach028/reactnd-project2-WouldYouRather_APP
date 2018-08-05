import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom'
import { connect } from "react-redux";
import '../App.css';
import { handleInitialData } from "../actions/shared";
import Nav from  './Nav'
import SignIn from './SignIn';
import Home from './Home';
import Logout from './Logout';
import Question from './Question';
import ViewPollResult from './ViewPollResult';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
   
    return (
      <Router>
        <Fragment>
          <Nav/>
          
                
                <Switch>
                  <Route path ='/' exact component={SignIn}/>
                  <Route path ='/home' exact component={Home}/>
                  <Route path ='/signin' exact component={SignIn}/>
                  <Route path ='/logout' exact component={Logout}/>
                  <Route path ='/question/:question_id' exact component={Question}/>
                  <Route path ='/viewpoll' exact component={ViewPollResult}/>
                  <Redirect to= '/'/>
                </Switch>
              
            
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({authedUser}){
  return{
    loading : authedUser===null
  }
}
export default connect(mapStateToProps)(App)
