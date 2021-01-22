import React from 'react'
import { render } from 'react-dom';
import App from './App.js'
import Login from './pages/Login/Login'
import { Route, HashRouter } from 'react-router-dom'

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                打底页
            </div>
        )
    }
}
render((
    <HashRouter>
        <Route path='/login' component={Login} />
    </HashRouter>
), document.getElementById('app'))