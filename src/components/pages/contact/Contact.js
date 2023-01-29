import React from 'react';
import ComingSoon from '../../ComingSoon/ComingSoon';
import style from  './Contact.module.css';
import ContactForm from './ContactForm/ContactForm';


function Contact() {
  return (
    <div className= {style.contact}>
        <div className= {style.contact_container_container}>
          <div className= {style.contact_container}>
            
            <div className= {style.contact_header}>
              DROP 
              <br />
              US
              <br /> 
              A
              <br /> 
              LINE
            </div>

            <div className= {style.contact_content}>
              <ContactForm />
            </div>

          </div>
        </div>

        <div className= {style.logo_section_container_container}>
          <div className= {style.logo_section_container}>
            <div className= {style.logo_container}>
              <img className={style.logo_image} src="/pictures/contact/logo.webp" alt="logo" />
            </div>

            <div className= {style.log_info_container}>
              <div className={style.logo_info_header}>
                SPREAD THE WORD
              </div>
              <div className={style.logo_info_header_sub}>
                EDITORIAL 
              </div>
              <div className={style.logo_info_text}>
                Contact one of our global digital editors or send in your submission to:
              </div>
              <div className={style.logo_info_link}>
                Email<a className={style.email_link_item} href="mailto:spreadthewordeditorial@gmail.com" >: spreadthewordeditorial@gmail.com </a>
              </div>
            </div>
          </div>
        </div>
        <div className= {style.footer_container_container}>
          <div className= {style.footer_container}>
            <div className= {style.footer_description_text}>
              Spread the word editorial publishers is a UK based global digital organisation
              <div className={style.footer_gap}/>

              Contact us with your budding future best sellers for advice from our editors, or with any enquiries.
            </div>
            <div className={style.footer_header}>
              SPREAD 
              <br />
              THE WORD

            </div>
          </div>
        </div>

    </div>
    );
}

export default Contact;