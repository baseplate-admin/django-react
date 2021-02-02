import { Helmet } from "react-helmet";
import CheersIcon from "./cheers";
import ThankYouIcon from "./thankyou";

export default function PollVoteThankYou(props:any){
    let url= `${props.url}/poll/result/${props.slug.slug}/`
    return(
        <>
        <Helmet>
            <title>Thank You For Voting</title>
        </Helmet>
        <section className="hero is-medium">
        <div className="hero-body">
            <h1 className="title" style={{textAlign:"center"}}>Vote Submitted</h1>
            <div className="container" style={{textAlign:"center"}}>
                <CheersIcon />
            </div>
        </div>
    </section>
    <section className="hero is-medium">
        <div className="hero-body">
            <div className="container" style={{textAlign:"center"}}>
                <h1 className="title">
                    <ThankYouIcon />
                </h1>
                <h2 className="subtitle">
                    Would you Like to see the <a href={url}>result?</a>
                </h2>
            </div>
        </div>
    </section>
        </>
    )
}