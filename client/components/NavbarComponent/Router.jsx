import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import HomeComponent from '../HomeComponent/HomeComponent.jsx'
import AboutComponent from '../AboutComponent/AboutComponent.jsx'
import ResumeComponent from '../ResumeComponent/ResumeComponent.jsx'

export default class Router extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomeComponent}/>
                <Route path="/about" component={AboutComponent}/>
                <Route path="/resume" component={ResumeComponent}/>
            </div>
        )
    }
}