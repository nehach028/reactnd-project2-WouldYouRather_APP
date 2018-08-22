import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";
import Nav from  './Nav'
import SignIn from './SignIn';
import Home from './Home';
import Question from './Question';
import ViewPollResult from './ViewPollResult';
import NewQuestion from './NewQuestion';
import Error404 from './Error404'
import LeaderBoard from './LeaderBoard';
import LoadingBar from 'react-redux-loading'

import 'semantic-ui-css/semantic.min.css';
import '../App.css';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
   return (
      <Router>
        <Fragment>
        <LoadingBar style={{ backgroundColor: 'teal', height: '3px' , position: 'absolute' }} /> 
        <Nav/>
          {this.props.loading===true
            ? <Route path ='/' component={SignIn}/>
            :    <Switch>
                  <Route path ='/' exact component={SignIn}/>
                  <Route path ='/home' exact component={Home}/>
                  <Route path ='/signin' exact  component={SignIn}/>
                  <Route path ='/question/:question_id'  exact component={Question}/>
                  <Route path ='/viewpoll/:question_id'  exact component={ViewPollResult}/>
                  <Route path ='/add'  exact component={NewQuestion}/>
                  <Route path ='/leaderboard' exact component={LeaderBoard} />
                  <Route path ='/error' exact component={Error404}/>
                </Switch>
          }
        </Fragment>
      </Router>
    );
  }
}
App.propTypes = {
	dispatch: PropTypes.func.isRequired,
}
function mapStateToProps({authedUser}){
  return{
    loading : authedUser===null
  }
}
export default connect(mapStateToProps)(App)
