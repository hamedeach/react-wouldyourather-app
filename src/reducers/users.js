import { RECEIVE_USERS, ADD_USER_QUESTION ,ADD_USER_ANSWER} from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return { ...state, ...action.users }
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat(action.qid)
                }

            }
            case ADD_USER_ANSWER:
                const { authUser, qid, answer } = action;
                return {
                  ...state,
                  [authUser]: {
                    ...state[authUser],
                    answers: {
                      ...state[authUser].answers,
                      [qid]: answer
                    }
                  }
                };
        default: return state;
    }

}