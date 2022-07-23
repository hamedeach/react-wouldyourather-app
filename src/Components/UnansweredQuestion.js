
import React, { useState } from "react";
import { connect } from 'react-redux';
import { handleAsynSubmitAnswer } from '../actions/questions'
import { Navigate,useParams } from "react-router-dom";


function UnansweredQuestion(props) {
    // use state hook
    const [answer, setAnswer] = useState('');
    const [op1, setOp1] = useState(false);
    const [op2, setOp2] = useState(false);
    const [toHome, setTohome] = useState(false);
    let { id } = useParams();
    ////////////////////////////////////////

    function handleSelectChange(e){
        switch (e.target.id) {
            case "op1":
                setAnswer('optionOne')
                setOp1(true)
                setOp2(false)
                /*
                this.setState(() => ({
                    answer: 'optionOne',
                    op1: true,
                    op2: false,

                }))
                */
                break;
            case "op2":
                setAnswer('optionTwo')
                setOp1(false)
                setOp2(true)

                /*
                this.setState(() => ({
                    answer: 'optionTwo',
                    op1: false,
                    op2: true,
                }))
                */
                break;
            default: break;
        }

    }
   
    function handleSubmit(e){
        e.preventDefault();
       
        const { answer } = this.state;
        const { dispatch, poll, authedUser } = this.props;
        dispatch(handleAsynSubmitAnswer(poll, answer));
        console.log('Submit poll answer..');

        setAnswer('')
        setOp1(false)
        setOp2(false)
        setTohome(true)
        /*
        this.setState(() => ({
            answer: '',
            op1: false,
            op2: false,
            tohome: true,
        }))
        */

    }
    
    const tohome  = toHome;
    if (tohome)
        return <Navigate to="/" />


    const { authedUser, questions, users } = props

    if (!authedUser)
        return <Navigate to='/' />

   
    const question_obj = questions.find((q) => { return q.id === id })

    if (!question_obj)
        return <Navigate to='*' />

    const author_obj = users.find((u) => { return u.id === question_obj.author })
    const question_user_name = author_obj.name;
    const question_user_avatarURL = author_obj.avatarURL;

    return (
        <div >
            <div className="question">
                <div>
                    <h1>{question_user_name} Asks:</h1>
                </div>
                <div className="question-answeres">
                    <div className="avatar-div">
                        <img src={question_user_avatarURL} alt={`avatar of ${question_user_name}`} className='question-avatar' />
                    </div>
                    <div className="answeres-div">
                        <div>
                            <h2>Would You Rather ...</h2>
                        </div>
                        <hr />
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="poll-option">
                                    <input type="radio" id="op1" name="fav_language" value="op1"
                                        onChange={handleSelectChange}
                                        checked={op1} />
                                    <label >{question_obj.optionOne.text}</label>
                                </div>
                                <hr />
                                <div className="poll-option">
                                    <input type="radio" id="op2" name="fav_language" value="op2"
                                        onChange={handleSelectChange}
                                        checked={op2} />
                                    <label >{question_obj.optionTwo.text}</label>

                                </div>
                                <button disabled={answer === ''} type='submit'>Submit</button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )


}


function mapStateToProps({ authedUser, users, questions }, props) {

    return {
        authedUser,
        users: Object.keys(users).map(id => {
            return users[id]
        }),
        questions: Object.keys(questions).map(id => {
            return questions[id]
        }),
    }

}


export default connect(mapStateToProps)(UnansweredQuestion);