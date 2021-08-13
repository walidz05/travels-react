import React,{useState} from 'react'
import PageContainer from '../components/page-parts/PageContainer';
import FormContact from '../components/page-parts/ContactForm';
const Contact = () => {
   const [state] = useState({
        heading:'contact us',
        pageHeading:'leave your message in the contact form',
        message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium deserunt consequuntur reiciendis quas totam beatae provident error dolor enim quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium deserunt consequuntur reiciendis quas totam beatae provident error dolor enim quam.'
    })

    return (
        <div>
            <PageContainer data={state}>
                <FormContact/>
            </PageContainer>
             
        </div>
    )
}

export default Contact
