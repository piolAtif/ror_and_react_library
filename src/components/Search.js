import React from 'react';
import httpService from '../service/httpService';
import Books from "./Books";

const SEARCH_BOOK_API = "https://peaceful-ravine-21667.herokuapp.com/books?search=";

class Search extends React.Component{
    constructor(){
        super()
        this.state={value:'',books:[],message:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.fetchBooks = this.fetchBooks.bind(this);

    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    fetchBooks(listOfBooks){
        const value = this.state.value;

        this.setState({value:value, books:listOfBooks, message:''});
        this.setState({value:value, books:listOfBooks});
        if(!this.state.books.length>0)
            this.setState({value:value, books:listOfBooks, message:this.state.value+' Not found'})
    }

    handleClick(event){
        new httpService(SEARCH_BOOK_API+this.state.value).getBooks(this.fetchBooks);
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <input type="text"
                           value={this.state.value}
                           onChange={this.handleChange}
                           placeholder="Search book or author"
                           className="search_box"/>
                    <input type="submit" value="Submit" className="search_button"/>
                </form>
                <Books books={this.state.books}/>
                <div className="message">{this.state.message}</div>
            </div>

        )
    }
}

export default Search;
