import React  from 'react'
import { NavLink,Link } from 'react-router-dom'
import { Menu } from "semantic-ui-react";

export default function Nav(){
    return (
        <nav className='nav'>
        
          <Menu stackable>
            <Menu.Item>
              <Link to='/' color='teal' >
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <NavLink to='/create' activeClassName='active'  color='teal'>
                NewQuestion
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to='/leader' activeClassName='active'  color='teal'>
                LeaderBoard
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to='/username' activeClassName='active'>
                Hello,User
              </NavLink>
            </Menu.Item>
            <Menu.Menu position='right'>
            <Menu.Item>
              <NavLink to='/logout' activeClassName='active'>
                Logout
              </NavLink>
            </Menu.Item>
            </Menu.Menu>
            </Menu>
          
        </nav>
      )
    }