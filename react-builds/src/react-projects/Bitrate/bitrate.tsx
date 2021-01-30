import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../shared-components/navbar/Navbar';
import BitrateHeroLarge from './hero-large/HeroLarge';
import BitrateHeroMedium from './hero-medium/HeroMedium';
import BitrateHero from './hero/Hero';
import BitRateShowHome from './showHome';

export default function Bitrate(){
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
            <BitrateHeroLarge setShowHome={setShowHome} setBitrate={setBitrate} minute={minute} setMinute={setMinute} seconds={seconds} setSeconds={setSeconds} hour={hour} setHour={setHour} size={size} setSize={setSize} counter={counter} setCounter={setCounter} />
            <BitrateHeroMedium />
            </>
        ):(
            <BitRateShowHome bitrate={bitrate} />
        )}
        </>
    )
}