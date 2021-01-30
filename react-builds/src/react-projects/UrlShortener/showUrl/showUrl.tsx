import ShowUrlHeroMedium from './hero-medium/Hero-Medium'
import BoxLogo from './box-logo/BoxLogo';
import ShowShortUrl from './short-url-show/ShortUrl'
export default function ShowUrl(props:any){
    return(
        <>
        <ShowUrlHeroMedium></ShowUrlHeroMedium>
        <BoxLogo></BoxLogo>
        <ShowShortUrl props={props}></ShowShortUrl>
        </>
    );
}
