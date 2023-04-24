import styled, {css} from "styled-components";
import {bgColor, textColor, titleColor} from "./variables";

export const Svg = (props)=>{
    const SvgStyled = styled.svg`
      width:100%;
      
      //fill:black;
      fill:${(props) => props.color==='white' ? 'white' : bgColor};
      position:absolute;
      top:-1px;
    `;
    return(
        <>
            <SvgStyled color={props.color} viewBox="0 0 1920 81.717">
                <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"/>
            </SvgStyled>
        </>
    )
}