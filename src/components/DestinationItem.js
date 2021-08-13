import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {GiPositionMarker} from 'react-icons/gi';
import {Link} from 'react-router-dom';
const DestinationItem = ({destination}) => {
    return (
            
            <div className="destinations__card animation">

                <div className="destinations__card__img">
                    <LazyLoadImage src={destination.image} alt="" />
                </div>

                  <div className="destinations__card__layer">
                        <div className="destinations__card__layer__content">
                        <GiPositionMarker size={20}/>
                        <div className="destinations__card__layer__content__contry">
                            {destination.name}
                        </div>
                        </div>
                    </div>

                    <div className="destinations__card__info">
                        <div className="destinations__card__info__text">
                            <Link to={`/details/${destination.id}`} className="btn-white">
                                 Explore
                            </Link>
                        </div>
                    </div>
            </div>

          
    )
}

export default DestinationItem
