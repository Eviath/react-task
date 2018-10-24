import React from 'react'

class Cart extends React.Component {
    state = {
      isLoading: true,
      books: [],
      error: null
    };
  
    fetchBooks() {
      fetch(`http://localhost:3001/api/book`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            books: data,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
      this.fetchBooks();
    }

    render() {
      const { isLoading, books, error } = this.state;
      return (
        <React.Fragment>
          <h1>Books</h1>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            books.map(book => {
              const { id, title, pages } = book;
              return (
                <div key={id}>
                  <p>Title: {title}</p>
                  <p>Pages: {pages}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </React.Fragment>
      );
    }
  }


  export default Cart;  