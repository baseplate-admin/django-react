import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../shared-components/navbar/Navbar';
import HeroLarge from './hero-large/HeroLarge';
import HeroMedium from './hero-medium/HeroMedium';
import Hero from './hero/Hero';

export default function Bitrate(){
    let [minute,setMinute] = useState(0);
    let [seconds,setSeconds] = useState(0);
    let [hour,setHour] = useState(0);
    let [size,setSize] = useState(0);
    let [counter,setCounter] = useState(0);
    let [bitrate,setBitrate] = useState(0)
    return(
        <>
        <Helmet>
            <title>Bitrate Calculator</title>
        </Helmet>
        <Navbar />
        <Hero />
        <HeroLarge setBitrate={setBitrate} minute={minute} setMinute={setMinute} seconds={seconds} setSeconds={setSeconds} hour={hour} setHour={setHour} size={size} setSize={setSize} counter={counter} setCounter={setCounter} />
        <HeroMedium />
        </>
    )
}