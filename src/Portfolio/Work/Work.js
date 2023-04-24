import style from './Work.module.scss'
import {useState} from "react";
import {Button} from "../../common/Button";
import styleContainer from "../../common/container.module.scss";
import styled from "styled-components";
import {bodyFontFamily, commonText, flex, primaryColor, textColor, titleFontFamily} from "../../common/variables";
import {text} from "@fortawesome/fontawesome-svg-core";



export const Work = (props)=>{
    const [isActive, setIsActive] = useState(false);
    const addClass = () =>{
        setIsActive(true);
    }
    const removeClass = ()=>{
        setIsActive(false)
    }
    const stl = isActive ? {display:'flex'}: {display: 'none'};

    const Work = styled.div`
    ${flex('row', 'space-between', 'center')};
      position: relative;
      @media screen and (max-width: 980px){
          width: 93% !important;
      }
      @media screen and (max-width: 768px){
          height: 380px !important;
      }
      @media screen and (max-width: 420px) {
          height: 315px !important;
      }
    `;
    const Img = styled.img`
      width: 100%;
      height: 100%;
      border-radius: 10px;
    `;
    const WorkActive = styled.div`
      background-color: white;
      position: absolute;
      width: 98%;
      height: 98%;
      margin-left: 1%;
      border-radius: 6px;
      ${flex('column', 'center', 'center')};
      animation: showActive 1s ease-in-out;

      @keyframes showActive {
        0%{
          opacity: 0;
        }
        100%{
          opacity: 1;
        }
      }
    `;
    const H6 = styled.h6`
      ${commonText(titleFontFamily, '18px', '500', '0px', '1.2', 'black')};
      margin-bottom: 5px;
      animation: showTitle 1s ease;

      @keyframes showTitle {
        0%{
          transform: translateY(-40px);
        }
        100%{
          transform: translateY(0);
        }
      }
    `;
    const P = styled.p`
      ${commonText(bodyFontFamily, '15px', '400', '0px', '1.8', textColor)}
      animation: showDescription 1s ease-in-out;
      margin-bottom: 30px;

      @keyframes showDescription {
        0%{
          transform: translateY(100px);
        }
        100%{
          transform: translateY(0);
        }
      }
      //@media screen and (max-width: 768px) {
      //  font-size: 15px;
      //}
    `;
    const Btn = styled.button`
      background: ${primaryColor};
      border: 1px solid ${primaryColor};
      padding: 12px 34px;
      border-radius: 30px;
      ${commonText(bodyFontFamily, '14px', '400', '1px', '1.3', '#fff')};
      transition: .5s;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, .1);
      animation: showBtn 2s ease-in-out;

      @keyframes showBtn {
        0%{
          opacity: 0;
        }
        100%{
          opacity: 1;
        }
      }
      &:hover {
        background: white;
        border: 1px solid ${primaryColor};
        color: ${primaryColor};
        cursor: pointer;
        transition: .5s;
      }
    `;
    return(
        <>
            <Work onMouseEnter={addClass} onMouseLeave={removeClass} style={props.style}>
                <Img src={props.img} alt={props.alt}/>
                <WorkActive style={stl}>
                    <H6>{props.title}</H6>
                    <P>{props.description}</P>
                    <div>
                        <Btn>Detail</Btn>
                    </div>
                </WorkActive>
            </Work>
            {/*<div onMouseEnter={addClass} onMouseLeave={removeClass} className={style.work} style={props.style}>*/}
            {/*    <img src={props.img} alt={props.alt}/>*/}
            {/*    <div className={style.work_active} style={stl}>*/}
            {/*        <h6>{props.title}</h6>*/}
            {/*        <p>{props.description}</p>*/}
            {/*        <div>*/}
            {/*            <button className={style.button}>Detail</button>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}

        </>





    )
}