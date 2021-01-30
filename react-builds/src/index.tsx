import ReactDOM from 'react-dom';
import React from 'react';
import UrlShortener from './react-projects/UrlShortener/UrlShortener';
import YoutubeDownloader from './react-projects/YoutubeDownloader/YoutubeDownloader'
import './bulma.css'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Bitrate from './react-projects/Bitrate/bitrate';
import CreatePolls from './react-projects/Polls/CreatePolls';
import PollVote from './react-projects/Polls/PollVote';

// Redux Logic


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path='/front/url/' component={UrlShortener} />
                <Route path='/front/ydl/' component={YoutubeDownloader} />
                <Route path="/front/bitrate/" component={Bitrate} />
                <Route path="/front/poll/vote/:slug/" component={PollVote} />
                <Route path='/front/poll/create/' component={CreatePolls} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );