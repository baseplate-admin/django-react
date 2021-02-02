import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../shared-components/navbar/Navbar";
import PollVoteHeroFirst from "./PollVoteHeroFirst/PollVoteHeroFirst";
import PollVoteHeroMedium from "./PollVoteHeroMedium/PollVoteHeroMedium";
import PollVoteHeroSecond from "./PollVoteHeroSecond/PollVoteHeroSecond";
import PollVoteThankYou from "./PollVoteThankYou/PollVoteThankYou";

export default function PollVote(props:any){
    let slugParam = useParams();  //Returns id
    let [isVoted,setIsVoted] = useState(false);
    return(
        <>
        {!isVoted?(
            <>
        <Navbar />
        <PollVoteHeroFirst />
        <PollVoteHeroSecond />
        <PollVoteHeroMedium setIsVoted={setIsVoted} url={props.url} slug={slugParam}/>
        </>
        ):(
            <>
            <Navbar />
            <PollVoteThankYou url={props.url} slug={slugParam} />
            </>
        )}

        </>
    )
}