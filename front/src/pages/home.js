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




      <div className="products-wrapper">
<div className="container-fluid">


<div className="row">


      <div className="col-md-2">
          Kategorie

          <ul>
            <li><a href="">Item 1</a></li>
            <li><a href="">Item 1</a></li>
            <li><a href="">Item 1</a></li>
            <li><a href="">Item 1</a></li>
            <li><a href="">Item 1</a></li>
            <li><a href="">Item 1</a></li>
            <li><a href="">Item 1</a></li>
            <li><a href="">Item 1</a></li>
            <li><a href="">Item 1</a></li>

          </ul>
        </div>

<div className="col-md-10">

<div className="text-header">
           <h3>Najnowsze
             
             <span>Książki</span>
             
             <p>Suspendisse ac tellus congue, eleifend leo eu, elementum ligula. Suspendisse eget interdum <br/>>
est. Nam suscipit diam nulla, porttitor blandit risus viverra sed. In hac...</p>
             </h3>
           <hr/>
           </div>
         
      <BookList books={books} />
      </div>

      </div>
      </div>
      </div>

    );
  }
}







export default HomePage;  