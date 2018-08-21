import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
  // Mapping for reducers created
  books: BooksReducer
});

export default rootReducer;
