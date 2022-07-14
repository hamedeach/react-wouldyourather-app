import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA.js';

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}


export function saveNewQuestion(poll) {

    return _saveQuestion(poll)
}

export function submitAnswer(authedUser, qid, answer) {
    return _saveQuestionAnswer({ authedUser, qid, answer });

}  