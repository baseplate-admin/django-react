import boxlogo from './box_full_of_gifts.svg'
export default function BoxLogo(){
    return(
        <div className="container" style={{textAlign: "center"}}>
        <img
            src={boxlogo}

            width="75px"
            height="75px"
            alt='box-logo'
            />
        </div>
    )
}