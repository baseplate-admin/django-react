import HeroMedium from './hero-medium/Hero-Medium'
import BoxLogo from './box-logo/BoxLogo';
import ShortUrl from './short-url-show/ShortUrl'
export default function ShowUrl(props:any){
    return(
        <>
        <HeroMedium></HeroMedium>
        <BoxLogo></BoxLogo>
        <ShortUrl props={props}></ShortUrl>
        </>
    );
}
