import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT :
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
                // Why use concat ? because concat like push but return new array
            }
        case actionTypes.DELETE_RESULT : 
            // First make a copy of array and then delete it
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            // Second using filter, because filter return new Array
            const newArray = state.results.filter(result => result.id !== action.id)
            return {
                ...state,
                results: newArray
            }
    }
    return state;
}

export default reducer;