
import { saveNewQuestion, submitAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {handleUserAddPoll ,handleUserAnswer} from '../actions/users'



export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";


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

export function submitAnswerAction(authedUser,qid, answer) {
    return {
        type: SUBMIT_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function handleAsynSubmitAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return submitAnswer(authedUser, qid, answer).then((res) => {
            dispatch(submitAnswerAction(authedUser,qid, answer));
            dispatch(handleUserAnswer(authedUser,qid,answer));
            dispatch(hideLoading);
        }).catch((e) => {
            console.warn('Error in handle submit answer', e)
            alert('error to submit answer')
        });

    }
}

export function handleAsyncAddPoll(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return saveNewQuestion({optionOneText,optionTwoText,author: authedUser,}
        ).then((poll) => {
            debugger;
            dispatch(addQuestion(poll));
            dispatch(handleUserAddPoll(authedUser,poll.id))
            dispatch(hideLoading());
        }
        ).catch((e) => {
            console.warn('Error in handle  adding a poll', e)
            alert('error to add a poll')
        });


    }
}


