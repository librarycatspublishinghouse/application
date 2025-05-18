import React, { useState } from 'react';
import style from './ContactForm.module.css';
import axios from 'axios';

const INITIAL_VALUES = {
  name: '',
  email: '',
  message: '',
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const ContactForm = () => {
  const [formInput, setFormInput] = useState(INITIAL_VALUES);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!formInput.name.trim()) {
      setErrorMessage('Name is required');
      return false;
    }
    
    if (!formInput.email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    
    if (!validateEmail(formInput.email)) {
      setErrorMessage('Please enter a valid email');
      return false;
    }
    
    if (!formInput.message.trim()) {
      setErrorMessage('Message is required');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}api/emailSubscription/contact-us/`,
        formInput
      );

      if (response.status === 200) {
        setSubmitted(true);
        setFormInput(INITIAL_VALUES);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={style.sumbitted_message}>
        Thank you for 
        <br />
        your message!
      </div>
    );
  }

  return (
    <div className={style.contactForm}>
      <div className={style.label}>
        <label htmlFor="name">NAME: </label>
      </div>
      <div>
        <input
          className={style.input}
          type="text"
          id="name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <div className={style.label}>
        <label htmlFor="email">EMAIL: </label>
      </div>
      <div>
        <input
          className={style.input}
          type="email"
          id="email"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <div className={style.label}>
        <label htmlFor="message">MESSAGE: </label>
      </div>
      <div>
        <textarea
          className={style.message_input}
          id="message"
          name="message"
          rows="7"
          value={formInput.message}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      {<div className={errorMessage ? style.error_message : style.error_hidden}>
        {errorMessage}
      </div>}
      
      <div 
        className={style.submit_button} 
        onClick={handleSubmit}
        style={isLoading ? { cursor: 'not-allowed', backgroundColor: '#a0aec0' } : {}}
      >
        {isLoading ? 'SENDING...' : 'SUBMIT'}
      </div>
    </div>
  );
};

export default ContactForm;