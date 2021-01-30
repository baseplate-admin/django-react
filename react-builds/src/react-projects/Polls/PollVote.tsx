import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Navbar from "../shared-components/navbar/Navbar";
import PollVoteHeroFirst from "./PollVoteHeroFirst/PollVoteHeroFirst";
import PollVoteHeroMedium from "./PollVoteHeroMedium/PollVoteHeroMedium";
import PollVoteHeroSecond from "./PollVoteHeroSecond/PollVoteHeroSecond";

export default function PollVote(){
    let slugParam = useParams(); //Returns id
    return(
        <>
        <Helmet>
            <title>Poll Vote</title>
        </Helmet>
        <Navbar />
        <PollVoteHeroFirst />
        <PollVoteHeroSecond />
        <PollVoteHeroMedium />
        </>
    )
}