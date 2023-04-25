import React, {useEffect, useState} from 'react';
import style from './Contacts.module.scss'
import styleContainer from "../common/container.module.scss";
import {Button} from "../common/Button";
import {Info} from "./Info/Info";
import {Field, reduxForm} from "redux-form";
import {isValidEmail, minLenghtCreator, requiredField} from "../common/validators/validators";
import {TextFieldInput} from "./TextField/TextFieldInput";
import styled from "styled-components";
import {bgColor, flex} from "../common/variables";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import axios from "axios";
import store from '../common/redux/redux-store';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import {H2} from "../common/H2";


export const Contacts = React.memo((props) => {

    const [open, setOpen] = useState(true);
    const ContactsSect = styled.section`
      background-color: ${bgColor};
      padding: 120px 0;
      position: relative;
    `;
    const ContactsWrapper = styled.div`
      ${flex('column', 'space-between', 'center')}
    `;
    const Description = styled.div`
      ${flex('row', 'space-between', 'center')};
      width: 100%;
    `;
    const Form = styled.form`
      ${flex('column', 'space-between', 'flex-start')};
      width: 50%;
    `;
    const FormWrapper = styled.div`
      width: 100%;
      ${flex('row', 'space-between', 'center')};
      margin-bottom: 20px;
    `;
    const Buttons = styled.div`
      align-self: flex-end;
      margin-top: 20px;
      margin-right: -20px;
    `;
    return(
                <section className={style.contacts} name={'contact'}>
                    <svg className={style.svg} viewBox="0 0 1920 81.717">
                        <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"/>
                    </svg>
                    {props.show ? <Collapse in={open} sx={{}}>
                        <Alert
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <IconButton color="inherit" size="small">
                                        X
                                    </IconButton>
                                </IconButton>
                            }
                            sx={{ mb: 2 , width:'30%',position:'absolute', bottom:'0', left:'35%', border: '1px solid #c49b66', backgroundColor:'white', boxShadow:'0px 5px 30px rgb(0 0 0 / 5%)', color:' #8f8f8f', fontFamily: `'Rubik',sans-serif`}}
                        >
                            Your data has been successfully sent. I will contact you soon!
                        </Alert>
                    </Collapse> : props.err ? <Collapse in={open} sx={{}}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <IconButton color="inherit" size="small">
                                            X
                                        </IconButton>
                                    </IconButton>
                                }
                                sx={{ mb: 2 , width:'30%',position:'absolute', bottom:'0', left:'35%', border: '1px solid red', backgroundColor:'white', boxShadow:'0px 5px 30px rgb(0 0 0 / 5%)', color:' #8f8f8f', fontFamily: `'Rubik',sans-serif`}}
                            >
                                Something went wrong. Try again
                            </Alert>
                        </Collapse> : null}


                    <div className={styleContainer.container}>
                        <div className={style.contacts__wrapper}>
                            <Fade bottom>
                                <H2 title={'Контакты'}/>
                            </Fade>
                            <Zoom>
                                <div className={style.description}>
                                    <div className={style.info}>
                                        <Info title={'Телефон : '} description={'+7 927 979 7056'}/>
                                        <Info title={'Адрес : '} description={'г.Саранск, ул.Красная, 22, Дворец водных видов спорта (Центр здоровья)'}/>
                                        <Info title={'Email : '} description={'email_support@youradress.com'}/>
                                    </div>

                                    <div className={style.carta}>
                                        <iframe
                                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af3cb3744f2776e7fec380f9c291dfbbc2e420c88fb349ee9b2c20dcf24e5ada5&amp;source=constructor"
                                            width="100%" height="435" frameBorder="0"></iframe>
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </section>
    )
})

export const ReduxForm = reduxForm({form:'contact'})(Contacts)




