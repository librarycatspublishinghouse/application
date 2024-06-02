import React, { useState } from 'react';
import axios from 'axios';
import style from './EmailSubmission.module.css'



function EmailSubmission() {

    const [emails, setEmail] = React.useState("");
    const handleEmailChange = (e) => {
  
      const {value} = e.target
        setEmail(value);
    };
  
    const handleSubmit = (e) => {
        console.log("handling email input: ",emails.input_text);
        postSubmit(emails)
    }
  
    const postSubmit = async (email) =>{
        const request = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/emailSubscription/create-new-email-subscription/`+email);
        if (request.status == 200){
          console.log("submitted: ",email)
        }
        else {
          console.log("error submitting")
        }
        setEmail("")
    }

    return (
        <div className={style.emailSubmission}>
            <div className = {style.container}>
                <div className = {style.inner_container}>
                    <div className = {style.title_text}>
                        JOIN OUR NEWSLETTER
                    </div>
                    <div className = {style.sub_title_text}>
                        Sign up to our newsletter to stay up to date with all our projects and releases
                    </div>
                    
                    <div className = {style.submission_container}>
                        <div className = {style.textbox_container}>
                            <div className = {style.submission_inner_container}>
                                <input 
                                className = {style.textbox}
                                type="email"
                                id = "input_text"
                                name = "input_text"
                                value = {emails}
                                onChange = {handleEmailChange}
                                placeholder = "Enter your email">
                                    

                                </input>
                            </div>
                        </div>
                        <button className = {style.submit_butn} onClick = {handleSubmit}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default EmailSubmission;