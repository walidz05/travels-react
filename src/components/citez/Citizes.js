import React from 'react';
import Facilites from './Facilites';
import CityImage from './CityImage';
import CityContents from './CityContents';
const Citizes = ({filterdCitizes,name}) => {


    return (
        <div className="cities">
            <div className="container">
                <div className="cities__container">
                    <h2 className="heading">
                        citisez in {name}
                    </h2>
                    <div className="row mr-minus-15 ml-minus-15">
                          {
                        filterdCitizes.map(city => (

                            <div className="col-3 -15" key={city.id}>
                                    <div className="cities__body animation">

                                        <CityImage image={city.image} status={city.status}/>

                                        <CityContents  name={city.name} duration={city.duration} price={city.price}/>       
                                 
                                         <Facilites  name="room" value={city.room}/>
                                         <Facilites  name="food" value={city.food}/>
                                         
                                         <div className="cities__body__contents__button">
                                                <button className="btn-dark-sm">Buy Now</button>
                                         </div>
                                         
                                    </div> 
                            </div>  
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Citizes
