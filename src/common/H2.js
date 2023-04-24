import {bodyFontFamily, commonText, titleColor} from "./variables";
import styled from "styled-components";

export const H2 = (props)=>{
    const H2 = styled.h2`
      ${commonText (bodyFontFamily,'70px','800','2px','1.2', titleColor)};
      margin-top: 0px;
      @media screen and (max-width: 580px){
        font-size: 45px;
      }
    `;
    return(
      <>
        <H2>{props.title}</H2>
      </>
    )
}