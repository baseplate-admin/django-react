export default function ShowDownload(props:any){
    let link = `http://127.0.0.1:8000/ydl/${props.returnYoutubeLink}/`
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
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NzIsMzEzdjEzOWMwLDExLjAyOC04Ljk3MiwyMC0yMCwyMEg2MGMtMTEuMDI4LDAtMjAtOC45NzItMjAtMjBWMzEzSDB2MTM5YzAsMzMuMDg0LDI2LjkxNiw2MCw2MCw2MGgzOTINCgkJCWMzMy4wODQsMCw2MC0yNi45MTYsNjAtNjBWMzEzSDQ3MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBvbHlnb24gcG9pbnRzPSIzNTIsMjM1LjcxNiAyNzYsMzExLjcxNiAyNzYsMCAyMzYsMCAyMzYsMzExLjcxNiAxNjAsMjM1LjcxNiAxMzEuNzE2LDI2NCAyNTYsMzg4LjI4NCAzODAuMjg0LDI2NCAJCSIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
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