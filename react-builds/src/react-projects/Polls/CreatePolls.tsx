import { Helmet } from "react-helmet"
import Navbar from "../shared-components/navbar/Navbar"
import CreatePollsHero from './CreatePollsHero/CreatePollsHero'
import CreatePollsHeroMedium from './CreatePollsHeroMedium/CreatePollsHeroMedium'

export default function CreatePolls(){
    return(
        <>
        <Helmet>
            <title> Create Poll </title>
        </Helmet>
        <Navbar />
        <CreatePollsHero />
        <CreatePollsHeroMedium />        
        </>
    )
}