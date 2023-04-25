import React from 'react';
import styled from "styled-components";
import {flex} from "../common/variables";
import {Svg} from "../common/Svg";
import {Container} from "../common/Container";
import {H2} from "../common/H2";
import Fade from 'react-reveal/Fade';
import photo from "../common/img/photo6.jpg";

export const Portfolio = React.memo(()=>{
    const styles={
        first:{
            width:'93%',
            height: '380px',
            marginBottom:'60px'
        },
        second:{
            width: '93%',
            height: '340px',
            marginBottom:'60px'
        },
        third:{
            width: '93%',
            height: '284px',
            marginBottom:'60px'
        },
        four:{
            width:'93%',
            height:'334px',
            marginBottom:'60px'
        },
        five:{
            width:'47%',
            height:'211px',
            marginBottom:'60px'
        },
        seven:{
            width:'93%',
            height:'400px',
            marginBottom:'60px'
        }

    };

    const PortfolioSect = styled.section`
      padding: 120px 0;
      background-color: white;
      position: relative;
      @media screen and (max-width: 420px){
        padding: 80px 0;
      }
    `;
    const PortfolioWrapper = styled.div`
      ${flex('column', 'flex-start','center')};
      width: 100%;
    `;
    const Title = styled.div`
      
    `;

    const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 980px){
    flex-direction: column;
  }
      @media screen and (max-width: 480px){
        margin: 0 auto;
  }
`;
    const Description = styled.div`
  ${flex('column', 'space-between', 'left')};
  margin-right: 50px;
      @media screen and (max-width: 980px){
        margin-right: 0px;
        margin-bottom: 50px;
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
    const WrapperPhoto = styled.div`
    width: 100%;
    `;
    const Link = styled.a`
    text-decoration: none;
      color: #c49b66;;
    `

    return(
        <PortfolioSect name={'portfolio'}>
            <Svg />
            <Container>
                <PortfolioWrapper>
                    <Title>
                        <Fade bottom>
                            <H2 title={'Специальные условия'}/>
                        </Fade>
                    </Title>
                        <AboutWrapper>
                            <Fade left>
                                <Description>
                                    <Text>
                                        <TextDescr>-10% на групповые занятия
                                        </TextDescr>
                                        <TextDescr>
                                            -10% на групповые занятия
                                        </TextDescr>
                                        <TextDescr>
                                            Много полезной и качественной информации связанной с реабилитацией после травм (операций), коррекцией осанки и плоскостопия, Вы можете найти в моих группах <Link href={'https://t.me/your_rehab'} target="_blank">Telegram</Link> и <Link href={'https://vk.com/club216169738'} target="_blank">VK</Link>.
                                        </TextDescr>
                                    </Text>
                                </Description>
                            </Fade>
                            <WrapperPhoto>
                                <Fade right>
                                    <Photo>
                                        <Img src={photo} alt="photo"/>
                                    </Photo>
                                </Fade>
                            </WrapperPhoto>

                        </AboutWrapper>
                </PortfolioWrapper>
            </Container>
        </PortfolioSect>
    )
})