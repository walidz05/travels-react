import React,{useState} from 'react'

const AboutImg = () => {

    const [state] = useState({
        image:'/assets/about/about.jpg'
    })

    return (
        <div className="page__image animation">
            <img src={state.image} alt="" />
        </div>
    )
}

export default AboutImg
