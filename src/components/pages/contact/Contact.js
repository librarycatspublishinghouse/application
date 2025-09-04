import React from 'react';
import style from './Contact.module.css';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className={style.contact}>
      {/* Hero Section */}
      <section className={style.hero}>
          <div className={style.heroContent}>
            <h1 className={style.heroTitle}>
              <span>DROP US</span>
              <span>A LINE</span>
            </h1>
            <ContactForm />
          </div>

      </section>

      {/* Info Section */}
      <section className={style.infoSection}>
        <div className={style.infoContainer}>
          <div className={style.brandInfo}>
            <img 
              className={style.logoImage} 
              src={`${process.env.PUBLIC_URL}/pictures/contact/logo.webp`} 
              alt="Library Cats Editorial Logo" 
              loading="lazy"
            />
          </div>
          <div className={style.contactInfo}>
            <h2 className={style.brandTitle}>
              LIBRARY CATS
              <span className={style.brandSubtitle}>EDITORIAL</span>
            </h2>
            <p className={style.contactText}>
              Contact one of our global digital editors or send in your submission to:
            </p>
            <div className={style.emailContainer}>
              <span>Email:</span>
              <a 
                className={style.emailLink} 
                href="mailto:librarycatseditorial@gmail.com"
                aria-label="Send email to Library Cats Editorial"
              >
                librarycatseditorial@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className={style.footer}>
        <div className={style.footerContent}>
          <div className={style.footerInfo}>
            <p className={style.footerText}>
              Library Cats is a UK based global digital organisation
            </p>
            <p className={style.footerText}>
              Contact us with your budding future best sellers for advice from our editors, or with any enquiries.
            </p>
          </div>
          <h2 className={style.footerBrand}>
            LIBRARY
            <br />
            CATS
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Contact;