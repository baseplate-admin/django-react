import { Helmet } from "react-helmet";
import axios from "axios"
import { useEffect, useState } from "react"
import './table.css';
export default function PollVoteHeroMedium(props:any){
    const url = `${props.url}/api/v1/poll/${props.slug.slug}/`

    let [questionOne,setQuestionOne] = useState('')
    let [questionTwo,setQuestionTwo] = useState('')
    let [questionThree,setQuestionThree] = useState('')
    let [questionFour,setQuestionFour] = useState('')
    let [question, setQuestion] = useState('')

    let [isOptionOneTrueOrFalse, setIsOptionOneTrueOrFalse] = useState(false)
    let [isOptionTwoTrueOrFalse, setIsOptionTwoTrueOrFalse] = useState(false)
    let [isOptionThreeTrueOrFalse, setIsOptionThreeTrueOrFalse] = useState(false)
    let [isOptionFourTrueOrFalse, setIsOptionFourTrueOrFalse] = useState(false)
    
    let [postData, setPostData] = useState('');
    const oneClicked = () =>{
        setIsOptionOneTrueOrFalse(true);
        setPostData('option_one')

        setIsOptionFourTrueOrFalse(false);
        setIsOptionThreeTrueOrFalse(false);
        setIsOptionTwoTrueOrFalse(false);
    }
    const twoClicked = () =>{
        setIsOptionTwoTrueOrFalse(true);
        setPostData('option_two')

        setIsOptionOneTrueOrFalse(false);
        setIsOptionThreeTrueOrFalse(false);
        setIsOptionFourTrueOrFalse(false);
    }
    const threeClicked = () =>{
        setIsOptionThreeTrueOrFalse(true);
        setPostData('option_three')

        setIsOptionOneTrueOrFalse(false);
        setIsOptionTwoTrueOrFalse(false);
        setIsOptionFourTrueOrFalse(false);
    }
    const fourClicked = () =>{
        setIsOptionFourTrueOrFalse(true);
        setPostData('option_four')

        setIsOptionOneTrueOrFalse(false);
        setIsOptionTwoTrueOrFalse(false);
        setIsOptionThreeTrueOrFalse(false);
    }

    const postDataToServer = () =>{
        const payload = {option:postData}
        axios.post(url,payload)
        .then(props.setIsVoted(true))
        .catch(e=>{
            console.log(e)
        })
    }
    
    useEffect(() => {
        setTimeout(() => {
            axios.get(url)
            .then(res=>{
                setQuestion(res.data.question)
                setQuestionOne(res.data.option_1)
                setQuestionTwo(res.data.option_2)
                setQuestionThree(res.data.option_3)
                setQuestionFour(res.data.option_4)
            })
            .catch(e=>{
                console.log(e)
            })
        }, 1)
    })

    return(
        <>
        <Helmet>
        <title>Poll Vote</title>
        </Helmet>
        <section className="hero is-medium">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title" style={{textAlign: "center"}}>
                        Question: {question}
                        <br />
                    </h1>
                        <div className="container" >
                            <h2 style={{color:"#4a4a4a", fontSize:'1.25rem',fontWeight:400}}>
                                <table style={{textAlign: "center",marginLeft:"auto",marginRight:"auto"}}>
                                    <tr>
                                        <td className='td-row'>
                                            <input
                                            type="radio"
                                            value="option1"
                                            checked = {isOptionOneTrueOrFalse}
                                            onClick={()=>{oneClicked()}}
                                            />
                                        </td>
                                        <td>
                                            <label className="radio">
                                                {questionOne}
                                            
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='td-row'>
                                            <input
                                            type="radio"
                                            value="option2"
                                            checked = {isOptionTwoTrueOrFalse}
                                            onClick={()=>{twoClicked()}}
                                            />
                                        </td>
                                        <td>
                                            <label className="radio">
                                            {questionTwo}
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='td-row'>
                                            <input
                                            type="radio"
                                            value="option3"
                                            checked = {isOptionThreeTrueOrFalse}
                                            onClick={()=>{threeClicked()}}
                                          />
                                        </td>
                                        <td>
                                            <label className="radio">
                                            {questionThree}
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='td-row'>
                                            <input
                                                type="radio"
                                                value="option4"
                                                checked = {isOptionFourTrueOrFalse}
                                                onClick={()=>{fourClicked()}}
                                            />
                                        </td>
                                        <td>
                                        <label className="radio">
                                            {questionFour}
                                        </label>
                                        </td>
                                    </tr>
                                </table>

                            </h2>
                        </div>
                        <div className="control" style={{textAlign: "center", paddingTop:10}}>
                            <button
                                className="button is-primary"
                                onClick={postDataToServer}
                            > Submit </button>
                        </div>
                </div>
            </div>
        </section>
        </>
    )
}