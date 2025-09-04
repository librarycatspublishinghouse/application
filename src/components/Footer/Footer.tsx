import React, { useState, useEffect } from 'react';
import style from './Footer.module.css';
import { useNavigate } from "react-router-dom"; 
import ReactGA from 'react-ga4';

const Footer: React.FC = () => {
  const [emails, setEmail] = useState<string>("");
  const [footerContainerClass, setFooterContainerClass] = useState<string>(style.footer_container);

  const navigate = useNavigate();

  useEffect(() => {
    setFooterContainerClass(getFooterContainerStyle(navigate));
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Page Load"
    });
    console.log("google analytics event sent");
  }, [navigate]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log("handling email input: ", emails);
    postSubmit(emails);
  };

  const postSubmit = async (email: string): Promise<void> => {
    try {
      // Note: Backend functionality disabled in static version
      console.log("Email subscription disabled in static version:", email);
      setEmail("");
    } catch (error) {
      console.log("error submitting");
    }
  };

  const getFooterContainerStyle = (navigate: ReturnType<typeof useNavigate>): string => {
    const footerCatsBackgroundPaths = [
      "",
      "home",
      "books",
    ];

    let footerContainerStyle = style.footer_container;
    const currentPath = window.location.pathname.split("/")[1];

    if (footerCatsBackgroundPaths.includes(currentPath)) {
      footerContainerStyle += " " + style.cats_background;
    }

    return footerContainerStyle;
  };

  return (
    <div className={style.footer}> 
      <div className={footerContainerClass}>
        <div className={style.follow_container}>
          <span>FOLLOW US</span>
        </div>

        <div className={style.bar_container}></div>

        <div className={style.social_media_list}>
          <li className={style.social_media_list_item}>
            <a href="https://www.instagram.com/librarycatspublishinghouse/" target="_blank" rel="noreferrer">
              <img 
                className={style.social_media_item_image} 
                src={`${process.env.PUBLIC_URL}/pictures/instagram.png`}
                alt="instagram link" 
              />
            </a> 
          </li>
          <li className={style.social_media_list_item}>
            <a href="https://www.linkedin.com/company/80904896/admin/feed/posts/" target="_blank" rel="noreferrer">
              <img 
                className={style.social_media_item_image} 
                src={`${process.env.PUBLIC_URL}/pictures/linkedin.png`}
                alt="linkedin link"
              />
            </a> 
          </li>
          <li className={style.social_media_list_item}>
            <a className={style.email_link} href="mailto:librarycatseditorial@gmail.com">
              <img 
                className={style.social_media_item_image} 
                src={`${process.env.PUBLIC_URL}/pictures/email.png`}
                alt="email link"
              />
            </a>        
          </li>
        </div>

        <br />
        <div className={style.form_title}>
          <span>Join our newsletter</span>
        </div>
        <div className={style.form_container}>    
          <input 
            className={style.form_item} 
            type="email"
            id="input_text"
            name="input_text"
            placeholder="Enter your email here*"
            value={emails}
            onChange={handleEmailChange} 
          />
          <button className={style.form_button} onClick={handleSubmit}>
            subscribe
          </button> 
        </div>

        <div className={style.copyright_container}>
          © 2024 Library Cats Publishing House CIC
        </div>
      </div>
    </div>
  );
};

export default Footer;