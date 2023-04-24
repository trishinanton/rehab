import React from 'react';
import style from './Header.module.scss'
import styleContainer from '../common/container.module.scss'
import {Nav, NavMobile} from "./Nav/Nav";
import logo from '../common/img/logo_white.png';
import { Link, animateScroll as scroll } from "react-scroll";
import {createRef, useEffect, useState} from "react";
import styled from 'styled-components';
import {Container} from "../common/Container";
import {useDispatch, useSelector} from "react-redux";
import {menuReducer, setMenuAC} from "../common/redux/menu-reducer";


export const Header = React.memo((props)=>{

    // let [show, setShow] = useState(true)
    const show = useSelector(state=> state.menu.show)
    const dispatch = useDispatch()

    const RefOnMenu = React.createRef()
    const RefShow = React.createRef()
    const RefHide = React.createRef()
    const RefMenu = React.createRef()

    const Header = styled.div`
      background-color: transparent;
      position: fixed;
      width: 100vw;
      top:0px;
      left: 0px;
      z-index: 3;
    `;
    const HeaderWrapper = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      height: 80px;
      @media screen and (max-width: 768px){
        height: 60px;
      }
    `;
    const Logo = styled.div`
              width: 160px;
      @media screen and (max-width: 768px){
        width: 97px;
        z-index: -1;
      }
        `;
    const A = styled.a`
    
    `;
    const Img = styled.img`
      width: 100%;
        `;
    const MobileHeader = styled.div`
      display: none;
      //display: block;
      position: fixed;
      height: 100vh;
      width: 100vw;
      //top:0;
      //left: 0;
      background-color: black;
      z-index: 2;
      //@media screen and (max-width: 769px){
      //  display: block;
      //}
    `;
    const Span = styled.div`
      width: 20px;
      height: 2px;
      background: white;
      position: relative;
      display: none;
      &:before {
        content:'';
        position: absolute;
        transform: translateY(-5px);
        width: 20px;
        height: 2px;
        background: white;
      }
      &:after {
        content:'';
        position: absolute;
        transform: translateY(5px);
        width: 20px;
        height: 2px;
        background: white;
      }
      @media screen and (max-width: 769px){
        display: block;
      }
    `;
    const SpanActive = styled.div`
      display: none;
      width: 20px;
      height: 2px;
      background: transparent;
      position: relative;
      &:before {
        content:'';
        position: absolute;
        transform:rotate(45deg);
        width: 20px;
        height: 2px;
        background: white;
      }
      &:after {
        content:'';
        position: absolute;
        transform:rotate(-45deg);
        width: 20px;
        height: 2px;
        background: white;
      }
    `;
    const Menu = styled.div`
      position: absolute;
      width: 100%;
      height: 100vh;
      background-color: black;
      left: 0;
      top: 0;
      z-index: -1;
    `;

    const showMenu = (e) =>{
        // console.log(e.currentTarget)
        e.currentTarget.style.display = 'none'
        RefHide.current.style.display = 'block'
        RefShow.current.style.display = 'block'
        const body = document.querySelector('body')
        body.style.overflow = 'hidden'
        console.log(body)
        // if(RefShow.current.style.display === 'block') RefShow.current.style.display = 'none'
        // else RefShow.current.style.display = 'block'
    }
    const hideMenu = (e)=>{
        RefHide.current.style.display = 'none'
        e.currentTarget.style.display = 'none'
        RefMenu.current.style.display = 'block'
        RefShow.current.style.display = 'none'
        const body = document.querySelector('body')
        body.style.overflow = 'scroll'
    }

    return(
        <>
            <Header ref={props.ref1}>
                <Container>
                    <HeaderWrapper>
                        <Logo>
                            <A href='https://good-production.ru/'>
                                <Img src={logo} alt='logo'/>
                            </A>
                        </Logo>
                        <Nav/>
                        <Span ref={RefMenu} onClick={showMenu}/>
                        <SpanActive ref={RefHide} onClick={hideMenu}/>
                    </HeaderWrapper>


                </Container>
            </Header>
            <MobileHeader ref={RefShow}>
                <NavMobile ref2={RefShow} ref3={RefHide} ref4={RefMenu}/>
                {/*{show ? <Span onClick={()=>dispatch(setMenuAC(false))}></Span> : <SpanActive onClick={()=>dispatch(setMenuAC(true))}></SpanActive>}*/}

                {/*{show ? null: <Menu>*/}
                {/*    <NavMobile/>*/}
                {/*</Menu> }*/}
                {/*<Menu ref={RefShow}>*/}
                {/*    <NavMobile ref2={RefOnMenu}/>*/}
                {/*</Menu>*/}
            </MobileHeader>
        </>

    )
})
