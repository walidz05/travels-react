import React,{useState} from 'react';

const FooterIntro = () => {

    const [state] = useState({

        logo:'/assets/footer/logo.png',
        intro:'Travel frineds is traveling agency  we arrange to the world famouse and most beatiful contries , since 2000 we provide services variables to cusmotres'

    })

    return (
        <div className="footer__intro">
            <div className="footer__intro__img animation">
                <img src={state.logo} alt="" />
            </div>
            <div className="footer__intro__msg">
                {state.intro}
            </div>
        </div>
    )
}

export default FooterIntro
