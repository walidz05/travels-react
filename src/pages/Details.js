import React,{useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import DestinationsContext from '../context/DestinationContext';
import {DETAILS,CITIZES} from '../context/types/DetailsTypes';
import Header from '../components/Header';
import DestinationsInfo from '../components/DestinationsInfo';
import Citizes from '../components/citez/Citizes';
import Footer from '../components/footer/Footer';
const Details = () => {

    const {destinationsData,dispatch} = useContext(DestinationsContext)
    const {id}  = useParams();



    const {details,filterdCitizes} = destinationsData

    useEffect(() => {
        dispatch({type:DETAILS,payload:id});
        dispatch({type:CITIZES,payload:id});
        window.scrollTo(0,0);
    }, [id]);

    return (
        <>
            <Header heading={details.name} image={details.bigImage}/>
            <DestinationsInfo details={details}/>
            <Citizes filterdCitizes={filterdCitizes} name={details.name} />
            <Footer/>
        </> 
    )
}

export default Details
