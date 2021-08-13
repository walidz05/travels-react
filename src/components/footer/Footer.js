import React from 'react';
import FooterIntro from './FooterIntro';
import FooterLinks from './FooterLinks';
const Footer = () => {

    const footerStyled = {
        background: 'url(/assets/footer/footer.jpg)',
        backgroundAttachment:'fixed',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        width: '100%',
        marginTop: '8rem',
        padding: '8rem 0',
        }

    return (
        <div className="footer" style={footerStyled}>
            <div className="footer__container">
                <div className="container">
                    <div className="footer__container__block">
                        <div className="row ml-minus-15 mr-minus-15">
                            <div className="col-6 p-15">
                                <FooterIntro/>
                            </div>
                             <div className="col-6 p-15">
                                 <FooterLinks/>
                              </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <p>&copy; copy rigth travel frineds {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
