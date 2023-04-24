import styleContainer from "./container.module.scss";
import style from "../Works/Works.module.css";

export const NameBlock = (props)=>{
    return(
        <>
            <h2 className={styleContainer.name__block +' '+ `${props.style}`}>
                <span>{props.name}</span>
            </h2>
        </>
    )
}