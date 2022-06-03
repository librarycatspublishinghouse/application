
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

            <div className = {style.media_container}>
              <div className = {style.media_grid_container}>


                <div className = {style.grid_item}>

                  <div className = {style.grid_item_title}>
                    <span>SOCIAL MEDIA</span>
                  </div>

                  <div className = {style.social_media_list_container}>
                    <div className =  {style.social_media_list}>
                      <li className =  {style.social_media_list_item}>
                        <a href = "https://www.instagram.com/spreadthewordbookpublisher/?hl=es" target = "_blank">
                          <img src = '/pictures/insta.webp' alt = "instagram link" />
                        </a> 
                      </li>
                      <li className =  {style.social_media_list_item}>
                        <a href = "https://twitter.com/SpreadtheWordEd" target = "_blank">
                          <img src = "/pictures/twitter.webp" alt = "twitter link" />
                        </a> 
                      </li>
                      <li className =  {style.social_media_list_item}>
                        <a href = "https://www.linkedin.com/company/spread-the-word-book-publisher" target = "_blank">
                          <img src = "/pictures/linkedin.webp" alt = "linkedin link"/>
                        </a> 
                      </li>
                    </div>
                  </div>

                </div>


                <div className = {style.grid_item}>
                  <div className = {style.grid_item_title}>
                    <span> SUBSCRIBE </span>
                  </div>
                  <div className = {style.form_container}>

                    <form className = {style.form_item} >
                      <input type = "text" id = "email" placeholder = "Enter your email here*" />
                    </form>
                  </div>

                  <button className = {style.form_button}>
                    <span className = {style.form_button_text}>
                      SUBSCRIBE
                    </span>
                  </button>

                  
                </div>


                <div className = {style.grid_item}>
                  <div className = {style.grid_item_title}>
                    <span>OR SEND US AN EMAIL</span>
                  </div>
                  <a className = {style.email_link} href = "mailto:TODO@ENTEREMAILHERE.com">
                    <div className = {style.email_link_text}>
                      spreadthewordeditorial@gmail.com
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className = {style.copyright_container}>
            © 2021 Spread the Word Editorial
            </div>
        </div>
    </div>
  );
}

export default Footer;