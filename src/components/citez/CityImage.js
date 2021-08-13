import React from 'react'

const CityImage = ({image,status}) => {
    return (
        <>
            <div className="cities__body__image">
                    <img src={image} alt="" />

                    <div className={status === 'Bestselling' ? 'bestselling' : status === 'New' ? 'new' :
                    status === 'Hot' ? 'hot' : ''  
                }>{status}
                </div>
        </div>
        </>
    )
}

export default CityImage
