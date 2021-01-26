import ReactDOM from 'react-dom';
import React from 'react';
import UrlShortener from './react-projects/UrlShortener/UrlShortener';
import YoutubeDownloader from './react-projects/YoutubeDownloader/YoutubeDownloader'
import './bulma.css'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path='/front/url/' component={UrlShortener} />
                <Route path='/front/ydl/' component={YoutubeDownloader} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );