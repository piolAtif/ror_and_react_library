import React from 'react';
import httpService from './service/httpService';
import Books from "./Books";
const ALL_BOOKS_URL = "http://10.0.1.29:3000/all/books";

class AllBooks extends React.Component{
	constructor(){
		super();
		this.state = {allBooks:[]}
		this.getAllBooks = this.getAllBooks.bind(this);
    }

    getAllBooks(books){
		this.setState({allBooks:books});
	}

    componentWillMount(){
		new httpService(ALL_BOOKS_URL).getBooks(this.getAllBooks);
	}

	render(){
		return <Books books={this.state.allBooks}/>
	}
}

export default AllBooks;
