import React from 'react';

class User extends React.Component{
    constructor(){
        super();
        this.state={name:'Maya', id:1}
    }
    render(){
        return <h1>{this.state.name}</h1>

    }
}

export default User;