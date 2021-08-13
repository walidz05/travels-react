import React from 'react';
import {BsFillStarFill,BsStar,BsStarHalf} from 'react-icons/bs'

const ReviewBody = ({review}) => {

    const rating = (number) => {

            let container = [];
            for(let i = 1 ; i <= 5; i++ )
            {
                if(i <= number)
                {
                    container.push(<BsFillStarFill size={18} color="red" className="reviews__body__contents__info__rating_icon"/>);
                }
                else {
                    container.push(<BsStar size={18} color="red" className="reviews__body__contents__info__rating_icon"/>); 
                }
            }

            return container
    }

    return (
        <div className="col-4 p-15">
            <div className="reviews__body">

                <div className="reviews__body__contents">
                    <div className="reviews__body__contents__image">
                        <img src={review.image} alt="" />
                    </div>

                    <div className="reviews__body__contents__info">
                        <div className="reviews__body__contents__info__name">
                            {review.name}
                        </div>
                        <div className="reviews__body__contents__info__rating">
                            {rating(review.stars)}
                        </div>

                        <div className="reviews__body__contents__info__comment">
                            {review.comment}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ReviewBody
