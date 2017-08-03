import React from 'react';
import httpService from '../service/httpService';
import Books from "./Books";
const ALL_BOOKS_URL = "https://peaceful-ravine-21667.herokuapp.com/all/books";

class AllBooks extends React.Component{
	constructor(){
		super();
		this.state = {allBooks:[]}
		this.getAllBooks = this.getAllBooks.bind(this);
    }

    getAllBooks(books){
		this.setState({allBooks:books});
	}

    componentDidMount(){
		new httpService(ALL_BOOKS_URL).getBooks(this.getAllBooks);
	}

	render(){
		return <Books books={this.state.allBooks}/>
	}
}

export default AllBooks;
