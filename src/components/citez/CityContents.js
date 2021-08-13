import React from 'react';
import {BsStopwatch} from 'react-icons/bs';
const CityContents = ({duration,price,name}) => {

        const formate = (price) => {
        return `${price}.00`
    }

    return (
        <>
             <div className="cities__body__contents">
                <div className="cities__body__contents__top">
                        <div className="cities__body__contents__top__name">
                            {name}
                        </div>
                        <div className="cities__body__contents__top__duration">
                                <BsStopwatch size={18} color="#df2189"/>
                                <div className="cities__body__contents__top__duration__time">
                            {duration}
                                </div>
                        </div>
                </div>
                <div className="cities__body__contents__price">
                    <span className="cities__body__contents__price__dollar">
                        ${formate(price)}
                    </span>
                </div>
            </div>  
        </>
    )
}

export default CityContents
