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
        super();
        this.state = {selectedItem:'home'};
    }

    onItemClick(event){
        this.setState({selectedItem:event.target.id})
    }

    componentWillMount(){

    }


    render() {
        return (
            <Router>
                <div>
                    <div className="menu">
                        <ul className="nav_main">

                            <li><Link to="/" id="home"
                                      className={this.state.selectedItem === 'home' ? "active": "inactive"}
                                      onClick={this.onItemClick.bind(this)}>Home</Link>
                            </li>
                            <li><Link to="/allBooks" id="all_books"
                                      className={this.state.selectedItem === 'all_books' ? "active": "inactive"}
                                      onClick={this.onItemClick.bind(this)}>All Books</Link>
                            </li>
                            <li><Link to="/user" id="user"
                                      className={this.state.selectedItem === 'user' ? "active": "inactive"}
                                      onClick={this.onItemClick.bind(this)}>User</Link>
                            </li>
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