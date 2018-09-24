import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    render(){
        // If no book (at startup) it will return this and exit
        if(!this.props.book){
            return <div>Select a book to get started.</div>
        }

        return (
            <div>
                <h3>Details For:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    // Return an object that will show up as props inside of BookDetail
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);