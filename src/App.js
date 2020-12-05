import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indonesia, Provinsi } from './Pages'


const App = () =>{
    return (
        <center>
        <Router>
            <div>
                <h1> Covid Tracker </h1>
                <nav>
                        <tr>
                            <Link to="/Global">
                                Global
                            </Link>
                        </tr>
                        <tr>
                            <Link to="/Indonesia">
                                Indonesia
                            </Link>
                        </tr>
                        <tr>
                            <Link to="/Provinsi">
                                Provinsi
                            </Link>
                        </tr>
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
        </center>
    )
}

export default App