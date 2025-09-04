import React, { useState } from 'react';
import axios from 'axios';
import style from './EmailSubmission.module.css';

const EmailSubmission: React.FC = () => {
    const [email, setEmail] = useState<string>("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("handling email input: ", email);
        postSubmit(email);
    };

    const postSubmit = async (emailValue: string) => {
        try {
            const request = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/emailSubscription/create-new-email-subscription/${emailValue}`);
            if (request.status === 200) {
                console.log("submitted: ", emailValue);
            } else {
                console.log("error submitting");
            }
            setEmail("");
        } catch (error) {
            console.log("error submitting", error);
            setEmail("");
        }
    };

    return (
        <div className={style.emailSubmission}>
            <div className={style.container}>
                <div className={style.inner_container}>
                    <div className={style.title_text}>
                        JOIN OUR NEWSLETTER
                    </div>
                    <div className={style.sub_title_text}>
                        Sign up to our newsletter to stay up to date with all our projects and releases
                    </div>
                    
                    <div className={style.submission_container}>
                        <div className={style.textbox_container}>
                            <div className={style.submission_inner_container}>
                                <input 
                                    className={style.textbox}
                                    type="email"
                                    id="input_text"
                                    name="input_text"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <button className={style.submit_butn} onClick={handleSubmit}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>   
    );
};

export default EmailSubmission;