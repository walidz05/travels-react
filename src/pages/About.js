import React,{useState,useEffect} from 'react';
import PageContainer from '../components/page-parts/PageContainer';
import AboutImg from '../components/page-parts/AboutImg';

const About = () => {

    const [state] = useState({
        heading:'about us',
        pageHeading:'world best travels agency company since 2005',
        message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium deserunt consequuntur reiciendis quas totam beatae provident error dolor enim quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium deserunt consequuntur reiciendis quas totam beatae provident error dolor enim quam.'
    })

      useEffect(() => {
        window.scrollTo(0,0); 
    }, [])


    return (
        <div>
            <PageContainer data={state}>
                <AboutImg/>
            </PageContainer>
             
        </div>
    )
}

export default About
