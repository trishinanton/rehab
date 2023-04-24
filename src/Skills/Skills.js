import style from './Skills.module.css'
import styleContainer from "../common/container.module.scss";
import {Nav} from "../Header/Nav/Nav";
import {SkillCard} from "./SkillCard/SkillCard";
import {NameBlock} from "../common/NameBlock";

export const Skills = () => {
    return(
        <div className={style.skills}>
            <div className={styleContainer.container}>
                <div className={style.skills__wrapper}>
                    <NameBlock name={'My skills'} style={style.skills__header}/>
                    <div className={style.card__wrapper}>
                        <SkillCard name={'React'} description={'Подробное описание навыка'}/>
                        <SkillCard name={'JS'} description={'Подробное описание навыка'}/>
                        <SkillCard name={'CSS'} description={'Подробное описание навыка'}/>
                    </div>

                </div>
            </div>
        </div>
    )
}



