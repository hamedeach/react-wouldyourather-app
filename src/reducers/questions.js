import { RECEIVE_QUESTIONS, ADD_QUESTION, SUBMIT_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return { ...state, ...action.questions }
        case ADD_QUESTION:
            const { poll } = action;
            return {
                ...state,
                [poll.id]: poll,
            }
        case SUBMIT_ANSWER:
            const { authedUser, qid, answer } = action;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authedUser)
                    }
                }
            }


        default: return state;
    }

}