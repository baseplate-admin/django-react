import React from 'react';
import ReactDOM from 'react-dom';
import './bulma.css';
import Navbar from './navbar/Navbar';
import HeroMedium from './hero-medium/Hero-Medium'
import BoxLogo from './box-logo/BoxLogo';
import ShortUrl from './short-url-show/ShortUrl'
ReactDOM.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <HeroMedium></HeroMedium>
    <BoxLogo></BoxLogo>
    <ShortUrl></ShortUrl>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
