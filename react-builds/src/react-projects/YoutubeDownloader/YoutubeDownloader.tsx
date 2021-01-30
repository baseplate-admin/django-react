import { useState } from 'react'
import Navbar from '../shared-components/navbar/Navbar'
import YoutubeDownloadHero from './hero/Hero'
import YoutubeDownloadHeroMedium from './hero-medium/Hero-Medium'
import LoadinLogo from './loadingLogo/LoadinLogo';
import YoutubeShowDownload from './show-download-folder/ShowDownload'
import Helmet from 'react-helmet'

export default function YoutubeDownloader(){
    let [youtubeLink, setYoutubeLink] = useState('');
    let [didYoutubeLinkPost, setDidYoutubeLinkPost] = useState(false);
    let [returnYoutubeLink, setReturnYoutubeLink] = useState(''); 
    let [showDownloadScreen, setShowDownloadScreen] = useState(false);
    let [isUrlValidText, setisUrlValidText] = useState("");
    let [uneditedTitle,setUneditedTitleValue] = useState('');

    return(
        <>
        <Helmet><title>Youtube Downloader</title></Helmet>
        {(!didYoutubeLinkPost && !showDownloadScreen)?(
            <>
            <Navbar />
            <YoutubeDownloadHero />
            <YoutubeDownloadHeroMedium setUneditedTitleValue={setUneditedTitleValue} isUrlValidText={isUrlValidText} setisUrlValidText={setisUrlValidText} setShowDownloadScreen={setShowDownloadScreen} youtubeLink={youtubeLink} setYoutubeLink={setYoutubeLink} setDidYoutubeLinkPost={setDidYoutubeLinkPost} returnYoutubeLink={returnYoutubeLink} setReturnYoutubeLink={setReturnYoutubeLink} />
            </>
        ):(didYoutubeLinkPost && !showDownloadScreen)?(
            <LoadinLogo />
        ):(
            <>
            <Navbar />
            <YoutubeShowDownload uneditedTitle={uneditedTitle} returnYoutubeLink={returnYoutubeLink}/>
            </>
)}
        </>
    )
}