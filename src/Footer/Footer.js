import React from 'react';
import style from './Footer.module.scss'
import styleContainer from "../common/container.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Social} from "./Social/Social";
import {faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../common/img/logo.png'
import styled from "styled-components";
import {bodyFontFamily, commonText, flex, textColor} from "../common/variables";
import {Svg} from "../common/Svg";
import {Container} from "../common/Container";
import Bounce from 'react-reveal/Bounce';

export const Footer = React.memo(() => {

    const FooterSect = styled.footer`
      background-color: white;
      padding-top: 140px;
      padding-bottom: 30px;
      position: relative;
    `;
    const FooterWrapper = styled.div`
      ${flex('column', 'space-between', 'center')}
    `;
    const Logo = styled.div`
      margin-bottom: 30px;
      &:hover{
        cursor: pointer;
      }
    `;
    const Img = styled.img`
      width: 200px;
    `;
    const SocialWrap = styled.div`
      ${flex('row','center','center')}
    `;
    const Description = styled.div`
      ${commonText(bodyFontFamily,'12px','400','2px','1.8',textColor)}
    `;
    const Icon = styled.a`
    
    `

    return(
        <FooterSect>
            <Svg/>
            <Container>
                <FooterWrapper>
                    <Bounce>
                        <Logo>
                            <a href='https://good-production.ru/'><img src={logo} alt=""/></a>
                        </Logo>
                    </Bounce>
                    <SocialWrap>
                        <Icon target="_blank" href="https://t.me/by_amali"><Social icon={faTelegram}/></Icon>
                        <Icon target="_blank" href="https://wa.me/79279797056"><Social icon={faWhatsapp}/></Icon>
                        <Icon target="_blank" href="https://vk.com/angelina_mal"><Social icon={faVk}/></Icon>
                    </SocialWrap>
                    <Description>
                        {'© 2018 UI-ThemeZ. All Rights Reserved.'}
                    </Description>
                </FooterWrapper>
            </Container>
        </FooterSect>

        // <footer className={style.footer}>
        //     <svg className={style.svg} viewBox="0 0 1920 81.717">
        //         <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"/>
        //     </svg>
        //     <div className={styleContainer.container}>
        //         <div className={style.footer__wrapper}>
        //             <div className={style.logo}><a href='https://good-production.ru/'><img src={logo} alt=""/></a></div>
        //             <div className={style.social}>
        //                 <Social icon={faInstagram}/>
        //                 <Social icon={faTelegram}/>
        //                 <Social icon={faWhatsapp}/>
        //                 <Social icon={faVk}/>
        //                 <Social icon={faGithub}/>
        //             </div>
        //             <div className={style.description}>© 2018 UI-ThemeZ. All Rights Reserved.</div>
        //         </div>
        //     </div>
        // </footer>
    )
})



