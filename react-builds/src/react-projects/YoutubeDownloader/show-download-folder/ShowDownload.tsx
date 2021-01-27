import downloadlogo from './download.svg'
export default function ShowDownload(props:any){
    let link = `http://127.0.0.1:8000/youtube/${props.returnYoutubeLink}/`
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
                    If your download doesn't start,
                    <br />
                    <a id="submit" href={link}
                        >Click me</a
                    >
                </h2>
            </div>
        </div>
    </section>
    </>
    )
}