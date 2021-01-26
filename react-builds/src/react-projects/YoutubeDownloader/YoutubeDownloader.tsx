import { useState } from 'react'
import Navbar from '../shared-components/navbar/Navbar'
import Hero from './hero/Hero'
import HeroMedium from './hero-medium/Hero-Medium'
import LoadinLogo from './loadingLogo/LoadinLogo';
import ShowDownload from './show-download-folder/ShowDownload'
export default function YoutubeDownloader(){
    let [youtubeLink, setYoutubeLink] = useState('');
    let [didYoutubeLinkPost, setDidYoutubeLinkPost] = useState(false);
    let [returnYoutubeLink, setReturnYoutubeLink] = useState(''); 
    let [showDownloadScreen, setShowDownloadScreen] = useState();
    let [isUrlValidText, setisUrlValidText] = useState();
    return(
        <>
        <Navbar />
        {!didYoutubeLinkPost?(
            <>
            <Hero />
            <HeroMedium isUrlValidText={isUrlValidText} setisUrlValidText={setisUrlValidText} setShowDownloadScreen={setShowDownloadScreen} youtubeLink={youtubeLink} setYoutubeLink={setYoutubeLink} setDidYoutubeLinkPost={setDidYoutubeLinkPost} returnYoutubeLink={returnYoutubeLink} setReturnYoutubeLink={setReturnYoutubeLink} />
            </>
        ):!(showDownloadScreen)?(
            <LoadinLogo />
        ):(
            <ShowDownload returnYoutubeLink={returnYoutubeLink}/>
)}
        </>
    )
}