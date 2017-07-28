import React from 'react';

class Book extends React.Component{
	constructor(){
		super();
		this.state = {returnButton:true,borrowButton:false};
	}
	borrowABook(){
		this.setState({returnButton:false, borrowButton:true});
		return alert('Book has borrowed');
	}

	returnABook(){
        this.setState({returnButton:true, borrowButton:false});
		return alert('Book has return successfully');
	}

	render(){
		return (
			<div className="book" id={this.props.value.id}>
				<div className="image"><img alt="" src={this.props.value.image_link}/></div>
				<div className="container">
					<div className="book_detail">
						<div className="book_name">{this.props.value.name}</div>
						<div className="author">{this.props.value.author_name}</div>
					</div>
					<div className="book_actions">
						<button name="borrow_button" onClick={()=>this.borrowABook()} disabled={this.state.borrowButton}>Borrow</button>
						<button name="return_button" onClick={()=>this.returnABook()} disabled={this.state.returnButton}>Return</button>
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
		let myBooks = booksList.map((book,i) => {
			return <Book key={i} value={book}/>
		});
		return (
		<div className="books">{myBooks}</div>
		)
	}
}
 export default Books;