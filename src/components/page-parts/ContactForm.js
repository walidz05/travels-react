import React from 'react'

const ContactForm = () => {
    return (
        <form>
            <div className="group animation">
                <h3 className="heading">Contact Form</h3>
            </div>
            <div className="group animation">
                <input type="text" name="" id="" className="group__control" placeholder="Your name eg. smith"/>
            </div>
             <div className="group animation">
                <input type="email" name="" id="" className="group__control" placeholder="Your email eg. smith@gmail.com"/>
            </div>
            <div className="group animation">
                <textarea cols="12" rows="8" className="group__textarea" placeholder="write your message eg. I have troubles">
                    
                </textarea>
            </div>
            <div className="group animation">
                <input type="submit" value="send email &rarr;" className="btn-dark"/>
            </div>
        </form>
    )
}

export default ContactForm
