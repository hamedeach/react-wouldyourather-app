
import { saveNewQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'



export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(poll) {
    return {
        type: ADD_QUESTION,
        poll,
    }
}

export function handleAsyncAddPoll(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        
        return saveNewQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        }
        ).then((poll) => {
            dispatch(addQuestion(poll));
            dispatch(hideLoading());
        }
        ).catch((e) => {
            console.warn('Error in handle  adding a poll', e)
            alert('error to add a poll')
        });


    }
}
