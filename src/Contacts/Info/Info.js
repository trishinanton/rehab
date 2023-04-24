import style from './Info.module.scss'
import styled from "styled-components";
import {bodyFontFamily, commonText, primaryColor, textColor, titleFontFamily} from "../../common/variables";


export const Info = (props) => {
    const Information = styled.div`
      margin-bottom: 30px;
    `;
    const Title = styled.h6`
    ${commonText (titleFontFamily,'11px','400','2px','1.2',primaryColor)};
      text-transform: uppercase;
      margin:0;
    `;
    const Description = styled.p`
      margin: 0;
      ${commonText (bodyFontFamily,'15px','400','0px','1.8',textColor)}
    `;

    return(
        <Information>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </Information>
        // <div className={style.information}>
        //     <h6 className={style.title}>{props.title}</h6>
        //     <p className={style.description}>{props.description}</p>
        // </div>
    )
}



