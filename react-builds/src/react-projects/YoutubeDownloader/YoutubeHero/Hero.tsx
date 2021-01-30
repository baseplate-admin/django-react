import YoutubeLogo from './youtube'
export default function YoutubeDownloadHero(){
    return(
        <section style={{paddingBottom:45}} className="hero">
        <div className="hero-body" style={{textAlign: "center"}}>
            <div className="container">
                <YoutubeLogo />

                <h1 className="title container">YDownload</h1>
                <h2 className="subtitle">A modern Youtube Downloader</h2>
            </div>
        </div>
    </section>
    )
}