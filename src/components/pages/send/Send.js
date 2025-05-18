import React from 'react';
import style from  './Send.module.css';


function Send() {
  return (
    <div className= {style.send}>
      <div className = {style.reasons_container}>
          <div className = {style.list_item}>
            <div className={style.title}>
              REASONS TO SEND YOUR MANUSCRIPT OVER
            </div>
          </div>

          <div className = {style.list_item}>
            <img className = {style.list_item_image} src="pictures/send/elipse-2.webp" alt = ""/> 
              <div className={style.list_item_text}>
                IT IS COMPLETELY FREE!
              </div>
          </div>

          <div className = {style.list_item}>
            <img className = {style.list_item_image} src="pictures/send/elipse-3.webp" alt = ""/> 
              <div className={style.list_item_text}>
                WE READ ALL THE MANUSCRIPTS
              </div>
          </div>

          <div className = {style.list_item}>
            <img className = {style.list_item_image} src="pictures/send/elipse-4.webp" alt = ""/> 
            <div className={style.list_item_text}>
              WE OFFER ONE-TO-ONE FEEDBACK SESSIONS
            </div>
          </div>

          <div className = {style.list_item}>
            <img className = {style.list_item_image} src="pictures/send/elipse-5.webp" alt = ""/> 
            <div className={style.list_item_text}>
              WE ALWAYS PROVIDE CONSTRUCTIVE FEEDBACK
            </div>
          </div>

          <div className = {style.list_item}>
            <img className = {style.list_item_image} src="pictures/send/elipse-6.webp" alt = ""/> 
            <div className={style.list_item_text}>
              IT IS YOUR CHANCE TO GET PUBLISHED!
            </div>
          </div>

      </div>

    <div className = {style.share_title}>
      SHARE WITH US VIA DRIVE OR EMAIL <a href="mailto:librarycatseditorial@gmail.com" 
      className={style.mail_link}> (librarycatseditorial@gmail.com) </a> 
    </div>

    <div className = {style.share_link}>
      <a className  = {style.share_link_item} 
      href = "https://drive.google.com/drive/folders/1ydFA2mgF2VDMRhVWLedcYgJYBSxg0O7E?usp=sharing">
        <img className = {style.wobly_box} src="pictures/send/google-drive-box.webp" alt = ""/> 
        <div className={style.google_drive_text}>
          <span className={style.google}>Google </span> <span className={style.drive}>Drive</span>
        </div>
      </a>

    </div>

    <div className = {style.share_info}>
      PLEASE ADD YOUR NAME AND EMAIL TO THE MANUSCRIPT
    </div>
    <br />
    <a className = {style.style_guide_link} 
      href={`${process.env.REACT_APP_BACKEND_URL}`+`/files/guides/style_guide_LC_2025.pdf`}
       target='_blank' rel="noreferrer"
      
      >
      Check out our style guide
    </a>


    </div>
  );
}

export default Send;