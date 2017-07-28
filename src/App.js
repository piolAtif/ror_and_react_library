import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Books from "./Books";

const Search = () => (
    <div>
        <h2>Search</h2>
    </div>
)

const Users = () => (
    <div>
        <h2>Users</h2>
    </div>
)

const Routers = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Search</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/user">User</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Search}/>
            <Route path="/books" component={Books}/>
            <Route path="/user" component={Users}/>
        </div>
    </Router>
)
export default Routers