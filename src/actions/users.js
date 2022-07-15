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


  export function handleUserAddPoll(author, qid) {
    return (dispatch) => {
        dispatch(addQUserQuestion({author,qid}))
    }
  }