import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// It takes in the entire application state; If state changes then entire component will rerender
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // Inside of BookList
    return {
        // Everytime app state changes the object in state function will be assigned as props in component
        books: state.books
    };
}

// Export 2 params
export default connect(mapStateToProps)(BookList);