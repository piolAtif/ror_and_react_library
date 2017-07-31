import React from 'react';
import Books from './Books';
import httpService from './service/httpService';
const BORROWED_BOOKS_URL = "http://10.0.1.29:3000/users/";

class User extends React.Component{
    constructor(){
        super();
        this.state={name:'Maya',
            id:1,
            borrowedBooks:[],
            message: ''
        };
        this.getAllBooks = this.getAllBooks.bind(this);
    }

    getAllBooks(books){
        this.setState({borrowedBooks:books});
        if(!this.state.borrowedBooks.length>0)
            this.setState({name:this.state.name, id:this.state.id, books:books, message:'No borrowed book'})
    }

    componentWillMount(){
        new httpService(BORROWED_BOOKS_URL+this.state.id).getBooks(this.getAllBooks);
    }

    render(){
        return(
        <div className="user">
            <div className="user_detail"><h1>{this.state.name}</h1></div>
            <hr/>
            <Books books={this.state.borrowedBooks}/>
            <div className="message">{this.state.message}</div>
        </div>
        )
    }
}

export default User;