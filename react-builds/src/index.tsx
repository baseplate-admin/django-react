import ReactDOM from 'react-dom';
import React from 'react';
import UrlShortener from './UrlShortener/UrlShortener';
import './bulma.css'
import {Route, BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path='/url' exact component={UrlShortener} />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );