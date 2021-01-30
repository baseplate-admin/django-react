import { useEffect, useState } from 'react'
import fileDownload from 'js-file-download'
import downloadlogo from './download.svg'
import Axios from "axios";

export default function YoutubeShowDownload(props:any){
    let [timer,setTimer] = useState(0)
    let timerEle = 5
    useEffect(()=>{
        setTimer(timerEle)
        let interval = setInterval(()=>{
            setTimer(timerEle-1);
            timerEle--;
            if (timerEle === 0){
                handleClick()
                clearInterval(interval)
            }
        },1000)
    },[])
    let link = `http://127.0.0.1:8000/youtube/${props.returnYoutubeLink}/`
    const handleClick = () =>{
        download(link,props.uneditedTitle)
    }
    
    function download(url: string, filename: any) {
    Axios.get(url, {
      responseType: 'blob',
    }).then(res => {
        console.log(filename)
      fileDownload(res.data, filename);
    });
  }
    return(
        <>
        <section className="hero" style={{textAlign:"center"}}>
        <div className="hero-body">
            <div className="container">
                <h1 className="title">Your Download is ready!!</h1>
                <h2 className="subtitle"></h2>
            </div>
        </div>
    </section>
    <div className="container" style={{textAlign:"center"}}>
        <img
            src={downloadlogo}
            width="75px"
            height="75px"
            alt="Download Logo"
        />
    </div>
    <section className="hero is-medium">
        <div className="hero-body" style={{textAlign:"center"}}>
            <div className="container">
                <h1 className="title"></h1>
                <h2 className="subtitle">
                    If your download doesn't start in {timer},
                    <br />
                    <a id="submit" onClick={handleClick}
                        >Click me</a
                    >
                </h2>
            </div>
        </div>
    </section>
    
    </>
    )
}