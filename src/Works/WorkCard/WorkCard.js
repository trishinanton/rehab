import style from "./WorkCard.module.css";
import styleContainer from "../../common/container.module.scss";
import {Button} from "../../common/Button";

export const WorkCard = (props)=>{
    return(
        <div className={style.card}>
            <div className={style.card__icon}>
                <Button name={'Смотреть'}/>
            </div>
            <h3 className={style.card__name}><span>{props.name}</span></h3>
            <div className={style.card__description}>{props.description}</div>
        </div>
    )
}