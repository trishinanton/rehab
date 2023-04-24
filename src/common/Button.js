import styleContainer from "./container.module.scss";
import styled from "styled-components";
import {bodyFontFamily, commonText, primaryColor} from "./variables";

export const Button = (props)=>{

    const Button = styled.a`
      background: ${primaryColor};
      border: 1px solid ${primaryColor};
      padding: 12px 34px;
      border-radius: 30px;
      ${commonText(bodyFontFamily, '14px', '400', '1px', '1.3', '#fff')};
      margin-right: 20px;
      transition: .5s;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, .1);
      &:hover {
        background: white;
        border: 1px solid ${primaryColor};
        color: ${primaryColor};
        cursor: pointer;
        transition: .5s;
      }
      @media (min-width: 981px) and (max-width: 1098px){
        padding: 12px 14px;
      }
      @media screen and (max-width: 580px){
        padding: 12px 23px;
      }
      @media screen and (max-width: 394px){
        padding: 12px 15px;
      }
      @media screen and (max-width: 375px){
        padding: 12px 15px;
      }
    `;
    return(
        <>
            <Button type={props.type} disabled={props.disable}>{props.name}</Button>
        </>
    )
}