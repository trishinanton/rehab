import React from 'react';
import style from './Portfolio.module.scss'
import styleContainer from '../common/container.module.scss'
import {Work} from "./Work/Work";

import first from '../common/img/1.jpg'
import second from '../common/img/2.jpg'
import third from '../common/img/3.jpg'
import four from '../common/img/4.jpg'
import five from '../common/img/5.jpg'
import six from '../common/img/6.jpg'
import seven from '../common/img/7.jpg'
import styled from "styled-components";
import {flex} from "../common/variables";
import {Svg} from "../common/Svg";
import {Container} from "../common/Container";
import {H2} from "../common/H2";
import Fade from 'react-reveal/Fade';

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
    const Works = styled.div`
      ${flex('row', 'space-between', 'center')};
      width: 100%;
      @media screen and (max-width: 768px){
        flex-direction: column;
      }
    `;
    const WorksFirst = styled.div`
    ${flex('column', 'space-between', 'flex-start')};
      width: 50%;
      @media screen and (max-width: 768px){
        width: 100%;
        align-items: center;
      }
    `;
    const WorksSecond = styled.div`
      ${flex('column', 'space-between', 'flex-end')};
      width: 50%;
      @media screen and (max-width: 768px){
        width: 100%;
        align-items: center;
      }
    `;
    const WorksRow = styled.div`
      ${flex('row', 'space-between', 'center')};
      width: 93%;
      @media screen and (max-width: 980px){
        flex-direction: column;
      }
      @media screen and (max-width: 768px){
        width: 100%!important;
      }
    `;

    return(
        <PortfolioSect name={'portfolio'}>
            <Svg />
            <Container>
                <PortfolioWrapper>
                    <Title>
                        <Fade bottom>
                            <H2 title={'Portfolio'}/>
                        </Fade>
                    </Title>
                    <Works>

                        <WorksFirst>

                            <Work img={first} alt={'first'} title={'Crearive Design'} description={'Work description here'} style={styles.first}/>
                            <Work img={second} alt={'second'} title={'Crearive Design'} description={'Work description here'} style={styles.second}/>
                            <Work img={third} alt={'third'} title={'Crearive Design'} description={'Work description here'} style={styles.third}/>

                        </WorksFirst>


                        <WorksSecond>

                            <Work img={four} alt={'four'} title={'Crearive Design'} description={'Work description here'} style={styles.four}/>
                            <WorksRow>
                                <Work img={five} alt={'five'} title={'Crearive Design'} description={'Work description here'} style={styles.five}/>
                                <Work img={six} alt={'six'} title={'Crearive Design'} description={'Work description here'} style={styles.five}/>
                            </WorksRow>
                            <Work img={seven} alt={'seven'} title={'Crearive Design'} description={'Work description here'} style={styles.seven}/>

                        </WorksSecond>

                    </Works>
                </PortfolioWrapper>
            </Container>
        </PortfolioSect>
        // <section className={style.portfolio} name={'portfolio'}>
        //     <svg className={style.svg} viewBox="0 0 1920 81.717">
        //         <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"/>
        //     </svg>
        //     <div className={styleContainer.container}>
        //         <div className={style.portfolio__wrapper}>
        //             <div className={style.title}>
        //                 <h2>Portfolio</h2>
        //             </div>
        //             <div className={style.works}>
        //                 <div className={style.works__first}>
        //                     <Work img={first} alt={'first'} title={'Crearive Design'} description={'Work description here'} style={styles.first}/>
        //                     <Work img={second} alt={'second'} title={'Crearive Design'} description={'Work description here'} style={styles.second}/>
        //                     <Work img={third} alt={'third'} title={'Crearive Design'} description={'Work description here'} style={styles.third}/>
        //                 </div>
        //                 <div className={style.works__second}>
        //                     <Work img={four} alt={'four'} title={'Crearive Design'} description={'Work description here'} style={styles.four}/>
        //                     <div className={style.works__row}>
        //                         <Work img={five} alt={'five'} title={'Crearive Design'} description={'Work description here'} style={styles.five}/>
        //                         <Work img={six} alt={'six'} title={'Crearive Design'} description={'Work description here'} style={styles.five}/>
        //                     </div>
        //
        //                     <Work img={seven} alt={'seven'} title={'Crearive Design'} description={'Work description here'} style={styles.seven}/>
        //                 </div>
        //
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
})