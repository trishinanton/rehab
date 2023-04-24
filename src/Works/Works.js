import style from './Works.module.css'
import styleContainer from "../common/container.module.scss";
import {Nav} from "../Header/Nav/Nav";
import {WorkCard} from "./WorkCard/WorkCard";
import {NameBlock} from "../common/NameBlock";

export const Works = () => {
    return(
        <div className={style.works}>
            <div className={styleContainer.container}>
                <div className={style.works__wrapper}>
                    <NameBlock name={'My works'} style={style.works__header}/>
                    <div className={style.card__wrapper}>
                        <WorkCard src={''} name={'Название проекта'} description={'Краткое описание'}/>
                        <WorkCard src={''} name={'Название проекта'} description={'Краткое описание'}/>
                    </div>

                </div>
            </div>
        </div>
    )
}



