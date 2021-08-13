import React,{useContext,useState} from 'react';
import SharedContext from '../../context/SharedContext';
import ReviewBody from './ReviewBody';
const Reviews = () => {

    const {sharedData:{reviewsData}} = useContext(SharedContext)

    const [heading] = useState('what our customers are saying ?') 

    return (
        <div className="reviews animation">
            <div className="container">
                <h2 className="heading">{heading}</h2>
                <div className="row ml-minus-15 mr-minus-15 ">
                    {reviewsData.map(review => (
                        <ReviewBody key={review.id} review={review}/> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Reviews
