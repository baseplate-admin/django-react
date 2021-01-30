import BitrateShowBitrateHeroMedium from "./hero-medium/HeroMedium";
import BitrateShowBitrateHero from "./hero/Hero";

export default function BitRateShowHome(props:any){
    return(
        <>
        <BitrateShowBitrateHero />
        <BitrateShowBitrateHeroMedium bitrate={props.bitrate} />
        </>
    )
}