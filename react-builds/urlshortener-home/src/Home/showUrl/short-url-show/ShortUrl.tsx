export default function ShortUrl(props:any){
    let url = `http://127.0.0.1:8000/url/${props.props.short}/`
    return(
        <section className="hero is-medium">
        <div className="hero-body" style={{textAlign: "center"}}>
            <div className="container">
                <h1 className="title">Here is your shortened URL:</h1>
                <h2 className="subtitle">
                <a href={url}>
                        {url}
                    </a>
                </h2>
            </div>
        </div>
    </section>
    )
}