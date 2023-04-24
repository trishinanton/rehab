import React from 'react';
import style from './About.module.scss'
import styleContainer from '../common/container.module.scss'
import photo from '../common/img/photo3.jpg'
import {Button} from "../common/Button";
import styled from "styled-components";
import {Container} from "../common/Container";
import {bodyFontFamily, commonText, flex, primaryColor} from "../common/variables";
import Fade from 'react-reveal/Fade';

const AboutSect = styled.section`
  padding: 120px 0;
  position: relative;
  background-color: white;
  @media screen and (max-width: 420px){
    padding: 80px 0;
  }
`;
const Svg = styled.svg`
  width:100%;
  fill:white;
  position:absolute;
  top: 1px;
  transform: translateY(-98%) rotate(180deg);
`;
const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 980px){
    flex-direction: column;
  }
`;
const Photo = styled.div`
  width: 536px;
  height: 512px;
  margin-right: 11%;
  @media screen and (max-width: 980px){
    display: flex;
    justify-content: center;
    width: 100%;
    height: 91vw;
    margin-right: 0;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
`;
const Description = styled.div`
  ${flex('column', 'space-between', 'left')};
  margin-left: 50px;
  @media screen and (max-width: 980px){
    margin-top: 50px;
    margin-left: 0px;
  }
`;
const Title = styled.div`
  
`;
const H3 = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 8px;
  line-height: 1.2;
  color: black;
  text-transform: uppercase;
`;
const Span = styled.span`
  background-color:#c49b66 ;
  font-family: 'Josefin Sans', sans-serif;;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 4px;
  line-height: 1.2;
  color: white;
  text-transform: uppercase;
  padding: 5px 0px;
`;
const Text = styled.div`
  margin-top: 30px;
`;
const H4 = styled.h4`
@include text ($titleFontFamily, 18px,500,1px,1.2,black);
  font-family: 'Josefin Sans', sans-serif;;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.2;
  color: black;
  margin-bottom: 10px;
`;
const TextDescr = styled.div`
  margin-bottom: 10px;
font-family: 'Rubik', sans-serif;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.8;
  color: #8f8f8f
`;
const Buttons = styled.div`
  margin-top: 30px;
  @media screen and (max-width: 395px){
    
  }
`;
const BtnWhite = styled.a`
  padding: 12px 34px;
  border-radius: 30px;
  ${commonText(bodyFontFamily, '14px', '400', '1px', '1.3', '#fff')};
  margin-right: 20px;
  transition: .5s;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, .1);
  background: white;
  border: 1px solid ${primaryColor};
  color:${primaryColor} ;
  &:hover{
    background:${primaryColor};
    border: 1px solid ${primaryColor};
    color: #fff;
    cursor: pointer;
  }
  @media (min-width: 981px) and (max-width: 1098px){
    padding: 12px 12px;
  }
  @media screen and (max-width: 394px){
    padding: 12px 15px;
  }
  
`;

export const About = React.memo(() => {
    return (
        <>
            <AboutSect name={'about'}>
                <Svg viewBox="0 0 1920 81.717">
                    <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"/>
                </Svg>
                <Container>
                    <AboutWrapper>
                        <Fade left>
                            <Photo>
                                <Img src={photo} alt="photo"/>
                            </Photo>
                        </Fade>

                        <Fade right>
                            <Description>
                                <Title>
                                    <H3>Меня зовут</H3>
                                    <Span>Ангелина Малынина.</Span>
                                </Title>
                                <Text>
                                    <H4>Специалист по двигательной реабилитации</H4>
                                    <TextDescr>Помогу вам восстановиться после травмы, операции,
                                        скорректировать осанку, вальгус и укрепить здоровье.
                                    </TextDescr>
                                    <TextDescr>
                                        В своей работе я применяю современные методы
                                        физической реабилитации, адаптивной и лечебной
                                        физической культуры.
                                    </TextDescr>
                                    <TextDescr>
                                        В работе я сторонница оздоровления
                                        биомеханическими методами, основной целью
                                        которых является задействование
                                        собственных механизмов
                                        заживления и самовосстановления организма.
                                    </TextDescr>
                                </Text>
                                <Buttons>
                                    {/*<Button name={'Позвонить'}/>*/}
                                    <BtnWhite href="https://wa.me/79279797056">Написать мне</BtnWhite>
                                </Buttons>
                            </Description>
                        </Fade>
                    </AboutWrapper>
                </Container>
            </AboutSect>


            {/*<section  className={style.about}  name={'about'}>*/}
            {/*    <svg className={style.svg} viewBox="0 0 1920 81.717">*/}
            {/*        <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"/>*/}
            {/*    </svg>*/}
            {/*    <div className={styleContainer.container}>*/}
            {/*        <div className={style.about__wrapper}>*/}
            {/*            <div className={style.photo}><img src={photo} alt="photo"/></div>*/}
            {/*            <div className={style.description}>*/}
            {/*                <div className={style.title}>*/}
            {/*                    <h3>Who am i</h3>*/}
            {/*                    <span>Zain Butler.</span>*/}
            {/*                </div>*/}
            {/*                <div className={style.text}>*/}
            {/*                    <h4>Professional Web Designer</h4>*/}
            {/*                    <div className={style.text_description}>Nulla metus metus ullamcorper vel tincidunt sed*/}
            {/*                        euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad*/}
            {/*                        litora torquent metus metus ullamcorper.*/}
            {/*                    </div>*/}
            {/*                    <div className={style.text_description}>Nulla metus metus ullamcorper vel tincidunt sed*/}
            {/*                        euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad*/}
            {/*                        litora torquent metus metus ullamcorper vel tincidunt sed class aptent taciti*/}
            {/*                        sociosqu ad litora torquent type setting industry when per conubia nostra.*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={style.buttons}>*/}
            {/*                    <Button name={'Hire Me!'}/>*/}
            {/*                    <button className={style.button + ' ' + style.button_white}>Download CV</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>

    )
})