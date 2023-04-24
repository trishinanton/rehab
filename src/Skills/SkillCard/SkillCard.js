import style from "./SkillCard.module.css";

export const SkillCard = (props)=>{
    return(
        <div className={style.card}>
            <div className={style.card__icon}></div>
            <h3 className={style.card__name}>{props.name}</h3>
            <div className={style.card__description}>{props.description}</div>
        </div>
    )
}