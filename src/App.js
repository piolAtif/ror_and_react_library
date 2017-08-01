import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'


import AllBooks from './AllBooks.js'

import Search from "./Search";
import User from "./User";


let tabsList = [{id:1,name:'Home', url:'/'},
    {id:2,name:'All Books', url:'/allbooks'},
    {id:3,name:'User', url:'/user'}];


class Tab extends React.Component{
    handleClick(event){
        this.props.handleClick(event.target);
    }

    render(){
        return (
            <li>
                <Link to={this.props.url} id={this.props.currentTab} onClick={this.handleClick.bind(this)}
                         className={this.props.isCurrent ? 'current': null}>
                    {this.props.name}
                    </Link>
            </li>
        )
    }
}

class Tabs extends React.Component{
    handleClick(tab){
        this.props.changeTab(tab);
    }
    render(){
        return (
            <ul className="nav_main">
                {this.props.tabsList.map(function(tab){
                    return (
                        <Tab key={tab.id}
                             currentTab= {tab.id}
                             handleClick={this.handleClick.bind(this,tab)}
                             url={tab.url}
                             name={tab.name}
                             isCurrent={(this.props.currentTab+"" === tab.id+"")}
                        />
                    )
                }.bind(this))}
            </ul>
        )
    }

}

class Routers extends React.Component{
    constructor(){
        super();
        this.state = {tabs: tabsList,
            currentTab:  localStorage.getItem('CurrentTab')|| 1};
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(tab){
        localStorage.setItem('CurrentTab', tab.id);
        this.setState({tabs:this.state.tabs, currentTab:tab.id});
    }
    render() {
        return (
            <Router>
                <div>
                    <div className="menu">
                        <Tabs
                            currentTab={this.state.currentTab}
                            changeTab={this.changeTab}
                            tabsList={this.state.tabs}/>
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

export default Routers;
