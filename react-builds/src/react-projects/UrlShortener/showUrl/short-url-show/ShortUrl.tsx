export default function ShowShortUrl(props:any){
    let url = `${props.props.url}/url/${props.props.short}/`
    return(
        <section className="hero is-medium" style={{
            paddingTop: 10,
        }}>
        <div className="hero-body" style={{
            textAlign: "center",
            }}>
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