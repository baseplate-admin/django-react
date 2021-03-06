import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../shared-components/navbar/Navbar';
import BitrateHeroLarge from './BitrateHeroLarge/BitrateHeroLarge';
import BitrateHeroMedium from './BitrateHeroMedium/BitrateHeroMedium';
import BitrateHero from './BitrateHero/BitrateHero';
import BitRateShowHome from './showHome/showHome';

export default function Bitrate(props:any){
    let [minute,setMinute] = useState(0);
    let [seconds,setSeconds] = useState(0);
    let [hour,setHour] = useState(0);
    let [size,setSize] = useState(0);
    let [counter,setCounter] = useState(0);
    let [bitrate,setBitrate] = useState(0);
    let [showHome, setShowHome] = useState(false);
    return(
        <>
        <Helmet>
            <title>Bitrate Calculator</title>
        </Helmet>
        <Navbar />

        {!showHome?(
            <>
            <BitrateHero />
            <BitrateHeroLarge url={props.url} setShowHome={setShowHome} setBitrate={setBitrate} minute={minute} setMinute={setMinute} seconds={seconds} setSeconds={setSeconds} hour={hour} setHour={setHour} size={size} setSize={setSize} counter={counter} setCounter={setCounter} />
            <BitrateHeroMedium />
            </>
        ):(
            <BitRateShowHome bitrate={bitrate} />
        )}
        </>
    )
}