import React from 'react'
import BookList from '../features/book-list'

class HomePage extends React.Component {

  state = {
    books: [],
  };

  fetchBooks() {
    fetch(`http://localhost:3001/api/book`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          books: data.data,
        })
      )
      

  }
  
  componentDidMount() {
    this.fetchBooks();
  }


  render() {

    
    const { books } = this.state;
    return (

      <div>
      <BookList books={books} />
      </div>

    );
  }
}







export default HomePage;  