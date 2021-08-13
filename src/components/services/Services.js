import React,{useState,useContext} from 'react';
import ServicesLeft from './ServicesLeft';
import SharedContext from '../../context/SharedContext';
import ServicesList from './ServicesList';
const Services = () => {

    const {sharedData:{servicesData}} = useContext(SharedContext);


    const [state] = useState({

        heading:'why customers love travel friends ? because we provide unique services',
        subHeading: 'our aim is to provide proffessionel and unique services to cutomers, and we have provided hight quality services to cutomers thats why they love travel friends',
    })


    return (
        <div className="services">
                <div className="services__contents">
                    <div className="container">
                        <div className="row mr-minus-15 ml-minus-15">
                            <div className="col-6 p-15">
                                   <ServicesLeft state={state}/>
                            </div>

                               <div className="col-6 p-15">
                                    <ServicesList services={servicesData}/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services
