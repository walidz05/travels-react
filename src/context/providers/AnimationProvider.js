import AnimationContext from '../../context/AnimationContext';
import {useEffect} from 'react';

const AnimationProvider = ({children}) => {


    const scrollAnimations = () => {
 
        const animation = (elements,className) => {
        elements.forEach((el) => {
            const elementPosition = el.getBoundingClientRect().top;
            const viewPortHeight = window.innerHeight - 150;
            if(elementPosition < viewPortHeight)
            {
                 el.classList.add(className)
            }
            else {
                 el.classList.remove(className)
            }

        })
        }
        const elements = document.querySelectorAll('.animation');
        const headingAnimation = document.querySelectorAll('.headingAnimation');
        animation(elements,'animate');
        animation(headingAnimation,'headinAnimate');
    }
    useEffect(() => {
        window.addEventListener('scroll',scrollAnimations)
    }, []);

    return (
        <AnimationContext.Provider value="">
            {children}
        </AnimationContext.Provider>
    )
}

export default AnimationProvider




