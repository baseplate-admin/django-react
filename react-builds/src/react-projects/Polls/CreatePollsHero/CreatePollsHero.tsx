import PollIcon from "./poll";

export default function CreatePollsHero(){
    return(
        <section className="hero" style={{textAlign: "center"}}>
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    <p>
                       <PollIcon />
                    </p>
                    Poll maker
                </h1>

                <h2 className="subtitle">
                    A modern Poll maker Powered by Django and Bulma
                </h2>
            </div>
        </div>
    </section>

    )
}