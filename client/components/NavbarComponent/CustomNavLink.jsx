import React from 'react'
import {NavLink} from 'react-router-dom'

const CustomNavLink = props => {
    return (
        <NavLink
            exact
            to={props.to}
            activeStyle={{
                color: 'teal'
            }}
            style={{
                textDecoration: 'none',
                color: 'black'
            }}
        >{props.children}</NavLink>
    )

}
export default CustomNavLink