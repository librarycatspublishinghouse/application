
import style from './Footer.module.css';
import * as React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"; 


function Footer() {

  

  // this is litterally coppied from the email subscription file <--- TODO combine the logic to another file and use that instead
  // especially for the request part since it may change and we currently have to remember both occurences

  const [emails, setEmail] = React.useState("");
  const [footerContainerClass, setFooterContainerClass] = React.useState(style.footer_container);

  
  const navigate = useNavigate()
  React.useEffect(() => {
    setFooterContainerClass( getFooterContainerStyle( navigate ) )
  }, [navigate])

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
      if (request.status === 200){
        console.log("submitted: ",email)
      }
      else {
        console.log("error submitting")
      }
      setEmail("")
  }

  const getFooterContainerStyle = (navigate ) => {
    // only show the footer background image on certain pages/paths
    const footerCatsBackgroundPaths = [
      "",
      "home", // this doesnt actually exist
      "books",
    ]

    let footerContainerStyle = style.footer_container 
    const currentPath = window.location.pathname.split("/")[1]

    if (footerCatsBackgroundPaths.includes(currentPath)) {
      footerContainerStyle += " " + style.cats_background
    }

    return footerContainerStyle
  }




  return (
    <div className={style.footer}> 
        <div className = {footerContainerClass}>


            <div className = {style.follow_container}>
                <span>
                    FOLLOW US
                </span>
            </div>


            <div className = {style.bar_container}>

            </div>




            <div className =  {style.social_media_list}>
              <li className =  {style.social_media_list_item}>
                <a href = "https://www.instagram.com/librarycatspublishinghouse/" target = "_blank" rel="noreferrer">
                  <img className={style.social_media_item_image} src = '/pictures/instagram.png' alt = "instagram link" />
                </a> 
              </li>
              {/* <li className =  {style.social_media_list_item}>
                <a href = "https://twitter.com/LibraryCatsEd" target = "_blank" rel="noreferrer">
                  <img className={style.social_media_item_image} src = "/pictures/twitter.png" alt = "twitter link" />
                </a> 
              </li> */}
              <li className =  {style.social_media_list_item}>
                <a href = "https://www.linkedin.com/company/80904896/admin/feed/posts/" target = "_blank" rel="noreferrer">
                  <img className={style.social_media_item_image} src = "/pictures/linkedin.png" alt = "linkedin link"/>
                </a> 
              </li>
              <li className =  {style.social_media_list_item}>
                <a className = {style.email_link} href = "mailto:librarycatseditorial@gmail.com">
                  <img className={style.social_media_item_image} src = "/pictures/email.png" alt = "email link"/>
                </a>        
              </li>
            </div>
                  


            <br />
              <div className = {style.form_title}>
                <span   > Join our newsletter </span>
              </div>
              <div className = {style.form_container}>    
                <input className={style.form_item} 
                type = "email"
                id = "input_text"
                name = "input_text"
                placeholder = "Enter your email here*"
                value = {emails}
                onChange = {handleEmailChange} />
                <button className = {style.form_button} onClick = {handleSubmit}>
                    subscribe
                  
                </button> 
              </div>


            
          <div className = {style.copyright_container}>
          © 2023 Library Cats Publishing House CIC






          </div>
        </div>
      </div>
     
  );
}

export default Footer;