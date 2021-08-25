import {createStore} from 'redux'


function counterReducer(state = {waiting: false, loggedIn: false}, action) {
    switch (action.type) {
        case 'login_attempt':
            return {waiting: true, loggedIn: false}
        case 'login_success':
            return {waiting: false, loggedIn: true}
        case 'logout_attempt':
            return {waiting: true, loggedIn: true}
        case 'logout_success':
            return {waiting: false, loggedIn: false}
        default:
            return state
    }
}

let store = createStore(counterReducer)


export default store;