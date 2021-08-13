import React,{useState} from 'react'
import {Link} from 'react-router-dom';
const Header = ({heading,paragraph,children,image}) => {

    const [state] = useState({
        video: '/assets/videos/header.mp4' ,
        poster :'/assets/images/assets.png',
        logo: '/assets/images/logo.png' ,
        
    })

    return (

        <div className="header">

            <div className="container pr">
                <div className="header__logo">
                    <Link to="/">
                    <img src={state.logo} alt="" />
                    </Link>
                </div>
            </div>

            <div className="header__video">
                {image ? <img src={image} alt=''/>        
                    :
                <video src={state.video} autoPlay loop muted poste={state.poster}r></video>
            }
            </div>

            <div className="header__contents">
                <div className="container">
                    <div className="header__contents__text">
                        <div className="header__contents__text__child">
                            <h1 className="header__contents__text__child__h1">
                                {heading}
                            </h1>
                            <p className="header__contents__text__child__p">
                              {paragraph}
                            </p>
                            <div className="header__contents__text__child__link">
                            {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
