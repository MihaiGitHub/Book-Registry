// Produces new piece of application state whenever a book is selected
// All reducers get two arguments; hte current state and action
// Reducers are only called when an action occurs
// State argument is not application state, on the state this reducer
// is responsible for
export default function(state = null, action){ // When argument is undefined set to null
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}