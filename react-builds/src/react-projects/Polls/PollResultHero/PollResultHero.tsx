import axios from "axios";
import { useEffect, useState } from "react";
import {Doughnut} from "react-chartjs-2";

export default function PollResultHero(props:any){
    const url = `${props.url}/api/v1/poll/${props.slug.slug}/`
    const [optionOneCount, setOptionOneCount] = useState(0);
    const [optionTwoCount, setOptionTwoCount] = useState(0);
    const [optionThreeCount, setOptionThreeCount] = useState(0);
    const [optionFourCount, setOptionFourCount] = useState(0);

    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const [optionThree, setOptionThree] = useState("");
    const [optionFour, setOptionFour] = useState("");
    
    const [allCount, setAllCount] = useState('')
    
    const increaseCount = () =>{
        let count = optionOneCount + optionTwoCount + optionThreeCount + optionFourCount
        setAllCount(count.toString())
    }

    useEffect(() => {
        setInterval(() => {
            axios.get(url)
            .then(res=>{
                setOptionOneCount(res.data.option_1_count)
                setOptionTwoCount(res.data.option_2_count)
                setOptionThreeCount(res.data.option_3_count)
                setOptionFourCount(res.data.option_4_count)
                increaseCount()
                setOptionOne(res.data.option_1)
                setOptionTwo(res.data.option_2)
                setOptionThree(res.data.option_3)
                setOptionFour(res.data.option_4)
            })
            .catch(e=>{
                console.log(e)
            })
        }, 1000)
        increaseCount()
    })

    let labels = [optionOne, optionTwo, optionThree, optionFour];
    let data = [optionOneCount, optionTwoCount, optionThreeCount, optionFourCount];

    let colors1 = ['#49A9EA', '#36CAAB', '#534275', '#c9ae9f'];
        return(
        <section className="hero">
            <div className="hero-body" style={{textAlign: "center"}}>
                <h1 className="title">What is your Favorite Browser</h1>
                <h2 className="subtitle">Total Vote Count: {allCount}</h2>
                <div className="container">
                    <Doughnut data={{
                            labels: labels,
                            datasets: [
                                {
                                    data: data,
                                    backgroundColor: colors1,
                                },
                            ],
                        }}
                        height={600}
                        width={600}
                        options={{maintainAspectRatio: false}}
                    />
                </div>
            </div>
        </section>
    )

}