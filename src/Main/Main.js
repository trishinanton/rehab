import style from './Main.module.scss'
import styleContainer from "../common/container.module.scss";
import {Nav} from "../Header/Nav/Nav";
import background from '../common/img/photo4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ReactTypingEffect from 'react-typing-effect';
import styled from "styled-components";
import {Container} from "../common/Container";

export const Main = () => {
    const bg = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 0%'
    }
    const Main = styled.section`
      min-height: 110vh;
      background-attachment: fixed;
      background-image: url(${background});
      background-size: cover;
      background-position: 50% 50%;
      &:before{
        content: '';
        position: absolute;
        width: 100%;
        min-height: 110vh;
        background-color: rgba(0,0,0, .4);
      }
    `;
    const MainWrapper = styled.div`
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `;
    const Text = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      z-index: 1;
    `;
    const Welcom = styled.span`
      font-family: 'Josefin Sans', sans-serif;
        font-size:70px;
        font-weight: 300;
        letter-spacing: 4px;
        line-height: 1.2;
        margin-bottom: 99px;
        color: white;
        @media screen and (max-width: 480px){
          font-size: 18px;
          margin-bottom: 0;
        }
    `;
    const H1 = styled.h1`
      
    `;
    const About = styled.span`
      @media screen and (max-width: 480px){
        font-size: 18px;
      }
    `;
    const Social = styled.div`
      z-index: 1;
      border-radius: 30px;
      background-color: rgba(200, 200, 200, 0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 30px;
    `;
    const Icon = styled.a`
      color: white;
      margin-right:30px;
      transition: 0.3s;
      cursor: pointer;
      &:hover{
        color: #c49b66;
        transform: scale(1.2);
        transition: 0.3s;
      }
      &:last-child{
        margin-right: 0px;
      }
    `;

    return(
        <Main name={'main'}>
            <Container>
                <MainWrapper>
                   <Text>
                       <Welcom>Привет!</Welcom>
                       <H1>
                           <About>Я </About>
                           <ReactTypingEffect className={style.vocation} cursorClassName={style.vocation} eraseDelay={1000} speed={100} eraseSpeed={50} eraseDelay={1000} typingDelay={500} text={['Реабилитолог', 'Специалист ЛФК']}/>
                       </H1>
                   </Text>
                    <Social>
                        <Icon target="_blank" href="https://t.me/by_amali"><FontAwesomeIcon icon={faTelegram}/></Icon>
                        <Icon target="_blank" href="https://wa.me/79279797056"><FontAwesomeIcon icon={faWhatsapp}/></Icon>
                        <Icon target="_blank" href="https://vk.com/angelina_mal"><FontAwesomeIcon icon={faVk}/></Icon>
                    </Social>
                </MainWrapper>
            </Container>
        </Main>
    )
}