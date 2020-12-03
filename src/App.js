import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indonesia, Provinsi } from './Pages'


const App = () =>{
    return (
        <Router>
            <div>
                <h1> Covid Tracker </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Global">
                                Global
                            </Link>
                        </li>
                        <li>
                            <Link to="/Indonesia">
                                Indonesia
                            </Link>
                        </li>
                        <li>
                            <Link to="/Provinsi">
                                Provinsi
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/Global">
                    <Global />
                </Route>
                <Route path="/indonesia">
                    <Indonesia />
                </Route>
                <Route path="/Provinsi">
                    <Provinsi />
                </Route>
            </Switch>
        </Router>
    )
}

export default App