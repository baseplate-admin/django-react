export default function PollVoteHeroMedium(){
    return(
        <section className="hero is-medium">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title" style={{textAlign: "center"}}>
                        Question: Question?
                        <br />
                    </h1>
                    <form method="POST">
                        <div className="container" style={{textAlign: "center"}}>
                            <h2 className="subtitle">
                                <label className="radio">
                                    <input
                                        type="radio"
                                        value="option1"
                                        name="question"
                                    />
                                    Option 1
                                </label>
                                <br />
                                <br />
                                <label className="radio">
                                    <input
                                        type="radio"
                                        value="option2"
                                        name="question"
                                    />
                                    Option 2
                                </label>
                                <br />
                                <br />
                                <label className="radio">
                                    <input
                                        type="radio"
                                        value="option3"
                                        name="question"
                                    />
                                    Option 3
                                </label>
                                <br />
                                <br />
                                <label className="radio">
                                    <input
                                        type="radio"
                                        value="option4"
                                        name="question"
                                    />
                                    Option 4
                                </label>
                                <br />
                                <br />
                            </h2>
                        </div>
                        <div className="control" style={{textAlign: "center"}}>
                            <input
                                type="submit"
                                value="Submit"
                                className="button is-primary"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}