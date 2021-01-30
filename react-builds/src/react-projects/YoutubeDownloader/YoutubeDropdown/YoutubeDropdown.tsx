import { useEffect,} from "react"

export default function DropDown(props:any){
    function toggleClick(){
        console.log(props.toggle)
        if (!props.toggle){
            props.setToggle(true);
        }
        else{
            props.setToggle(false);
        }
    }
    useEffect(()=>{
        props.setToggleValue("192")
    },[])

    return(
        <span onMouseLeave={()=>props.setToggle(false)}>
            <div className={`dropdown ${props.toggle? 'is-active': ''}`} style={{paddingLeft:10}}>
    <div className="dropdown-trigger">
        <button
            onMouseEnter={toggleClick}
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
        >
            <span>{props.toggleValue} kbps</span>
            <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </button>
    </div>
    <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
            <a onClick={()=>{props.setToggleValue("128");toggleClick()}} className={`dropdown-item ${(props.toggleValue==='128')?'is-active':''}`}> 128 </a>
            <a onClick={()=>{props.setToggleValue("192");toggleClick()}} className={`dropdown-item ${(props.toggleValue==='192')?'is-active':''}`}> 192 </a>
            <a onClick={()=>{props.setToggleValue("256");toggleClick()}} className={`dropdown-item ${(props.toggleValue==='256')?'is-active':''}`}> 256 </a>
            <a onClick={()=>{props.setToggleValue("320");toggleClick()}} className={`dropdown-item ${(props.toggleValue==='320')?'is-active':''}`}> 320 </a>
        </div>
    </div>
</div>
        </span>

        
    )
}