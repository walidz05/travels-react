import React,{useState} from 'react'
import Header from '../components/Header';
import {Link} from 'react-router-dom';
const NoutFound = () => {

    const [state] = useState({
        heading:'Oops, Not Found',
        paragraph:'sorry,the page you are looking for does not exists',
        image:'/assets/notfound/404.jpg'
    })
    return (
        <>
            <Header image={state.image} heading={state.heading} paragraph={state.paragraph}>
                <Link to="/" className="btn-default">go to home</Link>
            </Header>   
        </>
    )
}

export default NoutFound
