import React, {Component} from 'react'

import Router from './NavbarComponent/Router.jsx'
import NavbarComponent from './NavbarComponent/NavbarComponent.jsx'

export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <NavbarComponent/>
                <Router/>
            </div>
        )
    }
}