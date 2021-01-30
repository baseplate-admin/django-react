import './logo.css'

export default function LoadingLogo(){
    return(
        <>
        <div className="middle">
            <div className="canvas canvas2">
                <div className="spinner2"></div>
                <div className="hourHand"></div>
                <div className="dot"></div>
            </div>
            <div className="loader--div">
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--text"></div>
            </div>
        </div>
        </>
    )
}