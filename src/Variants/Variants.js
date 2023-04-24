import style from './Variants.module.css'
import styleContainer from "../common/container.module.scss";
import {Button} from "../common/Button";
import {NameBlock} from "../common/NameBlock";

export const Variants = () => {
    return(
        <div className={style.variants}>
            <div className={styleContainer.container}>
                <div className={style.variants__wrapper}>
                    <NameBlock name={'Variants job'} style={style.variants__header}/>
                    <div className={style.variants__button}>
                        <Button name={'Нанять меня'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}



