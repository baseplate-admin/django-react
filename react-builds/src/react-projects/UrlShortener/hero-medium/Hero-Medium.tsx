import { useEffect } from 'react';
import validator from 'validator';
import UrlShortenerHero from "../hero/Hero";
import Link from './link'
import axios from 'axios';
export default function UrlShortenerHeroMedium(props:any) {

    function dateTime() {
        let date = new Date();

        let hour: number = date.getHours();
        let minute: any  = date.getMinutes();
        let seconds: number = date.getSeconds();
        let amOrPm;

        if (hour < 12) {
            amOrPm = 'AM'
        }
        else if (hour === 12) {
            amOrPm = 'PM'
        }
        else if (hour > 12) {
            hour = hour - 12
            amOrPm = "PM"
        }

        let time = `${hour}:${minute}:${seconds} ${amOrPm}`
        props.setTime(time)
    }
    useEffect(() => {
        setInterval(() => {
            dateTime()
        }, 1)
    })
    function handlePostData(event: any) {
        event.preventDefault()
        validateUrl()
    }
    function postData() {
        const longUrl = { long: props.long, time: props.time };
        const url = 'http://127.0.0.1:8000/api/v1/url/'
        axios.post(url, longUrl)
            .then(res => {
                props.setShort(res.data.short)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function handleChange(event: any) {
        event.preventDefault();
        props.setLong(event.target.value)
    }
    function validateUrl() {
        let urlTrueOrFalse = validator.isURL(props.long)
        if (urlTrueOrFalse) {
            postData()
            props.setLong("")
            props.setUrlNotValid('')
            props.setUrlSentIsTrue(true);
        }
        else if (!urlTrueOrFalse) {
            props.setUrlNotValid("Please enter a valid url")
        }
    }
    return (
        <>
            <UrlShortenerHero />
            <section className="hero is-medium">
                <div className="hero-body" style={{ textAlign: 'center' }}>
                    <div className="container">
                        <h1 className="title">
                            Enter your URL:
                </h1>
                        <div className="control has-icons-left" style={{ textAlign: 'center' }}>
                            <span className="icon is-small is-right">
                                <Link></Link>
                            </span>
                            <input id='long-url' onChange={handleChange} required value={props.long} className="input is-info" type="text" placeholder="Long Version Url"
                                style={{
                                    width: 400
                                }} />
                            <div className="control" style={{
                                textAlign: 'center',
                                paddingTop: 20,
                            }}>
                                <button id='submit' onClick={handlePostData} className="button is-primary">Create Short Url</button>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        paddingTop: 20,
                        textAlign: "center",
                        color: "red",
                    }}>
                        <h3 style={{
                            fontSize: 25,
                        }}>{props.urlNotValid}</h3>
                    </div>
                </div>

            </section>
        </>
    );
}
