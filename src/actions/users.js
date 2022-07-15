import { submitAnswerAction } from '../actions/questions'
import { saveNewQuestion, submitAnswer } from '../utils/api'

export const RECEIVE_USERS ='RECEIVE_USERS';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';


export function receiveUsers(users){
    return{
        type:RECEIVE_USERS,
        users,
    }
}

export function addQUserQuestion({ author,qid }) {
    return {
      type: ADD_USER_QUESTION,
      qid,
      author
    };
  }


  function addUserAnswer(authUser, qid, answer) {
    return {
      type: ADD_USER_ANSWER,
      authUser,
      qid,
      answer
    };
  }


  export function handleUserAddPoll(author, qid) {
    return (dispatch) => {
        dispatch(addQUserQuestion({author,qid}))
    }
  }


  export function handleUserAnswer(authUser, qid, answer) {
    return dispatch => {
      dispatch(addUserAnswer(authUser, qid, answer));
      dispatch(submitAnswerAction(authUser, qid, answer));
  
      return submitAnswer(authUser, qid, answer);
    };
  }