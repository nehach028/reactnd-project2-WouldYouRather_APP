import React , { Component } from 'react'
import { Menu } from 'semantic-ui-react'
class Nav extends Component{
	state = { activeItem: 'Home' }

  	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render(){
		const { activeItem } = this.state
		return(
				<div>
			        <Menu pointing secondary color='teal'>
			          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
			          <Menu.Item
			            name='New Question'
			            active={activeItem === 'New Question'}
			            onClick={this.handleItemClick}
			          />
			          <Menu.Item
			            name='Leader Board'
			            active={activeItem === 'Leader Board'}
			            onClick={this.handleItemClick}
			          />
			          <Menu.Menu >
			           	<Menu.Item
			              name='Hello UserName'
			              active={activeItem === 'UserName'}
			              onClick={this.handleItemClick}
						/>
						<Menu.Item>
          					<img src='/logo.png' alt="userimage" />
        				</Menu.Item>
			          </Menu.Menu>
			          <Menu.Menu position='right'>
			            <Menu.Item
			              name='Logout'
			              active={activeItem === 'Logout'}
			              onClick={this.handleItemClick}
			            />
			          </Menu.Menu>
			        </Menu>
	        	</div>
			)
	}
}
export default Nav