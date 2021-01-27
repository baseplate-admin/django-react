import youtubeLogo from './youtube.svg'
export default function Hero(){
    return(
        <section style={{paddingBottom:45}} className="hero">
        <div className="hero-body" style={{textAlign: "center"}}>
            <div className="container">
                <img
                    src={youtubeLogo}
                    width="55px"
                    height="55px"
                    alt='youtube-logo'
                />

                <h1 className="title container">YDownload</h1>
                <h2 className="subtitle">A modern Youtube Downloader</h2>
            </div>
        </div>
    </section>
    )
}