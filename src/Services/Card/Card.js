import style from './Card.module.scss'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact} from '@fortawesome/free-brands-svg-icons';
import { faHtml5} from '@fortawesome/free-brands-svg-icons';
import { faJs} from '@fortawesome/free-brands-svg-icons';
import { faCss3} from '@fortawesome/free-brands-svg-icons';
import {
    bgColor,
    bodyFontFamily,
    commonText,
    flex,
    primaryColor,
    textColor,
    titleFontFamily
} from "../../common/variables";


export const Card = (props)=>{

    const CardSect = styled.div`
      ${flex('column','space-between','center')};
      padding: 50px 20px;
      background: #fff;
      margin: 0px 15px;
      @media screen and (max-width: 980px){
        width: 38%;
        margin-bottom: 30px;
      }
      @media screen and (max-width: 768px){
        width: 100%;
        margin: 40px 0px;
        box-sizing: border-box;
      }
    `;
    const IconWrapper = styled.div`
      ${flex('row','center','center')};
      width: 85px;
      height: 85px;
      color: ${primaryColor};
      position: relative;
      z-index: 1;
      margin-bottom: 30px;
      transition: all .4s;
      &:after{
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        border-radius: 30px;
        background: ${bgColor};
        z-index: -1;
        transform: rotate(45deg);
        transition: all .4s;
      }
      &:hover{
        color: white;
        transition: all .4s;
        &:after{
          background: ${primaryColor};
          transform: rotate(0deg);
          transition: all .4s;
        }
      }
      @media screen and (max-width: 768px){
        width: 115px;
        height: 115px;
      }
      @media screen and (max-width: 580px){
        width: 100px;
        height: 100px;
      }
    `;
    const Icon = styled(FontAwesomeIcon)`
      width: 70% !important;
      height: 70%;
    `;
    const Title = styled.div`
     ${commonText (titleFontFamily,'16px','400','1px','1.2','black')};
      margin-top: 15px;
      @media screen and (max-width: 768px){
        font-size: 28px;
      }
      @media screen and (max-width: 580px){
        font-size: 21px;
      }
    `;
    const Description = styled.div`
      ${commonText (bodyFontFamily, '14px', '400','0px', '1.8', textColor)};
      text-align: center;
      @media screen and (max-width: 768px){
        font-size: 20px;
      }
      @media screen and (max-width: 580px){
        font-size: 15px;
      }
    `;
    return(
        <CardSect>
            <IconWrapper>
                <Icon icon={props.icon}/>
            </IconWrapper>
            <Description>{props.description}</Description>
            <Title>{props.title}</Title>
        </CardSect>

        // <div className={style.card}>
        //     <div className={style.icon__wrapper}>
        //         <FontAwesomeIcon className={style.icon} icon={props.icon}/>
        //     </div>
        //     <div className={style.title}>{props.title}</div>
        //     <div className={style.description}>{props.description}</div>
        // </div>
    )
}