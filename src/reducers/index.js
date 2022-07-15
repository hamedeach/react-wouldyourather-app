import {combineReducers} from 'redux'

import authedUser from './authedUser'
import questions from './questions' 
import users from './users'
import { loadingBarReducer } from 'react-redux-loading-bar'
import poll from './poll'

export default combineReducers({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer,
    poll,
})