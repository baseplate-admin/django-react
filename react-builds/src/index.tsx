import ReactDOM from 'react-dom';
import React from 'react';
import UrlShortener from './react-projects/UrlShortener/UrlShortener';
import YoutubeDownloader from './react-projects/YoutubeDownloader/YoutubeDownloader'
import './bulma.css'
import {Route, BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path='/url' exact component={UrlShortener} />
            <Route path='/ydl' exact component={YoutubeDownloader} />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );