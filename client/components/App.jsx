import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppRouter from './AppRouter.jsx'
import {muiTheme} from './MuiTheme'

import "animate.css/animate.min.css"

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={muiTheme}>
                <AppRouter/>
            </MuiThemeProvider>
        )
    }
}