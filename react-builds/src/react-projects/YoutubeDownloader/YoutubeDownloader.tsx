import { useState } from 'react'
import Navbar from '../shared-components/navbar/Navbar'
import Hero from './hero/Hero'
import HeroMedium from './hero-medium/Hero-Medium'
import LoadinLogo from './loadingLogo/LoadinLogo';
import ShowDownload from './show-download-folder/ShowDownload'
import Helmet from 'react-helmet'

export default function YoutubeDownloader(){
    let [youtubeLink, setYoutubeLink] = useState('');
    let [didYoutubeLinkPost, setDidYoutubeLinkPost] = useState(false);
    let [returnYoutubeLink, setReturnYoutubeLink] = useState(''); 
    let [showDownloadScreen, setShowDownloadScreen] = useState(false);
    let [isUrlValidText, setisUrlValidText] = useState("");
    return(
        <>
        <Helmet><title>Youtube Downloader</title></Helmet>
        <Navbar />
        {(!didYoutubeLinkPost && !showDownloadScreen)?(
            <>
            <Hero />
            <HeroMedium isUrlValidText={isUrlValidText} setisUrlValidText={setisUrlValidText} setShowDownloadScreen={setShowDownloadScreen} youtubeLink={youtubeLink} setYoutubeLink={setYoutubeLink} setDidYoutubeLinkPost={setDidYoutubeLinkPost} returnYoutubeLink={returnYoutubeLink} setReturnYoutubeLink={setReturnYoutubeLink} />
            </>
        ):(didYoutubeLinkPost && !showDownloadScreen)?(
            <LoadinLogo />
        ):(
            <ShowDownload returnYoutubeLink={returnYoutubeLink}/>
)}
        </>
    )
}