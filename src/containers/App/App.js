import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store, history } from '../../redux/store';
import { ConnectedRouter } from 'connected-react-router';
import Navbar from '../../components/layout/Navbar'
import Landing from '../../components/layout/Landing'
import Register from '../../components/auth/Register'
import Login from '../../components/auth/Login'
import Home from '../home/home'
import './App.scss'

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router>
                    <Fragment>
                        <Navbar/>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/' component={Landing}/>
                        <section className="container">
                            <Switch>
                                <Route exact path="/register" component={Register}/>
                                <Route exact path="/login" component={Login} />
                            </Switch>
                        </section>
                    </Fragment>
                </Router>
            </ConnectedRouter>
        </Provider>
    )
}

export default App
