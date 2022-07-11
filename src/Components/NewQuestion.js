
import React,{Component} from "react";


class NewQuestion extends Component{

    render(){
        return(
            <div className="box-div">
                <div className="box-title">
                    <h2> New Question !</h2>
                    <h3>Complete the question ...</h3>
                </div>
                <h1> Would You Rather ...</h1>
                <div >
                    <form className="question-div">
                        <textarea 
                         placeholder="Option #1 ..."
                         maxLength={280}
                         />

                        <h2 className="h2-or"> OR </h2>

                        <textarea
                         placeholder="Option #2 ..."
                         maxLength={280} />
                         <br/>

                        <button className="submit-btn"> Submit</button>
                    </form>
                </div>
                
            </div>
        )
    }
}
export default NewQuestion;