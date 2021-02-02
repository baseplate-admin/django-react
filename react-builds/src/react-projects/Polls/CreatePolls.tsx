import Navbar from "../shared-components/navbar/Navbar"
import CreatePollsHero from './CreatePollsHero/CreatePollsHero'
import CreatePollsHeroMedium from './CreatePollsHeroMedium/CreatePollsHeroMedium'

export default function CreatePolls(props:any){
    return(
        <>
        <Navbar />
        <CreatePollsHero />
        <CreatePollsHeroMedium url={props.url} />
        </>
    )
}