import { useParams } from "react-router-dom";
import Navbar from "../shared-components/navbar/Navbar";
import PollResultHero from "./PollResultHero/PollResultHero";

export default function PollResult(props:any){

    let slugParam = useParams();  //Returns id

    return(
        <>
        <Navbar />
        <PollResultHero url={props.url} slug={slugParam} />
        </>
    )
}