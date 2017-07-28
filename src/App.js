import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import AllBooks from './AllBooks.js'

import Search from "./Search";
import User from "./User";


class Routers extends React.Component {
    constructor(){
        super()
    }
    render() {
        return (
            <Router>
                <div>
                    <div className="menu">
                        <ul className="nav_main">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/allBooks">All books</Link></li>
                            <li><Link to="/user">User</Link></li>
                        </ul>
                    </div>

                    <hr/>

                    <Route exact path="/" component={Search}/>
                    <Route path="/allbooks" component={AllBooks}/>
                    <Route path="/user" component={User}/>
                </div>
            </Router>
        )
    }
}
export default Routers