import React from 'react';
import style from './Services.module.scss'
import styleContainer from '../common/container.module.scss'
import photo from '../common/img/hero.jpg'
import {Card} from "./Card/Card";
import { faReact} from '@fortawesome/free-brands-svg-icons';
import { faHtml5} from '@fortawesome/free-brands-svg-icons';
import { faJs} from '@fortawesome/free-brands-svg-icons';
import { faCss3} from '@fortawesome/free-brands-svg-icons';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {bgColor, flex} from "../common/variables";
import {Svg} from "../common/Svg";
import {Container} from "../common/Container";
import {H2} from "../common/H2";
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';

export const Services = React.memo(()=>{

    const ServicesSect = styled.section`
      position: relative;
      padding: 120px 0;
      background-color: ${bgColor};
      @media screen and (max-width: 420px){
        padding: 80px 0;
      }
    `;
    const ServicesWrapper = styled.div`
      ${flex('column', 'flex-start','center')};
      
    `;
    const Title = styled.div`
      
    `;
    const Cards = styled.div`
      ${flex('row', 'space-between','center')};
      @media screen and (max-width: 980px){
        flex-wrap: wrap;
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
      }
      
      
    `;

    return(
        <ServicesSect name={'services'}>
            <Svg color={'white'} />
            <Container>
                <ServicesWrapper>
                    <Title>
                        <Flip left>
                            <H2 title={'Направления'}/>
                        </Flip>
                    </Title>
                    <Roll bottom>
                        <Cards>
                            <Card icon={faReact} title={'Цена: от 2000 руб.'} description={'Провожу индивидуальные и групповые занятия с детьми (от 4 до 18 лет) по двигательной реабилитации (ЛФК, АФК)'}/>
                            <Card icon={faHtml5} title={'Цена: от 3000 руб.'} description={'Провожу приём пациентов с заболеваниями опорно-двигательного  аппарата'}/>
                            <Card icon={faJs} title={'Цена: от 3500 руб.'} description={'Занимаюсь коррекцией  осанки и вальгуса'}/>
                            <Card icon={faCss3} title={'Цена: от 2000 руб.'} description={'Восстанавливаю пациентов после травм и операций, помогаю вернуться к спорту и полноценной физической активности'}/>
                            <Card icon={faCss3} title={'Цена: от 3000 руб.'} description={'Разрабатываю индивидуальные  программы реабилитации'}/>
                            <Card icon={faCss3} title={'Цена: от 4000 руб.'} description={'Также провожу онлайн консультации по выбранному  из вышеперечисленных направлений'}/>
                        </Cards>
                    </Roll>
                </ServicesWrapper>
            </Container>
        </ServicesSect>
    )
})