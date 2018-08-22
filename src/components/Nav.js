import React , { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import {withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logoutUser } from "../actions/authedUser";
class Nav extends Component{
	state = {
				activeItem: '',
			}

	handleRedirectTo = (e, { name,to }) => {
							this.setState({
								activeItem: name ,
								})
							return this.props.history.push(to)
						}

	handleLogout=()=>{
		const { dispatch } = this.props
		dispatch(logoutUser())
		this.setState({activeItem:''})
		return this.props.history.push('/signin')
	}
	render(){
		const { activeItem } = this.state
		const { loginUser,logoutFlage } = this.props
		return(
			<div>
				<Menu pointing secondary color='teal'>
					<Menu.Item
						name='Home'
						to='/home'
						active={activeItem === 'Home'}
						onClick={this.handleRedirectTo} />
					<Menu.Item
						name='New Question'
						to='/add'
						active={activeItem === 'New Question'}
						onClick={this.handleRedirectTo} />
					<Menu.Item
						name='Leader Board'
						to='/leaderboard'
						active={activeItem === 'Leader Board'}
						onClick={this.handleRedirectTo} />
					{logoutFlage ? (
								<Menu.Menu position='right' >
									<Menu.Item
									name='Login'
									to='/signin'
									active={activeItem === 'Login'}
									onClick={this.handleRedirectTo} />
								</Menu.Menu>
								)
								: (
								<Menu.Menu position='right' >
									<Menu.Item
										name= {`Hello${loginUser.name}`}/>
									<Menu.Item>
										<Image src={loginUser.avatarURL} alt={loginUser.name} avatar />
									</Menu.Item>
									<Menu.Item
										name='Logout'
										to='/signin'
										active={activeItem === 'Logout'}
										onClick={this.handleLogout} />
								</Menu.Menu>
								)}
					</Menu>
			</div>
		)
	}
}

//Required PropTypes:
Nav.propTypes = {
	dispatch : PropTypes.func.isRequired,
	logoutFlage : PropTypes.bool.isRequired,
	loginUser : PropTypes.object,
}
Nav.defaultProps  = {
	loginUser: null,
}

function mapStateToProps({authedUser,users}){
	const loginUser=!authedUser? null :users[authedUser]
	return{
		logoutFlage : authedUser===null,
		loginUser,
  }
}
export default withRouter(connect(mapStateToProps)(Nav))