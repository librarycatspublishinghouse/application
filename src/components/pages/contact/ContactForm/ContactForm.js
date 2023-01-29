import React from 'react';
import style from  './ContactForm.module.css';
import axios from 'axios';

const initialValues =  {
    name: '',
    email: '',
    message: '',
}

function ContactForm() {

    const [formInput, setFormInput] = React.useState(initialValues);
    const [sumbitted, setSubmitted] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    
    const handleNameChange = (event) => {
        setFormInput({
            ...formInput,
            name: event.target.value,
        });
    };

    const handleEmailChange = (event) => {
        setFormInput({
            ...formInput,
            email: event.target.value,
        });
    };

    const handleMessageChange = (event) => {
        setFormInput({
            ...formInput,
            message: event.target.value,
        });
    };

    const handleSubmit = async() => {
        //do something
        // post to the backend
        try{
            const request = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/emailSubscription/contact-us/`, {
                name: formInput.name,
                email: formInput.email,
                message: formInput.message,
            });

            //if success then 
            if (request.status === 200) {
                //set submited to true
                setSubmitted(true);
            }
        }
        catch (error){
            console.log("Error: ", error);
            if (error.response.status === 400){
                //set error message
                setErrorMessage(error.response.data.message);
                // sleep for 5 seconds
                setTimeout(() => {
                    setErrorMessage('');
                }
                , 2000);

            }
            // reset the form 
            setFormInput(initialValues);
        }
    }


  return (
    

    <div className={style.contactForm}>
        { sumbitted === true ? ( 
        <div className={style.sumbitted_message}>
            Thank you for 
            <br />
            your message!
        </div>
    ): (<>
        <div className= {style.label}>
            <label htmlFor="name">NAME: </label>
        </div>

        <div>
            <input className={style.input}  type="text" id="name" name="name" value={formInput.name} onChange = {handleNameChange}/>
        </div>

        <div className= {style.label}>
            <label htmlFor="email">EMAIL: </label>
        </div>

        <div >
            <input className={style.input} type="text" id="email" name="email"  value={formInput.email} onChange = {handleEmailChange} />
        </div>

        <div className= {style.label}>
            <label htmlFor="message">MESSAGE: </label>
        </div>
        
        <div >
            <textarea className= {style.message_input} id="message" name="message" rows="7" value={formInput.message} onChange = {handleMessageChange}/>
        </div>

        {errorMessage && <div className={style.error_message}>{errorMessage}</div>}
        <div className= {style.submit_button} onClick = {handleSubmit}>
            SUBMIT
        </div>
    </>)}

    </div>
    
  )
}
export default ContactForm;