import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {ReduxForm} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {About} from "./About/About";
import {Services} from "./Services/Services";
import {Portfolio} from "./Portfolio/Portfolio";
import {useSelector} from "react-redux";
import axios from "axios";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';


function App() {
    const myRef = React.createRef()
    const RefOnApp = React.createRef()

    const show = useSelector(state=> state.menu.show)
    const [disableBtn,setDisableBtn] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [showErr, setshowErr] = useState(false)

    const onSubmit = (formData)=>{
        setDisableBtn(true)
       axios.post('https://smtp-server-nodejs-test.herokuapp.com/sendMessage',{
           name: formData.name,
           email: formData.email,
           tel: formData.tel,
           message: formData.textarea
       })
           .then(()=>{
               setDisableBtn(false)
               setShowAlert(true)
               // alert('Your message has been sent')
           })
           .catch((e)=>{
               setShowAlert(false)
               setDisableBtn(false)
               setshowErr(true)
           })
    }

    useEffect(() => {
        let g_top = 0;
        window.addEventListener('scroll',()=>{
            let top = window.pageYOffset
            if(top > g_top){
                if (myRef.current) {
                    myRef.current.style.opacity = '0';
                    myRef.current.style.transition = '0.3s linear'
                }
            }else{
                if (myRef.current){
                    myRef.current.style.opacity = '0.99';
                    myRef.current.style.transition = '0.3s linear'
                }
            }
            g_top = top
         })
        console.log(RefOnApp.current)
        if(RefOnApp.current && show===false) RefOnApp.current.style.position = 'fixed';
    }, [show])

  return (
    <div className="App" ref={RefOnApp}>


      <Header ref1={myRef}/>
       <Main/>
        <About/>
        <Services/>
        <Portfolio/>
        <ReduxForm onSubmit={onSubmit} disable={disableBtn} show={showAlert} err = {showErr}/>
        <Footer/>

        {/*<Skills/>*/}
        {/*<Works/>*/}
        {/*<Variants/>*/}


    </div>
  );
}

export default App;
