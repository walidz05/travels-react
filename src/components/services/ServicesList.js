import React,{useState} from 'react';
import {BiChevronRight} from 'react-icons/bi';

const ServicesList = ({services}) => {

    const [current,setCurrent] = useState(0);

    const showDetails = (index) => {
        setCurrent(index)
    }

    return services.length > 0 ?
        services.map((ser,index) => (
        <div className="services__list animation" key={index}>
            <h4 className="services__list__heading" onClick={() => showDetails(index)}>
                    <BiChevronRight className={`${current === index ? 'services__rotate' : 'services__back'}`} size={20} />
                    {ser.heading}
            </h4>
            <p className={`services__list__details ${current === index ?  'services__list__details--show' : ''} `}>
                {ser.p}
            </p>  
        </div>        
        ))
    : '' 
       
}

export default ServicesList
