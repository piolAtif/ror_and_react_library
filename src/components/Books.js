import React from 'react';
import httpService from '../service/httpService';
const BORROW_API = "http://10.0.1.29:3000/user/1/book/";
const RETURN_API = "http://10.0.1.29:3000/user/1/book/";

class Book extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id:props.value.id,
			status: props.value.can_borrowed+"" === '1'? 'borrow':'return'
		};
		this.updateBook = this.updateBook.bind(this);
	}

	updateBook(data){
		this.setState({id:this.state.id,
            status:data.can_borrowed+"" === '1'? 'borrow':'return'
		})
	}

	borrowABook(){
        new httpService(BORROW_API+this.state.id+"/borrow").getBooks(this.updateBook);
	}

	returnABook(){
        new httpService(RETURN_API+this.state.id+"/return").getBooks(this.updateBook);
	}

	render(){
		return (
			<div className="book" id={this.state.id}>
				<div className="image"><img alt="" src={this.props.value.image_link}/></div>
				<div className="container">
					<div className="book_detail">
						<div className="book_name">{this.props.value.name}</div>
						<div className="author">{this.props.value.author_name}</div>
					</div>
					<div className="book_actions">
						<button name="borrow_button" onClick={()=>this.borrowABook()} disabled={this.state.status === 'return'}>Borrow</button>
						<button name="return_button" onClick={()=>this.returnABook()} disabled={this.state.status === 'borrow'}>Return</button>
					</div>
				</div>
			</div>
			)
	}
}

class Books extends React.Component{
	constructor(){
		super();
		this.state = {books: []};
	}

	render(){
		let booksList = this.props.books;
		let myBooks =  booksList.map((book,i) => {
			return <Book key={i} value={book}/>
		});
		return (
		<div className="books">{myBooks}</div>
		)
	}
}
 export default Books;