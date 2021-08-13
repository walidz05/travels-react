import React,{useState,useContext,useEffect} from 'react';
import Header from '../components/Header';
import Model from '../components/Model';
import ModelContext from '../context/ModelContext';
import {OPEN_MODEL} from '../context/types/ModelTypes';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Destination from '../components/Destination';
import Services from '../components/services/Services';
import Reviews from '../components/reviews/Reviews';
import Footer from '../components/footer/Footer';
const Home = () => {

    const {dispatch} = useContext(ModelContext);

    const [state] = useState({
        heading:'we are travel friends',
        paragraph:'Come and join us we travel the most famouse and beatiful places in the world',
    })

    const [registerModel] = useState('registerModel');
    const [loginModel] = useState('loginModel');


    useEffect(() => {
        window.scrollTo(0,0); 
    }, [])


    return (
        <>
            <Header heading={state.heading} paragraph={state.paragraph}>
                 <button className="btn-default" onClick={() => dispatch({type:OPEN_MODEL, payload:registerModel})}>Get Started
                </button>
            </Header>

            <Model current={registerModel}>
                <Register currentModel={loginModel}/>
            </Model>

            <Model current={loginModel}>
                <Login currentModel={registerModel}/>
            </Model>
            <Destination/>
            <Services/>
            <Reviews/>
            <Footer/>
        </>
    )
}

export default Home
