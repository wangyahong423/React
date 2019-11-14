import React, { Component } from 'react'
import AppTab from './container/AppTab'
import AppHome from './container/AppHome'

export default class App extends Component {
    render() {
        return (
            <div>
                <AppTab />
            </div>
        )
    }
}