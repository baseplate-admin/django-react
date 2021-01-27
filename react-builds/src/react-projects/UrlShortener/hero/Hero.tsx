import UrlLogo from './url.svg'
function Hero(){
    return(
        <section style={{paddingBottom:45}} className="hero">
        <div className="hero-body" style={{textAlign:'center'}}>
            <div className="container">
                <div className="container">
                        <img src={UrlLogo}
                            width="55px" height="55px" alt="www"/>
                </div>
                <h1 className="title">
                    Ushort
                </h1>
                <h2 className="subtitle">
                    A Modern Url Shortener Powered by Django
                </h2>

            </div>
        </div>
        </section>
    );
}

export default Hero;