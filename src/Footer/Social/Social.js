import style from "./Social.module.scss";
import styleContainer from "../../common/container.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Social = (props) => {
    return (
        <div className={style.icon__wrapper}>
            <FontAwesomeIcon className={style.icon} icon={props.icon}/>
        </div>
    )
}