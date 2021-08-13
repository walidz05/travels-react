import React from 'react';
import  DestinationsDetails from '../components/DestinationsDetails'
const DestinationsInfo = ({details}) => {
    return (
        <div className="destinationInfo">
            <div className="container">
                <h2 className="heading headingAnimation">
                    overView
                </h2>
                <div className="row">
                    <div className="col-8">
                        <p className="destinationInfo__p animation">
                            {details.details}
                        </p>
                    </div>
                </div>
            
                <h2 className="heading headingAnimation">
                    Good to know
                </h2>

                <div className="row">
                    <div className="col-8">    
                        <DestinationsDetails title="Language" text={details.language}/>
                        <DestinationsDetails title="currency" text={details.currency}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationsInfo
