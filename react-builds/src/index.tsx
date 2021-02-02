import ReactDOM from 'react-dom';
import React from 'react';
import UrlShortener from './react-projects/UrlShortener/UrlShortener';
import YoutubeDownloader from './react-projects/YoutubeDownloader/YoutubeDownloader'
import './bulma.css'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Bitrate from './react-projects/Bitrate/bitrate';
import CreatePolls from './react-projects/Polls/CreatePolls';
import PollVote from './react-projects/Polls/PollVote';

let urlResolver = "http://127.0.0.1:8000"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path='/front/url/' exact component={()=><UrlShortener url={urlResolver}/>} />
                <Route path='/front/ydl/' exact component={()=><YoutubeDownloader url={urlResolver}/>} />
                <Route path="/front/bitrate/" exact component={()=><Bitrate url={urlResolver} />} />
                <Route path="/front/poll/vote/:slug/" exact component={()=><PollVote url={urlResolver} />} />
                <Route path='/front/poll/create/' exact component={()=><CreatePolls url={urlResolver} />} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );