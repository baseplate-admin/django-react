import Navbar from '../shared-components/navbar/Navbar';
import UrlShortenerHeroMedium from "./hero-medium/Hero-Medium"
import { useState } from 'react';
import ShowUrl from './showUrl/showUrl';
import Helmet from 'react-helmet'
export default function UrlShortener(props:any) {
    let [long, setLong] = useState("");
    let [urlNotValid, setUrlNotValid] = useState('');
    let [time, setTime] = useState('')
    let [urlSentIsTrue, setUrlSentIsTrue] = useState(false);
    let [short, setShort] = useState('');
    return(
    <>
    <Helmet>
        <title>Url Shortener</title>
    </Helmet>
    <Navbar />
    {!urlSentIsTrue?(
        <UrlShortenerHeroMedium url={props.url} setShort={setShort} setUrlSentIsTrue={setUrlSentIsTrue} long={long} urlNotValid={urlNotValid} setLong={setLong} setUrlNotValid = {setUrlNotValid} setTime = {setTime} time={time} />
    ) :(
        <ShowUrl url={props.url} short={short} />
    )
    }
    </>
    )
}
