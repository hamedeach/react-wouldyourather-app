import {SELECT_POLL} from '../actions/poll';

export default function authedUser(state=null,action){
    switch(action.type){
        case SELECT_POLL:
            return action.pollid
        default: return state
    }
}