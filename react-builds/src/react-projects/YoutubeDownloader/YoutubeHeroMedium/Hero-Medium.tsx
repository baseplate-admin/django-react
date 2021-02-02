import axios from 'axios';
import Validator from 'validator';
import DropDown from '../YoutubeDropdown/YoutubeDropdown'
import {useState} from 'react' 
import UrlIcon from './url';
export default function YoutubeDownloadYoutubeDownloadHeroMedium(props:any){
        let [toggle, setToggle] = useState(false);
        let [toggleValue, setToggleValue] = useState('');

        function postToDjango(){
        let payload = {
            url:props.youtubeLink,
            bitrate:toggleValue
        }
        let url = `${props.url}/api/v1/youtube/`
        axios.post(url,payload)
        .then(res=>{
            props.setUneditedTitleValue(res.data.title);
            props.setReturnYoutubeLink(res.data.short);
        })
        .then(props.setDidYoutubeLinkPost(true))
        .then(() => {
            setTimeout(function(){
                props.setDidYoutubeLinkPost(false);
                props.setShowDownloadScreen(true);
            },2000)
        })

        .catch(error => {
            console.log(error)
        })
    }
    function handleChange(event:any){
        props.setYoutubeLink(event);
    }
    function handleClick(){
        let validUrl = Validator.isURL(props.youtubeLink)
        if (!validUrl){
            props.setisUrlValidText("Please Enter a Valid URL")
        }
        else if (validUrl){
            postToDjango()
            props.setYoutubeLink('')
        }
    }
    return(
        <section className="hero is-medium">
        <div className="hero-body" style={{textAlign: "center"}}>
            <div className="container" >
                <h1 style={{paddingBottom:20}} className="title">Enter your URL:</h1>
                <h2 className="subtitle">
                        <div
                            className="control has-icons-left"
                            style={{textAlign: "center"}}
                        >
                            <span className="icon is-small is-right">
                                <UrlIcon />
                            </span>
                            <input
                                onChange={e=>handleChange(e.target.value)}
                                required
                                name="url"
                                className="input is-info"
                                type="text"
                                placeholder="Youtube Url"
                                id="url"
                                style={{width: 400}}
                                value={props.youtubeLink}
                            />
                                <DropDown toggle={toggle} setToggle={setToggle} toggleValue={toggleValue} setToggleValue={setToggleValue} />
                            <div className="control" style={{
                                textAlign: 'center',
                                paddingTop: 20
                            }}>
                                <button id='submit' onClick={handleClick} className="button is-primary">Download</button>
                            </div>
                            <div style={{
                                paddingTop: 20,
                                textAlign: "center",
                                color: "red",
                            }}>
                                <h3 style={{
                                    fontSize: 25,
                                }}>{props.isUrlValidText}</h3>
                            </div>
                        </div>
                </h2>
            </div>
        </div>
    </section>
    )
}