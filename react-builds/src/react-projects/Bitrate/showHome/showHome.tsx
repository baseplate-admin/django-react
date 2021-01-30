import BitrateShowBitrateHeroMedium from "./showHomeHeroMedium/ShowHomeHeroMedium";
import BitrateShowBitrateHero from "./showHomeHero/ShowHomeHero";

export default function BitRateShowHome(props:any){
    return(
        <>
        <BitrateShowBitrateHero />
        <BitrateShowBitrateHeroMedium bitrate={props.bitrate} />
        </>
    )
}