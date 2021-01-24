import Navbar from './navbar/Navbar';
import Hero from "./hero/Hero";
import HeroMedium from "./hero-medium/Hero-Medium"
import "./bulma.css"

function Home(){
    return(
    <>
    <Navbar />
    <Hero />
    <HeroMedium />
    </>
    )
}
export default Home;