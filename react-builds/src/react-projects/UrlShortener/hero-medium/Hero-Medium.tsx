import { useEffect, useState } from 'react';
import validator from 'validator';
import Hero from "../hero/Hero";

import axios from 'axios';
export default function HeroMedium(props:any) {

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
            <Hero />
            <section className="hero is-medium">
                <div className="hero-body" style={{ textAlign: 'center' }}>
                    <div className="container">
                        <h1 className="title">
                            Enter your URL:
                </h1>
                        <div className="control has-icons-left" style={{ textAlign: 'center' }}>
                            <span className="icon is-small is-right">
                                <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTExLjc3MSA1MTEuNzcxIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMS43NzEgNTExLjc3MSIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBkPSJtMTg5LjU0NyAxMjguODk3Yy02MC4zMDIgNjIuMzkxLTQ3LjE0MyAxNjUuOTMxIDIxLjkzMiAyMTEuNzk4IDIuMjc2IDEuNTEyIDUuMzA0IDEuMjEyIDcuMjU5LS42OTggMTQuNTQyLTE0LjIwOSAyNi44NDQtMjcuOTcyIDM3LjYxNi00NS40NzYgMS42NDgtMi42NzguNjIzLTYuMTUzLTIuMTQyLTcuNjUxLTEwLjUzNi01LjcwOC0yMS4wMi0xNi40MTEtMjYuOTIyLTI3LjcxN2wtLjAwNy4wMDRjLTcuMDctMTQuMDc4LTkuNDc3LTI5Ljg1OS01LjczNC00Ni4xNTcuMDA0LjAwMS4wMDguMDAyLjAxMi4wMDIgNC4zMDctMjAuODY2IDI2LjcwOC00MC4yNzYgNDMuODE3LTU4LjIyNy0uMDM2LS4wMTItLjA3MS0uMDI1LS4xMDctLjAzN2w2NC4xMDMtNjUuNDI2YzI1LjU0Ni0yNi4wNzMgNjcuNTY2LTI2LjI4OCA5My4zNzctLjQ3NyAyNi4wNzIgMjUuNTQ1IDI2LjUwMyA2Ny43NzcuOTU4IDkzLjg0OWwtMzguODI4IDM5LjkyOGMtMS43OTcgMS44NDgtMi4zOCA0LjU0NC0xLjUzOSA2Ljk4MSA4Ljk0IDI1LjkyNSAxMS4xMzkgNjIuNDggNS4xNDggOTAuMDk4LS4xNjguNzczLjc4NiAxLjI3OSAxLjMzOS43MTRsODIuNjM4LTg0LjM0NGM1Mi43OTEtNTMuODggNTIuMzQzLTE0MS42MDQtLjk5NS0xOTQuOTQyLTU0LjQzMy01NC40MzMtMTQzLjA0OC01My45OC0xOTYuOTIyIDEuMDA1bC04NC42NzIgODYuNDE5Yy0uMTEyLjExOC0uMjE4LjIzOC0uMzMxLjM1NHoiLz48cGF0aCBkPSJtMzQ0LjAzOCAzNTIuNTc2Yy0uMDAxLjAwMy0uMDAzLjAwNi0uMDA0LjAwOS4wNTMtLjAyMi4xMDItLjA0My4xNTUtLjA2NiAxNi44NjUtMzAuODM5IDIwLjE4NS02Ni4yMDggMTIuMjgxLTEwMC42ODdsLS4wMzYuMDM3LS4wMzktLjAxN2MtNy41MDUtMzAuNzA5LTI4LjA5OC02MS4yMDMtNTYuMDY2LTc5Ljk3OC0yLjQwNi0xLjYxNS02LjI0OS0xLjQyOC04LjUwMi4zOTQtMTQuMTY3IDExLjQ1NS0yOC4wMzQgMjYuMTQ0LTM3LjE4NCA0NC44ODktMS40MzcgMi45NDMtLjM2MSA2LjQ3OCAyLjQ3MSA4LjEyMiAxMC42MTkgNi4xNjUgMjAuMjA5IDE1LjE5MSAyNi42MyAyNy4xNzRsLjAxLS4wMDdjNS4wMDQgOC40NjUgOS45MzUgMjQuNTI3IDYuNzQxIDQxLjc4NS0uMDAyIDAtLjAwNSAwLS4wMDcgMC0yLjk4IDIyLjg4MS0yNi4wODYgNDMuODY5LTQ0LjQ1NCA2Mi43ODFsLjAwOS4wMDljLTEzLjk4MiAxNC4yOTgtNDkuNTI1IDUwLjUzMi02My43NTcgNjUuMDcyLTI1LjU0NSAyNi4wNzItNjcuNzc3IDI2LjUwMy05My44NDkuOTU4LTI2LjA3Mi0yNS41NDUtMjYuNTAzLTY3Ljc3Ny0uOTU4LTkzLjg0OWwzOC45NDMtNDAuMDQ4YzEuNzY1LTEuODE1IDIuMzY1LTQuNDUzIDEuNTgtNi44Ni04LjY0Ny0yNi41MzEtMTEuMDE2LTYyLjI2Mi01LjU1OC04OS44NDkuMTUyLS43NjktLjc5NC0xLjI2LTEuMzQzLS43bC04MS4zOTUgODMuMDc1Yy01My4zMzIgNTQuNDMzLTUyLjg4IDE0My4wNTcgMS4wMDYgMTk2Ljk0MiA1NC40MyA1My4zMyAxNDIuNTk3IDUyLjQyOSAxOTUuOTI3LTIuMDAxIDE4LjUyNy0yMC43MjQgOTcuODM1LTk0LjE1MyAxMDcuMzk5LTExNy4xODV6Ii8+PC9nPjwvc3ZnPg=="
                                    alt="Url (WWW)" width="20px" height="30px" />
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