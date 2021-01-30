import StarsAndRotation from './stars and rotation'
import './rotating.css';
export default function BitrateShowBitrateHeroMedium(props:any){
    let timing = 2

    return(
        <section className="hero is-medium">
        <div className="hero-body">
            <div className="container" style={{textAlign: "center"}}>
                <div className="container" style={{
                WebkitAnimation: `rotating ${timing}s linear infinite`,
                MozAnimation: `rotating ${timing}s linear infinite`,
                OAnimation: `rotating ${timing}s linear infinite`,
                animation: `rotating ${timing}s linear infinite`,
                }}>
                    <StarsAndRotation />
                </div>
                <br />
                <br />
                <br />
                <h2 className="subtitle">
                    Calculated Bitrate: {props.bitrate}
                    <br />
                </h2>
            </div>
        </div>
    </section>
    )
}