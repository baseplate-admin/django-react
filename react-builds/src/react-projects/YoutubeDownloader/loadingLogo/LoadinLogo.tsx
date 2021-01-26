import loadinglogo from './Pulse-1s-200px.gif';
export default function LoadingLogo(){
    return(
        <>
        <section className="hero is-medium">
        <div className="hero-body">
            <div className="container">
            <h1 className="title">
            </h1>
            <h2 className="subtitle">
            </h2>
            </div>
        </div>
        </section>
        <div style={{textAlign:'center', margin:'auto', }}>
            <img src={loadinglogo} alt="Logo from loading.io"></img>
        </div>
        </>
    )
}