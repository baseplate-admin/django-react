import { Helmet } from "react-helmet";
import OneIcon from "./one";
import QuestionIcon from "./question";
import ThreeIcon from "./three";
import TwoIcon from "./two";
import FourIcon from './four';
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function CreatePollsHeroMedium(props:any){
    const url = `${props.url}/api/v1/poll/`


    const [optionOne, setOptionOne] = useState("")
    const [optionTwo, setOptionTwo] = useState("")
    const [optionThree, setOptionThree] = useState("")
    const [optionFour, setOptionFour] = useState("")
    const [question, setQuestion] = useState("")
    let history = useHistory();


    const handleSubmitClick = () =>{
        const payload = {
            question: question,
            option_1: optionOne,
            option_2: optionTwo,
            option_3: optionThree,
            option_4: optionFour,
        }
        axios.post(url,payload)
        .then(res=>{
            console.log(res)
            // history.push("/front/ydl/")  // This Works At least Put what url you wanna push to.
        })
        .catch(e=>{
            console.log(e)
        })
    }
    return(
        <>
        <Helmet>
        <title> Create Poll </title>
        </Helmet>
        <section className="container hero is-medium">
        <div className="hero-body">
            <div className="container">
                <div className="field">
                    <div
                        className="control has-icons-left has-icons-right"
                        style={{textAlign: 'center'}}
                    >
                        <span className="icon is-small">
                            <QuestionIcon />
                        </span>
                        <input
                            onChange={e=>{setQuestion(e.target.value)}}
                            name="question"
                            className="input is-primary"
                            type="text"
                            placeholder="Question"
                            style={{width: 400}}
                            value={question}
                        />
                    </div>
                </div>
                <div className="field" style={{textAlign: 'center'}}>
                    <div className="control has-icons-left has-icons-right">
                        <span className="icon is-small">
                            <OneIcon />
                        </span>
                        <input
                            onChange={e=>{setOptionOne(e.target.value)}}
                            name="option1"
                            className="input is-info"
                            type="text"
                            placeholder="Option No: 1"
                            style={{width: 400}}
                            value={optionOne}
                        />
                    </div>
                </div>
                <div className="field" style={{textAlign: 'center'}}>
                    <div className="control has-icons-left has-icons-right">
                        <span className="icon is-small">
                            <TwoIcon />
                        </span>
                        <input
                            onChange={e=>{setOptionTwo(e.target.value)}}
                            name="option2"
                            className="input is-success"
                            type="text"
                            placeholder="Option No: 2"
                            style={{width: 400}}
                            value={optionTwo}
                        />
                    </div>
                </div>
                <div className="field" style={{textAlign: 'center'}}>
                    <div className="control has-icons-left has-icons-right">
                        <span className="icon is-small">
                            <ThreeIcon />
                        </span>
                        <input
                            onChange={e=>{setOptionThree(e.target.value)}}
                            name="option3"
                            className="input is-warning"
                            type="text"
                            placeholder="Option No: 3"
                            style={{width: 400}}
                            value={optionThree}
                        />
                    </div>
                </div>
                <div className="field">
                    <div
                        className="control has-icons-left has-icons-right"
                        style={{textAlign: 'center'}}
                    >
                        <span className="icon is-small">
                            <FourIcon />
                        </span>
                        <input
                            onChange={e=>{setOptionFour(e.target.value)}}
                            name="option4"
                            className="input is-danger"
                            type="text"
                            placeholder="Option No: 4"
                            style={{width: 400}} 
                            value={optionFour}
                        />
                    </div>
                </div>
                <div className="control" style={{textAlign: 'center'}}>
                    <button
                        onClick={handleSubmitClick}
                        className="button is-primary"
                    > Submit </button>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}