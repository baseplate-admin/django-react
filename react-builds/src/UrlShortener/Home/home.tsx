import Navbar from './navbar/Navbar';
import HeroMedium from "./hero-medium/Hero-Medium"
import { useState } from 'react';
import ShowUrl from './showUrl/showUrl';

function Home(){
    let [long, setLong] = useState("");
    let [urlNotValid, setUrlNotValid] = useState('');
    let [time, setTime] = useState('')
    let [urlSentIsTrue, setUrlSentIsTrue] = useState(false);
    let [short, setShort] = useState('');
    return(
    <>
    <Navbar />
    {!urlSentIsTrue?(
        <HeroMedium setShort={setShort} setUrlSentIsTrue={setUrlSentIsTrue} long={long} urlNotValid={urlNotValid} setLong={setLong} setUrlNotValid = {setUrlNotValid} setTime = {setTime} time={time} />
    ) :(
        <ShowUrl short={short} />
    )
    }
    </>
    )
}
export default Home;