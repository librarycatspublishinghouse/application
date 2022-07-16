
import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.footer}> 
        <div className = {style.footer_container}>


            <div className = {style.follow_container}>
                <span>
                    FOLLOW US
                </span>
            </div>


            <div className = {style.bar_container}>

            </div>




            <div className =  {style.social_media_list}>
              <li className =  {style.social_media_list_item}>
                <a href = "https://www.instagram.com/spreadthewordbookpublisher/?hl=es" target = "_blank" rel="noreferrer">
                  <img className={style.social_media_item_image} src = '/pictures/insta.webp' alt = "instagram link" />
                </a> 
              </li>
              <li className =  {style.social_media_list_item}>
                <a href = "https://twitter.com/SpreadtheWordEd" target = "_blank" rel="noreferrer">
                  <img className={style.social_media_item_image} src = "/pictures/twitter.webp" alt = "twitter link" />
                </a> 
              </li>
              <li className =  {style.social_media_list_item}>
                <a href = "https://www.linkedin.com/company/spread-the-word-book-publisher" target = "_blank" rel="noreferrer">
                  <img className={style.social_media_item_image} src = "/pictures/linkedin.webp" alt = "linkedin link"/>
                </a> 
              </li>
              <li className =  {style.social_media_list_item}>
                <a className = {style.email_link} href = "mailto:TODO@ENTEREMAILHERE.com">
                  <img className={style.social_media_item_image} src = "/pictures/email.png" alt = "email link"/>
                </a>        
              </li>
            </div>
                  


            <br />
              <div className = {style.form_title}>
                <span   > Join our newsletter </span>
              </div>
              <div className = {style.form_container}>    
                <input className={style.form_item} type = "text" id = "email" placeholder = "Enter your email here*" />
                <button className = {style.form_button}>
                    subscribe
                  
                </button> 
              </div>


            
          <div className = {style.copyright_container}>
          © 2021 SPREAD THE WORD EDITORIAL
          </div>
        </div>
      </div>
     
  );
}

export default Footer;