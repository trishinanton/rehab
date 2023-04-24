import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {primaryColor, commonText, bodyFontFamily, menuColor, flex} from "../../common/variables";
import {useDispatch} from "react-redux";
import {setMenuAC} from "../../common/redux/menu-reducer";


export const Nav = ()=>{

    const NavStyle = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      height: 100%;
      @media screen and (max-width: 769px){
        display: none;
      }
    `;

    const LinkStyle = styled(Link)`
      margin-left: 3em;
      ${commonText(bodyFontFamily, '13px', '600', '0.5px', '1.3', menuColor)}
      height: 60%;
      display: flex;
      align-items: center;
      transition: .5s;
    &:hover {
        color:${primaryColor};
        cursor: pointer;
        transition: .5s;
    }
   &.active{
     color: ${primaryColor}
   }
    `
    return(
        <>
            <NavStyle>
                <LinkStyle to="main" spy={true} smooth={true} offset={-30} duration={500}>Главная</LinkStyle>
                <LinkStyle to="about" spy={true} smooth={true} offset={-20} duration={500}>Обо мне</LinkStyle>
                <LinkStyle to="services" spy={true} smooth={true} offset={-20} duration={500}>Направления</LinkStyle>
                <LinkStyle to="portfolio" spy={true} smooth={true} offset={-20} duration={500}>Спецусловия</LinkStyle>
                <LinkStyle to="contact" spy={true} smooth={true} offset={-20} duration={500}>Контакты</LinkStyle>
            </NavStyle>
        </>

    )
}

export const NavMobile = (props)=>{
    const dispatch = useDispatch()

    const NavMobileStyle = styled.div`
      ${flex('column','center','center')}
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
    `;
    const LinkMobileStyle = styled(Link)`
      ${commonText(bodyFontFamily, '13px', '600', '0.5px', '1.3', menuColor)}
      height: 9%;
      display: flex;
      align-items: center;
      transition: .5s;
    &:hover {
        color:${primaryColor};
        cursor: pointer;
        transition: .5s;
    }
   &.active{
     color: ${primaryColor}
   }
    `;
    const hideMenu = ()=>{
        props.ref2.current.style.display = 'none'
        const body = document.querySelector('body')
        body.style.overflow = 'scroll'
        props.ref3.current.style.display='none'
        props.ref4.current.style.display='block'
    }
    return(
        <>
            <NavMobileStyle ref={props.ref2}>
                <LinkMobileStyle onClick={hideMenu}  to="main" spy={true} smooth={true} offset={-30} duration={500} >Home</LinkMobileStyle>
                <LinkMobileStyle onClick={hideMenu}  to="about" spy={true} smooth={true} offset={-20} duration={500} >About</LinkMobileStyle>
                <LinkMobileStyle onClick={hideMenu}  to="services" spy={true} smooth={true} offset={-20} duration={500} >Services</LinkMobileStyle>
                <LinkMobileStyle onClick={hideMenu}  to="portfolio" spy={true} smooth={true} offset={-20} duration={500} >Portfolio</LinkMobileStyle>
                <LinkMobileStyle onClick={hideMenu}  to="contact" spy={true} smooth={true} offset={-20} duration={500} >Contact</LinkMobileStyle>
            </NavMobileStyle>


        </>
    )
}