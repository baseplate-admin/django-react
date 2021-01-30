import Hour from './hour';
import Minute from './minute';
import Seconds from './seconds'
import Size from './size'
import Counter from './counter'
import axios from 'axios';

export default function BitrateHeroLarge(props:any){

    const postData = () =>{

        let payload={hour:props.hour, minute:props.minute ,seconds:props.seconds,size:props.size,episode:props.counter}
        let url = 'http://127.0.0.1:8000/api/v1/bitrate/'
        axios.post(url,payload)
            .then(res=>{
                props.setBitrate(res.data.bitrate)
                console.log(res.data.bitrate)
                props.setShowHome(true);
            })
            .catch(error=>{
                console.log(error)
            })
    }
    return(
<section className="hero is-large">
        <div className="container">
            <div className="field">
                <div
                    className="control has-icons-left"
                    style={{textAlign: "center"}}
                >
                    <span className="icon is-small is-right">
                        <Hour></Hour>
                    </span>
                    <input
                        required
                        name="hour"
                        className="input is-primary"
                        type="text"
                        placeholder="Hour"
                        style={{width: 400}}
                        onChange={(e)=>props.setHour(e.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <div
                    className="control has-icons-left"
                    style={{textAlign: "center"}}
                >
                    <span className="icon is-small is-right">
                        <Minute />
                    </span>
                    <input
                        required
                        name="minute"
                        className="input is-info"
                        type="text"
                        placeholder="Minute"
                        style={{width: 400}}
                        onChange={(e)=>{props.setMinute(e.target.value)}}
                    />
                </div>
            </div>
            <div className="field">
                <div
                    className="control has-icons-left"
                    style={{textAlign: "center"}}
                >
                    <span className="icon is-small is-right">
                        <Seconds />
                    </span>
                    <input
                        required
                        name="seconds"
                        className="input is-success"
                        type="text"
                        placeholder="Seconds"
                        style={{width: 400}}
                        onChange={(e)=>{props.setSeconds(e.target.value)}}
                    />
                </div>
            </div>
            <div className="field">
                <div
                    className="control has-icons-left has-icons-right"
                    style={{textAlign: "center"}}
                >
                    <span className="icon is-small">
                        <Size />
                    </span>

                    <input
                        required
                        pattern="[0-9]+(\.[0-9][0-9]?)?"
                        name="size"
                        className="input is-warning"
                        type="text"
                        placeholder="Size in GB"
                        style={{width: 400}}
                        onChange={(e)=>{props.setSize(e.target.value)}}
                    />
                </div>
            </div>
            <div className="field">
                <div
                    className="control has-icons-left"
                    style={{textAlign: "center"}}
                >
                    <span className="icon is-small is-right">
                        <Counter />
                    </span>

                    <input
                        required
                        name="count"
                        className="input is-danger"
                        type="text"
                        placeholder="Episode Count"
                        style={{width: 400}}
                        onChange={(e)=>{props.setCounter(e.target.value)}}
                    />
                </div>
            </div>
            <div className="control" style={{textAlign: "center"}}>
                <button
                    type="submit"
                    className="button is-primary"
                    onClick={postData}
                >Submit</button>
            </div>
        </div>
</section>
    )
}