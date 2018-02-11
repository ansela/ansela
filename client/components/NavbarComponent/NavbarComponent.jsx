import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Menu, { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'

import CustomNavLink from './CustomNavLink.jsx'

import './NavbarComponent.scss'

export default class NavbarComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null
        }
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget })
    }
    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    render() {
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)

        return (
            <AppBar position="static">
                <Toolbar>
                    <div className="navbar">
                        <IconButton
                            onClick={this.handleMenu}
                            className="menu-button"
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Home</MenuItem>
                            <MenuItem onClick={this.handleClose}>About</MenuItem>
                        </Menu>
                    </div>
                    <Typography variant="title" color="inherit" className="flex">
                        Ashley Ansell
                    </Typography>
                    <Button color="inherit">
                        <CustomNavLink to="/">Home</CustomNavLink>
                    </Button>
                    <Button color="inherit">
                        <CustomNavLink to="/about">About</CustomNavLink>
                    </Button>
                    <Button color="inherit">
                        <CustomNavLink to="/resume">Resume</CustomNavLink>
                    </Button>
                </Toolbar>
            </AppBar>
        )
    }
}